/**
 * <p/>
 */
export interface _SupportedEndpointType {
  /**
   * <p>The database engine name. Valid values, depending on the EndpointType, include mysql, oracle, postgres, mariadb, aurora, aurora-postgresql, redshift, s3, db2, azuredb, sybase, dynamodb, mongodb, and sqlserver.</p>
   */
  EngineName?: string;

  /**
   * <p>Indicates if Change Data Capture (CDC) is supported.</p>
   */
  SupportsCDC?: boolean;

  /**
   * <p>The type of endpoint. Valid values are <code>source</code> and <code>target</code>.</p>
   */
  EndpointType?: "source" | "target" | string;

  /**
   * <p>The expanded name for the engine name. For example, if the <code>EngineName</code> parameter is "aurora," this value would be "Amazon Aurora MySQL."</p>
   */
  EngineDisplayName?: string;
}

export type _UnmarshalledSupportedEndpointType = _SupportedEndpointType;
