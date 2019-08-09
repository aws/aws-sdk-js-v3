/**
 * <p>In the response to a <a>GetResolverEndpoint</a> request, information about the IP addresses that the resolver endpoint uses for DNS queries.</p>
 */
export interface _IpAddressResponse {
  /**
   * <p>The ID of one IP address.</p>
   */
  IpId?: string;

  /**
   * <p>The ID of one subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>One IP address that the resolver endpoint uses for DNS queries.</p>
   */
  Ip?: string;

  /**
   * <p>A status code that gives the current status of the request.</p>
   */
  Status?:
    | "CREATING"
    | "FAILED_CREATION"
    | "ATTACHING"
    | "ATTACHED"
    | "REMAP_DETACHING"
    | "REMAP_ATTACHING"
    | "DETACHING"
    | "FAILED_RESOURCE_GONE"
    | "DELETING"
    | "DELETE_FAILED_FAS_EXPIRED"
    | string;

  /**
   * <p>A message that provides additional information about the status of the request.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The date and time that the IP address was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  CreationTime?: string;

  /**
   * <p>The date and time that the IP address was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;
}

export type _UnmarshalledIpAddressResponse = _IpAddressResponse;
