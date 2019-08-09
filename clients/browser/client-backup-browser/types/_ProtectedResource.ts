/**
 * <p>A structure that contains information about a backed-up resource.</p>
 */
export interface _ProtectedResource {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The type of AWS resource; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   */
  ResourceType?: string;

  /**
   * <p>The date and time a resource was last backed up, in Unix format and Coordinated Universal Time (UTC). The value of <code>LastBackupTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastBackupTime?: Date | string | number;
}

export interface _UnmarshalledProtectedResource extends _ProtectedResource {
  /**
   * <p>The date and time a resource was last backed up, in Unix format and Coordinated Universal Time (UTC). The value of <code>LastBackupTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastBackupTime?: Date;
}
