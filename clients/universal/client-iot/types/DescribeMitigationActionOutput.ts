import { _UnmarshalledMitigationActionParams } from "./_MitigationActionParams";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeMitigationActionOutput shape
 */
export interface DescribeMitigationActionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The friendly name that uniquely identifies the mitigation action.</p>
   */
  actionName?: string;

  /**
   * <p>The type of mitigation action.</p>
   */
  actionType?:
    | "UPDATE_DEVICE_CERTIFICATE"
    | "UPDATE_CA_CERTIFICATE"
    | "ADD_THINGS_TO_THING_GROUP"
    | "REPLACE_DEFAULT_POLICY_VERSION"
    | "ENABLE_IOT_LOGGING"
    | "PUBLISH_FINDING_TO_SNS"
    | string;

  /**
   * <p>The ARN that identifies this migration action.</p>
   */
  actionArn?: string;

  /**
   * <p>A unique identifier for this action.</p>
   */
  actionId?: string;

  /**
   * <p>The ARN of the IAM role used to apply this action.</p>
   */
  roleArn?: string;

  /**
   * <p>Parameters that control how the mitigation action is applied, specific to the type of mitigation action.</p>
   */
  actionParams?: _UnmarshalledMitigationActionParams;

  /**
   * <p>The date and time when the mitigation action was added to your AWS account.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date and time when the mitigation action was last changed.</p>
   */
  lastModifiedDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
