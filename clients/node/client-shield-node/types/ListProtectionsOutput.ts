import { _UnmarshalledProtection } from "./_Protection";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListProtectionsOutput shape
 */
export interface ListProtectionsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The array of enabled <a>Protection</a> objects.</p>
   */
  Protections?: Array<_UnmarshalledProtection>;

  /**
   * <p>If you specify a value for <code>MaxResults</code> and you have more Protections than the value of MaxResults, AWS Shield Advanced returns a NextToken value in the response that allows you to list another group of Protections. For the second and subsequent ListProtections requests, specify the value of NextToken from the previous response to get information about another batch of Protections.</p> <p>AWS WAF might return the list of <a>Protection</a> objects in batches smaller than the number specified by MaxResults. If there are more <a>Protection</a> objects to return, AWS WAF will always also return a <code>NextToken</code>.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
