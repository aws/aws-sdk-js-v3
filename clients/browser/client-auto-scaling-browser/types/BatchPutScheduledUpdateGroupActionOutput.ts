import { _UnmarshalledFailedScheduledUpdateGroupActionRequest } from "./_FailedScheduledUpdateGroupActionRequest";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchPutScheduledUpdateGroupActionOutput shape
 */
export interface BatchPutScheduledUpdateGroupActionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The names of the scheduled actions that could not be created or updated, including an error message.</p>
   */
  FailedScheduledUpdateGroupActions?: Array<
    _UnmarshalledFailedScheduledUpdateGroupActionRequest
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
