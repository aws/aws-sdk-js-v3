import { _UnmarshalledApplicationVersionDescription } from "./_ApplicationVersionDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Result message wrapping a single description of an application version.</p>
 */
export interface UpdateApplicationVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> The <a>ApplicationVersionDescription</a> of the application version. </p>
   */
  ApplicationVersion?: _UnmarshalledApplicationVersionDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
