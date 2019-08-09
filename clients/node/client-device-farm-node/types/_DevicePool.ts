import { _Rule, _UnmarshalledRule } from "./_Rule";

/**
 * <p>Represents a collection of device types.</p>
 */
export interface _DevicePool {
  /**
   * <p>The device pool's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The device pool's name.</p>
   */
  name?: string;

  /**
   * <p>The device pool's description.</p>
   */
  description?: string;

  /**
   * <p>The device pool's type.</p> <p>Allowed values include:</p> <ul> <li> <p>CURATED: A device pool that is created and managed by AWS Device Farm.</p> </li> <li> <p>PRIVATE: A device pool that is created and managed by the device pool developer.</p> </li> </ul>
   */
  type?: "CURATED" | "PRIVATE" | string;

  /**
   * <p>Information about the device pool's rules.</p>
   */
  rules?: Array<_Rule> | Iterable<_Rule>;

  /**
   * <p>The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are available and that meet the criteria that you assign for the <code>rules</code> parameter. Depending on how many devices meet these constraints, your device pool might contain fewer devices than the value for this parameter.</p> <p>By specifying the maximum number of devices, you can control the costs that you incur by running tests.</p>
   */
  maxDevices?: number;
}

export interface _UnmarshalledDevicePool extends _DevicePool {
  /**
   * <p>Information about the device pool's rules.</p>
   */
  rules?: Array<_UnmarshalledRule>;
}
