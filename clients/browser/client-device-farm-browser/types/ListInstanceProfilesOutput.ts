import { _UnmarshalledInstanceProfile } from "./_InstanceProfile";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListInstanceProfilesOutput shape
 */
export interface ListInstanceProfilesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing information about your instance profiles.</p>
   */
  instanceProfiles?: Array<_UnmarshalledInstanceProfile>;

  /**
   * <p>An identifier that can be used in the next call to this operation to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
