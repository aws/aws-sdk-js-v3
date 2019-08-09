/**
 * <p>For the metric that the CloudWatch alarm is associated with, a complex type that contains information about one dimension.</p>
 */
export interface _Dimension {
  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the name of one dimension.</p>
   */
  Name: string;

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the value of one dimension.</p>
   */
  Value: string;
}

export type _UnmarshalledDimension = _Dimension;
