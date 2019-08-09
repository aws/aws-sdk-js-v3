/**
 * <p>A resource group.</p>
 */
export interface _Group {
  /**
   * <p>The ARN of a resource group.</p>
   */
  GroupArn: string;

  /**
   * <p>The name of a resource group.</p>
   */
  Name: string;

  /**
   * <p>The description of the resource group.</p>
   */
  Description?: string;
}

export type _UnmarshalledGroup = _Group;
