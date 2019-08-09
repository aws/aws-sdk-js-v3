/**
 * <p>One or more association documents on the instance. </p>
 */
export interface _InstanceAssociation {
  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The content of the association document for the instance(s).</p>
   */
  Content?: string;

  /**
   * <p>Version information for the association on the instance.</p>
   */
  AssociationVersion?: string;
}

export type _UnmarshalledInstanceAssociation = _InstanceAssociation;
