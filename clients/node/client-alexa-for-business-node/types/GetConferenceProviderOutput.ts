import { _UnmarshalledConferenceProvider } from "./_ConferenceProvider";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetConferenceProviderOutput shape
 */
export interface GetConferenceProviderOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The conference provider.</p>
   */
  ConferenceProvider?: _UnmarshalledConferenceProvider;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
