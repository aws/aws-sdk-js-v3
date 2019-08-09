import { _UnmarshalledConnector } from "./_Connector";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetConnectorsOutput shape
 */
export interface GetConnectorsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the registered connectors.</p>
   */
  connectorList?: Array<_UnmarshalledConnector>;

  /**
   * <p>The token required to retrieve the next set of results. This value is null when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
