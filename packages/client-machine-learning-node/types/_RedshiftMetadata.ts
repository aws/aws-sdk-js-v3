import {_RedshiftDatabase, _UnmarshalledRedshiftDatabase} from './_RedshiftDatabase';

/**
 * <p>Describes the <code>DataSource</code> details specific to Amazon Redshift.</p>
 */
export interface _RedshiftMetadata {
    /**
     * <p>Describes the database details required to connect to an Amazon Redshift database.</p>
     */
    RedshiftDatabase?: _RedshiftDatabase;

    /**
     * <p>A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.</p>
     */
    DatabaseUserName?: string;

    /**
     * <p> The SQL query that is specified during <a>CreateDataSourceFromRedshift</a>. Returns only if <code>Verbose</code> is true in GetDataSourceInput. </p>
     */
    SelectSqlQuery?: string;
}

export interface _UnmarshalledRedshiftMetadata extends _RedshiftMetadata {
    /**
     * <p>Describes the database details required to connect to an Amazon Redshift database.</p>
     */
    RedshiftDatabase?: _UnmarshalledRedshiftDatabase;
}