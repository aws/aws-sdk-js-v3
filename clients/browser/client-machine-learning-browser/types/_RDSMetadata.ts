import { _RDSDatabase, _UnmarshalledRDSDatabase } from "./_RDSDatabase";

/**
 * <p>The datasource details that are specific to Amazon RDS.</p>
 */
export interface _RDSMetadata {
  /**
   * <p>The database details required to connect to an Amazon RDS.</p>
   */
  Database?: _RDSDatabase;

  /**
   * <p>The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.</p>
   */
  DatabaseUserName?: string;

  /**
   * <p>The SQL query that is supplied during <a>CreateDataSourceFromRDS</a>. Returns only if <code>Verbose</code> is true in <code>GetDataSourceInput</code>. </p>
   */
  SelectSqlQuery?: string;

  /**
   * <p>The role (DataPipelineDefaultResourceRole) assumed by an Amazon EC2 instance to carry out the copy task from Amazon RDS to Amazon S3. For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html">Role templates</a> for data pipelines.</p>
   */
  ResourceRole?: string;

  /**
   * <p>The role (DataPipelineDefaultRole) assumed by the Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html">Role templates</a> for data pipelines.</p>
   */
  ServiceRole?: string;

  /**
   * <p>The ID of the Data Pipeline instance that is used to carry to copy data from Amazon RDS to Amazon S3. You can use the ID to find details about the instance in the Data Pipeline console.</p>
   */
  DataPipelineId?: string;
}

export interface _UnmarshalledRDSMetadata extends _RDSMetadata {
  /**
   * <p>The database details required to connect to an Amazon RDS.</p>
   */
  Database?: _UnmarshalledRDSDatabase;
}
