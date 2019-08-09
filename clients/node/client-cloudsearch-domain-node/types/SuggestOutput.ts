import { _UnmarshalledSuggestStatus } from "./_SuggestStatus";
import { _UnmarshalledSuggestModel } from "./_SuggestModel";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>Suggest</code> request.</p>
 */
export interface SuggestOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of a <code>SuggestRequest</code>. Contains the resource ID (<code>rid</code>) and how long it took to process the request (<code>timems</code>).</p>
   */
  status?: _UnmarshalledSuggestStatus;

  /**
   * <p>Container for the matching search suggestion information.</p>
   */
  suggest?: _UnmarshalledSuggestModel;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
