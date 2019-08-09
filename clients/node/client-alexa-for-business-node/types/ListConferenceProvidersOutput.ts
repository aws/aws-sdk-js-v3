import { _UnmarshalledConferenceProvider } from "./_ConferenceProvider";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListConferenceProvidersOutput shape
 */
export interface ListConferenceProvidersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The conference providers.</p>
   */
  ConferenceProviders?: Array<_UnmarshalledConferenceProvider>;

  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
