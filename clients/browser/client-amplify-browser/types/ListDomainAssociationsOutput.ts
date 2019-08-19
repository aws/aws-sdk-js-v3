import { _UnmarshalledDomainAssociation } from "./_DomainAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure for the list Domain Association request. </p>
 */
export interface ListDomainAssociationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> List of Domain Associations. </p>
   */
  domainAssociations: Array<_UnmarshalledDomainAssociation>;

  /**
   * <p> Pagination token. If non-null pagination token is returned in a result, then pass its value in another request to fetch more entries. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
