/**
 * <p>Information about a resource.</p>
 */
export interface _ResourceDetail {
  /**
   * <p>The identifier of the resource.</p>
   */
  Id?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ARN?: string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The description of the resource.</p>
   */
  Description?: string;

  /**
   * <p>The creation time of the resource.</p>
   */
  CreatedTime?: Date | string | number;
}

export interface _UnmarshalledResourceDetail extends _ResourceDetail {
  /**
   * <p>The creation time of the resource.</p>
   */
  CreatedTime?: Date;
}
