/**
 * <p>A revision for an AWS Lambda deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda deployments, the revision is the same as the AppSpec file.</p>
 */
export interface _RawString {
  /**
   * <p>The YAML-formatted or JSON-formatted revision string. It includes information about which Lambda function to update and optional Lambda functions that validate deployment lifecycle events.</p>
   */
  content?: string;

  /**
   * <p>The SHA256 hash value of the revision content.</p>
   */
  sha256?: string;
}

export type _UnmarshalledRawString = _RawString;
