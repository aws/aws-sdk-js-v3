/**
 * <p>The Amazon EC2 hardware specifications that you want AWS to provide recommendations for.</p>
 */
export interface _EC2Specification {
  /**
   * <p>Whether you want a recommendation for standard or convertible reservations.</p>
   */
  OfferingClass?: "STANDARD" | "CONVERTIBLE" | string;
}

export type _UnmarshalledEC2Specification = _EC2Specification;
