/**
 * <p>Information that identifies a mitigation action. This information is returned by ListMitigationActions.</p>
 */
export interface _MitigationActionIdentifier {
  /**
   * <p>The friendly name of the mitigation action.</p>
   */
  actionName?: string;

  /**
   * <p>The IAM role ARN used to apply this mitigation action.</p>
   */
  actionArn?: string;

  /**
   * <p>The date when this mitigation action was created.</p>
   */
  creationDate?: Date | string | number;
}

export interface _UnmarshalledMitigationActionIdentifier
  extends _MitigationActionIdentifier {
  /**
   * <p>The date when this mitigation action was created.</p>
   */
  creationDate?: Date;
}
