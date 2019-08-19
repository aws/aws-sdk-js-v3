/**
 * <p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly.</p>
 */
export interface _SourceAuth {
  /**
   * <note> <p> This data type is deprecated and is no longer accurate or used. </p> </note> <p>The authorization type to use. The only valid value is <code>OAUTH</code>, which represents the OAuth authorization type.</p>
   */
  type: "OAUTH" | string;

  /**
   * <p>The resource value that applies to the specified authorization type.</p>
   */
  resource?: string;
}

export type _UnmarshalledSourceAuth = _SourceAuth;
