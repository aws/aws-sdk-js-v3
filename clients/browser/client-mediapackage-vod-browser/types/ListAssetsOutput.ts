import { _UnmarshalledAssetShallow } from "./_AssetShallow";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAssetsOutput shape
 */
export interface ListAssetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * A list of MediaPackage VOD Asset resources.
   */
  Assets?: Array<_UnmarshalledAssetShallow>;

  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
