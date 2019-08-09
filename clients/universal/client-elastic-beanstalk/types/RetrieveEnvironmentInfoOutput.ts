import { _UnmarshalledEnvironmentInfoDescription } from "./_EnvironmentInfoDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Result message containing a description of the requested environment info.</p>
 */
export interface RetrieveEnvironmentInfoOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> The <a>EnvironmentInfoDescription</a> of the environment. </p>
   */
  EnvironmentInfo?: Array<_UnmarshalledEnvironmentInfoDescription>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
