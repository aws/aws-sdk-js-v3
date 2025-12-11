// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartPipeRequest, StartPipeResponse } from "../models/models_0";
import type { PipesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PipesClient";
import { StartPipe } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartPipeCommand}.
 */
export interface StartPipeCommandInput extends StartPipeRequest {}
/**
 * @public
 *
 * The output of {@link StartPipeCommand}.
 */
export interface StartPipeCommandOutput extends StartPipeResponse, __MetadataBearer {}

/**
 * <p>Start an existing pipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PipesClient, StartPipeCommand } from "@aws-sdk/client-pipes"; // ES Modules import
 * // const { PipesClient, StartPipeCommand } = require("@aws-sdk/client-pipes"); // CommonJS import
 * // import type { PipesClientConfig } from "@aws-sdk/client-pipes";
 * const config = {}; // type is PipesClientConfig
 * const client = new PipesClient(config);
 * const input = { // StartPipeRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new StartPipeCommand(input);
 * const response = await client.send(command);
 * // { // StartPipeResponse
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   DesiredState: "STRING_VALUE",
 * //   CurrentState: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartPipeCommandInput - {@link StartPipeCommandInput}
 * @returns {@link StartPipeCommandOutput}
 * @see {@link StartPipeCommandInput} for command's `input` shape.
 * @see {@link StartPipeCommandOutput} for command's `response` shape.
 * @see {@link PipesClientResolvedConfig | config} for PipesClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An action you attempted resulted in an exception.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An action was throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that an error has occurred while performing a validate operation.</p>
 *
 * @throws {@link PipesServiceException}
 * <p>Base exception class for all service exceptions from Pipes service.</p>
 *
 *
 * @public
 */
export class StartPipeCommand extends $Command
  .classBuilder<
    StartPipeCommandInput,
    StartPipeCommandOutput,
    PipesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PipesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pipes", "StartPipe", {})
  .n("PipesClient", "StartPipeCommand")
  .sc(StartPipe)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartPipeRequest;
      output: StartPipeResponse;
    };
    sdk: {
      input: StartPipeCommandInput;
      output: StartPipeCommandOutput;
    };
  };
}
