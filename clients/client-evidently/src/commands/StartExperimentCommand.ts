// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { StartExperimentRequest, StartExperimentResponse } from "../models/models_0";
import { de_StartExperimentCommand, se_StartExperimentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartExperimentCommand}.
 */
export interface StartExperimentCommandInput extends StartExperimentRequest {}
/**
 * @public
 *
 * The output of {@link StartExperimentCommand}.
 */
export interface StartExperimentCommandOutput extends StartExperimentResponse, __MetadataBearer {}

/**
 * <p>Starts an existing experiment. To create an experiment,
 *         use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateExperiment.html">CreateExperiment</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, StartExperimentCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, StartExperimentCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // StartExperimentRequest
 *   project: "STRING_VALUE", // required
 *   experiment: "STRING_VALUE", // required
 *   analysisCompleteTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new StartExperimentCommand(input);
 * const response = await client.send(command);
 * // { // StartExperimentResponse
 * //   startedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartExperimentCommandInput - {@link StartExperimentCommandInput}
 * @returns {@link StartExperimentCommandOutput}
 * @see {@link StartExperimentCommandInput} for command's `input` shape.
 * @see {@link StartExperimentCommandOutput} for command's `response` shape.
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
export class StartExperimentCommand extends $Command
  .classBuilder<
    StartExperimentCommandInput,
    StartExperimentCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Evidently", "StartExperiment", {})
  .n("EvidentlyClient", "StartExperimentCommand")
  .f(void 0, void 0)
  .ser(se_StartExperimentCommand)
  .de(de_StartExperimentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartExperimentRequest;
      output: StartExperimentResponse;
    };
    sdk: {
      input: StartExperimentCommandInput;
      output: StartExperimentCommandOutput;
    };
  };
}
