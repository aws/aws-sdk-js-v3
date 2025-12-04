// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutAccountConfigurationRequest } from "../models/models_0";
import { PutAccountConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAccountConfigurationCommand}.
 */
export interface PutAccountConfigurationCommandInput extends PutAccountConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountConfigurationCommand}.
 */
export interface PutAccountConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds or modifies account-level configurations in ACM. </p> <p>The supported configuration option is <code>DaysBeforeExpiry</code>. This option specifies the number of days prior to certificate expiration when ACM starts generating <code>EventBridge</code> events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive events starting 45 days before certificate expiration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, PutAccountConfigurationCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, PutAccountConfigurationCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // PutAccountConfigurationRequest
 *   ExpiryEvents: { // ExpiryEventsConfiguration
 *     DaysBeforeExpiry: Number("int"),
 *   },
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new PutAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccountConfigurationCommandInput - {@link PutAccountConfigurationCommandInput}
 * @returns {@link PutAccountConfigurationCommandOutput}
 * @see {@link PutAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAccountConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to update a resource or configuration that is already being created or updated. Wait for the previous operation to finish and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
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
export class PutAccountConfigurationCommand extends $Command
  .classBuilder<
    PutAccountConfigurationCommandInput,
    PutAccountConfigurationCommandOutput,
    ACMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ACMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CertificateManager", "PutAccountConfiguration", {})
  .n("ACMClient", "PutAccountConfigurationCommand")
  .sc(PutAccountConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutAccountConfigurationCommandInput;
      output: PutAccountConfigurationCommandOutput;
    };
  };
}
