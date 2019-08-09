/**
 * <p>Represents information about the output of an action.</p>
 */
export interface _OutputArtifact {
  /**
   * <p>The name of the output of an artifact, such as "My App".</p> <p>The input artifact of an action must exactly match the output artifact declared in a preceding action, but the input artifact does not have to be the next action in strict sequence from the action that provided the output artifact. Actions in parallel can declare different output artifacts, which are in turn consumed by different following actions.</p> <p>Output artifact names must be unique within a pipeline.</p>
   */
  name: string;
}

export type _UnmarshalledOutputArtifact = _OutputArtifact;
