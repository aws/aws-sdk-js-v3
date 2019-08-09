import { _UnmarshalledRevisionLocation } from "./_RevisionLocation";
import { _UnmarshalledGenericRevisionInfo } from "./_GenericRevisionInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a GetApplicationRevision operation.</p>
 */
export interface GetApplicationRevisionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the application that corresponds to the revision.</p>
   */
  applicationName?: string;

  /**
   * <p>Additional information about the revision, including type and location.</p>
   */
  revision?: _UnmarshalledRevisionLocation;

  /**
   * <p>General information about the revision.</p>
   */
  revisionInfo?: _UnmarshalledGenericRevisionInfo;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
