// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListABTestsRequest, ListABTestsResponse } from "../models/models_0";
import { ListABTests$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListABTestsCommand}.
 */
export interface ListABTestsCommandInput extends ListABTestsRequest {}
/**
 * @public
 *
 * The output of {@link ListABTestsCommand}.
 */
export interface ListABTestsCommandOutput extends ListABTestsResponse, __MetadataBearer {}

/**
 * <p>Lists all A/B tests in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, ListABTestsCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, ListABTestsCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // ListABTestsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListABTestsCommand(input);
 * const response = await client.send(command);
 * // { // ListABTestsResponse
 * //   abTests: [ // ABTestSummaryList // required
 * //     { // ABTestSummary
 * //       abTestId: "STRING_VALUE", // required
 * //       abTestArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       status: "CREATING" || "ACTIVE" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED" || "FAILED", // required
 * //       executionStatus: "PAUSED" || "RUNNING" || "STOPPED" || "NOT_STARTED", // required
 * //       description: "STRING_VALUE",
 * //       gatewayArn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListABTestsCommandInput - {@link ListABTestsCommandInput}
 * @returns {@link ListABTestsCommandOutput}
 * @see {@link ListABTestsCommandInput} for command's `input` shape.
 * @see {@link ListABTestsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
 *
 * @throws {@link BedrockAgentCoreServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCore service.</p>
 *
 *
 * @public
 */
export class ListABTestsCommand extends $Command
  .classBuilder<
    ListABTestsCommandInput,
    ListABTestsCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "ListABTests", {})
  .n("BedrockAgentCoreClient", "ListABTestsCommand")
  .sc(ListABTests$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListABTestsRequest;
      output: ListABTestsResponse;
    };
    sdk: {
      input: ListABTestsCommandInput;
      output: ListABTestsCommandOutput;
    };
  };
}
