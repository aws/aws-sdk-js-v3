import { _Filter } from "./_Filter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeImagesInput shape
 */
export interface DescribeImagesInput {
  /**
   * <p>Scopes the images by users with explicit launch permissions. Specify an AWS account ID, <code>self</code> (the sender of the request), or <code>all</code> (public AMIs).</p>
   */
  ExecutableUsers?: Array<string> | Iterable<string>;

  /**
   * <p>The filters.</p> <ul> <li> <p> <code>architecture</code> - The image architecture (<code>i386</code> | <code>x86_64</code> | <code>arm64</code>).</p> </li> <li> <p> <code>block-device-mapping.delete-on-termination</code> - A Boolean value that indicates whether the Amazon EBS volume is deleted on instance termination.</p> </li> <li> <p> <code>block-device-mapping.device-name</code> - The device name specified in the block device mapping (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p> </li> <li> <p> <code>block-device-mapping.snapshot-id</code> - The ID of the snapshot used for the EBS volume.</p> </li> <li> <p> <code>block-device-mapping.volume-size</code> - The volume size of the EBS volume, in GiB.</p> </li> <li> <p> <code>block-device-mapping.volume-type</code> - The volume type of the EBS volume (<code>gp2</code> | <code>io1</code> | <code>st1 </code>| <code>sc1</code> | <code>standard</code>).</p> </li> <li> <p> <code>block-device-mapping.encrypted</code> - A Boolean that indicates whether the EBS volume is encrypted.</p> </li> <li> <p> <code>description</code> - The description of the image (provided during image creation).</p> </li> <li> <p> <code>ena-support</code> - A Boolean that indicates whether enhanced networking with ENA is enabled.</p> </li> <li> <p> <code>hypervisor</code> - The hypervisor type (<code>ovm</code> | <code>xen</code>).</p> </li> <li> <p> <code>image-id</code> - The ID of the image.</p> </li> <li> <p> <code>image-type</code> - The image type (<code>machine</code> | <code>kernel</code> | <code>ramdisk</code>).</p> </li> <li> <p> <code>is-public</code> - A Boolean that indicates whether the image is public.</p> </li> <li> <p> <code>kernel-id</code> - The kernel ID.</p> </li> <li> <p> <code>manifest-location</code> - The location of the image manifest.</p> </li> <li> <p> <code>name</code> - The name of the AMI (provided during image creation).</p> </li> <li> <p> <code>owner-alias</code> - String value from an Amazon-maintained list (<code>amazon</code> | <code>aws-marketplace</code> | <code>microsoft</code>) of snapshot owners. Not to be confused with the user-configured AWS account alias, which is set from the IAM console.</p> </li> <li> <p> <code>owner-id</code> - The AWS account ID of the image owner.</p> </li> <li> <p> <code>platform</code> - The platform. To only list Windows-based AMIs, use <code>windows</code>.</p> </li> <li> <p> <code>product-code</code> - The product code.</p> </li> <li> <p> <code>product-code.type</code> - The type of the product code (<code>devpay</code> | <code>marketplace</code>).</p> </li> <li> <p> <code>ramdisk-id</code> - The RAM disk ID.</p> </li> <li> <p> <code>root-device-name</code> - The device name of the root device volume (for example, <code>/dev/sda1</code>).</p> </li> <li> <p> <code>root-device-type</code> - The type of the root device volume (<code>ebs</code> | <code>instance-store</code>).</p> </li> <li> <p> <code>state</code> - The state of the image (<code>available</code> | <code>pending</code> | <code>failed</code>).</p> </li> <li> <p> <code>state-reason-code</code> - The reason code for the state change.</p> </li> <li> <p> <code>state-reason-message</code> - The message for the state change.</p> </li> <li> <p> <code>sriov-net-support</code> - A value of <code>simple</code> indicates that enhanced networking with the Intel 82599 VF interface is enabled.</p> </li> <li> <p> <code>tag</code>:&lt;key&gt; - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p> </li> <li> <p> <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p> </li> <li> <p> <code>virtualization-type</code> - The virtualization type (<code>paravirtual</code> | <code>hvm</code>).</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The image IDs.</p> <p>Default: Describes all images available to you.</p>
   */
  ImageIds?: Array<string> | Iterable<string>;

  /**
   * <p>Filters the images by the owner. Specify an AWS account ID, <code>self</code> (owner is the sender of the request), or an AWS owner alias (valid values are <code>amazon</code> | <code>aws-marketplace</code> | <code>microsoft</code>). Omitting this option returns all images for which you have launch permissions, regardless of ownership.</p>
   */
  Owners?: Array<string> | Iterable<string>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

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
