import { _UnmarshalledAssociationDescription } from "./_AssociationDescription";
import { _UnmarshalledFailedCreateAssociation } from "./_FailedCreateAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateAssociationBatchOutput shape
 */
export interface CreateAssociationBatchOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the associations that succeeded.</p>
   */
  Successful?: Array<_UnmarshalledAssociationDescription>;

  /**
   * <p>Information about the associations that failed.</p>
   */
  Failed?: Array<_UnmarshalledFailedCreateAssociation>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
