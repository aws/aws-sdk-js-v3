// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAgentAliasRequest, CreateAgentAliasResponse } from "../models/models_0";
import { CreateAgentAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAgentAliasCommand}.
 */
export interface CreateAgentAliasCommandInput extends CreateAgentAliasRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentAliasCommand}.
 */
export interface CreateAgentAliasCommandOutput extends CreateAgentAliasResponse, __MetadataBearer {}

/**
 * Creates an alias of an agent that can be used to deploy the agent.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, CreateAgentAliasCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, CreateAgentAliasCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // CreateAgentAliasRequest
 *   agentId: "STRING_VALUE", // required
 *   agentAliasName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   routingConfiguration: [ // AgentAliasRoutingConfiguration
 *     { // AgentAliasRoutingConfigurationListItem
 *       agentVersion: "STRING_VALUE",
 *       provisionedThroughput: "STRING_VALUE",
 *     },
 *   ],
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAgentAliasCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentAliasResponse
 * //   agentAlias: { // AgentAlias
 * //     agentId: "STRING_VALUE", // required
 * //     agentAliasId: "STRING_VALUE", // required
 * //     agentAliasName: "STRING_VALUE", // required
 * //     agentAliasArn: "STRING_VALUE", // required
 * //     clientToken: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     routingConfiguration: [ // AgentAliasRoutingConfiguration // required
 * //       { // AgentAliasRoutingConfigurationListItem
 * //         agentVersion: "STRING_VALUE",
 * //         provisionedThroughput: "STRING_VALUE",
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     agentAliasHistoryEvents: [ // AgentAliasHistoryEvents
 * //       { // AgentAliasHistoryEvent
 * //         routingConfiguration: [
 * //           {
 * //             agentVersion: "STRING_VALUE",
 * //             provisionedThroughput: "STRING_VALUE",
 * //           },
 * //         ],
 * //         endDate: new Date("TIMESTAMP"),
 * //         startDate: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     agentAliasStatus: "CREATING" || "PREPARED" || "FAILED" || "UPDATING" || "DELETING" || "DISSOCIATED", // required
 * //     failureReasons: [ // FailureReasons
 * //       "STRING_VALUE",
 * //     ],
 * //     aliasInvocationState: "ACCEPT_INVOCATIONS" || "REJECT_INVOCATIONS",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAgentAliasCommandInput - {@link CreateAgentAliasCommandInput}
 * @returns {@link CreateAgentAliasCommandOutput}
 * @see {@link CreateAgentAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAgentAliasCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict performing an operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of requests exceeds the service quota. Resubmit your request later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockAgentServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgent service.
 *
 * @public
 */
export class CreateAgentAliasCommand extends command<CreateAgentAliasCommandInput, CreateAgentAliasCommandOutput>(
  _ep0,
  _mw0,
  "CreateAgentAlias",
  CreateAgentAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentAliasRequest;
      output: CreateAgentAliasResponse;
    };
    sdk: {
      input: CreateAgentAliasCommandInput;
      output: CreateAgentAliasCommandOutput;
    };
  };
}
