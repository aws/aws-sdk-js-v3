import { _UnmarshalledPathToObjectIdentifiers } from "./_PathToObjectIdentifiers";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListObjectParentPathsOutput shape
 */
export interface ListObjectParentPathsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns the path to the <code>ObjectIdentifiers</code> that are associated with the directory.</p>
   */
  PathToObjectIdentifiersList?: Array<_UnmarshalledPathToObjectIdentifiers>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
