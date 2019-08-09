import { _UnmarshalledFailedServiceActionAssociation } from "./_FailedServiceActionAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchDisassociateServiceActionFromProvisioningArtifactOutput shape
 */
export interface BatchDisassociateServiceActionFromProvisioningArtifactOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains a list of errors, along with information to help you identify the self-service action.</p>
   */
  FailedServiceActionAssociations?: Array<
    _UnmarshalledFailedServiceActionAssociation
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
