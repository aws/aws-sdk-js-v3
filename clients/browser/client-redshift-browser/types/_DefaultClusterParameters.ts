import { _Parameter, _UnmarshalledParameter } from "./_Parameter";

/**
 * <p>Describes the default cluster parameters for a parameter group family.</p>
 */
export interface _DefaultClusterParameters {
  /**
   * <p>The name of the cluster parameter group family to which the engine default parameters apply.</p>
   */
  ParameterGroupFamily?: string;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the <code>Marker</code> parameter and retrying the command. If the <code>Marker</code> field is empty, all response records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>The list of cluster default parameters.</p>
   */
  Parameters?: Array<_Parameter> | Iterable<_Parameter>;
}

export interface _UnmarshalledDefaultClusterParameters
  extends _DefaultClusterParameters {
  /**
   * <p>The list of cluster default parameters.</p>
   */
  Parameters?: Array<_UnmarshalledParameter>;
}
