import {
  _EC2Specification,
  _UnmarshalledEC2Specification
} from "./_EC2Specification";

/**
 * <p>Hardware specifications for the service that you want recommendations for.</p>
 */
export interface _ServiceSpecification {
  /**
   * <p>The Amazon EC2 hardware specifications that you want AWS to provide recommendations for.</p>
   */
  EC2Specification?: _EC2Specification;
}

export interface _UnmarshalledServiceSpecification
  extends _ServiceSpecification {
  /**
   * <p>The Amazon EC2 hardware specifications that you want AWS to provide recommendations for.</p>
   */
  EC2Specification?: _UnmarshalledEC2Specification;
}
