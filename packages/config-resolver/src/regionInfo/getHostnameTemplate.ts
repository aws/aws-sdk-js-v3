import { getResolvedPartition } from "./getResolvedPartition";
import { PartitionHash } from "./PartitionHash";

const AWS_TEMPLATE = "{signingService}.{region}.amazonaws.com";

export interface GetHostnameTemplateOptions {
  signingService: string;
  partitionHash: PartitionHash;
}

export const getHostnameTemplate = (region: string, { signingService, partitionHash }: GetHostnameTemplateOptions) =>
  partitionHash[getResolvedPartition(region, { partitionHash })]?.hostname ??
  AWS_TEMPLATE.replace("{signingService}", signingService);
