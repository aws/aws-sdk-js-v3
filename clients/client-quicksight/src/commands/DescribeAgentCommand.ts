// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAgentRequest, DescribeAgentResponse } from "../models/models_4";
import { DescribeAgent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAgentCommand}.
 */
export interface DescribeAgentCommandInput extends DescribeAgentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAgentCommand}.
 */
export interface DescribeAgentCommandOutput extends DescribeAgentResponse, __MetadataBearer {}

/**
 * Describes an agent.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAgentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAgentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeAgentRequest
 *   AgentId: "STRING_VALUE", // required
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAgentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAgentResponse
 * //   Agent: { // Agent
 * //     Spaces: [ // AgentSpacesList
 * //       "STRING_VALUE",
 * //     ],
 * //     ActionConnectors: [ // AgentActionConnectorsList
 * //       "STRING_VALUE",
 * //     ],
 * //     Description: "STRING_VALUE",
 * //     IconId: "STRING_VALUE",
 * //     Name: "STRING_VALUE", // required
 * //     StarterPrompts: [ // StarterPromptList
 * //       "STRING_VALUE",
 * //     ],
 * //     WelcomeMessage: "STRING_VALUE",
 * //     Arn: "STRING_VALUE", // required
 * //     AgentId: "STRING_VALUE", // required
 * //     AgentLifecycle: "PREVIEW" || "PUBLISHED", // required
 * //     AgentStatus: "ACTIVE" || "UPDATING" || "FAILED" || "CREATING", // required
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     Creator: "STRING_VALUE", // required
 * //     CustomPromptInterface: { // CustomPromptInterface
 * //       ModelProfileId: "STRING_VALUE", // required
 * //       SubscriptionId: "STRING_VALUE", // required
 * //       QbsAwsAccountId: "STRING_VALUE", // required
 * //       ResponseLength: "STRING_VALUE",
 * //       OutputStyle: "STRING_VALUE",
 * //       Identity: "STRING_VALUE",
 * //       Tone: "STRING_VALUE",
 * //       CustomInstructions: "STRING_VALUE",
 * //       promptSummary: "STRING_VALUE",
 * //     },
 * //     ErrorMessage: "STRING_VALUE",
 * //     UpdatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAgentCommandInput - {@link DescribeAgentCommandInput}
 * @returns {@link DescribeAgentCommandOutput}
 * @see {@link DescribeAgentCommandInput} for command's `input` shape.
 * @see {@link DescribeAgentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
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
export class DescribeAgentCommand extends command<DescribeAgentCommandInput, DescribeAgentCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAgent",
  DescribeAgent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAgentRequest;
      output: DescribeAgentResponse;
    };
    sdk: {
      input: DescribeAgentCommandInput;
      output: DescribeAgentCommandOutput;
    };
  };
}
