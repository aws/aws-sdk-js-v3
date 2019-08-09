import { _Parameter, _UnmarshalledParameter } from "./_Parameter";

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeEngineDefaultClusterParameters</code> operation. </p>
 */
export interface _EngineDefaults {
  /**
   * <p>The name of the DB cluster parameter group family to return the engine parameter information for.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The parameters of a particular DB cluster parameter group family.</p>
   */
  Parameters?: Array<_Parameter> | Iterable<_Parameter>;
}

export interface _UnmarshalledEngineDefaults extends _EngineDefaults {
  /**
   * <p>The parameters of a particular DB cluster parameter group family.</p>
   */
  Parameters?: Array<_UnmarshalledParameter>;
}
