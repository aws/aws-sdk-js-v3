import { _UnmarshalledActionType } from "./_ActionType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>ListActionTypes</code> action.</p>
 */
export interface ListActionTypesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides details of the action types.</p>
   */
  actionTypes: Array<_UnmarshalledActionType>;

  /**
   * <p>If the amount of returned information is significantly large, an identifier is also returned which can be used in a subsequent list action types call to return the next set of action types in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
