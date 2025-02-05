// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListModelCopyJobsRequest, ListModelCopyJobsResponse } from "../models/models_0";
import { de_ListModelCopyJobsCommand, se_ListModelCopyJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListModelCopyJobsCommand}.
 */
export interface ListModelCopyJobsCommandInput extends ListModelCopyJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelCopyJobsCommand}.
 */
export interface ListModelCopyJobsCommandOutput extends ListModelCopyJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of model copy jobs that you have submitted. You can filter the jobs to return based on
 *             one or more criteria. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/copy-model.html">Copy models to be used in other regions</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListModelCopyJobsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListModelCopyJobsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BedrockClient(config);
 * const input = { // ListModelCopyJobsRequest
 *   creationTimeAfter: new Date("TIMESTAMP"),
 *   creationTimeBefore: new Date("TIMESTAMP"),
 *   statusEquals: "InProgress" || "Completed" || "Failed",
 *   sourceAccountEquals: "STRING_VALUE",
 *   sourceModelArnEquals: "STRING_VALUE",
 *   targetModelNameContains: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: "CreationTime",
 *   sortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListModelCopyJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelCopyJobsResponse
 * //   nextToken: "STRING_VALUE",
 * //   modelCopyJobSummaries: [ // ModelCopyJobSummaries
 * //     { // ModelCopyJobSummary
 * //       jobArn: "STRING_VALUE", // required
 * //       status: "InProgress" || "Completed" || "Failed", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       targetModelArn: "STRING_VALUE", // required
 * //       targetModelName: "STRING_VALUE",
 * //       sourceAccountId: "STRING_VALUE", // required
 * //       sourceModelArn: "STRING_VALUE", // required
 * //       targetModelKmsKeyArn: "STRING_VALUE",
 * //       targetModelTags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       failureMessage: "STRING_VALUE",
 * //       sourceModelName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListModelCopyJobsCommandInput - {@link ListModelCopyJobsCommandInput}
 * @returns {@link ListModelCopyJobsCommandOutput}
 * @see {@link ListModelCopyJobsCommandInput} for command's `input` shape.
 * @see {@link ListModelCopyJobsCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
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
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 * @public
 */
export class ListModelCopyJobsCommand extends $Command
  .classBuilder<
    ListModelCopyJobsCommandInput,
    ListModelCopyJobsCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "ListModelCopyJobs", {})
  .n("BedrockClient", "ListModelCopyJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListModelCopyJobsCommand)
  .de(de_ListModelCopyJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListModelCopyJobsRequest;
      output: ListModelCopyJobsResponse;
    };
    sdk: {
      input: ListModelCopyJobsCommandInput;
      output: ListModelCopyJobsCommandOutput;
    };
  };
}
