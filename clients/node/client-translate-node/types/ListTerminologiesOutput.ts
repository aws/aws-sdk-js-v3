import { _UnmarshalledTerminologyProperties } from "./_TerminologyProperties";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTerminologiesOutput shape
 */
export interface ListTerminologiesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The properties list of the custom terminologies returned on the list request.</p>
   */
  TerminologyPropertiesList?: Array<_UnmarshalledTerminologyProperties>;

  /**
   * <p> If the response to the ListTerminologies was truncated, the NextToken fetches the next group of custom terminologies. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
