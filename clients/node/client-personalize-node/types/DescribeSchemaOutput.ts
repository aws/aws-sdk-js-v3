import { _UnmarshalledDatasetSchema } from "./_DatasetSchema";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSchemaOutput shape
 */
export interface DescribeSchemaOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The requested schema.</p>
   */
  schema?: _UnmarshalledDatasetSchema;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
