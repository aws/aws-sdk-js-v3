import { _UnmarshalledNamedQuery } from "./_NamedQuery";
import { _UnmarshalledUnprocessedNamedQueryId } from "./_UnprocessedNamedQueryId";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetNamedQueryOutput shape
 */
export interface BatchGetNamedQueryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the named query IDs submitted.</p>
   */
  NamedQueries?: Array<_UnmarshalledNamedQuery>;

  /**
   * <p>Information about provided query IDs.</p>
   */
  UnprocessedNamedQueryIds?: Array<_UnmarshalledUnprocessedNamedQueryId>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
