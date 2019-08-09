import { _UnmarshalledConfigRule } from "./_ConfigRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeConfigRulesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The details about your AWS Config rules.</p>
   */
  ConfigRules?: Array<_UnmarshalledConfigRule>;

  /**
   * <p>The string that you use in a subsequent request to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
