import { _UnmarshalledBuild } from "./_Build";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface DescribeBuildOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Set of properties describing the requested build.</p>
   */
  Build?: _UnmarshalledBuild;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
