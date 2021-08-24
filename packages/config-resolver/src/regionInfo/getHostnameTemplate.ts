import { getResolvedPartition, GetResolvedPartitionOptions } from "./getResolvedPartition";

const AWS_TEMPLATE = "{signingService}.{region}.amazonaws.com";

export interface GetHostnameTemplateOptions extends GetResolvedPartitionOptions {
  /**
   * The name to be used while signing the service request.
   */
  signingService: string;
}

export const getHostnameTemplate = (region: string, { signingService, partitionHash }: GetHostnameTemplateOptions) =>
  partitionHash[getResolvedPartition(region, { partitionHash })]?.hostname ??
  AWS_TEMPLATE.replace("{signingService}", signingService);
