import { _UnmarshalledConferencePreference } from "./_ConferencePreference";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetConferencePreferenceOutput shape
 */
export interface GetConferencePreferenceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The conference preference.</p>
   */
  Preference?: _UnmarshalledConferencePreference;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
