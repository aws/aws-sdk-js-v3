// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFlowAliasRequest, CreateFlowAliasResponse } from "../models/models_0";
import { CreateFlowAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateFlowAliasCommand}.
 */
export interface CreateFlowAliasCommandInput extends CreateFlowAliasRequest {}
/**
 * @public
 *
 * The output of {@link CreateFlowAliasCommand}.
 */
export interface CreateFlowAliasCommandOutput extends CreateFlowAliasResponse, __MetadataBearer {}

/**
 * Creates an alias of a flow for deployment. For more information, see [Deploy a flow in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-deploy.html) in the Amazon Bedrock User Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, CreateFlowAliasCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, CreateFlowAliasCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // CreateFlowAliasRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   routingConfiguration: [ // FlowAliasRoutingConfiguration // required
 *     { // FlowAliasRoutingConfigurationListItem
 *       flowVersion: "STRING_VALUE",
 *     },
 *   ],
 *   concurrencyConfiguration: { // FlowAliasConcurrencyConfiguration
 *     type: "Automatic" || "Manual", // required
 *     maxConcurrency: Number("int"),
 *   },
 *   flowIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateFlowAliasCommand(input);
 * const response = await client.send(command);
 * // { // CreateFlowAliasResponse
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   routingConfiguration: [ // FlowAliasRoutingConfiguration // required
 * //     { // FlowAliasRoutingConfigurationListItem
 * //       flowVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   concurrencyConfiguration: { // FlowAliasConcurrencyConfiguration
 * //     type: "Automatic" || "Manual", // required
 * //     maxConcurrency: Number("int"),
 * //   },
 * //   flowId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateFlowAliasCommandInput - {@link CreateFlowAliasCommandInput}
 * @returns {@link CreateFlowAliasCommandOutput}
 * @see {@link CreateFlowAliasCommandInput} for command's `input` shape.
 * @see {@link CreateFlowAliasCommandOutput} for command's `response` shape.
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
export class CreateFlowAliasCommand extends command<CreateFlowAliasCommandInput, CreateFlowAliasCommandOutput>(
  _ep0,
  _mw0,
  "CreateFlowAlias",
  CreateFlowAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFlowAliasRequest;
      output: CreateFlowAliasResponse;
    };
    sdk: {
      input: CreateFlowAliasCommandInput;
      output: CreateFlowAliasCommandOutput;
    };
  };
}
