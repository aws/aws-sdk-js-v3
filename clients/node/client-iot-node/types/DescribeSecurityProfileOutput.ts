import { _UnmarshalledBehavior } from "./_Behavior";
import { _UnmarshalledAlertTarget } from "./_AlertTarget";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSecurityProfileOutput shape
 */
export interface DescribeSecurityProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the security profile.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The ARN of the security profile.</p>
   */
  securityProfileArn?: string;

  /**
   * <p>A description of the security profile (associated with the security profile when it was created or updated).</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Array<_UnmarshalledBehavior>;

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: { [key in "SNS" | string]: _UnmarshalledAlertTarget };

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here.</p>
   */
  additionalMetricsToRetain?: Array<string>;

  /**
   * <p>The version of the security profile. A new version is generated whenever the security profile is updated.</p>
   */
  version?: number;

  /**
   * <p>The time the security profile was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The time the security profile was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
