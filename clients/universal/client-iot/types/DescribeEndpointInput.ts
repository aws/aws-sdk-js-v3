import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The input for the DescribeEndpoint operation.</p>
 */
export interface DescribeEndpointInput {
  /**
   * <p>The endpoint type. Valid endpoint types include:</p> <ul> <li> <p> <code>iot:Data</code> - Returns a VeriSign signed data endpoint.</p> </li> </ul> <ul> <li> <p> <code>iot:Data-ATS</code> - Returns an ATS signed data endpoint.</p> </li> </ul> <ul> <li> <p> <code>iot:CredentialProvider</code> - Returns an AWS IoT credentials provider API endpoint.</p> </li> </ul> <ul> <li> <p> <code>iot:Jobs</code> - Returns an AWS IoT device management Jobs API endpoint.</p> </li> </ul>
   */
  endpointType?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
