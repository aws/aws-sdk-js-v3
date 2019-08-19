import { _UnmarshalledUserPoolDescriptionType } from "./_UserPoolDescriptionType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response to list user pools.</p>
 */
export interface ListUserPoolsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The user pools from the response to list users.</p>
   */
  UserPools?: Array<_UnmarshalledUserPoolDescriptionType>;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
