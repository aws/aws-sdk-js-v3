import { _UnmarshalledSuggesterStatus } from "./_SuggesterStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>DescribeSuggesters</code> request.</p>
 */
export interface DescribeSuggestersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The suggesters configured for the domain specified in the request.</p>
   */
  Suggesters: Array<_UnmarshalledSuggesterStatus>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
