import { _UnmarshalledSdkType } from "./_SdkType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The collection of <a>SdkType</a> instances.</p>
 */
export interface GetSdkTypesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * _String shape
   */
  position?: string;

  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: Array<_UnmarshalledSdkType>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
