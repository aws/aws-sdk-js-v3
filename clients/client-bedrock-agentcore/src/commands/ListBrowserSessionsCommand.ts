// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBrowserSessionsRequest, ListBrowserSessionsResponse } from "../models/models_0";
import { de_ListBrowserSessionsCommand, se_ListBrowserSessionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBrowserSessionsCommand}.
 */
export interface ListBrowserSessionsCommandInput extends ListBrowserSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListBrowserSessionsCommand}.
 */
export interface ListBrowserSessionsCommandOutput extends ListBrowserSessionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of browser sessions in Amazon Bedrock that match the specified criteria. This operation returns summary information about each session, including identifiers, status, and timestamps.</p> <p>You can filter the results by browser identifier and session status. The operation supports pagination to handle large result sets efficiently.</p> <p>We recommend using pagination to ensure that the operation returns quickly and successfully when retrieving large numbers of sessions.</p> <p>The following operations are related to <code>ListBrowserSessions</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/API_StartBrowserSession.html">StartBrowserSession</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/API_GetBrowserSession.html">GetBrowserSession</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, ListBrowserSessionsCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, ListBrowserSessionsCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // ListBrowserSessionsRequest
 *   browserIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   status: "READY" || "TERMINATED",
 * };
 * const command = new ListBrowserSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListBrowserSessionsResponse
 * //   items: [ // BrowserSessionSummaries // required
 * //     { // BrowserSessionSummary
 * //       browserIdentifier: "STRING_VALUE", // required
 * //       sessionId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       status: "READY" || "TERMINATED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBrowserSessionsCommandInput - {@link ListBrowserSessionsCommandInput}
 * @returns {@link ListBrowserSessionsCommandOutput}
 * @see {@link ListBrowserSessionsCommandInput} for command's `input` shape.
 * @see {@link ListBrowserSessionsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
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
export class ListBrowserSessionsCommand extends $Command
  .classBuilder<
    ListBrowserSessionsCommandInput,
    ListBrowserSessionsCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentCore", "ListBrowserSessions", {})
  .n("BedrockAgentCoreClient", "ListBrowserSessionsCommand")
  .f(void 0, void 0)
  .ser(se_ListBrowserSessionsCommand)
  .de(de_ListBrowserSessionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBrowserSessionsRequest;
      output: ListBrowserSessionsResponse;
    };
    sdk: {
      input: ListBrowserSessionsCommandInput;
      output: ListBrowserSessionsCommandOutput;
    };
  };
}
