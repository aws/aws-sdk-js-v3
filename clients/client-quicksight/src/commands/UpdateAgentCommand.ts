// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAgentRequest, UpdateAgentResponse } from "../models/models_5";
import { UpdateAgent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAgentCommand}.
 */
export interface UpdateAgentCommandInput extends UpdateAgentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAgentCommand}.
 */
export interface UpdateAgentCommandOutput extends UpdateAgentResponse, __MetadataBearer {}

/**
 * Updates an existing agent.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateAgentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateAgentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateAgentRequest
 *   AgentId: "STRING_VALUE", // required
 *   AwsAccountId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   IconId: "STRING_VALUE",
 *   StarterPrompts: [ // StarterPromptList
 *     "STRING_VALUE",
 *   ],
 *   WelcomeMessage: "STRING_VALUE",
 *   CustomPromptInput: { // CustomPromptInput Union: only one key present
 *     ExistingPrompt: { // CustomPromptProfile
 *       ModelProfileId: "STRING_VALUE", // required
 *       SubscriptionId: "STRING_VALUE", // required
 *       QbsAwsAccountId: "STRING_VALUE", // required
 *     },
 *     NewPrompt: { // CustomPromptInputParameters
 *       ResponseLength: "STRING_VALUE",
 *       OutputStyle: "STRING_VALUE",
 *       Identity: "STRING_VALUE",
 *       Tone: "STRING_VALUE",
 *       CustomInstructions: "STRING_VALUE",
 *     },
 *   },
 *   SpacesToAdd: [ // UpdateAgentRequestSpacesToAddList
 *     "STRING_VALUE",
 *   ],
 *   SpacesToRemove: [ // UpdateAgentRequestSpacesToRemoveList
 *     "STRING_VALUE",
 *   ],
 *   ActionConnectorsToAdd: [ // UpdateAgentRequestActionConnectorsToAddList
 *     "STRING_VALUE",
 *   ],
 *   ActionConnectorsToRemove: [ // UpdateAgentRequestActionConnectorsToRemoveList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateAgentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgentResponse
 * //   Arn: "STRING_VALUE", // required
 * //   AgentId: "STRING_VALUE", // required
 * //   AgentStatus: "ACTIVE" || "UPDATING" || "FAILED" || "CREATING", // required
 * //   FailedToAddSpaces: [ // FailedToUpdateAssociationList
 * //     { // FailedToUpdateAssociation
 * //       Arn: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //     },
 * //   ],
 * //   FailedToRemoveSpaces: [
 * //     {
 * //       Arn: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //     },
 * //   ],
 * //   FailedToAddActionConnectors: [
 * //     {
 * //       Arn: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //     },
 * //   ],
 * //   FailedToRemoveActionConnectors: [
 * //     {
 * //       Arn: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAgentCommandInput - {@link UpdateAgentCommandInput}
 * @returns {@link UpdateAgentCommandOutput}
 * @see {@link UpdateAgentCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit is exceeded.
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *
 * One or more preconditions aren't met.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class UpdateAgentCommand extends command<UpdateAgentCommandInput, UpdateAgentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAgent",
  UpdateAgent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAgentRequest;
      output: UpdateAgentResponse;
    };
    sdk: {
      input: UpdateAgentCommandInput;
      output: UpdateAgentCommandOutput;
    };
  };
}
