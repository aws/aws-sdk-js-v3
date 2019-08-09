import { _UnmarshalledBehavior } from "./_Behavior";
import { _UnmarshalledAlertTarget } from "./_AlertTarget";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateSecurityProfileOutput shape
 */
export interface UpdateSecurityProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the security profile that was updated.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The ARN of the security profile that was updated.</p>
   */
  securityProfileArn?: string;

  /**
   * <p>The description of the security profile.</p>
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
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the security profile's <code>behaviors</code>, but it is also retained for any metric specified here.</p>
   */
  additionalMetricsToRetain?: Array<string>;

  /**
   * <p>The updated version of the security profile.</p>
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
