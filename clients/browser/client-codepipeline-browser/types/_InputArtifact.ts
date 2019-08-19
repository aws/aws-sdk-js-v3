/**
 * <p>Represents information about an artifact to be worked on, such as a test or build artifact.</p>
 */
export interface _InputArtifact {
  /**
   * <p>The name of the artifact to be worked on, for example, "My App".</p> <p>The input artifact of an action must exactly match the output artifact declared in a preceding action, but the input artifact does not have to be the next action in strict sequence from the action that provided the output artifact. Actions in parallel can declare different output artifacts, which are in turn consumed by different following actions.</p>
   */
  name: string;
}

export type _UnmarshalledInputArtifact = _InputArtifact;
