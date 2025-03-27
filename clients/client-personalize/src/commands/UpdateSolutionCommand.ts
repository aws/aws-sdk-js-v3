// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSolutionRequest, UpdateSolutionResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_UpdateSolutionCommand, se_UpdateSolutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSolutionCommand}.
 */
export interface UpdateSolutionCommandInput extends UpdateSolutionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSolutionCommand}.
 */
export interface UpdateSolutionCommandOutput extends UpdateSolutionResponse, __MetadataBearer {}

/**
 * <p>Updates an Amazon Personalize solution to use a different automatic training configuration. When you update a solution,
 *       you can change whether the solution uses
 *       automatic training, and you can change the training frequency. For more information about updating a solution, see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/updating-solution.html">Updating a solution</a>.</p>
 *          <p>A solution update can be in one of the
 *       following states:</p>
 *          <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *          <p>To get the status of a solution update, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> API operation and find the status
 *       in the <code>latestSolutionUpdate</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, UpdateSolutionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, UpdateSolutionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // UpdateSolutionRequest
 *   solutionArn: "STRING_VALUE", // required
 *   performAutoTraining: true || false,
 *   solutionUpdateConfig: { // SolutionUpdateConfig
 *     autoTrainingConfig: { // AutoTrainingConfig
 *       schedulingExpression: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateSolutionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSolutionResponse
 * //   solutionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSolutionCommandInput - {@link UpdateSolutionCommandInput}
 * @returns {@link UpdateSolutionCommandOutput}
 * @see {@link UpdateSolutionCommandInput} for command's `input` shape.
 * @see {@link UpdateSolutionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of requests per second has been exceeded.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class UpdateSolutionCommand extends $Command
  .classBuilder<
    UpdateSolutionCommandInput,
    UpdateSolutionCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "UpdateSolution", {})
  .n("PersonalizeClient", "UpdateSolutionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSolutionCommand)
  .de(de_UpdateSolutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSolutionRequest;
      output: UpdateSolutionResponse;
    };
    sdk: {
      input: UpdateSolutionCommandInput;
      output: UpdateSolutionCommandOutput;
    };
  };
}
