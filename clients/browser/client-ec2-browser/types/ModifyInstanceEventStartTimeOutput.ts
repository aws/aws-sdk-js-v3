import { _UnmarshalledInstanceStatusEvent } from "./_InstanceStatusEvent";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyInstanceEventStartTimeOutput shape
 */
export interface ModifyInstanceEventStartTimeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Describes a scheduled event for an instance.</p>
   */
  Event?: _UnmarshalledInstanceStatusEvent;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
