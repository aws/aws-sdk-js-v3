import { _UnmarshalledUserPoolClientDescription } from "./_UserPoolClientDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response from the server that lists user pool clients.</p>
 */
export interface ListUserPoolClientsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The user pool clients in the response that lists user pool clients.</p>
   */
  UserPoolClients?: Array<_UnmarshalledUserPoolClientDescription>;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
