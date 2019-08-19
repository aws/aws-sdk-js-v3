import {
  _PhysicalConnectionRequirements,
  _UnmarshalledPhysicalConnectionRequirements
} from "./_PhysicalConnectionRequirements";

/**
 * <p>Defines a connection to a data source.</p>
 */
export interface _Connection {
  /**
   * <p>The name of the connection definition.</p>
   */
  Name?: string;

  /**
   * <p>The description of the connection.</p>
   */
  Description?: string;

  /**
   * <p>The type of the connection. Currently, only JDBC is supported; SFTP is not supported.</p>
   */
  ConnectionType?: "JDBC" | "SFTP" | string;

  /**
   * <p>A list of criteria that can be used in selecting this connection.</p>
   */
  MatchCriteria?: Array<string> | Iterable<string>;

  /**
   * <p>These key-value pairs define parameters for the connection:</p> <ul> <li> <p> <code>HOST</code> - The host URI: either the fully qualified domain name (FQDN) or the IPv4 address of the database host.</p> </li> <li> <p> <code>PORT</code> - The port number, between 1024 and 65535, of the port on which the database host is listening for database connections.</p> </li> <li> <p> <code>USER_NAME</code> - The name under which to log in to the database. The value string for <code>USER_NAME</code> is "<code>USERNAME</code>".</p> </li> <li> <p> <code>PASSWORD</code> - A password, if one is used, for the user name.</p> </li> <li> <p> <code>ENCRYPTED_PASSWORD</code> - When you enable connection password protection by setting <code>ConnectionPasswordEncryption</code> in the Data Catalog encryption settings, this field stores the encrypted password.</p> </li> <li> <p> <code>JDBC_DRIVER_JAR_URI</code> - The Amazon S3 path of the JAR file that contains the JDBC driver to use.</p> </li> <li> <p> <code>JDBC_DRIVER_CLASS_NAME</code> - The class name of the JDBC driver to use.</p> </li> <li> <p> <code>JDBC_ENGINE</code> - The name of the JDBC engine to use.</p> </li> <li> <p> <code>JDBC_ENGINE_VERSION</code> - The version of the JDBC engine to use.</p> </li> <li> <p> <code>CONFIG_FILES</code> - (Reserved for future use).</p> </li> <li> <p> <code>INSTANCE_ID</code> - The instance ID to use.</p> </li> <li> <p> <code>JDBC_CONNECTION_URL</code> - The URL for the JDBC connection.</p> </li> <li> <p> <code>JDBC_ENFORCE_SSL</code> - A Boolean string (true, false) specifying whether Secure Sockets Layer (SSL) with hostname matching will be enforced for the JDBC connection on the client. The default is false.</p> </li> </ul>
   */
  ConnectionProperties?:
    | {
        [key in
          | "HOST"
          | "PORT"
          | "USERNAME"
          | "PASSWORD"
          | "ENCRYPTED_PASSWORD"
          | "JDBC_DRIVER_JAR_URI"
          | "JDBC_DRIVER_CLASS_NAME"
          | "JDBC_ENGINE"
          | "JDBC_ENGINE_VERSION"
          | "CONFIG_FILES"
          | "INSTANCE_ID"
          | "JDBC_CONNECTION_URL"
          | "JDBC_ENFORCE_SSL"
          | string]: string
      }
    | Iterable<
        [

            | "HOST"
            | "PORT"
            | "USERNAME"
            | "PASSWORD"
            | "ENCRYPTED_PASSWORD"
            | "JDBC_DRIVER_JAR_URI"
            | "JDBC_DRIVER_CLASS_NAME"
            | "JDBC_ENGINE"
            | "JDBC_ENGINE_VERSION"
            | "CONFIG_FILES"
            | "INSTANCE_ID"
            | "JDBC_CONNECTION_URL"
            | "JDBC_ENFORCE_SSL"
            | string,
          string
        ]
      >;

  /**
   * <p>A map of physical connection requirements, such as virtual private cloud (VPC) and <code>SecurityGroup</code>, that are needed to make this connection successfully.</p>
   */
  PhysicalConnectionRequirements?: _PhysicalConnectionRequirements;

  /**
   * <p>The time that this connection definition was created.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>The last time that this connection definition was updated.</p>
   */
  LastUpdatedTime?: Date | string | number;

  /**
   * <p>The user, group, or role that last updated this connection definition.</p>
   */
  LastUpdatedBy?: string;
}

export interface _UnmarshalledConnection extends _Connection {
  /**
   * <p>A list of criteria that can be used in selecting this connection.</p>
   */
  MatchCriteria?: Array<string>;

  /**
   * <p>These key-value pairs define parameters for the connection:</p> <ul> <li> <p> <code>HOST</code> - The host URI: either the fully qualified domain name (FQDN) or the IPv4 address of the database host.</p> </li> <li> <p> <code>PORT</code> - The port number, between 1024 and 65535, of the port on which the database host is listening for database connections.</p> </li> <li> <p> <code>USER_NAME</code> - The name under which to log in to the database. The value string for <code>USER_NAME</code> is "<code>USERNAME</code>".</p> </li> <li> <p> <code>PASSWORD</code> - A password, if one is used, for the user name.</p> </li> <li> <p> <code>ENCRYPTED_PASSWORD</code> - When you enable connection password protection by setting <code>ConnectionPasswordEncryption</code> in the Data Catalog encryption settings, this field stores the encrypted password.</p> </li> <li> <p> <code>JDBC_DRIVER_JAR_URI</code> - The Amazon S3 path of the JAR file that contains the JDBC driver to use.</p> </li> <li> <p> <code>JDBC_DRIVER_CLASS_NAME</code> - The class name of the JDBC driver to use.</p> </li> <li> <p> <code>JDBC_ENGINE</code> - The name of the JDBC engine to use.</p> </li> <li> <p> <code>JDBC_ENGINE_VERSION</code> - The version of the JDBC engine to use.</p> </li> <li> <p> <code>CONFIG_FILES</code> - (Reserved for future use).</p> </li> <li> <p> <code>INSTANCE_ID</code> - The instance ID to use.</p> </li> <li> <p> <code>JDBC_CONNECTION_URL</code> - The URL for the JDBC connection.</p> </li> <li> <p> <code>JDBC_ENFORCE_SSL</code> - A Boolean string (true, false) specifying whether Secure Sockets Layer (SSL) with hostname matching will be enforced for the JDBC connection on the client. The default is false.</p> </li> </ul>
   */
  ConnectionProperties?: {
    [key in
      | "HOST"
      | "PORT"
      | "USERNAME"
      | "PASSWORD"
      | "ENCRYPTED_PASSWORD"
      | "JDBC_DRIVER_JAR_URI"
      | "JDBC_DRIVER_CLASS_NAME"
      | "JDBC_ENGINE"
      | "JDBC_ENGINE_VERSION"
      | "CONFIG_FILES"
      | "INSTANCE_ID"
      | "JDBC_CONNECTION_URL"
      | "JDBC_ENFORCE_SSL"
      | string]: string
  };

  /**
   * <p>A map of physical connection requirements, such as virtual private cloud (VPC) and <code>SecurityGroup</code>, that are needed to make this connection successfully.</p>
   */
  PhysicalConnectionRequirements?: _UnmarshalledPhysicalConnectionRequirements;

  /**
   * <p>The time that this connection definition was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last time that this connection definition was updated.</p>
   */
  LastUpdatedTime?: Date;
}
