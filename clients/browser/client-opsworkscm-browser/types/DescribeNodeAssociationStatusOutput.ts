import { _UnmarshalledEngineAttribute } from "./_EngineAttribute";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeNodeAssociationStatusOutput shape
 */
export interface DescribeNodeAssociationStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the association or disassociation request. </p> <p class="title"> <b>Possible values:</b> </p> <ul> <li> <p> <code>SUCCESS</code>: The association or disassociation succeeded. </p> </li> <li> <p> <code>FAILED</code>: The association or disassociation failed. </p> </li> <li> <p> <code>IN_PROGRESS</code>: The association or disassociation is still in progress. </p> </li> </ul>
   */
  NodeAssociationStatus?: "SUCCESS" | "FAILED" | "IN_PROGRESS" | string;

  /**
   * <p>Attributes specific to the node association. In Puppet, the attibute PUPPET_NODE_CERT contains the signed certificate (the result of the CSR). </p>
   */
  EngineAttributes?: Array<_UnmarshalledEngineAttribute>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
