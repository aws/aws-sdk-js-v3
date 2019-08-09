import { _UnmarshalledSolutionStackDescription } from "./_SolutionStackDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of available AWS Elastic Beanstalk solution stacks.</p>
 */
export interface ListAvailableSolutionStacksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of available solution stacks.</p>
   */
  SolutionStacks?: Array<string>;

  /**
   * <p> A list of available solution stacks and their <a>SolutionStackDescription</a>. </p>
   */
  SolutionStackDetails?: Array<_UnmarshalledSolutionStackDescription>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
