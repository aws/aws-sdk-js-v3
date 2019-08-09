import { _UnmarshalledApplicationDescription } from "./_ApplicationDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Result message containing a single description of an application.</p>
 */
export interface UpdateApplicationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> The <a>ApplicationDescription</a> of the application. </p>
   */
  Application?: _UnmarshalledApplicationDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
