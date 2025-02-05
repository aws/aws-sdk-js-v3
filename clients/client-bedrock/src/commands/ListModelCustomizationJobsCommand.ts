// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListModelCustomizationJobsRequest, ListModelCustomizationJobsResponse } from "../models/models_0";
import { de_ListModelCustomizationJobsCommand, se_ListModelCustomizationJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListModelCustomizationJobsCommand}.
 */
export interface ListModelCustomizationJobsCommandInput extends ListModelCustomizationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelCustomizationJobsCommand}.
 */
export interface ListModelCustomizationJobsCommandOutput extends ListModelCustomizationJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of model customization jobs that you have submitted. You can filter the jobs to return based on
 *       one or more criteria.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html">Custom models</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListModelCustomizationJobsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListModelCustomizationJobsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BedrockClient(config);
 * const input = { // ListModelCustomizationJobsRequest
 *   creationTimeAfter: new Date("TIMESTAMP"),
 *   creationTimeBefore: new Date("TIMESTAMP"),
 *   statusEquals: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 *   nameContains: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: "CreationTime",
 *   sortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListModelCustomizationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelCustomizationJobsResponse
 * //   nextToken: "STRING_VALUE",
 * //   modelCustomizationJobSummaries: [ // ModelCustomizationJobSummaries
 * //     { // ModelCustomizationJobSummary
 * //       jobArn: "STRING_VALUE", // required
 * //       baseModelArn: "STRING_VALUE", // required
 * //       jobName: "STRING_VALUE", // required
 * //       status: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
 * //       lastModifiedTime: new Date("TIMESTAMP"),
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       endTime: new Date("TIMESTAMP"),
 * //       customModelArn: "STRING_VALUE",
 * //       customModelName: "STRING_VALUE",
 * //       customizationType: "FINE_TUNING" || "CONTINUED_PRE_TRAINING" || "DISTILLATION",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListModelCustomizationJobsCommandInput - {@link ListModelCustomizationJobsCommandInput}
 * @returns {@link ListModelCustomizationJobsCommandOutput}
 * @see {@link ListModelCustomizationJobsCommandInput} for command's `input` shape.
 * @see {@link ListModelCustomizationJobsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListModelCustomizationJobsCommand extends $Command
  .classBuilder<
    ListModelCustomizationJobsCommandInput,
    ListModelCustomizationJobsCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "ListModelCustomizationJobs", {})
  .n("BedrockClient", "ListModelCustomizationJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListModelCustomizationJobsCommand)
  .de(de_ListModelCustomizationJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListModelCustomizationJobsRequest;
      output: ListModelCustomizationJobsResponse;
    };
    sdk: {
      input: ListModelCustomizationJobsCommandInput;
      output: ListModelCustomizationJobsCommandOutput;
    };
  };
}
