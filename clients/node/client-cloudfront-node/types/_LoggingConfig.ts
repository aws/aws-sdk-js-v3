/**
 * <p>A complex type that controls whether access logs are written for the distribution.</p>
 */
export interface _LoggingConfig {
  /**
   * <p>Specifies whether you want CloudFront to save access logs to an Amazon S3 bucket. If you don't want to enable logging when you create a distribution or if you want to disable logging for an existing distribution, specify <code>false</code> for <code>Enabled</code>, and specify empty <code>Bucket</code> and <code>Prefix</code> elements. If you specify <code>false</code> for <code>Enabled</code> but you specify values for <code>Bucket</code>, <code>prefix</code>, and <code>IncludeCookies</code>, the values are automatically deleted.</p>
   */
  Enabled: boolean;

  /**
   * <p>Specifies whether you want CloudFront to include cookies in access logs, specify <code>true</code> for <code>IncludeCookies</code>. If you choose to include cookies in logs, CloudFront logs all cookies regardless of how you configure the cache behaviors for this distribution. If you don't want to include cookies when you create a distribution or if you want to disable include cookies for an existing distribution, specify <code>false</code> for <code>IncludeCookies</code>.</p>
   */
  IncludeCookies: boolean;

  /**
   * <p>The Amazon S3 bucket to store the access logs in, for example, <code>myawslogbucket.s3.amazonaws.com</code>.</p>
   */
  Bucket: string;

  /**
   * <p>An optional string that you want CloudFront to prefix to the access log <code>filenames</code> for this distribution, for example, <code>myprefix/</code>. If you want to enable logging, but you don't want to specify a prefix, you still must include an empty <code>Prefix</code> element in the <code>Logging</code> element.</p>
   */
  Prefix: string;
}

export type _UnmarshalledLoggingConfig = _LoggingConfig;
