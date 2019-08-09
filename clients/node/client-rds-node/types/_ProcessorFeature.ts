/**
 * <p>Contains the processor features of a DB instance class.</p> <p>To specify the number of CPU cores, use the <code>coreCount</code> feature name for the <code>Name</code> parameter. To specify the number of threads per core, use the <code>threadsPerCore</code> feature name for the <code>Name</code> parameter.</p> <p>You can set the processor features of the DB instance class for a DB instance when you call one of the following actions:</p> <ul> <li> <p> <code>CreateDBInstance</code> </p> </li> <li> <p> <code>ModifyDBInstance</code> </p> </li> <li> <p> <code>RestoreDBInstanceFromDBSnapshot</code> </p> </li> <li> <p> <code>RestoreDBInstanceFromS3</code> </p> </li> <li> <p> <code>RestoreDBInstanceToPointInTime</code> </p> </li> </ul> <p>You can view the valid processor values for a particular instance class by calling the <code>DescribeOrderableDBInstanceOptions</code> action and specifying the instance class for the <code>DBInstanceClass</code> parameter.</p> <p>In addition, you can use the following actions for DB instance class processor information:</p> <ul> <li> <p> <code>DescribeDBInstances</code> </p> </li> <li> <p> <code>DescribeDBSnapshots</code> </p> </li> <li> <p> <code>DescribeValidDBInstanceModifications</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor">Configuring the Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide. </i> </p>
 */
export interface _ProcessorFeature {
  /**
   * <p>The name of the processor feature. Valid names are <code>coreCount</code> and <code>threadsPerCore</code>.</p>
   */
  Name?: string;

  /**
   * <p>The value of a processor feature name.</p>
   */
  Value?: string;
}

export type _UnmarshalledProcessorFeature = _ProcessorFeature;
