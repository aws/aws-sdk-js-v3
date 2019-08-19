/**
 * <p>Details about a function's deployment package.</p>
 */
export interface _FunctionCodeLocation {
  /**
   * <p>The service that's hosting the file.</p>
   */
  RepositoryType?: string;

  /**
   * <p>A presigned URL that you can use to download the deployment package.</p>
   */
  Location?: string;
}

export type _UnmarshalledFunctionCodeLocation = _FunctionCodeLocation;
