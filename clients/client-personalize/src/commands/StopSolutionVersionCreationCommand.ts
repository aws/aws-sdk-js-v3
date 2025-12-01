// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StopSolutionVersionCreationRequest } from "../models/models_0";
import type { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { StopSolutionVersionCreation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopSolutionVersionCreationCommand}.
 */
export interface StopSolutionVersionCreationCommandInput extends StopSolutionVersionCreationRequest {}
/**
 * @public
 *
 * The output of {@link StopSolutionVersionCreationCommand}.
 */
export interface StopSolutionVersionCreationCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS.
 *       </p>
 *          <p>Depending on the current state of the solution version, the solution version state changes as follows:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE_PENDING > CREATE_STOPPED</p>
 *                <p>or</p>
 *             </li>
 *             <li>
 *                <p>CREATE_IN_PROGRESS > CREATE_STOPPING > CREATE_STOPPED</p>
 *             </li>
 *          </ul>
 *          <p>You are billed for all of the training completed up
 *       until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, StopSolutionVersionCreationCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, StopSolutionVersionCreationCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // StopSolutionVersionCreationRequest
 *   solutionVersionArn: "STRING_VALUE", // required
 * };
 * const command = new StopSolutionVersionCreationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopSolutionVersionCreationCommandInput - {@link StopSolutionVersionCreationCommandInput}
 * @returns {@link StopSolutionVersionCreationCommandOutput}
 * @see {@link StopSolutionVersionCreationCommandInput} for command's `input` shape.
 * @see {@link StopSolutionVersionCreationCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
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
export class StopSolutionVersionCreationCommand extends $Command
  .classBuilder<
    StopSolutionVersionCreationCommandInput,
    StopSolutionVersionCreationCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "StopSolutionVersionCreation", {})
  .n("PersonalizeClient", "StopSolutionVersionCreationCommand")
  .sc(StopSolutionVersionCreation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopSolutionVersionCreationRequest;
      output: {};
    };
    sdk: {
      input: StopSolutionVersionCreationCommandInput;
      output: StopSolutionVersionCreationCommandOutput;
    };
  };
}
