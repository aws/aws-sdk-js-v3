// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InitializeServiceInput, InitializeServiceOutput } from "../models/models_0";
import type { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { InitializeService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InitializeServiceCommand}.
 */
export interface InitializeServiceCommandInput extends InitializeServiceInput {}
/**
 * @public
 *
 * The output of {@link InitializeServiceCommand}.
 */
export interface InitializeServiceCommandOutput extends InitializeServiceOutput, __MetadataBearer {}

/**
 * <p>Initializes the ODB service for the first time in an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, InitializeServiceCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, InitializeServiceCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // InitializeServiceInput
 *   ociIdentityDomain: true || false,
 * };
 * const command = new InitializeServiceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param InitializeServiceCommandInput - {@link InitializeServiceCommandInput}
 * @returns {@link InitializeServiceCommandOutput}
 * @see {@link InitializeServiceCommandInput} for command's `input` shape.
 * @see {@link InitializeServiceCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class InitializeServiceCommand extends $Command
  .classBuilder<
    InitializeServiceCommandInput,
    InitializeServiceCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "InitializeService", {})
  .n("OdbClient", "InitializeServiceCommand")
  .sc(InitializeService$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InitializeServiceInput;
      output: {};
    };
    sdk: {
      input: InitializeServiceCommandInput;
      output: InitializeServiceCommandOutput;
    };
  };
}
