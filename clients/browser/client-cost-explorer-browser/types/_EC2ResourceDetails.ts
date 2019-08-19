/**
 * <p> Details on the Amazon EC2 Resource.</p>
 */
export interface _EC2ResourceDetails {
  /**
   * <p> Hourly public On Demand rate for the instance type.</p>
   */
  HourlyOnDemandRate?: string;

  /**
   * <p> The type of Amazon Web Services instance.</p>
   */
  InstanceType?: string;

  /**
   * <p> The platform of the Amazon Web Services instance. The platform is the specific combination of operating system, license model, and software on an instance.</p>
   */
  Platform?: string;

  /**
   * <p> The Amazon Web Services Region of the instance.</p>
   */
  Region?: string;

  /**
   * <p> The SKU of the product.</p>
   */
  Sku?: string;

  /**
   * <p> Memory capacity of Amazon Web Services instance.</p>
   */
  Memory?: string;

  /**
   * <p> Network performance capacity of the Amazon Web Services instance.</p>
   */
  NetworkPerformance?: string;

  /**
   * <p> The disk storage of the Amazon Web Services instance (Not EBS storage).</p>
   */
  Storage?: string;

  /**
   * <p> Number of VCPU cores in the Amazon Web Services instance type.</p>
   */
  Vcpu?: string;
}

export type _UnmarshalledEC2ResourceDetails = _EC2ResourceDetails;
