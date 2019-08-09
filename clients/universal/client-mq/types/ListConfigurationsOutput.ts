import { _UnmarshalledConfiguration } from "./_Configuration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListConfigurationsOutput shape
 */
export interface ListConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The list of all revisions for the specified configuration.
   */
  Configurations?: Array<_UnmarshalledConfiguration>;

  /**
   * The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
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
