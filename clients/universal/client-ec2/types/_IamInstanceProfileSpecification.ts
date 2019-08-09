/**
 * <p>Describes an IAM instance profile.</p>
 */
export interface _IamInstanceProfileSpecification {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the instance profile.</p>
   */
  Name?: string;
}

export type _UnmarshalledIamInstanceProfileSpecification = _IamInstanceProfileSpecification;
