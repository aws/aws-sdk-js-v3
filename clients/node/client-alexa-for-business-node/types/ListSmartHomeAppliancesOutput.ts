import { _UnmarshalledSmartHomeAppliance } from "./_SmartHomeAppliance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSmartHomeAppliancesOutput shape
 */
export interface ListSmartHomeAppliancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The smart home appliances.</p>
   */
  SmartHomeAppliances?: Array<_UnmarshalledSmartHomeAppliance>;

  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
