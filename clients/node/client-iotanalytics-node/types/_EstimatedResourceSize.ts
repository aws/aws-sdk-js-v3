/**
 * <p>The estimated size of the resource.</p>
 */
export interface _EstimatedResourceSize {
  /**
   * <p>The estimated size of the resource in bytes.</p>
   */
  estimatedSizeInBytes?: number;

  /**
   * <p>The time when the estimate of the size of the resource was made.</p>
   */
  estimatedOn?: Date | string | number;
}

export interface _UnmarshalledEstimatedResourceSize
  extends _EstimatedResourceSize {
  /**
   * <p>The time when the estimate of the size of the resource was made.</p>
   */
  estimatedOn?: Date;
}
