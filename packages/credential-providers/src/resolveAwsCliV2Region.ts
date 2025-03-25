import { loadSharedConfigFiles } from "@smithy/shared-ini-file-loader";
import type { Provider } from "@smithy/types";

/**
 * @public
 */
export interface ResolveRegionOptions {
  defaultRegion?: string;
  profile?: string;
}

/**
 * Resolves the AWS region following AWS CLI V2 precedence order.
 *
 * Please note that unlike with credential providers, if this region
 * provider is used in the context of a client, the client's profile
 * will not be passed to this provider at runtime.
 *
 * @public
 */
export const resolveAwsCliV2Region = ({
  defaultRegion,
  profile,
}: ResolveRegionOptions): Provider<string | undefined> => {
  return async () => {
    const resolvedProfile = profile ?? process.env.AWS_PROFILE ?? process.env.AWS_DEFAULT_PROFILE ?? "default";

    const region =
      process.env.AWS_REGION ||
      process.env.AWS_DEFAULT_REGION ||
      (await getRegionFromIni(resolvedProfile)) ||
      (await regionFromMetadataService());

    if (!region) {
      const usedProfile = resolvedProfile ? ` (profile: "${resolvedProfile}")` : "";
      console.warn(
        `@aws-sdk/credential-providers::resolveAwsCliV2Region - ` +
          `Unable to determine AWS region from environment or AWS profile=${usedProfile}. Returning ${defaultRegion}.`
      );
      return defaultRegion ?? undefined;
    }

    return region;
  };
};

/**
 * Fetches the region from the AWS shared config files.
 * @private
 */
export async function getRegionFromIni(profile: string): Promise<string | undefined> {
  const sharedFiles = await loadSharedConfigFiles({ ignoreCache: true });
  return sharedFiles.configFile?.[profile]?.region || sharedFiles.credentialsFile?.[profile]?.region;
}

/**
 * Retrieves the AWS region from the EC2 Instance Metadata Service (IMDS).
 * @private
 */
export async function regionFromMetadataService(): Promise<string | undefined> {
  try {
    const { MetadataService } = await import("@aws-sdk/ec2-metadata-service");
    const metadataService = new MetadataService();
    const document = await metadataService.request("/latest/dynamic/instance-identity/document", {});
    return JSON.parse(document).region;
  } catch (e) {
    console.warn(`Unable to fetch region from EC2 Instance Metadata Service. Error: ${e.message}`);
    return undefined;
  }
}
