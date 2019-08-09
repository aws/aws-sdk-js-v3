import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetProtectionStatusOutput shape
 */
export interface GetProtectionStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the AWS Firewall administrator account for this policy.</p>
   */
  AdminAccountId?: string;

  /**
   * <p>The service type that is protected by the policy. Currently, this is always <code>SHIELD_ADVANCED</code>.</p>
   */
  ServiceType?: "WAF" | "SHIELD_ADVANCED" | string;

  /**
   * <p>Details about the attack, including the following:</p> <ul> <li> <p>Attack type</p> </li> <li> <p>Account ID</p> </li> <li> <p>ARN of the resource attacked</p> </li> <li> <p>Start time of the attack</p> </li> <li> <p>End time of the attack (ongoing attacks will not have an end time)</p> </li> </ul> <p>The details are in JSON format. An example is shown in the Examples section below.</p>
   */
  Data?: string;

  /**
   * <p>If you have more objects than the number that you specified for <code>MaxResults</code> in the request, the response includes a <code>NextToken</code> value. To list more objects, submit another <code>GetProtectionStatus</code> request, and specify the <code>NextToken</code> value from the response in the <code>NextToken</code> value in the next request.</p> <p>AWS SDKs provide auto-pagination that identify <code>NextToken</code> in a response and make subsequent request calls automatically on your behalf. However, this feature is not supported by <code>GetProtectionStatus</code>. You must submit subsequent requests with <code>NextToken</code> using your own processes. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
