/**
 * <p>This section describes operations that you can perform on an AWS Elemental MediaStore container.</p>
 */
export interface _Container {
  /**
   * <p>The DNS endpoint of the container. Use the endpoint to identify the specific container when sending requests to the data plane. The service assigns this value when the container is created. Once the value has been assigned, it does not change.</p>
   */
  Endpoint?: string;

  /**
   * <p>Unix timestamp.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>The Amazon Resource Name (ARN) of the container. The ARN has the following format:</p> <p>arn:aws:&lt;region&gt;:&lt;account that owns this container&gt;:container/&lt;name of container&gt; </p> <p>For example: arn:aws:mediastore:us-west-2:111122223333:container/movies </p>
   */
  ARN?: string;

  /**
   * <p>The name of the container.</p>
   */
  Name?: string;

  /**
   * <p>The status of container creation or deletion. The status is one of the following: <code>CREATING</code>, <code>ACTIVE</code>, or <code>DELETING</code>. While the service is creating the container, the status is <code>CREATING</code>. When the endpoint is available, the status changes to <code>ACTIVE</code>.</p>
   */
  Status?: "ACTIVE" | "CREATING" | "DELETING" | string;

  /**
   * <p>The state of access logging on the container. This value is <code>false</code> by default, indicating that AWS Elemental MediaStore does not send access logs to Amazon CloudWatch Logs. When you enable access logging on the container, MediaStore changes this value to <code>true</code>, indicating that the service delivers access logs for objects stored in that container to CloudWatch Logs.</p>
   */
  AccessLoggingEnabled?: boolean;
}

export interface _UnmarshalledContainer extends _Container {
  /**
   * <p>Unix timestamp.</p>
   */
  CreationTime?: Date;
}
