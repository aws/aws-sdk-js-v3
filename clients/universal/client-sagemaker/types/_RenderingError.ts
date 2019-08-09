/**
 * <p>A description of an error that occurred while rendering the template.</p>
 */
export interface _RenderingError {
  /**
   * <p>A unique identifier for a specific class of errors.</p>
   */
  Code: string;

  /**
   * <p>A human-readable message describing the error.</p>
   */
  Message: string;
}

export type _UnmarshalledRenderingError = _RenderingError;
