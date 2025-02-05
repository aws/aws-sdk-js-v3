// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopPipeRequest, StopPipeResponse } from "../models/models_0";
import { PipesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PipesClient";
import { de_StopPipeCommand, se_StopPipeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopPipeCommand}.
 */
export interface StopPipeCommandInput extends StopPipeRequest {}
/**
 * @public
 *
 * The output of {@link StopPipeCommand}.
 */
export interface StopPipeCommandOutput extends StopPipeResponse, __MetadataBearer {}

/**
 * <p>Stop an existing pipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PipesClient, StopPipeCommand } from "@aws-sdk/client-pipes"; // ES Modules import
 * // const { PipesClient, StopPipeCommand } = require("@aws-sdk/client-pipes"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PipesClient(config);
 * const input = { // StopPipeRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new StopPipeCommand(input);
 * const response = await client.send(command);
 * // { // StopPipeResponse
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
 * @param StopPipeCommandInput - {@link StopPipeCommandInput}
 * @returns {@link StopPipeCommandOutput}
 * @see {@link StopPipeCommandInput} for command's `input` shape.
 * @see {@link StopPipeCommandOutput} for command's `response` shape.
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
 * @public
 */
export class StopPipeCommand extends $Command
  .classBuilder<
    StopPipeCommandInput,
    StopPipeCommandOutput,
    PipesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PipesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pipes", "StopPipe", {})
  .n("PipesClient", "StopPipeCommand")
  .f(void 0, void 0)
  .ser(se_StopPipeCommand)
  .de(de_StopPipeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopPipeRequest;
      output: StopPipeResponse;
    };
    sdk: {
      input: StopPipeCommandInput;
      output: StopPipeCommandOutput;
    };
  };
}
