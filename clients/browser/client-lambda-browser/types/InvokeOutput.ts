import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * InvokeOutput shape
 */
export interface InvokeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The HTTP status code is in the 200 range for a successful request. For the <code>RequestResponse</code> invocation type, this status code is 200. For the <code>Event</code> invocation type, this status code is 202. For the <code>DryRun</code> invocation type, the status code is 204.</p>
   */
  StatusCode?: number;

  /**
   * <p>If present, indicates that an error occurred during function execution. Details about the error are included in the response payload.</p> <ul> <li> <p> <code>Handled</code> - The runtime caught an error thrown by the function and formatted it into a JSON document.</p> </li> <li> <p> <code>Unhandled</code> - The runtime didn't handle the error. For example, the function ran out of memory or timed out.</p> </li> </ul>
   */
  FunctionError?: string;

  /**
   * <p>The last 4 KB of the execution log, which is base64 encoded.</p>
   */
  LogResult?: string;

  /**
   * <p>The response from the function, or an error object.</p>
   */
  Payload?: Uint8Array;

  /**
   * <p>The version of the function that executed. When you invoke a function with an alias, this indicates which version the alias resolved to.</p>
   */
  ExecutedVersion?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
