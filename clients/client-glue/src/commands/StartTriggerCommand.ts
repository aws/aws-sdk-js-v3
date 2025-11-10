// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartTriggerRequest, StartTriggerResponse } from "../models/models_3";
import { StartTrigger } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTriggerCommand}.
 */
export interface StartTriggerCommandInput extends StartTriggerRequest {}
/**
 * @public
 *
 * The output of {@link StartTriggerCommand}.
 */
export interface StartTriggerCommandOutput extends StartTriggerResponse, __MetadataBearer {}

/**
 * <p>Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering
 *       Jobs</a> for information about how different types of trigger are
 *       started.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StartTriggerRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new StartTriggerCommand(input);
 * const response = await client.send(command);
 * // { // StartTriggerResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartTriggerCommandInput - {@link StartTriggerCommandInput}
 * @returns {@link StartTriggerCommandOutput}
 * @see {@link StartTriggerCommandInput} for command's `input` shape.
 * @see {@link StartTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentRunsExceededException} (client fault)
 *  <p>Too many jobs are being run concurrently.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class StartTriggerCommand extends $Command
  .classBuilder<
    StartTriggerCommandInput,
    StartTriggerCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "StartTrigger", {})
  .n("GlueClient", "StartTriggerCommand")
  .sc(StartTrigger)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTriggerRequest;
      output: StartTriggerResponse;
    };
    sdk: {
      input: StartTriggerCommandInput;
      output: StartTriggerCommandOutput;
    };
  };
}
