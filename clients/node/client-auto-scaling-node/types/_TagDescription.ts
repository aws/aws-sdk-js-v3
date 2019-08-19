/**
 * <p>Describes a tag for an Auto Scaling group.</p>
 */
export interface _TagDescription {
  /**
   * <p>The name of the group.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource. The only supported value is <code>auto-scaling-group</code>.</p>
   */
  ResourceType?: string;

  /**
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * <p>The tag value.</p>
   */
  Value?: string;

  /**
   * <p>Determines whether the tag is added to new instances as they are launched in the group.</p>
   */
  PropagateAtLaunch?: boolean;
}

export type _UnmarshalledTagDescription = _TagDescription;
