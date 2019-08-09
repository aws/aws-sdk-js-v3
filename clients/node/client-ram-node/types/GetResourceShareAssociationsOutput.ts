import { _UnmarshalledResourceShareAssociation } from "./_ResourceShareAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetResourceShareAssociationsOutput shape
 */
export interface GetResourceShareAssociationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the association.</p>
   */
  resourceShareAssociations?: Array<_UnmarshalledResourceShareAssociation>;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
