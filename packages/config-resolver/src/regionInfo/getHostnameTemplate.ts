const AWS_TEMPLATE = "{signingService}.{region}.amazonaws.com";

export interface GetHostnameTemplateOptions {
  partitionHostname?: string;
}

export const getHostnameTemplate = (signingService: string, { partitionHostname }: GetHostnameTemplateOptions) =>
  partitionHostname ?? AWS_TEMPLATE.replace("{signingService}", signingService);
