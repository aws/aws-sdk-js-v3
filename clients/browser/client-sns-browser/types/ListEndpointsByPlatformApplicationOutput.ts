import { _UnmarshalledEndpoint } from "./_Endpoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Response for ListEndpointsByPlatformApplication action.</p>
 */
export interface ListEndpointsByPlatformApplicationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Endpoints returned for ListEndpointsByPlatformApplication action.</p>
   */
  Endpoints?: Array<_UnmarshalledEndpoint>;

  /**
   * <p>NextToken string is returned when calling ListEndpointsByPlatformApplication action if additional records are available after the first page results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
