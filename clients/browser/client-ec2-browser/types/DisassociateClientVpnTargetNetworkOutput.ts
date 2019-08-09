import { _UnmarshalledAssociationStatus } from "./_AssociationStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DisassociateClientVpnTargetNetworkOutput shape
 */
export interface DisassociateClientVpnTargetNetworkOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the target network association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The current state of the target network association.</p>
   */
  Status?: _UnmarshalledAssociationStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
