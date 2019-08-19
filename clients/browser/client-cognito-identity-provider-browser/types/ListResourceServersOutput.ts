import { _UnmarshalledResourceServerType } from "./_ResourceServerType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResourceServersOutput shape
 */
export interface ListResourceServersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The resource servers.</p>
   */
  ResourceServers: Array<_UnmarshalledResourceServerType>;

  /**
   * <p>A pagination token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
