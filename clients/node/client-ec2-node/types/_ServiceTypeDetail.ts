/**
 * <p>Describes the type of service for a VPC endpoint.</p>
 */
export interface _ServiceTypeDetail {
  /**
   * <p>The type of service.</p>
   */
  ServiceType?: "Interface" | "Gateway" | string;
}

export type _UnmarshalledServiceTypeDetail = _ServiceTypeDetail;
