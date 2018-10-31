/**
 * <p>The database credentials to connect to a database on an RDS DB instance.</p>
 */
export interface _RDSDatabaseCredentials {
    /**
     * <p>The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.</p>
     */
    Username: string;

    /**
     * <p>The password to be used by Amazon ML to connect to a database on an RDS DB instance. The password should have sufficient permissions to execute the <code>RDSSelectQuery</code> query.</p>
     */
    Password: string;
}

export type _UnmarshalledRDSDatabaseCredentials = _RDSDatabaseCredentials;