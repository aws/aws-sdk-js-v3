import { _UnmarshalledGitConfig } from "./_GitConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeCodeRepositoryOutput shape
 */
export interface DescribeCodeRepositoryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the Git repository.</p>
   */
  CodeRepositoryName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Git repository.</p>
   */
  CodeRepositoryArn: string;

  /**
   * <p>The date and time that the repository was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>The date and time that the repository was last changed.</p>
   */
  LastModifiedTime: Date;

  /**
   * <p>Configuration details about the repository, including the URL where the repository is located, the default branch, and the Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the repository.</p>
   */
  GitConfig?: _UnmarshalledGitConfig;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
