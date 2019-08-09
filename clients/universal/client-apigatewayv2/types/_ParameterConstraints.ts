/**
 * <p>Validation constraints imposed on parameters of a request (path, query string,
 *  headers).</p>
 */
export interface _ParameterConstraints {
  /**
   * <p>Whether or not the parameter is required.</p>
   */
  Required?: boolean;
}

export type _UnmarshalledParameterConstraints = _ParameterConstraints;
