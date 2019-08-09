/**
 * <p>A development endpoint where a developer can remotely debug extract, transform, and load (ETL) scripts.</p>
 */
export interface _DevEndpoint {
  /**
   * <p>The name of the <code>DevEndpoint</code>.</p>
   */
  EndpointName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used in this <code>DevEndpoint</code>.</p>
   */
  RoleArn?: string;

  /**
   * <p>A list of security group identifiers used in this <code>DevEndpoint</code>.</p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>The subnet ID for this <code>DevEndpoint</code>.</p>
   */
  SubnetId?: string;

  /**
   * <p>The YARN endpoint address used by this <code>DevEndpoint</code>.</p>
   */
  YarnEndpointAddress?: string;

  /**
   * <p>A private IP address to access the <code>DevEndpoint</code> within a VPC if the <code>DevEndpoint</code> is created within one. The <code>PrivateAddress</code> field is present only when you create the <code>DevEndpoint</code> within your VPC.</p>
   */
  PrivateAddress?: string;

  /**
   * <p>The Apache Zeppelin port for the remote Apache Spark interpreter.</p>
   */
  ZeppelinRemoteSparkInterpreterPort?: number;

  /**
   * <p>The public IP address used by this <code>DevEndpoint</code>. The <code>PublicAddress</code> field is present only when you create a non-virtual private cloud (VPC) <code>DevEndpoint</code>.</p>
   */
  PublicAddress?: string;

  /**
   * <p>The current status of this <code>DevEndpoint</code>.</p>
   */
  Status?: string;

  /**
   * <p>The type of predefined worker that is allocated to the development endpoint. Accepts a value of Standard, G.1X, or G.2X.</p> <ul> <li> <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p> </li> <li> <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p> </li> <li> <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p> </li> </ul>
   */
  WorkerType?: "Standard" | "G.1X" | "G.2X" | string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p> <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The number of AWS Glue Data Processing Units (DPUs) allocated to this <code>DevEndpoint</code>.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The AWS Availability Zone where this <code>DevEndpoint</code> is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the virtual private cloud (VPC) used by this <code>DevEndpoint</code>.</p>
   */
  VpcId?: string;

  /**
   * <p>The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in your <code>DevEndpoint</code>. Multiple values must be complete paths separated by a comma.</p> <note> <p>You can only use pure Python libraries with a <code>DevEndpoint</code>. Libraries that rely on C extensions, such as the <a href="http://pandas.pydata.org/">pandas</a> Python data analysis library, are not currently supported.</p> </note>
   */
  ExtraPythonLibsS3Path?: string;

  /**
   * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded in your <code>DevEndpoint</code>.</p> <note> <p>You can only use pure Java/Scala libraries with a <code>DevEndpoint</code>.</p> </note>
   */
  ExtraJarsS3Path?: string;

  /**
   * <p>The reason for a current failure in this <code>DevEndpoint</code>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The status of the last update.</p>
   */
  LastUpdateStatus?: string;

  /**
   * <p>The point in time at which this DevEndpoint was created.</p>
   */
  CreatedTimestamp?: Date | string | number;

  /**
   * <p>The point in time at which this <code>DevEndpoint</code> was last modified.</p>
   */
  LastModifiedTimestamp?: Date | string | number;

  /**
   * <p>The public key to be used by this <code>DevEndpoint</code> for authentication. This attribute is provided for backward compatibility because the recommended attribute to use is public keys.</p>
   */
  PublicKey?: string;

  /**
   * <p>A list of public keys to be used by the <code>DevEndpoints</code> for authentication. Using this attribute is preferred over a single public key because the public keys allow you to have a different private key per client.</p> <note> <p>If you previously created an endpoint with a public key, you must remove that key to be able to set a list of public keys. Call the <code>UpdateDevEndpoint</code> API operation with the public key content in the <code>deletePublicKeys</code> attribute, and the list of new keys in the <code>addPublicKeys</code> attribute.</p> </note>
   */
  PublicKeys?: Array<string> | Iterable<string>;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this <code>DevEndpoint</code>.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>A map of arguments used to configure the <code>DevEndpoint</code>.</p> <p>Currently, only <code>"--enable-glue-datacatalog": ""</code> is supported as a valid argument.</p>
   */
  Arguments?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledDevEndpoint extends _DevEndpoint {
  /**
   * <p>A list of security group identifiers used in this <code>DevEndpoint</code>.</p>
   */
  SecurityGroupIds?: Array<string>;

  /**
   * <p>The point in time at which this DevEndpoint was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The point in time at which this <code>DevEndpoint</code> was last modified.</p>
   */
  LastModifiedTimestamp?: Date;

  /**
   * <p>A list of public keys to be used by the <code>DevEndpoints</code> for authentication. Using this attribute is preferred over a single public key because the public keys allow you to have a different private key per client.</p> <note> <p>If you previously created an endpoint with a public key, you must remove that key to be able to set a list of public keys. Call the <code>UpdateDevEndpoint</code> API operation with the public key content in the <code>deletePublicKeys</code> attribute, and the list of new keys in the <code>addPublicKeys</code> attribute.</p> </note>
   */
  PublicKeys?: Array<string>;

  /**
   * <p>A map of arguments used to configure the <code>DevEndpoint</code>.</p> <p>Currently, only <code>"--enable-glue-datacatalog": ""</code> is supported as a valid argument.</p>
   */
  Arguments?: { [key: string]: string };
}
