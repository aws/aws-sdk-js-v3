import { _UnmarshalledBrokerEngineType } from "./_BrokerEngineType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeBrokerEngineTypesOutput shape
 */
export interface DescribeBrokerEngineTypesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * List of available engine types and versions.
   */
  BrokerEngineTypes?: Array<_UnmarshalledBrokerEngineType>;

  /**
   * Required. The maximum number of engine types that can be returned per page (20 by default). This value must be an integer from 5 to 100.
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
