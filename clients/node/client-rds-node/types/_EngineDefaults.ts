import { _Parameter, _UnmarshalledParameter } from "./_Parameter";

/**
 * <p> Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action. </p>
 */
export interface _EngineDefaults {
  /**
   * <p>Specifies the name of the DB parameter group family that the engine default parameters apply to.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p> An optional pagination token provided by a previous EngineDefaults request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> . </p>
   */
  Marker?: string;

  /**
   * <p>Contains a list of engine default parameters.</p>
   */
  Parameters?: Array<_Parameter> | Iterable<_Parameter>;
}

export interface _UnmarshalledEngineDefaults extends _EngineDefaults {
  /**
   * <p>Contains a list of engine default parameters.</p>
   */
  Parameters?: Array<_UnmarshalledParameter>;
}
