import { _CORSRule, _UnmarshalledCORSRule } from "./_CORSRule";

/**
 * <p>Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource Sharing</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface _CORSConfiguration {
  /**
   * <p>A set of allowed origins and methods.</p>
   */
  CORSRules: Array<_CORSRule> | Iterable<_CORSRule>;
}

export interface _UnmarshalledCORSConfiguration extends _CORSConfiguration {
  /**
   * <p>A set of allowed origins and methods.</p>
   */
  CORSRules: Array<_UnmarshalledCORSRule>;
}
