/**
 * <p>Information about one or more IP address blocks.</p>
 */
export interface _IpRouteInfo {
  /**
   * <p>Identifier (ID) of the directory associated with the IP addresses.</p>
   */
  DirectoryId?: string;

  /**
   * <p>IP address block in the <a>IpRoute</a>.</p>
   */
  CidrIp?: string;

  /**
   * <p>The status of the IP address block.</p>
   */
  IpRouteStatusMsg?:
    | "Adding"
    | "Added"
    | "Removing"
    | "Removed"
    | "AddFailed"
    | "RemoveFailed"
    | string;

  /**
   * <p>The date and time the address block was added to the directory.</p>
   */
  AddedDateTime?: Date | string | number;

  /**
   * <p>The reason for the IpRouteStatusMsg.</p>
   */
  IpRouteStatusReason?: string;

  /**
   * <p>Description of the <a>IpRouteInfo</a>.</p>
   */
  Description?: string;
}

export interface _UnmarshalledIpRouteInfo extends _IpRouteInfo {
  /**
   * <p>The date and time the address block was added to the directory.</p>
   */
  AddedDateTime?: Date;
}
