/**
 * <p>Describes the processor parameter.</p>
 */
export interface _ProcessorParameter {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName:
    | "LambdaArn"
    | "NumberOfRetries"
    | "RoleArn"
    | "BufferSizeInMBs"
    | "BufferIntervalInSeconds"
    | string;

  /**
   * <p>The parameter value.</p>
   */
  ParameterValue: string;
}

export type _UnmarshalledProcessorParameter = _ProcessorParameter;
