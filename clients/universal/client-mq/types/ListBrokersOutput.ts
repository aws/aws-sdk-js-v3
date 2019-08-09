import { _UnmarshalledBrokerSummary } from "./_BrokerSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListBrokersOutput shape
 */
export interface ListBrokersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * A list of information about all brokers.
   */
  BrokerSummaries?: Array<_UnmarshalledBrokerSummary>;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
