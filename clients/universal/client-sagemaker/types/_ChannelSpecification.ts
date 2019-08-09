/**
 * <p>Defines a named input source, called a channel, to be used by an algorithm.</p>
 */
export interface _ChannelSpecification {
  /**
   * <p>The name of the channel.</p>
   */
  Name: string;

  /**
   * <p>A brief description of the channel.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the channel is required by the algorithm.</p>
   */
  IsRequired?: boolean;

  /**
   * <p>The supported MIME types for the data.</p>
   */
  SupportedContentTypes: Array<string> | Iterable<string>;

  /**
   * <p>The allowed compression types, if data compression is used.</p>
   */
  SupportedCompressionTypes?:
    | Array<"None" | "Gzip" | string>
    | Iterable<"None" | "Gzip" | string>;

  /**
   * <p>The allowed input mode, either FILE or PIPE.</p> <p>In FILE mode, Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used input mode.</p> <p>In PIPE mode, Amazon SageMaker streams input data from the source directly to your algorithm without using the EBS volume.</p>
   */
  SupportedInputModes:
    | Array<"Pipe" | "File" | string>
    | Iterable<"Pipe" | "File" | string>;
}

export interface _UnmarshalledChannelSpecification
  extends _ChannelSpecification {
  /**
   * <p>The supported MIME types for the data.</p>
   */
  SupportedContentTypes: Array<string>;

  /**
   * <p>The allowed compression types, if data compression is used.</p>
   */
  SupportedCompressionTypes?: Array<"None" | "Gzip" | string>;

  /**
   * <p>The allowed input mode, either FILE or PIPE.</p> <p>In FILE mode, Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used input mode.</p> <p>In PIPE mode, Amazon SageMaker streams input data from the source directly to your algorithm without using the EBS volume.</p>
   */
  SupportedInputModes: Array<"Pipe" | "File" | string>;
}
