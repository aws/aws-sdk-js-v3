import { _Filter } from "./_Filter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeFpgaImagesInput shape
 */
export interface DescribeFpgaImagesInput {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The AFI IDs.</p>
   */
  FpgaImageIds?: Array<string> | Iterable<string>;

  /**
   * <p>Filters the AFI by owner. Specify an AWS account ID, <code>self</code> (owner is the sender of the request), or an AWS owner alias (valid values are <code>amazon</code> | <code>aws-marketplace</code>).</p>
   */
  Owners?: Array<string> | Iterable<string>;

  /**
   * <p>The filters.</p> <ul> <li> <p> <code>create-time</code> - The creation time of the AFI.</p> </li> <li> <p> <code>fpga-image-id</code> - The FPGA image identifier (AFI ID).</p> </li> <li> <p> <code>fpga-image-global-id</code> - The global FPGA image identifier (AGFI ID).</p> </li> <li> <p> <code>name</code> - The name of the AFI.</p> </li> <li> <p> <code>owner-id</code> - The AWS account ID of the AFI owner.</p> </li> <li> <p> <code>product-code</code> - The product code.</p> </li> <li> <p> <code>shell-version</code> - The version of the AWS Shell that was used to create the bitstream.</p> </li> <li> <p> <code>state</code> - The state of the AFI (<code>pending</code> | <code>failed</code> | <code>available</code> | <code>unavailable</code>).</p> </li> <li> <p> <code>tag</code>:&lt;key&gt; - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p> </li> <li> <p> <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p> </li> <li> <p> <code>update-time</code> - The time of the most recent update.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

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
