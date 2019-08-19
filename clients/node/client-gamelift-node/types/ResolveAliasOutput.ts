import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface ResolveAliasOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Fleet identifier that is associated with the requested alias.</p>
   */
  FleetId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
