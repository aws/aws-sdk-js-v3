import { _UnmarshalledActivityTypeInfo } from "./_ActivityTypeInfo";
import { _UnmarshalledActivityTypeConfiguration } from "./_ActivityTypeConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Detailed information about an activity type.</p>
 */
export interface DescribeActivityTypeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>General information about the activity type.</p> <p>The status of activity type (returned in the ActivityTypeInfo structure) can be one of the following.</p> <ul> <li> <p> <code>REGISTERED</code> – The type is registered and available. Workers supporting this type should be running. </p> </li> <li> <p> <code>DEPRECATED</code> – The type was deprecated using <a>DeprecateActivityType</a>, but is still in use. You should keep workers supporting this type running. You cannot create new tasks of this type. </p> </li> </ul>
   */
  typeInfo: _UnmarshalledActivityTypeInfo;

  /**
   * <p>The configuration settings registered with the activity type.</p>
   */
  configuration: _UnmarshalledActivityTypeConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
