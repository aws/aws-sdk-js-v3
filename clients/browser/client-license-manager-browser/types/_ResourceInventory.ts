/**
 * <p>A set of attributes that describe a resource.</p>
 */
export interface _ResourceInventory {
  /**
   * <p>Unique ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource.</p>
   */
  ResourceType?: "EC2_INSTANCE" | "EC2_HOST" | "EC2_AMI" | string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The platform of the resource.</p>
   */
  Platform?: string;

  /**
   * <p>Platform version of the resource in the inventory.</p>
   */
  PlatformVersion?: string;

  /**
   * <p>Unique ID of the account that owns the resource.</p>
   */
  ResourceOwningAccountId?: string;
}

export type _UnmarshalledResourceInventory = _ResourceInventory;
