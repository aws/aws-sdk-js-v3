// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFlowAliasRequest, CreateFlowAliasResponse } from "../models/models_0";
import { de_CreateFlowAliasCommand, se_CreateFlowAliasCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates an alias of a flow for deployment. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-deploy.html">Deploy a flow in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
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
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 *
 * @public
 */
export class CreateFlowAliasCommand extends $Command
  .classBuilder<
    CreateFlowAliasCommandInput,
    CreateFlowAliasCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "CreateFlowAlias", {})
  .n("BedrockAgentClient", "CreateFlowAliasCommand")
  .f(void 0, void 0)
  .ser(se_CreateFlowAliasCommand)
  .de(de_CreateFlowAliasCommand)
  .build() {
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
