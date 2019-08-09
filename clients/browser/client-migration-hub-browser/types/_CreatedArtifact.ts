/**
 * <p>An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2 instance, RDS instance, etc.).</p>
 */
export interface _CreatedArtifact {
  /**
   * <p>An ARN that uniquely identifies the result of a migration task.</p>
   */
  Name: string;

  /**
   * <p>A description that can be free-form text to record additional detail about the artifact for clarity or for later reference.</p>
   */
  Description?: string;
}

export type _UnmarshalledCreatedArtifact = _CreatedArtifact;
