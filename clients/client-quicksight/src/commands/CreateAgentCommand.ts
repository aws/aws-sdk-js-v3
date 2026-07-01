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
 * <p>Creates an agent in Amazon QuickSight.</p>
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
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
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
