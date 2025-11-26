// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { StopTriggerRequest, StopTriggerResponse } from "../models/models_2";
import { StopTrigger } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopTriggerCommand}.
 */
export interface StopTriggerCommandInput extends StopTriggerRequest {}
/**
 * @public
 *
 * The output of {@link StopTriggerCommand}.
 */
export interface StopTriggerCommandOutput extends StopTriggerResponse, __MetadataBearer {}

/**
 * <p>Stops a specified trigger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StopTriggerRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new StopTriggerCommand(input);
 * const response = await client.send(command);
 * // { // StopTriggerResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopTriggerCommandInput - {@link StopTriggerCommandInput}
 * @returns {@link StopTriggerCommandOutput}
 * @see {@link StopTriggerCommandInput} for command's `input` shape.
 * @see {@link StopTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class StopTriggerCommand extends $Command
  .classBuilder<
    StopTriggerCommandInput,
    StopTriggerCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "StopTrigger", {})
  .n("GlueClient", "StopTriggerCommand")
  .sc(StopTrigger)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopTriggerRequest;
      output: StopTriggerResponse;
    };
    sdk: {
      input: StopTriggerCommandInput;
      output: StopTriggerCommandOutput;
    };
  };
}
