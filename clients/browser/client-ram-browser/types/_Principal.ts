/**
 * <p>Describes a principal for use with AWS Resource Access Manager.</p>
 */
export interface _Principal {
  /**
   * <p>The ID of the principal.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The time when the principal was associated with the resource share.</p>
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

export interface _UnmarshalledPrincipal extends _Principal {
  /**
   * <p>The time when the principal was associated with the resource share.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time when the association was last updated.</p>
   */
  lastUpdatedTime?: Date;
}
