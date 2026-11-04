// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RenewCertificateRequest } from "../models/models_0";
import { RenewCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RenewCertificateCommand}.
 */
export interface RenewCertificateCommandInput extends RenewCertificateRequest {}
/**
 * @public
 *
 * The output of {@link RenewCertificateCommand}.
 */
export interface RenewCertificateCommandOutput extends __MetadataBearer {}

/**
 * Renews an [eligible ACM certificate](https://docs.aws.amazon.com/acm/latest/userguide/managed-renewal.html). In order to renew your Amazon Web Services Private CA certificates with ACM, you must first [grant the ACM service principal permission to do so](https://docs.aws.amazon.com/privateca/latest/userguide/assign-permissions.html#PcaPermissions). For more information, see [Testing Managed Renewal](https://docs.aws.amazon.com/acm/latest/userguide/managed-renewal.html) in the ACM User Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, RenewCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, RenewCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // RenewCertificateRequest
 *   CertificateArn: "STRING_VALUE", // required
 * };
 * const command = new RenewCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RenewCertificateCommandInput - {@link RenewCertificateCommandInput}
 * @returns {@link RenewCertificateCommandOutput}
 * @see {@link RenewCertificateCommandInput} for command's `input` shape.
 * @see {@link RenewCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The requested Amazon Resource Name (ARN) does not refer to an existing resource.
 *
 * @throws {@link RequestInProgressException} (client fault)
 *
 * The certificate request is in process and the certificate in your account has not yet been issued.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified certificate cannot be found in the caller's account or the caller's account cannot be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The supplied input failed to satisfy constraints of an Amazon Web Services service.
 *
 * @throws {@link ACMServiceException}
 *
 * Base exception class for all service exceptions from ACM service.
 *
 * @public
 */
export class RenewCertificateCommand extends command<RenewCertificateCommandInput, RenewCertificateCommandOutput>(
  _ep0,
  _mw0,
  "RenewCertificate",
  RenewCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RenewCertificateRequest;
      output: {};
    };
    sdk: {
      input: RenewCertificateCommandInput;
      output: RenewCertificateCommandOutput;
    };
  };
}
