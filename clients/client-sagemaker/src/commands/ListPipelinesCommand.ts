// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPipelinesRequest, ListPipelinesResponse } from "../models/models_3";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListPipelines$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPipelinesCommand}.
 */
export interface ListPipelinesCommandInput extends ListPipelinesRequest {}
/**
 * @public
 *
 * The output of {@link ListPipelinesCommand}.
 */
export interface ListPipelinesCommandOutput extends ListPipelinesResponse, __MetadataBearer {}

/**
 * <p>Gets a list of pipelines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListPipelinesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListPipelinesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListPipelinesRequest
 *   PipelineNamePrefix: "STRING_VALUE",
 *   CreatedAfter: new Date("TIMESTAMP"),
 *   CreatedBefore: new Date("TIMESTAMP"),
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPipelinesCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelinesResponse
 * //   PipelineSummaries: [ // PipelineSummaryList
 * //     { // PipelineSummary
 * //       PipelineArn: "STRING_VALUE",
 * //       PipelineName: "STRING_VALUE",
 * //       PipelineDisplayName: "STRING_VALUE",
 * //       PipelineDescription: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastExecutionTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPipelinesCommandInput - {@link ListPipelinesCommandInput}
 * @returns {@link ListPipelinesCommandOutput}
 * @see {@link ListPipelinesCommandInput} for command's `input` shape.
 * @see {@link ListPipelinesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListPipelinesCommand extends $Command
  .classBuilder<
    ListPipelinesCommandInput,
    ListPipelinesCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListPipelines", {})
  .n("SageMakerClient", "ListPipelinesCommand")
  .sc(ListPipelines$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPipelinesRequest;
      output: ListPipelinesResponse;
    };
    sdk: {
      input: ListPipelinesCommandInput;
      output: ListPipelinesCommandOutput;
    };
  };
}
