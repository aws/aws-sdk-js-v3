import { _UnmarshalledSigningProfile } from "./_SigningProfile";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSigningProfilesOutput shape
 */
export interface ListSigningProfilesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of profiles that are available in the AWS account. This includes profiles with the status of <code>CANCELED</code> if the <code>includeCanceled</code> parameter is set to <code>true</code>.</p>
   */
  profiles?: Array<_UnmarshalledSigningProfile>;

  /**
   * <p>Value for specifying the next set of paginated results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
