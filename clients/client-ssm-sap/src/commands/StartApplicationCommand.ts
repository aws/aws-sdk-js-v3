// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartApplicationInput, StartApplicationOutput } from "../models/models_0";
import { StartApplication } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartApplicationCommand}.
 */
export interface StartApplicationCommandInput extends StartApplicationInput {}
/**
 * @public
 *
 * The output of {@link StartApplicationCommand}.
 */
export interface StartApplicationCommandOutput extends StartApplicationOutput, __MetadataBearer {}

/**
 * <p>Request is an operation which starts an application.</p> <p>Parameter <code>ApplicationId</code> is required.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, StartApplicationCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, StartApplicationCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // StartApplicationInput
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new StartApplicationCommand(input);
 * const response = await client.send(command);
 * // { // StartApplicationOutput
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartApplicationCommandInput - {@link StartApplicationCommandInput}
 * @returns {@link StartApplicationCommandOutput}
 * @see {@link StartApplicationCommandInput} for command's `input` shape.
 * @see {@link StartApplicationCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict has occurred.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource is not available.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 *
 * @public
 */
export class StartApplicationCommand extends $Command
  .classBuilder<
    StartApplicationCommandInput,
    StartApplicationCommandOutput,
    SsmSapClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SsmSapClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SsmSap", "StartApplication", {})
  .n("SsmSapClient", "StartApplicationCommand")
  .sc(StartApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartApplicationInput;
      output: StartApplicationOutput;
    };
    sdk: {
      input: StartApplicationCommandInput;
      output: StartApplicationCommandOutput;
    };
  };
}
