import { _UnmarshalledProjectStatus } from "./_ProjectStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeProjectOutput shape
 */
export interface DescribeProjectOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The display name for the project.</p>
   */
  name?: string;

  /**
   * <p>The ID of the project.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the project.</p>
   */
  arn?: string;

  /**
   * <p>The description of the project, if any.</p>
   */
  description?: string;

  /**
   * <p>A user- or system-generated token that identifies the entity that requested project creation. </p>
   */
  clientRequestToken?: string;

  /**
   * <p>The date and time the project was created, in timestamp format.</p>
   */
  createdTimeStamp?: Date;

  /**
   * <p>The ID of the primary stack in AWS CloudFormation used to generate resources for the project.</p>
   */
  stackId?: string;

  /**
   * <p>The ID for the AWS CodeStar project template used to create the project.</p>
   */
  projectTemplateId?: string;

  /**
   * <p>The project creation or deletion status.</p>
   */
  status?: _UnmarshalledProjectStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
