import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAssociationForServiceQuotaTemplateOutput shape
 */
export interface GetAssociationForServiceQuotaTemplateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies whether the template is <code>ASSOCIATED</code> or <code>DISASSOCIATED</code>. If the template is <code>ASSOCIATED</code>, then it requests service quota increases for all new accounts created in your organization. </p>
   */
  ServiceQuotaTemplateAssociationStatus?:
    | "ASSOCIATED"
    | "DISASSOCIATED"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
