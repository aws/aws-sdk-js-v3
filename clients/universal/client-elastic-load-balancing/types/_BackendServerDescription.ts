/**
 * <p>Information about the configuration of an EC2 instance.</p>
 */
export interface _BackendServerDescription {
  /**
   * <p>The port on which the EC2 instance is listening.</p>
   */
  InstancePort?: number;

  /**
   * <p>The names of the policies enabled for the EC2 instance.</p>
   */
  PolicyNames?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledBackendServerDescription
  extends _BackendServerDescription {
  /**
   * <p>The names of the policies enabled for the EC2 instance.</p>
   */
  PolicyNames?: Array<string>;
}
