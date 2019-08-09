import { _UnmarshalledSchemaExtensionInfo } from "./_SchemaExtensionInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSchemaExtensionsOutput shape
 */
export interface ListSchemaExtensionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the schema extensions applied to the directory.</p>
   */
  SchemaExtensionsInfo?: Array<_UnmarshalledSchemaExtensionInfo>;

  /**
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code> parameter in a subsequent call to <code>ListSchemaExtensions</code> to retrieve the next set of items.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
