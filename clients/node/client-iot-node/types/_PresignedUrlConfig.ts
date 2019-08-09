/**
 * <p>Configuration for pre-signed S3 URLs.</p>
 */
export interface _PresignedUrlConfig {
  /**
   * <p>The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored. The role must also grant permission for IoT to download the files.</p>
   */
  roleArn?: string;

  /**
   * <p>How long (in seconds) pre-signed URLs are valid. Valid values are 60 - 3600, the default value is 3600 seconds. Pre-signed URLs are generated when Jobs receives an MQTT request for the job document.</p>
   */
  expiresInSec?: number;
}

export type _UnmarshalledPresignedUrlConfig = _PresignedUrlConfig;
