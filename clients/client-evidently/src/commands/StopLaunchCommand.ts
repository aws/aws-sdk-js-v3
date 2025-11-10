// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { StopLaunchRequest, StopLaunchResponse } from "../models/models_0";
import { StopLaunch } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopLaunchCommand}.
 */
export interface StopLaunchCommandInput extends StopLaunchRequest {}
/**
 * @public
 *
 * The output of {@link StopLaunchCommand}.
 */
export interface StopLaunchCommandOutput extends StopLaunchResponse, __MetadataBearer {}

/**
 * <p>Stops a launch that is currently running. After you stop a launch, you will not be able to resume it or restart it.
 *        Also, it
 *        will not be evaluated as a rule for traffic allocation, and the traffic that was allocated to the launch
 *        will instead be available to the feature's experiment, if there is one. Otherwise, all traffic
 *        will be served the default variation after the launch is stopped.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, StopLaunchCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, StopLaunchCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // import type { EvidentlyClientConfig } from "@aws-sdk/client-evidently";
 * const config = {}; // type is EvidentlyClientConfig
 * const client = new EvidentlyClient(config);
 * const input = { // StopLaunchRequest
 *   project: "STRING_VALUE", // required
 *   launch: "STRING_VALUE", // required
 *   desiredState: "STRING_VALUE",
 *   reason: "STRING_VALUE",
 * };
 * const command = new StopLaunchCommand(input);
 * const response = await client.send(command);
 * // { // StopLaunchResponse
 * //   endedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StopLaunchCommandInput - {@link StopLaunchCommandInput}
 * @returns {@link StopLaunchCommandOutput}
 * @see {@link StopLaunchCommandInput} for command's `input` shape.
 * @see {@link StopLaunchCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 *
 * @public
 */
export class StopLaunchCommand extends $Command
  .classBuilder<
    StopLaunchCommandInput,
    StopLaunchCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Evidently", "StopLaunch", {})
  .n("EvidentlyClient", "StopLaunchCommand")
  .sc(StopLaunch)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopLaunchRequest;
      output: StopLaunchResponse;
    };
    sdk: {
      input: StopLaunchCommandInput;
      output: StopLaunchCommandOutput;
    };
  };
}
