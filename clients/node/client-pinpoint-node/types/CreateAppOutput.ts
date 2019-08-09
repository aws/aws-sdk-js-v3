import { _UnmarshalledApplicationResponse } from "./_ApplicationResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateAppOutput shape
 */
export interface CreateAppOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about an application.</p>
   */
  ApplicationResponse: _UnmarshalledApplicationResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
