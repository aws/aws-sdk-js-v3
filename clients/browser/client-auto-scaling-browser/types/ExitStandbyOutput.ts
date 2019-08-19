import { _UnmarshalledActivity } from "./_Activity";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ExitStandbyOutput shape
 */
export interface ExitStandbyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The activities related to moving instances out of <code>Standby</code> mode.</p>
   */
  Activities?: Array<_UnmarshalledActivity>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
