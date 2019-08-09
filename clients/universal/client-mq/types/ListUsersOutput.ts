import { _UnmarshalledUserSummary } from "./_UserSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListUsersOutput shape
 */
export interface ListUsersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Required. The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;

  /**
   * Required. The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;

  /**
   * Required. The list of all ActiveMQ usernames for the specified broker.
   */
  Users?: Array<_UnmarshalledUserSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
