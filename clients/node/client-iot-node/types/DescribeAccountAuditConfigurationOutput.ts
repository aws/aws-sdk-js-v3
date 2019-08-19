import { _UnmarshalledAuditNotificationTarget } from "./_AuditNotificationTarget";
import { _UnmarshalledAuditCheckConfiguration } from "./_AuditCheckConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAccountAuditConfigurationOutput shape
 */
export interface DescribeAccountAuditConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates, and other items as required when performing an audit.</p> <p>On the first call to <code>UpdateAccountAuditConfiguration</code>, this parameter is required.</p>
   */
  roleArn?: string;

  /**
   * <p>Information about the targets to which audit notifications are sent for this account.</p>
   */
  auditNotificationTargetConfigurations?: {
    [key in "SNS" | string]: _UnmarshalledAuditNotificationTarget
  };

  /**
   * <p>Which audit checks are enabled and disabled for this account.</p>
   */
  auditCheckConfigurations?: {
    [key: string]: _UnmarshalledAuditCheckConfiguration;
  };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
