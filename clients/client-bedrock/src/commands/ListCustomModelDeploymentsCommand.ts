// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCustomModelDeploymentsRequest, ListCustomModelDeploymentsResponse } from "../models/models_0";
import { de_ListCustomModelDeploymentsCommand, se_ListCustomModelDeploymentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomModelDeploymentsCommand}.
 */
export interface ListCustomModelDeploymentsCommandInput extends ListCustomModelDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomModelDeploymentsCommand}.
 */
export interface ListCustomModelDeploymentsCommandOutput extends ListCustomModelDeploymentsResponse, __MetadataBearer {}

/**
 * <p>Lists custom model deployments in your account. You can filter the results by creation time, name, status, and associated model. Use this operation to manage and monitor your custom model deployments.</p> <p>We recommend using pagination to ensure that the operation returns quickly and successfully.</p> <p>The following actions are related to the <code>ListCustomModelDeployments</code> operation:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateCustomModelDeployment.html">CreateCustomModelDeployment</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetCustomModelDeployment.html">GetCustomModelDeployment</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteCustomModelDeployment.html">DeleteCustomModelDeployment</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListCustomModelDeploymentsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListCustomModelDeploymentsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ListCustomModelDeploymentsRequest
 *   createdBefore: new Date("TIMESTAMP"),
 *   createdAfter: new Date("TIMESTAMP"),
 *   nameContains: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: "CreationTime",
 *   sortOrder: "Ascending" || "Descending",
 *   statusEquals: "Creating" || "Active" || "Failed",
 *   modelArnEquals: "STRING_VALUE",
 * };
 * const command = new ListCustomModelDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomModelDeploymentsResponse
 * //   nextToken: "STRING_VALUE",
 * //   modelDeploymentSummaries: [ // CustomModelDeploymentSummaryList
 * //     { // CustomModelDeploymentSummary
 * //       customModelDeploymentArn: "STRING_VALUE", // required
 * //       customModelDeploymentName: "STRING_VALUE", // required
 * //       modelArn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       status: "Creating" || "Active" || "Failed", // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       failureMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCustomModelDeploymentsCommandInput - {@link ListCustomModelDeploymentsCommandInput}
 * @returns {@link ListCustomModelDeploymentsCommandOutput}
 * @see {@link ListCustomModelDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListCustomModelDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class ListCustomModelDeploymentsCommand extends $Command
  .classBuilder<
    ListCustomModelDeploymentsCommandInput,
    ListCustomModelDeploymentsCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "ListCustomModelDeployments", {})
  .n("BedrockClient", "ListCustomModelDeploymentsCommand")
  .f(void 0, void 0)
  .ser(se_ListCustomModelDeploymentsCommand)
  .de(de_ListCustomModelDeploymentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomModelDeploymentsRequest;
      output: ListCustomModelDeploymentsResponse;
    };
    sdk: {
      input: ListCustomModelDeploymentsCommandInput;
      output: ListCustomModelDeploymentsCommandOutput;
    };
  };
}
