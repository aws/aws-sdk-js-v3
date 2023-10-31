/**
 * @internal
 */
export type AwsQueryCompatibleInputConfig = {
  awsQueryCompatibleNumericFields?: string[];
};

/**
 * @internal
 */
export type AwsQueryCompatibleResolvedConfig = {
  awsQueryCompatibleNumericFields: string[];
};

/**
 * @internal
 */
export const resolveAwsQueryCompatibleConfig = <T>(
  config: AwsQueryCompatibleInputConfig & T,
  { awsQueryCompatibleNumericFields }: { awsQueryCompatibleNumericFields: string[] }
) => {
  config.awsQueryCompatibleNumericFields = awsQueryCompatibleNumericFields ?? [];
  return config as T & AwsQueryCompatibleResolvedConfig;
};
