import { _UnmarshalledParameter } from "./_Parameter";
import { _UnmarshalledRollbackConfiguration } from "./_RollbackConfiguration";
import { _UnmarshalledTag } from "./_Tag";
import { _UnmarshalledChange } from "./_Change";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for the <a>DescribeChangeSet</a> action.</p>
 */
export interface DescribeChangeSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the change set.</p>
   */
  ChangeSetName?: string;

  /**
   * <p>The ARN of the change set.</p>
   */
  ChangeSetId?: string;

  /**
   * <p>The ARN of the stack that is associated with the change set.</p>
   */
  StackId?: string;

  /**
   * <p>The name of the stack that is associated with the change set.</p>
   */
  StackName?: string;

  /**
   * <p>Information about the change set.</p>
   */
  Description?: string;

  /**
   * <p>A list of <code>Parameter</code> structures that describes the input parameters and their values used to create the change set. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data type.</p>
   */
  Parameters?: Array<_UnmarshalledParameter>;

  /**
   * <p>The start time when the change set was created, in UTC.</p>
   */
  CreationTime?: Date;

  /**
   * <p>If the change set execution status is <code>AVAILABLE</code>, you can execute the change set. If you can’t execute the change set, the status indicates why. For example, a change set might be in an <code>UNAVAILABLE</code> state because AWS CloudFormation is still creating it or in an <code>OBSOLETE</code> state because the stack was already updated.</p>
   */
  ExecutionStatus?:
    | "UNAVAILABLE"
    | "AVAILABLE"
    | "EXECUTE_IN_PROGRESS"
    | "EXECUTE_COMPLETE"
    | "EXECUTE_FAILED"
    | "OBSOLETE"
    | string;

  /**
   * <p>The current status of the change set, such as <code>CREATE_IN_PROGRESS</code>, <code>CREATE_COMPLETE</code>, or <code>FAILED</code>.</p>
   */
  Status?:
    | "CREATE_PENDING"
    | "CREATE_IN_PROGRESS"
    | "CREATE_COMPLETE"
    | "DELETE_COMPLETE"
    | "FAILED"
    | string;

  /**
   * <p>A description of the change set's status. For example, if your attempt to create a change set failed, AWS CloudFormation shows the error message.</p>
   */
  StatusReason?: string;

  /**
   * <p>The ARNs of the Amazon Simple Notification Service (Amazon SNS) topics that will be associated with the stack if you execute the change set.</p>
   */
  NotificationARNs?: Array<string>;

  /**
   * <p>The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: _UnmarshalledRollbackConfiguration;

  /**
   * <p>If you execute the change set, the list of capabilities that were explicitly acknowledged when the change set was created.</p>
   */
  Capabilities?: Array<
    | "CAPABILITY_IAM"
    | "CAPABILITY_NAMED_IAM"
    | "CAPABILITY_AUTO_EXPAND"
    | string
  >;

  /**
   * <p>If you execute the change set, the tags that will be associated with the stack.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>A list of <code>Change</code> structures that describes the resources AWS CloudFormation changes if you execute the change set.</p>
   */
  Changes?: Array<_UnmarshalledChange>;

  /**
   * <p>If the output exceeds 1 MB, a string that identifies the next page of changes. If there is no additional page, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
