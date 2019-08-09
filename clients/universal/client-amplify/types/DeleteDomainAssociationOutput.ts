import { _UnmarshalledDomainAssociation } from "./_DomainAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteDomainAssociationOutput shape
 */
export interface DeleteDomainAssociationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Structure for Domain Association, which associates a custom domain with an Amplify App. </p>
   */
  domainAssociation: _UnmarshalledDomainAssociation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
