/**
 *
 *             <p>Returns information about an error state of the cluster.</p>
 *
 */
export interface _ErrorInfo {
  /**
   *
   *             <p>A number describing the error programmatically.</p>
   *
   */
  ErrorCode?: string;

  /**
   *
   *             <p>An optional field to provide more details about the error.</p>
   *
   */
  ErrorString?: string;
}

export type _UnmarshalledErrorInfo = _ErrorInfo;
