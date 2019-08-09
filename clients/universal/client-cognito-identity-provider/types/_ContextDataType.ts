import { _HttpHeader, _UnmarshalledHttpHeader } from "./_HttpHeader";

/**
 * <p>Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.</p>
 */
export interface _ContextDataType {
  /**
   * <p>Source IP address of your user.</p>
   */
  IpAddress: string;

  /**
   * <p>Your server endpoint where this API is invoked.</p>
   */
  ServerName: string;

  /**
   * <p>Your server path where this API is invoked. </p>
   */
  ServerPath: string;

  /**
   * <p>HttpHeaders received on your server in same order.</p>
   */
  HttpHeaders: Array<_HttpHeader> | Iterable<_HttpHeader>;

  /**
   * <p>Encoded data containing device fingerprinting details, collected using the Amazon Cognito context data collection library.</p>
   */
  EncodedData?: string;
}

export interface _UnmarshalledContextDataType extends _ContextDataType {
  /**
   * <p>HttpHeaders received on your server in same order.</p>
   */
  HttpHeaders: Array<_UnmarshalledHttpHeader>;
}
