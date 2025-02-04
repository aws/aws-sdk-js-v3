import { MetadataService } from "@aws-sdk/ec2-metadata-service";
import { logger } from "@aws-sdk/smithy-client/dist-types";
import { loadSharedConfigFiles } from "@smithy/shared-ini-file-loader";

/**
 * Resolves the AWS region following AWS CLI V2 precedence order.
 */
export const resolveAwsCliV2Region = async (defaultRegion?: string, maybeProfile?: string): Promise<string> => {
  const profile = maybeProfile ?? process.env.AWS_PROFILE ?? process.env.AWS_DEFAULT_PROFILE ?? "default";

  const region =
    process.env.AWS_REGION ||
    process.env.AWS_DEFAULT_REGION ||
    (await getRegionFromIni(profile)) ||
    (await regionFromMetadataService());

  if (!region) {
    const usedProfile = !profile ? "" : ` (profile: "${profile}")`;
    if (defaultRegion) {
      logger.warn(
        `Unable to determine AWS region from environment or AWS configuration${usedProfile}, defaulting to '${defaultRegion}'`
      );
      return defaultRegion;
    }
    throw new Error(
      `Unable to determine AWS region from environment or AWS configuration${usedProfile}. Please specify a region.`
    );
  }
  return region;
};

/**
 * Fetches the region from the AWS shared config files.
 */
export async function getRegionFromIni(profile: string): Promise<string | undefined> {
  const sharedFiles = await loadSharedConfigFiles({ ignoreCache: true });
  return sharedFiles.configFile?.[profile]?.region || sharedFiles.credentialsFile?.[profile]?.region;
}

/**
 * Retrieves the AWS region from the EC2 Instance Metadata Service (IMDS).
 */
export async function regionFromMetadataService(): Promise<string | undefined> {
  try {
    const metadataService = new MetadataService();
    const document = await metadataService.request("/latest/dynamic/instance-identity/document", {});
    return JSON.parse(document).region;
  } catch (e) {
    return undefined;
  }
}
