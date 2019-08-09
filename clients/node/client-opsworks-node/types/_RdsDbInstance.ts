/**
 * <p>Describes an Amazon RDS instance.</p>
 */
export interface _RdsDbInstance {
  /**
   * <p>The instance's ARN.</p>
   */
  RdsDbInstanceArn?: string;

  /**
   * <p>The DB instance identifier.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * <p>The master user name.</p>
   */
  DbUser?: string;

  /**
   * <p>AWS OpsWorks Stacks returns <code>*****FILTERED*****</code> instead of the actual value.</p>
   */
  DbPassword?: string;

  /**
   * <p>The instance's AWS region.</p>
   */
  Region?: string;

  /**
   * <p>The instance's address.</p>
   */
  Address?: string;

  /**
   * <p>The instance's database engine.</p>
   */
  Engine?: string;

  /**
   * <p>The ID of the stack with which the instance is registered.</p>
   */
  StackId?: string;

  /**
   * <p>Set to <code>true</code> if AWS OpsWorks Stacks is unable to discover the Amazon RDS instance. AWS OpsWorks Stacks attempts to discover the instance only once. If this value is set to <code>true</code>, you must deregister the instance, and then register it again.</p>
   */
  MissingOnRds?: boolean;
}

export type _UnmarshalledRdsDbInstance = _RdsDbInstance;
