// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAgentRequest, CreateAgentResponse } from "../models/models_2";
import { CreateAgent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAgentCommand}.
 */
export interface CreateAgentCommandInput extends CreateAgentRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentCommand}.
 */
export interface CreateAgentCommandOutput extends CreateAgentResponse, __MetadataBearer {}

/**
 * Creates an agent in Amazon QuickSight.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateAgentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateAgentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateAgentRequest
 *   Spaces: [ // CreateAgentRequestSpacesList
 *     "STRING_VALUE",
 *   ],
 *   ActionConnectors: [ // CreateAgentRequestActionConnectorsList
 *     "STRING_VALUE",
 *   ],
 *   AwsAccountId: "STRING_VALUE", // required
 *   AgentId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   IconId: "STRING_VALUE",
 *   StarterPrompts: [ // StarterPromptList
 *     "STRING_VALUE",
 *   ],
 *   WelcomeMessage: "STRING_VALUE",
 *   AgentLifecycle: "PREVIEW" || "PUBLISHED",
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
 * };
 * const command = new CreateAgentCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentResponse
 * //   Arn: "STRING_VALUE", // required
 * //   AgentId: "STRING_VALUE", // required
 * //   AgentStatus: "ACTIVE" || "UPDATING" || "FAILED" || "CREATING", // required
 * //   AgentName: "STRING_VALUE", // required
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAgentCommandInput - {@link CreateAgentCommandInput}
 * @returns {@link CreateAgentCommandOutput}
 * @see {@link CreateAgentCommandInput} for command's `input` shape.
 * @see {@link CreateAgentCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The resource specified already exists.
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
export class CreateAgentCommand extends command<CreateAgentCommandInput, CreateAgentCommandOutput>(
  _ep0,
  _mw0,
  "CreateAgent",
  CreateAgent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentRequest;
      output: CreateAgentResponse;
    };
    sdk: {
      input: CreateAgentCommandInput;
      output: CreateAgentCommandOutput;
    };
  };
}
