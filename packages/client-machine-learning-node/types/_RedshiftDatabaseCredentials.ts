/**
 * <p> Describes the database credentials for connecting to a database on an Amazon Redshift cluster.</p>
 */
export interface _RedshiftDatabaseCredentials {
    /**
     * <p>A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.</p>
     */
    Username: string;

    /**
     * <p>A password to be used by Amazon ML to connect to a database on an Amazon Redshift cluster. The password should have sufficient permissions to execute a <code>RedshiftSelectSqlQuery</code> query. The password should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.</p>
     */
    Password: string;
}

export type _UnmarshalledRedshiftDatabaseCredentials = _RedshiftDatabaseCredentials;