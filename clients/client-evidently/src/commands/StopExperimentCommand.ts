// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import type { StopExperimentRequest, StopExperimentResponse } from "../models/models_0";
import { StopExperiment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopExperimentCommand}.
 */
export interface StopExperimentCommandInput extends StopExperimentRequest {}
/**
 * @public
 *
 * The output of {@link StopExperimentCommand}.
 */
export interface StopExperimentCommandOutput extends StopExperimentResponse, __MetadataBearer {}

/**
 * <p>Stops an experiment that is currently running. If you stop an experiment, you can't
 *       resume it or restart it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, StopExperimentCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, StopExperimentCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // import type { EvidentlyClientConfig } from "@aws-sdk/client-evidently";
 * const config = {}; // type is EvidentlyClientConfig
 * const client = new EvidentlyClient(config);
 * const input = { // StopExperimentRequest
 *   project: "STRING_VALUE", // required
 *   experiment: "STRING_VALUE", // required
 *   desiredState: "STRING_VALUE",
 *   reason: "STRING_VALUE",
 * };
 * const command = new StopExperimentCommand(input);
 * const response = await client.send(command);
 * // { // StopExperimentResponse
 * //   endedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StopExperimentCommandInput - {@link StopExperimentCommandInput}
 * @returns {@link StopExperimentCommandOutput}
 * @see {@link StopExperimentCommandInput} for command's `input` shape.
 * @see {@link StopExperimentCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
export class StopExperimentCommand extends $Command
  .classBuilder<
    StopExperimentCommandInput,
    StopExperimentCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Evidently", "StopExperiment", {})
  .n("EvidentlyClient", "StopExperimentCommand")
  .sc(StopExperiment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopExperimentRequest;
      output: StopExperimentResponse;
    };
    sdk: {
      input: StopExperimentCommandInput;
      output: StopExperimentCommandOutput;
    };
  };
}
