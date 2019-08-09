/**
 * <p>Properties that describe an instance of a virtual computing resource that hosts one or more game servers. A fleet may contain zero or more instances.</p>
 */
export interface _Instance {
  /**
   * <p>Unique identifier for a fleet that the instance is in.</p>
   */
  FleetId?: string;

  /**
   * <p>Unique identifier for an instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>IP address assigned to the instance.</p>
   */
  IpAddress?: string;

  /**
   * <p>Operating system that is running on this instance. </p>
   */
  OperatingSystem?: "WINDOWS_2012" | "AMAZON_LINUX" | string;

  /**
   * <p>EC2 instance type that defines the computing resources of this instance. </p>
   */
  Type?:
    | "t2.micro"
    | "t2.small"
    | "t2.medium"
    | "t2.large"
    | "c3.large"
    | "c3.xlarge"
    | "c3.2xlarge"
    | "c3.4xlarge"
    | "c3.8xlarge"
    | "c4.large"
    | "c4.xlarge"
    | "c4.2xlarge"
    | "c4.4xlarge"
    | "c4.8xlarge"
    | "r3.large"
    | "r3.xlarge"
    | "r3.2xlarge"
    | "r3.4xlarge"
    | "r3.8xlarge"
    | "r4.large"
    | "r4.xlarge"
    | "r4.2xlarge"
    | "r4.4xlarge"
    | "r4.8xlarge"
    | "r4.16xlarge"
    | "m3.medium"
    | "m3.large"
    | "m3.xlarge"
    | "m3.2xlarge"
    | "m4.large"
    | "m4.xlarge"
    | "m4.2xlarge"
    | "m4.4xlarge"
    | "m4.10xlarge"
    | string;

  /**
   * <p>Current status of the instance. Possible statuses include the following:</p> <ul> <li> <p> <b>PENDING</b> -- The instance is in the process of being created and launching server processes as defined in the fleet's run-time configuration. </p> </li> <li> <p> <b>ACTIVE</b> -- The instance has been successfully created and at least one server process has successfully launched and reported back to Amazon GameLift that it is ready to host a game session. The instance is now considered ready to host game sessions. </p> </li> <li> <p> <b>TERMINATING</b> -- The instance is in the process of shutting down. This may happen to reduce capacity during a scaling down event or to recycle resources in the event of a problem.</p> </li> </ul>
   */
  Status?: "PENDING" | "ACTIVE" | "TERMINATING" | string;

  /**
   * <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date | string | number;
}

export interface _UnmarshalledInstance extends _Instance {
  /**
   * <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date;
}
