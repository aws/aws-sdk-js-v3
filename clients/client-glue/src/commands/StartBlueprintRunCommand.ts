// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartBlueprintRunRequest, StartBlueprintRunResponse } from "../models/models_3";
import { de_StartBlueprintRunCommand, se_StartBlueprintRunCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartBlueprintRunCommand}.
 */
export interface StartBlueprintRunCommandInput extends StartBlueprintRunRequest {}
/**
 * @public
 *
 * The output of {@link StartBlueprintRunCommand}.
 */
export interface StartBlueprintRunCommandOutput extends StartBlueprintRunResponse, __MetadataBearer {}

/**
 * <p>Starts a new run of the specified blueprint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartBlueprintRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartBlueprintRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // StartBlueprintRunRequest
 *   BlueprintName: "STRING_VALUE", // required
 *   Parameters: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE", // required
 * };
 * const command = new StartBlueprintRunCommand(input);
 * const response = await client.send(command);
 * // { // StartBlueprintRunResponse
 * //   RunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartBlueprintRunCommandInput - {@link StartBlueprintRunCommandInput}
 * @returns {@link StartBlueprintRunCommandOutput}
 * @see {@link StartBlueprintRunCommandInput} for command's `input` shape.
 * @see {@link StartBlueprintRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link IllegalBlueprintStateException} (client fault)
 *  <p>The blueprint is in an invalid state to perform a requested operation.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class StartBlueprintRunCommand extends $Command
  .classBuilder<
    StartBlueprintRunCommandInput,
    StartBlueprintRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "StartBlueprintRun", {})
  .n("GlueClient", "StartBlueprintRunCommand")
  .f(void 0, void 0)
  .ser(se_StartBlueprintRunCommand)
  .de(de_StartBlueprintRunCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBlueprintRunRequest;
      output: StartBlueprintRunResponse;
    };
    sdk: {
      input: StartBlueprintRunCommandInput;
      output: StartBlueprintRunCommandOutput;
    };
  };
}
