// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockDataAutomationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockDataAutomationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataAutomationProjectsRequest, ListDataAutomationProjectsResponse } from "../models/models_0";
import { ListDataAutomationProjects } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataAutomationProjectsCommand}.
 */
export interface ListDataAutomationProjectsCommandInput extends ListDataAutomationProjectsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataAutomationProjectsCommand}.
 */
export interface ListDataAutomationProjectsCommandOutput extends ListDataAutomationProjectsResponse, __MetadataBearer {}

/**
 * Lists all existing Amazon Bedrock Data Automation Projects
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, ListDataAutomationProjectsCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, ListDataAutomationProjectsCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // ListDataAutomationProjectsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   projectStageFilter: "DEVELOPMENT" || "LIVE" || "ALL",
 *   blueprintFilter: { // BlueprintFilter
 *     blueprintArn: "STRING_VALUE", // required
 *     blueprintVersion: "STRING_VALUE",
 *     blueprintStage: "DEVELOPMENT" || "LIVE",
 *   },
 *   resourceOwner: "SERVICE" || "ACCOUNT",
 * };
 * const command = new ListDataAutomationProjectsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataAutomationProjectsResponse
 * //   projects: [ // DataAutomationProjectSummaries // required
 * //     { // DataAutomationProjectSummary
 * //       projectArn: "STRING_VALUE", // required
 * //       projectStage: "DEVELOPMENT" || "LIVE",
 * //       projectName: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataAutomationProjectsCommandInput - {@link ListDataAutomationProjectsCommandInput}
 * @returns {@link ListDataAutomationProjectsCommandOutput}
 * @see {@link ListDataAutomationProjectsCommandInput} for command's `input` shape.
 * @see {@link ListDataAutomationProjectsCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationClientResolvedConfig | config} for BedrockDataAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockDataAutomationServiceException}
 * <p>Base exception class for all service exceptions from BedrockDataAutomation service.</p>
 *
 *
 * @public
 */
export class ListDataAutomationProjectsCommand extends $Command
  .classBuilder<
    ListDataAutomationProjectsCommandInput,
    ListDataAutomationProjectsCommandOutput,
    BedrockDataAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockKeystoneBuildTimeService", "ListDataAutomationProjects", {})
  .n("BedrockDataAutomationClient", "ListDataAutomationProjectsCommand")
  .sc(ListDataAutomationProjects)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataAutomationProjectsRequest;
      output: ListDataAutomationProjectsResponse;
    };
    sdk: {
      input: ListDataAutomationProjectsCommandInput;
      output: ListDataAutomationProjectsCommandOutput;
    };
  };
}
