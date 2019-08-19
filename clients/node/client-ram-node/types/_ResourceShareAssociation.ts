/**
 * <p>Describes an association with a resource share.</p>
 */
export interface _ResourceShareAssociation {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The associated entity. For resource associations, this is the ARN of the resource. For principal associations, this is the ID of an AWS account or the ARN of an OU or organization from AWS Organizations.</p>
   */
  associatedEntity?: string;

  /**
   * <p>The association type.</p>
   */
  associationType?: "PRINCIPAL" | "RESOURCE" | string;

  /**
   * <p>The status of the association.</p>
   */
  status?:
    | "ASSOCIATING"
    | "ASSOCIATED"
    | "FAILED"
    | "DISASSOCIATING"
    | "DISASSOCIATED"
    | string;

  /**
   * <p>A message about the status of the association.</p>
   */
  statusMessage?: string;

  /**
   * <p>The time when the association was created.</p>
   */
  creationTime?: Date | string | number;

  /**
   * <p>The time when the association was last updated.</p>
   */
  lastUpdatedTime?: Date | string | number;

  /**
   * <p>Indicates whether the principal belongs to the same organization as the AWS account that owns the resource share.</p>
   */
  external?: boolean;
}

export interface _UnmarshalledResourceShareAssociation
  extends _ResourceShareAssociation {
  /**
   * <p>The time when the association was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time when the association was last updated.</p>
   */
  lastUpdatedTime?: Date;
}
