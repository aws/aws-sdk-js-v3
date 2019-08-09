import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response from the server to the request to get the header information for the .csv file for the user import job.</p>
 */
export interface GetCSVHeaderOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The user pool ID for the user pool that the users are to be imported into.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The header information for the .csv file for the user import job.</p>
   */
  CSVHeader?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
