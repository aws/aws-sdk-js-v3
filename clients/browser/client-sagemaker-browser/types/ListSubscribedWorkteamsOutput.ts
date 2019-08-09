import { _UnmarshalledSubscribedWorkteam } from "./_SubscribedWorkteam";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSubscribedWorkteamsOutput shape
 */
export interface ListSubscribedWorkteamsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>Workteam</code> objects, each describing a work team.</p>
   */
  SubscribedWorkteams: Array<_UnmarshalledSubscribedWorkteam>;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of work teams, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
