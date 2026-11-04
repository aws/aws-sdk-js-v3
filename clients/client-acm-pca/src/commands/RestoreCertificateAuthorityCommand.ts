// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreCertificateAuthorityRequest } from "../models/models_0";
import { RestoreCertificateAuthority$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreCertificateAuthorityCommand}.
 */
export interface RestoreCertificateAuthorityCommandInput extends RestoreCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link RestoreCertificateAuthorityCommand}.
 */
export interface RestoreCertificateAuthorityCommandOutput extends __MetadataBearer {}

/**
 * Restores a certificate authority (CA) that is in the `DELETED` state. You can restore a CA during the period that you defined in the **PermanentDeletionTimeInDays** parameter of the [DeleteCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html) action. Currently, you can specify 7 to 30 days. If you did not specify a **PermanentDeletionTimeInDays** value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the `DELETED` state by calling the [DescribeCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html) or [ListCertificateAuthorities](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html) actions. The status of a restored CA is set to its pre-deletion status when the **RestoreCertificateAuthority** action returns. To change its status to `ACTIVE`, call the [UpdateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html) action. If the private CA was in the `PENDING_CERTIFICATE` state at deletion, you must use the [ImportCertificateAuthorityCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html) action to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, RestoreCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, RestoreCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * // import type { ACMPCAClientConfig } from "@aws-sdk/client-acm-pca";
 * const config = {}; // type is ACMPCAClientConfig
 * const client = new ACMPCAClient(config);
 * const input = { // RestoreCertificateAuthorityRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 * };
 * const command = new RestoreCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RestoreCertificateAuthorityCommandInput - {@link RestoreCertificateAuthorityCommandInput}
 * @returns {@link RestoreCertificateAuthorityCommandOutput}
 * @see {@link RestoreCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link RestoreCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The requested Amazon Resource Name (ARN) does not refer to an existing resource.
 *
 * @throws {@link InvalidStateException} (client fault)
 *
 * The state of the private CA does not allow this action to occur.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource such as a private CA, S3 bucket, certificate, audit report, or policy cannot be found.
 *
 * @throws {@link ACMPCAServiceException}
 *
 * Base exception class for all service exceptions from ACMPCA service.
 *
 * @public
 */
export class RestoreCertificateAuthorityCommand extends command<RestoreCertificateAuthorityCommandInput, RestoreCertificateAuthorityCommandOutput>(
  _ep0,
  _mw0,
  "RestoreCertificateAuthority",
  RestoreCertificateAuthority$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreCertificateAuthorityRequest;
      output: {};
    };
    sdk: {
      input: RestoreCertificateAuthorityCommandInput;
      output: RestoreCertificateAuthorityCommandOutput;
    };
  };
}
