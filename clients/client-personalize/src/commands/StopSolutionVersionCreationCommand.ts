// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopSolutionVersionCreationRequest } from "../models/models_0";
import { StopSolutionVersionCreation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS.
 *
 * Depending on the current state of the solution version, the solution version state changes as follows:
 *
 * - CREATE_PENDING > CREATE_STOPPED
 *
 *   or
 * - CREATE_IN_PROGRESS > CREATE_STOPPING > CREATE_STOPPED
 *
 * You are billed for all of the training completed up until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.
 *
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
 *
 * Provide a valid value for the field or parameter.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Could not find the specified resource.
 *
 * @throws {@link PersonalizeServiceException}
 *
 * Base exception class for all service exceptions from Personalize service.
 *
 * @public
 */
export class StopSolutionVersionCreationCommand extends command<StopSolutionVersionCreationCommandInput, StopSolutionVersionCreationCommandOutput>(
  _ep0,
  _mw0,
  "StopSolutionVersionCreation",
  StopSolutionVersionCreation$
) {
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
