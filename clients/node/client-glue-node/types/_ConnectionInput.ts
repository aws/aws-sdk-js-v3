import {
  _PhysicalConnectionRequirements,
  _UnmarshalledPhysicalConnectionRequirements
} from "./_PhysicalConnectionRequirements";

/**
 * <p>A structure that is used to specify a connection to create or update.</p>
 */
export interface _ConnectionInput {
  /**
   * <p>The name of the connection.</p>
   */
  Name: string;

  /**
   * <p>The description of the connection.</p>
   */
  Description?: string;

  /**
   * <p>The type of the connection. Currently, only JDBC is supported; SFTP is not supported.</p>
   */
  ConnectionType: "JDBC" | "SFTP" | string;

  /**
   * <p>A list of criteria that can be used in selecting this connection.</p>
   */
  MatchCriteria?: Array<string> | Iterable<string>;

  /**
   * <p>These key-value pairs define parameters for the connection.</p>
   */
  ConnectionProperties:
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
   * <p>A map of physical connection requirements, such as virtual private cloud (VPC) and <code>SecurityGroup</code>, that are needed to successfully make this connection.</p>
   */
  PhysicalConnectionRequirements?: _PhysicalConnectionRequirements;
}

export interface _UnmarshalledConnectionInput extends _ConnectionInput {
  /**
   * <p>A list of criteria that can be used in selecting this connection.</p>
   */
  MatchCriteria?: Array<string>;

  /**
   * <p>These key-value pairs define parameters for the connection.</p>
   */
  ConnectionProperties: {
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
   * <p>A map of physical connection requirements, such as virtual private cloud (VPC) and <code>SecurityGroup</code>, that are needed to successfully make this connection.</p>
   */
  PhysicalConnectionRequirements?: _UnmarshalledPhysicalConnectionRequirements;
}
