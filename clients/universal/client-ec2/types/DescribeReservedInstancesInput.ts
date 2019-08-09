import { _Filter } from "./_Filter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for DescribeReservedInstances.</p>
 */
export interface DescribeReservedInstancesInput {
  /**
   * <p>One or more filters.</p> <ul> <li> <p> <code>availability-zone</code> - The Availability Zone where the Reserved Instance can be used.</p> </li> <li> <p> <code>duration</code> - The duration of the Reserved Instance (one year or three years), in seconds (<code>31536000</code> | <code>94608000</code>).</p> </li> <li> <p> <code>end</code> - The time when the Reserved Instance expires (for example, 2015-08-07T11:54:42.000Z).</p> </li> <li> <p> <code>fixed-price</code> - The purchase price of the Reserved Instance (for example, 9800.0).</p> </li> <li> <p> <code>instance-type</code> - The instance type that is covered by the reservation.</p> </li> <li> <p> <code>scope</code> - The scope of the Reserved Instance (<code>Region</code> or <code>Availability Zone</code>).</p> </li> <li> <p> <code>product-description</code> - The Reserved Instance product platform description. Instances that include <code>(Amazon VPC)</code> in the product platform description will only be displayed to EC2-Classic account holders and are for use with Amazon VPC (<code>Linux/UNIX</code> | <code>Linux/UNIX (Amazon VPC)</code> | <code>SUSE Linux</code> | <code>SUSE Linux (Amazon VPC)</code> | <code>Red Hat Enterprise Linux</code> | <code>Red Hat Enterprise Linux (Amazon VPC)</code> | <code>Windows</code> | <code>Windows (Amazon VPC)</code> | <code>Windows with SQL Server Standard</code> | <code>Windows with SQL Server Standard (Amazon VPC)</code> | <code>Windows with SQL Server Web</code> | <code>Windows with SQL Server Web (Amazon VPC)</code> | <code>Windows with SQL Server Enterprise</code> | <code>Windows with SQL Server Enterprise (Amazon VPC)</code>).</p> </li> <li> <p> <code>reserved-instances-id</code> - The ID of the Reserved Instance.</p> </li> <li> <p> <code>start</code> - The time at which the Reserved Instance purchase request was placed (for example, 2014-08-07T11:54:42.000Z).</p> </li> <li> <p> <code>state</code> - The state of the Reserved Instance (<code>payment-pending</code> | <code>active</code> | <code>payment-failed</code> | <code>retired</code>).</p> </li> <li> <p> <code>tag</code>:&lt;key&gt; - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p> </li> <li> <p> <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p> </li> <li> <p> <code>usage-price</code> - The usage price of the Reserved Instance, per hour (for example, 0.84).</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>Describes whether the Reserved Instance is Standard or Convertible.</p>
   */
  OfferingClass?: "standard" | "convertible" | string;

  /**
   * <p>One or more Reserved Instance IDs.</p> <p>Default: Describes all your Reserved Instances, or only those otherwise specified.</p>
   */
  ReservedInstancesIds?: Array<string> | Iterable<string>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Reserved Instance offering type. If you are using tools that predate the 2011-11-01 API version, you only have access to the <code>Medium Utilization</code> Reserved Instance offering type.</p>
   */
  OfferingType?:
    | "Heavy Utilization"
    | "Medium Utilization"
    | "Light Utilization"
    | "No Upfront"
    | "Partial Upfront"
    | "All Upfront"
    | string;

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
