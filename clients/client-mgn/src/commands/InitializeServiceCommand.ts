// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { InitializeServiceRequest, InitializeServiceResponse } from "../models/models_0";
import { InitializeService } from "../schemas/schemas_22_Configuration";

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
export interface InitializeServiceCommandInput extends InitializeServiceRequest {}
/**
 * @public
 *
 * The output of {@link InitializeServiceCommand}.
 */
export interface InitializeServiceCommandOutput extends InitializeServiceResponse, __MetadataBearer {}

/**
 * <p>Initialize Application Migration Service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, InitializeServiceCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, InitializeServiceCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = {};
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
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class InitializeServiceCommand extends $Command
  .classBuilder<
    InitializeServiceCommandInput,
    InitializeServiceCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "InitializeService", {})
  .n("MgnClient", "InitializeServiceCommand")
  .sc(InitializeService)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: InitializeServiceCommandInput;
      output: InitializeServiceCommandOutput;
    };
  };
}
