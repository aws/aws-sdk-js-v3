// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListVpcConfigurationsRequest, ListVpcConfigurationsResponse } from "../models/models_1";
import { ListVpcConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListVpcConfigurationsCommand}.
 */
export interface ListVpcConfigurationsCommandInput extends ListVpcConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListVpcConfigurationsCommand}.
 */
export interface ListVpcConfigurationsCommandOutput extends ListVpcConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of the VPC configurations for a knowledge base. You can optionally filter by status. Use the <code>nextToken</code> parameter to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListVpcConfigurationsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListVpcConfigurationsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // ListVpcConfigurationsRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   statusFilter: "CREATING" || "CREATED" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListVpcConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListVpcConfigurationsResponse
 * //   items: [ // VpcConfigurationSummaryList // required
 * //     { // VpcConfigurationSummary
 * //       vpcConfigurationId: "STRING_VALUE", // required
 * //       status: "CREATING" || "CREATED" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED", // required
 * //       statusMessage: "STRING_VALUE",
 * //       vpcId: "STRING_VALUE", // required
 * //       resourceTarget: "STRING_VALUE", // required
 * //       port: Number("int"), // required
 * //       protocol: "HTTP" || "HTTPS", // required
 * //       resolutionMode: "PUBLIC" || "IN_VPC", // required
 * //       hostHeader: "STRING_VALUE",
 * //       tlsServerName: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVpcConfigurationsCommandInput - {@link ListVpcConfigurationsCommandInput}
 * @returns {@link ListVpcConfigurationsCommandOutput}
 * @see {@link ListVpcConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListVpcConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
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
export class ListVpcConfigurationsCommand extends command<ListVpcConfigurationsCommandInput, ListVpcConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListVpcConfigurations",
  ListVpcConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVpcConfigurationsRequest;
      output: ListVpcConfigurationsResponse;
    };
    sdk: {
      input: ListVpcConfigurationsCommandInput;
      output: ListVpcConfigurationsCommandOutput;
    };
  };
}
