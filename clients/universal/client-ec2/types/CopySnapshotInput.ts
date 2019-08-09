import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for CopySnapshot.</p>
 */
export interface CopySnapshotInput {
  /**
   * <p>A description for the EBS snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The destination Region to use in the <code>PresignedUrl</code> parameter of a snapshot copy operation. This parameter is only valid for specifying the destination Region in a <code>PresignedUrl</code> parameter, where it is required.</p> <p>The snapshot copy is sent to the regional endpoint that you sent the HTTP request to (for example, <code>ec2.us-east-1.amazonaws.com</code>). With the AWS CLI, this is specified using the <code>--region</code> parameter or the default Region in your AWS configuration file.</p>
   */
  DestinationRegion?: string;

  /**
   * <p>To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled, enable encryption using this parameter. Otherwise, omit this parameter. Encrypted snapshots are encrypted, even if you omit this parameter and encryption by default is not enabled. You cannot set this parameter to false. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption. If this parameter is not specified, your AWS managed CMK for EBS is used. If <code>KmsKeyId</code> is specified, the encrypted state must be <code>true</code>.</p> <p>You can specify the CMK using any of the following:</p> <ul> <li> <p>Key ID. For example, key/1234abcd-12ab-34cd-56ef-1234567890ab.</p> </li> <li> <p>Key alias. For example, alias/ExampleAlias.</p> </li> <li> <p>Key ARN. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:key/<i>abcd1234-a123-456a-a12b-a123b4cd56ef</i>.</p> </li> <li> <p>Alias ARN. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>.</p> </li> </ul> <p>AWS authenticates the CMK asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid, the action can appear to complete, but eventually fails.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>When you copy an encrypted source snapshot using the Amazon EC2 Query API, you must supply a pre-signed URL. This parameter is optional for unencrypted snapshots. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html">Query Requests</a>.</p> <p>The <code>PresignedUrl</code> should use the snapshot source endpoint, the <code>CopySnapshot</code> action, and include the <code>SourceRegion</code>, <code>SourceSnapshotId</code>, and <code>DestinationRegion</code> parameters. The <code>PresignedUrl</code> must be signed using AWS Signature Version 4. Because EBS snapshots are stored in Amazon S3, the signing algorithm for this parameter uses the same logic that is described in <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">Authenticating Requests by Using Query Parameters (AWS Signature Version 4)</a> in the <i>Amazon Simple Storage Service API Reference</i>. An invalid or improperly signed <code>PresignedUrl</code> will cause the copy operation to fail asynchronously, and the snapshot will move to an <code>error</code> state.</p>
   */
  PresignedUrl?: string;

  /**
   * <p>The ID of the Region that contains the snapshot to be copied.</p>
   */
  SourceRegion: string;

  /**
   * <p>The ID of the EBS snapshot to copy.</p>
   */
  SourceSnapshotId: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
