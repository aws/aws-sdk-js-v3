import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a resource share.</p>
 */
export interface _ResourceShare {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The name of the resource share.</p>
   */
  name?: string;

  /**
   * <p>The ID of the AWS account that owns the resource share.</p>
   */
  owningAccountId?: string;

  /**
   * <p>Indicates whether principals outside your organization can be associated with a resource share.</p>
   */
  allowExternalPrincipals?: boolean;

  /**
   * <p>The status of the resource share.</p>
   */
  status?: "PENDING" | "ACTIVE" | "FAILED" | "DELETING" | "DELETED" | string;

  /**
   * <p>A message about the status of the resource share.</p>
   */
  statusMessage?: string;

  /**
   * <p>The tags for the resource share.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The time when the resource share was created.</p>
   */
  creationTime?: Date | string | number;

  /**
   * <p>The time when the resource share was last updated.</p>
   */
  lastUpdatedTime?: Date | string | number;
}

export interface _UnmarshalledResourceShare extends _ResourceShare {
  /**
   * <p>The tags for the resource share.</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * <p>The time when the resource share was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time when the resource share was last updated.</p>
   */
  lastUpdatedTime?: Date;
}
