/**
 * <p>The object for the Lambda function location.</p>
 */
export interface _FunctionCodeLocation {
  /**
   * <p>The repository from which you can download the function.</p>
   */
  RepositoryType?: string;

  /**
   * <p>The presigned URL you can use to download the function's .zip file that you previously uploaded. The URL is valid for up to 10 minutes.</p>
   */
  Location?: string;
}

export type _UnmarshalledFunctionCodeLocation = _FunctionCodeLocation;
