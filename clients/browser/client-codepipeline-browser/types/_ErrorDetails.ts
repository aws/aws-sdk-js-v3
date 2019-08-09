/**
 * <p>Represents information about an error in AWS CodePipeline.</p>
 */
export interface _ErrorDetails {
  /**
   * <p>The system ID or error number code of the error.</p>
   */
  code?: string;

  /**
   * <p>The text of the error message.</p>
   */
  message?: string;
}

export type _UnmarshalledErrorDetails = _ErrorDetails;
