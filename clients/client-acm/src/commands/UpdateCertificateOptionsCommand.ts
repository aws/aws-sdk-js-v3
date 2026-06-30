// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateCertificateOptionsRequest } from "../models/models_0";
import { UpdateCertificateOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCertificateOptionsCommand}.
 */
export interface UpdateCertificateOptionsCommandInput extends UpdateCertificateOptionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCertificateOptionsCommand}.
 */
export interface UpdateCertificateOptionsCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates a certificate. You can use this function to specify whether to export your certificate. Certificate transparency logging opt-out is no longer available. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency Logging</a> and <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-exportable-certificates.html">Certificate Manager Exportable Managed Certificates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, UpdateCertificateOptionsCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, UpdateCertificateOptionsCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // UpdateCertificateOptionsRequest
 *   CertificateArn: "STRING_VALUE", // required
 *   Options: { // CertificateOptions
 *     CertificateTransparencyLoggingPreference: "ENABLED" || "DISABLED",
 *     Export: "ENABLED" || "DISABLED",
 *   },
 * };
 * const command = new UpdateCertificateOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCertificateOptionsCommandInput - {@link UpdateCertificateOptionsCommandInput}
 * @returns {@link UpdateCertificateOptionsCommandOutput}
 * @see {@link UpdateCertificateOptionsCommandInput} for command's `input` shape.
 * @see {@link UpdateCertificateOptionsCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>Processing has reached an invalid state.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An ACM quota has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The supplied input failed to satisfy constraints of an Amazon Web Services service.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class UpdateCertificateOptionsCommand extends $Command
  .classBuilder<
    UpdateCertificateOptionsCommandInput,
    UpdateCertificateOptionsCommandOutput,
    ACMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ServiceType: { type: "staticContextParams", value: `ACM` },
  })
  .m(function (this: any, Command: any, cs: any, config: ACMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CertificateManager", "UpdateCertificateOptions", {})
  .n("ACMClient", "UpdateCertificateOptionsCommand")
  .sc(UpdateCertificateOptions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCertificateOptionsRequest;
      output: {};
    };
    sdk: {
      input: UpdateCertificateOptionsCommandInput;
      output: UpdateCertificateOptionsCommandOutput;
    };
  };
}
