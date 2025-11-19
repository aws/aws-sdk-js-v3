// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPipelineVersionsRequest, ListPipelineVersionsResponse } from "../models/models_3";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListPipelineVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPipelineVersionsCommand}.
 */
export interface ListPipelineVersionsCommandInput extends ListPipelineVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPipelineVersionsCommand}.
 */
export interface ListPipelineVersionsCommandOutput extends ListPipelineVersionsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of all versions of the pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListPipelineVersionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListPipelineVersionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListPipelineVersionsRequest
 *   PipelineName: "STRING_VALUE", // required
 *   CreatedAfter: new Date("TIMESTAMP"),
 *   CreatedBefore: new Date("TIMESTAMP"),
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPipelineVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelineVersionsResponse
 * //   PipelineVersionSummaries: [ // PipelineVersionSummaryList
 * //     { // PipelineVersionSummary
 * //       PipelineArn: "STRING_VALUE",
 * //       PipelineVersionId: Number("long"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       PipelineVersionDescription: "STRING_VALUE",
 * //       PipelineVersionDisplayName: "STRING_VALUE",
 * //       LastExecutionPipelineExecutionArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPipelineVersionsCommandInput - {@link ListPipelineVersionsCommandInput}
 * @returns {@link ListPipelineVersionsCommandOutput}
 * @see {@link ListPipelineVersionsCommandInput} for command's `input` shape.
 * @see {@link ListPipelineVersionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListPipelineVersionsCommand extends $Command
  .classBuilder<
    ListPipelineVersionsCommandInput,
    ListPipelineVersionsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListPipelineVersions", {})
  .n("SageMakerClient", "ListPipelineVersionsCommand")
  .sc(ListPipelineVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPipelineVersionsRequest;
      output: ListPipelineVersionsResponse;
    };
    sdk: {
      input: ListPipelineVersionsCommandInput;
      output: ListPipelineVersionsCommandOutput;
    };
  };
}
