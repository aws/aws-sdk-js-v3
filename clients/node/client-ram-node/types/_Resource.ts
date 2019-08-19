/**
 * <p>Describes a resource associated with a resource share.</p>
 */
export interface _Resource {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  arn?: string;

  /**
   * <p>The resource type.</p>
   */
  type?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The status of the resource.</p>
   */
  status?:
    | "AVAILABLE"
    | "ZONAL_RESOURCE_INACCESSIBLE"
    | "LIMIT_EXCEEDED"
    | "UNAVAILABLE"
    | string;

  /**
   * <p>A message about the status of the resource.</p>
   */
  statusMessage?: string;

  /**
   * <p>The time when the resource was associated with the resource share.</p>
   */
  creationTime?: Date | string | number;

  /**
   * <p>The time when the association was last updated.</p>
   */
  lastUpdatedTime?: Date | string | number;
}

export interface _UnmarshalledResource extends _Resource {
  /**
   * <p>The time when the resource was associated with the resource share.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time when the association was last updated.</p>
   */
  lastUpdatedTime?: Date;
}
