/**
 * <p>Attribute associated with a resource.</p> <p>Note the corresponding format required per type listed below:</p> <dl> <dt>IPV4</dt> <dd> <p> <code>x.x.x.x</code> </p> <p> <i>where x is an integer in the range [0,255]</i> </p> </dd> <dt>IPV6</dt> <dd> <p> <code>y : y : y : y : y : y : y : y</code> </p> <p> <i>where y is a hexadecimal between 0 and FFFF. [0, FFFF]</i> </p> </dd> <dt>MAC_ADDRESS</dt> <dd> <p> <code>^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$</code> </p> </dd> <dt>FQDN</dt> <dd> <p> <code>^[^&lt;&gt;{}\\\\/?,=\\p{Cntrl}]{1,256}$</code> </p> </dd> </dl>
 */
export interface _ResourceAttribute {
  /**
   * <p>Type of resource.</p>
   */
  Type:
    | "IPV4_ADDRESS"
    | "IPV6_ADDRESS"
    | "MAC_ADDRESS"
    | "FQDN"
    | "VM_MANAGER_ID"
    | "VM_MANAGED_OBJECT_REFERENCE"
    | "VM_NAME"
    | "VM_PATH"
    | "BIOS_ID"
    | "MOTHERBOARD_SERIAL_NUMBER"
    | string;

  /**
   * <p>Value of the resource type.</p>
   */
  Value: string;
}

export type _UnmarshalledResourceAttribute = _ResourceAttribute;
