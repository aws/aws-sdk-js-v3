// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListModelCardExportJobsRequest, ListModelCardExportJobsResponse } from "../models/models_4";
import { de_ListModelCardExportJobsCommand, se_ListModelCardExportJobsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListModelCardExportJobsCommand}.
 */
export interface ListModelCardExportJobsCommandInput extends ListModelCardExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelCardExportJobsCommand}.
 */
export interface ListModelCardExportJobsCommandOutput extends ListModelCardExportJobsResponse, __MetadataBearer {}

/**
 * <p>List the export jobs for the Amazon SageMaker Model Card.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelCardExportJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelCardExportJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListModelCardExportJobsRequest
 *   ModelCardName: "STRING_VALUE", // required
 *   ModelCardVersion: Number("int"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   ModelCardExportJobNameContains: "STRING_VALUE",
 *   StatusEquals: "InProgress" || "Completed" || "Failed",
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListModelCardExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelCardExportJobsResponse
 * //   ModelCardExportJobSummaries: [ // ModelCardExportJobSummaryList // required
 * //     { // ModelCardExportJobSummary
 * //       ModelCardExportJobName: "STRING_VALUE", // required
 * //       ModelCardExportJobArn: "STRING_VALUE", // required
 * //       Status: "InProgress" || "Completed" || "Failed", // required
 * //       ModelCardName: "STRING_VALUE", // required
 * //       ModelCardVersion: Number("int"), // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       LastModifiedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListModelCardExportJobsCommandInput - {@link ListModelCardExportJobsCommandInput}
 * @returns {@link ListModelCardExportJobsCommandOutput}
 * @see {@link ListModelCardExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListModelCardExportJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListModelCardExportJobsCommand extends $Command
  .classBuilder<
    ListModelCardExportJobsCommandInput,
    ListModelCardExportJobsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "ListModelCardExportJobs", {})
  .n("SageMakerClient", "ListModelCardExportJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListModelCardExportJobsCommand)
  .de(de_ListModelCardExportJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListModelCardExportJobsRequest;
      output: ListModelCardExportJobsResponse;
    };
    sdk: {
      input: ListModelCardExportJobsCommandInput;
      output: ListModelCardExportJobsCommandOutput;
    };
  };
}
