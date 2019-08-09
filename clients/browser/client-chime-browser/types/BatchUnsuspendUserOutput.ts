import { _UnmarshalledUserError } from "./_UserError";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchUnsuspendUserOutput shape
 */
export interface BatchUnsuspendUserOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If the <a>BatchUnsuspendUser</a> action fails for one or more of the user IDs in the request, a list of the user IDs is returned, along with error codes and error messages.</p>
   */
  UserErrors?: Array<_UnmarshalledUserError>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
