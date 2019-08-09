import { _UnmarshalledActivity } from "./_Activity";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * EnterStandbyOutput shape
 */
export interface EnterStandbyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The activities related to moving instances into <code>Standby</code> mode.</p>
   */
  Activities?: Array<_UnmarshalledActivity>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
