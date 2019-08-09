/**
 * <p>Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the <code>create cloud formation stack</code> operation.</p>
 */
export interface _InstanceEntry {
  /**
   * <p>The name of the export snapshot record, which contains the exported Lightsail instance snapshot that will be used as the source of the new Amazon EC2 instance.</p> <p>Use the <code>get export snapshot records</code> operation to get a list of export snapshot records that you can use to create a CloudFormation stack.</p>
   */
  sourceName: string;

  /**
   * <p>The instance type (e.g., <code>t2.micro</code>) to use for the new Amazon EC2 instance.</p>
   */
  instanceType: string;

  /**
   * <p>The port configuration to use for the new Amazon EC2 instance.</p> <p>The following configuration options are available:</p> <ul> <li> <p>DEFAULT — Use the default firewall settings from the image.</p> </li> <li> <p>INSTANCE — Use the firewall settings from the source Lightsail instance.</p> </li> <li> <p>NONE — Default to Amazon EC2.</p> </li> <li> <p>CLOSED — All ports closed.</p> </li> </ul>
   */
  portInfoSource: "DEFAULT" | "INSTANCE" | "NONE" | "CLOSED" | string;

  /**
   * <p>A launch script you can create that configures a server with additional user data. For example, you might want to run <code>apt-get -y update</code>.</p> <note> <p>Depending on the machine image you choose, the command to get software on your instance varies. Amazon Linux and CentOS use <code>yum</code>, Debian and Ubuntu use <code>apt-get</code>, and FreeBSD uses <code>pkg</code>.</p> </note>
   */
  userData?: string;

  /**
   * <p>The Availability Zone for the new Amazon EC2 instance.</p>
   */
  availabilityZone: string;
}

export type _UnmarshalledInstanceEntry = _InstanceEntry;
