/**
 * <p>Returns properties of the server that was specified.</p>
 */
export interface _ListedServer {
  /**
   * <p>The unique Amazon Resource Name (ARN) for the server to be listed.</p>
   */
  Arn: string;

  /**
   * <p>The authentication method used to validate a user for the server that was specified. listed. This can include Secure Shell (SSH), user name and password combinations, or your own custom authentication method. Valid values include <code>SERVICE_MANAGED</code> or <code>API_GATEWAY</code>.</p>
   */
  IdentityProviderType?: "SERVICE_MANAGED" | "API_GATEWAY" | string;

  /**
   * <p>The type of VPC endpoint that your SFTP server is connected to. If your SFTP server is connected to a VPC endpoint, your server isn't accessible over the public internet.</p>
   */
  EndpointType?: "PUBLIC" | "VPC_ENDPOINT" | string;

  /**
   * <p>The AWS Identity and Access Management entity that allows the server to turn on Amazon CloudWatch logging.</p>
   */
  LoggingRole?: string;

  /**
   * <p>This value is the unique system assigned identifier for the SFTP servers that were listed.</p>
   */
  ServerId?: string;

  /**
   * <p>This property describes the condition of the SFTP server for the server that was described. A value of <code>ONLINE</code>&gt; indicates that the server can accept jobs and transfer files. A <code>State</code> value of <code>OFFLINE</code> means that the server cannot perform file transfer operations.</p> <p>The states of <code>STARTING</code> and <code>STOPPING</code> indicated that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>START_FAILED</code> or <code>STOP_FAILED</code> can indicate an error condition.</p>
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
   * <p>This property is a numeric value that indicates the number of users that are assigned to the SFTP server you specified with the <code>ServerId</code>.</p>
   */
  UserCount?: number;
}

export type _UnmarshalledListedServer = _ListedServer;
