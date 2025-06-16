// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListModelImportJobsRequest, ListModelImportJobsResponse } from "../models/models_0";
import { de_ListModelImportJobsCommand, se_ListModelImportJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListModelImportJobsCommand}.
 */
export interface ListModelImportJobsCommandInput extends ListModelImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelImportJobsCommand}.
 */
export interface ListModelImportJobsCommandOutput extends ListModelImportJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of import jobs you've submitted. You can filter the results to return based on one or more criteria. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html">Import a customized model</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListModelImportJobsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListModelImportJobsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // ListModelImportJobsRequest
 *   creationTimeAfter: new Date("TIMESTAMP"),
 *   creationTimeBefore: new Date("TIMESTAMP"),
 *   statusEquals: "InProgress" || "Completed" || "Failed",
 *   nameContains: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: "CreationTime",
 *   sortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListModelImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelImportJobsResponse
 * //   nextToken: "STRING_VALUE",
 * //   modelImportJobSummaries: [ // ModelImportJobSummaries
 * //     { // ModelImportJobSummary
 * //       jobArn: "STRING_VALUE", // required
 * //       jobName: "STRING_VALUE", // required
 * //       status: "InProgress" || "Completed" || "Failed", // required
 * //       lastModifiedTime: new Date("TIMESTAMP"),
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       endTime: new Date("TIMESTAMP"),
 * //       importedModelArn: "STRING_VALUE",
 * //       importedModelName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListModelImportJobsCommandInput - {@link ListModelImportJobsCommandInput}
 * @returns {@link ListModelImportJobsCommandOutput}
 * @see {@link ListModelImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListModelImportJobsCommandOutput} for command's `response` shape.
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
export class ListModelImportJobsCommand extends $Command
  .classBuilder<
    ListModelImportJobsCommandInput,
    ListModelImportJobsCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "ListModelImportJobs", {})
  .n("BedrockClient", "ListModelImportJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListModelImportJobsCommand)
  .de(de_ListModelImportJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListModelImportJobsRequest;
      output: ListModelImportJobsResponse;
    };
    sdk: {
      input: ListModelImportJobsCommandInput;
      output: ListModelImportJobsCommandOutput;
    };
  };
}
