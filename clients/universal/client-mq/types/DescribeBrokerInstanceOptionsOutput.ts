import { _UnmarshalledBrokerInstanceOption } from "./_BrokerInstanceOption";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeBrokerInstanceOptionsOutput shape
 */
export interface DescribeBrokerInstanceOptionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * List of available broker instance options.
   */
  BrokerInstanceOptions?: Array<_UnmarshalledBrokerInstanceOption>;

  /**
   * Required. The maximum number of instance options that can be returned per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
