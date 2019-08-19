import { _UnmarshalledWorkteam } from "./_Workteam";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListWorkteamsOutput shape
 */
export interface ListWorkteamsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>Workteam</code> objects, each describing a work team.</p>
   */
  Workteams: Array<_UnmarshalledWorkteam>;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of work teams, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
