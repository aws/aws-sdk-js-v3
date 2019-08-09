import { _UnmarshalledActionType } from "./_ActionType";
import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>CreateCustomActionType</code> operation.</p>
 */
export interface CreateCustomActionTypeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns information about the details of an action type.</p>
   */
  actionType: _UnmarshalledActionType;

  /**
   * <p>Specifies the tags applied to the custom action.</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
