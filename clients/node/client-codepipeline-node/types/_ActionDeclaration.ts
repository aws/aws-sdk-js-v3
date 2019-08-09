import { _ActionTypeId, _UnmarshalledActionTypeId } from "./_ActionTypeId";
import {
  _OutputArtifact,
  _UnmarshalledOutputArtifact
} from "./_OutputArtifact";
import { _InputArtifact, _UnmarshalledInputArtifact } from "./_InputArtifact";

/**
 * <p>Represents information about an action declaration.</p>
 */
export interface _ActionDeclaration {
  /**
   * <p>The action declaration's name.</p>
   */
  name: string;

  /**
   * <p>The configuration information for the action type.</p>
   */
  actionTypeId: _ActionTypeId;

  /**
   * <p>The order in which actions are run.</p>
   */
  runOrder?: number;

  /**
   * <p>The action declaration's configuration.</p>
   */
  configuration?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The name or ID of the result of the action declaration, such as a test or build artifact.</p>
   */
  outputArtifacts?: Array<_OutputArtifact> | Iterable<_OutputArtifact>;

  /**
   * <p>The name or ID of the artifact consumed by the action, such as a test or build artifact.</p>
   */
  inputArtifacts?: Array<_InputArtifact> | Iterable<_InputArtifact>;

  /**
   * <p>The ARN of the IAM service role that will perform the declared action. This is assumed through the roleArn for the pipeline.</p>
   */
  roleArn?: string;

  /**
   * <p>The action declaration's AWS Region, such as us-east-1.</p>
   */
  region?: string;
}

export interface _UnmarshalledActionDeclaration extends _ActionDeclaration {
  /**
   * <p>The configuration information for the action type.</p>
   */
  actionTypeId: _UnmarshalledActionTypeId;

  /**
   * <p>The action declaration's configuration.</p>
   */
  configuration?: { [key: string]: string };

  /**
   * <p>The name or ID of the result of the action declaration, such as a test or build artifact.</p>
   */
  outputArtifacts?: Array<_UnmarshalledOutputArtifact>;

  /**
   * <p>The name or ID of the artifact consumed by the action, such as a test or build artifact.</p>
   */
  inputArtifacts?: Array<_UnmarshalledInputArtifact>;
}
