import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeIndexOutput shape
 */
export interface DescribeIndexOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The index name.</p>
   */
  indexName?: string;

  /**
   * <p>The index status.</p>
   */
  indexStatus?: "ACTIVE" | "BUILDING" | "REBUILDING" | string;

  /**
   * <p>Contains a value that specifies the type of indexing performed. Valid values are:</p> <ul> <li> <p>REGISTRY – Your thing index contains only registry data.</p> </li> <li> <p>REGISTRY_AND_SHADOW - Your thing index contains registry data and shadow data.</p> </li> <li> <p>REGISTRY_AND_CONNECTIVITY_STATUS - Your thing index contains registry data and thing connectivity status data.</p> </li> <li> <p>REGISTRY_AND_SHADOW_AND_CONNECTIVITY_STATUS - Your thing index contains registry data, shadow data, and thing connectivity status data.</p> </li> </ul>
   */
  schema?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
