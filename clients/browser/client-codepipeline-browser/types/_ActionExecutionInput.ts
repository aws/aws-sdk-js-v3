import { _ActionTypeId, _UnmarshalledActionTypeId } from "./_ActionTypeId";
import {
  _ArtifactDetail,
  _UnmarshalledArtifactDetail
} from "./_ArtifactDetail";

/**
 * <p>Input information used for an action execution.</p>
 */
export interface _ActionExecutionInput {
  /**
   * <p>Represents information about an action type.</p>
   */
  actionTypeId?: _ActionTypeId;

  /**
   * <p>Configuration data for an action execution.</p>
   */
  configuration?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The ARN of the IAM service role that performs the declared action. This is assumed through the roleArn for the pipeline. </p>
   */
  roleArn?: string;

  /**
   * <p>The AWS Region for the action, such as us-east-1.</p>
   */
  region?: string;

  /**
   * <p>Details of input artifacts of the action that correspond to the action execution.</p>
   */
  inputArtifacts?: Array<_ArtifactDetail> | Iterable<_ArtifactDetail>;
}

export interface _UnmarshalledActionExecutionInput
  extends _ActionExecutionInput {
  /**
   * <p>Represents information about an action type.</p>
   */
  actionTypeId?: _UnmarshalledActionTypeId;

  /**
   * <p>Configuration data for an action execution.</p>
   */
  configuration?: { [key: string]: string };

  /**
   * <p>Details of input artifacts of the action that correspond to the action execution.</p>
   */
  inputArtifacts?: Array<_UnmarshalledArtifactDetail>;
}
