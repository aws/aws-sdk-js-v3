/**
 * <p>An object representing an error when an asynchronous operation fails.</p>
 */
export interface _ErrorDetail {
  /**
   * <p>A brief description of the error. </p> <ul> <li> <p> <b>SubnetNotFound</b>: We couldn't find one of the subnets associated with the cluster.</p> </li> <li> <p> <b>SecurityGroupNotFound</b>: We couldn't find one of the security groups associated with the cluster.</p> </li> <li> <p> <b>EniLimitReached</b>: You have reached the elastic network interface limit for your account.</p> </li> <li> <p> <b>IpNotAvailable</b>: A subnet associated with the cluster doesn't have any free IP addresses.</p> </li> <li> <p> <b>AccessDenied</b>: You don't have permissions to perform the specified operation.</p> </li> <li> <p> <b>OperationNotPermitted</b>: The service role associated with the cluster doesn't have the required access permissions for Amazon EKS.</p> </li> <li> <p> <b>VpcIdNotFound</b>: We couldn't find the VPC associated with the cluster.</p> </li> </ul>
   */
  errorCode?:
    | "SubnetNotFound"
    | "SecurityGroupNotFound"
    | "EniLimitReached"
    | "IpNotAvailable"
    | "AccessDenied"
    | "OperationNotPermitted"
    | "VpcIdNotFound"
    | "Unknown"
    | string;

  /**
   * <p>A more complete description of the error.</p>
   */
  errorMessage?: string;

  /**
   * <p>An optional field that contains the resource IDs associated with the error.</p>
   */
  resourceIds?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledErrorDetail extends _ErrorDetail {
  /**
   * <p>An optional field that contains the resource IDs associated with the error.</p>
   */
  resourceIds?: Array<string>;
}
