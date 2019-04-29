import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A description of the identity.</p>
 */
export interface DescribeIdentityOutput {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId?: string;

  /**
   * <p>A set of optional name-value pairs that map provider names to provider tokens.</p>
   */
  Logins?: Array<string>;

  /**
   * <p>Date on which the identity was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Date on which the identity was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
