import {
  _EndpointDetails,
  _UnmarshalledEndpointDetails
} from "./_EndpointDetails";
import {
  _IdentityProviderDetails,
  _UnmarshalledIdentityProviderDetails
} from "./_IdentityProviderDetails";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describe the properties of the server that was specified. Information returned includes: the server Amazon Resource Name (ARN), the authentication configuration and type, the logging role, server Id and state, and assigned tags or metadata. </p>
 */
export interface _DescribedServer {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) for the server to be described.</p>
   */
  Arn: string;

  /**
   * <p>The virtual private cloud (VPC) endpoint settings that you configured for your SFTP server.</p>
   */
  EndpointDetails?: _EndpointDetails;

  /**
   * <p>The type of endpoint that your SFTP server is connected to. If your SFTP server is connected to a VPC endpoint, your server isn't accessible over the public internet.</p>
   */
  EndpointType?: "PUBLIC" | "VPC_ENDPOINT" | string;

  /**
   * <p>This value contains the Message-Digest Algorithm (MD5) hash of the server's host key. This value is equivalent to the output of <code>ssh-keygen -l -E md5 -f my-new-server-key</code> command.</p>
   */
  HostKeyFingerprint?: string;

  /**
   * <p>Specifies information to call a customer-supplied authentication API. This field is not populated when the <code>IdentityProviderType</code> of the server is <code>SERVICE_MANAGED</code>&gt;.</p>
   */
  IdentityProviderDetails?: _IdentityProviderDetails;

  /**
   * <p>This property defines the mode of authentication method enabled for this service. A value of <code>SERVICE_MANAGED</code>, means that you are using this Server to store and access SFTP user credentials within the service. A value of <code>API_GATEWAY</code> indicates that you have integrated an API Gateway endpoint that will be invoked for authenticating your user into the service.</p>
   */
  IdentityProviderType?: "SERVICE_MANAGED" | "API_GATEWAY" | string;

  /**
   * <p>This property is an AWS Identity and Access Management (IAM) entity that allows the server to turn on Amazon CloudWatch logging for Amazon S3 events. When set, user activity can be view in your CloudWatch logs.</p>
   */
  LoggingRole?: string;

  /**
   * <p>This property is a unique system assigned identifier for the SFTP server that you instantiate.</p>
   */
  ServerId?: string;

  /**
   * <p>The condition of the SFTP server for the server that was described. A value of <code>ONLINE</code> indicates that the server can accept jobs and transfer files. A <code>State</code> value of <code>OFFLINE</code> means that the server cannot perform file transfer operations.</p> <p>The states of <code>STARTING</code> and <code>STOPPING</code> indicated that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>START_FAILED</code> or <code>STOP_FAILED</code> can indicate an error condition.</p>
   */
  State?:
    | "OFFLINE"
    | "ONLINE"
    | "STARTING"
    | "STOPPING"
    | "START_FAILED"
    | "STOP_FAILED"
    | string;

  /**
   * <p>This property contains the key-value pairs that you can use to search for and group servers that were assigned to the server that was described.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The number of users that are assigned to the SFTP server you specified with the <code>ServerId</code>.</p>
   */
  UserCount?: number;
}

export interface _UnmarshalledDescribedServer extends _DescribedServer {
  /**
   * <p>The virtual private cloud (VPC) endpoint settings that you configured for your SFTP server.</p>
   */
  EndpointDetails?: _UnmarshalledEndpointDetails;

  /**
   * <p>Specifies information to call a customer-supplied authentication API. This field is not populated when the <code>IdentityProviderType</code> of the server is <code>SERVICE_MANAGED</code>&gt;.</p>
   */
  IdentityProviderDetails?: _UnmarshalledIdentityProviderDetails;

  /**
   * <p>This property contains the key-value pairs that you can use to search for and group servers that were assigned to the server that was described.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
