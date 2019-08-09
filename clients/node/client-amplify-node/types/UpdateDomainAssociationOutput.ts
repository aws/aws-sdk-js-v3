import { _UnmarshalledDomainAssociation } from "./_DomainAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure for the update Domain Association request. </p>
 */
export interface UpdateDomainAssociationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Domain Association structure. </p>
   */
  domainAssociation: _UnmarshalledDomainAssociation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
