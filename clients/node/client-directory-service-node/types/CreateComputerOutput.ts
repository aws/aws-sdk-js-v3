import { _UnmarshalledComputer } from "./_Computer";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the results for the <a>CreateComputer</a> operation.</p>
 */
export interface CreateComputerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <a>Computer</a> object that represents the computer account.</p>
   */
  Computer?: _UnmarshalledComputer;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
