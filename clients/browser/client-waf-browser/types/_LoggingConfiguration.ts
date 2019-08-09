import { _FieldToMatch, _UnmarshalledFieldToMatch } from "./_FieldToMatch";

/**
 * <p>The Amazon Kinesis Data Firehose, <code>RedactedFields</code> information, and the web ACL Amazon Resource Name (ARN).</p>
 */
export interface _LoggingConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the web ACL that you want to associate with <code>LogDestinationConfigs</code>.</p>
   */
  ResourceArn: string;

  /**
   * <p>An array of Amazon Kinesis Data Firehose ARNs.</p>
   */
  LogDestinationConfigs: Array<string> | Iterable<string>;

  /**
   * <p>The parts of the request that you want redacted from the logs. For example, if you redact the cookie field, the cookie field in the firehose will be <code>xxx</code>. </p>
   */
  RedactedFields?: Array<_FieldToMatch> | Iterable<_FieldToMatch>;
}

export interface _UnmarshalledLoggingConfiguration
  extends _LoggingConfiguration {
  /**
   * <p>An array of Amazon Kinesis Data Firehose ARNs.</p>
   */
  LogDestinationConfigs: Array<string>;

  /**
   * <p>The parts of the request that you want redacted from the logs. For example, if you redact the cookie field, the cookie field in the firehose will be <code>xxx</code>. </p>
   */
  RedactedFields?: Array<_UnmarshalledFieldToMatch>;
}
