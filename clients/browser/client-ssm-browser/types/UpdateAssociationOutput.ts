import { _UnmarshalledAssociationDescription } from "./_AssociationDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateAssociationOutput shape
 */
export interface UpdateAssociationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The description of the association that was updated.</p>
   */
  AssociationDescription?: _UnmarshalledAssociationDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
