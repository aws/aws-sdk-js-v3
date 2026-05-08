// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAIWorkloadConfigsRequest, ListAIWorkloadConfigsResponse } from "../models/models_3";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListAIWorkloadConfigs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAIWorkloadConfigsCommand}.
 */
export interface ListAIWorkloadConfigsCommandInput extends ListAIWorkloadConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListAIWorkloadConfigsCommand}.
 */
export interface ListAIWorkloadConfigsCommandOutput extends ListAIWorkloadConfigsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of AI workload configurations in your account. You can filter the results by name and creation time, and sort the results. The response is paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListAIWorkloadConfigsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListAIWorkloadConfigsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListAIWorkloadConfigsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   NameContains: "STRING_VALUE",
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListAIWorkloadConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListAIWorkloadConfigsResponse
 * //   AIWorkloadConfigs: [ // AIWorkloadConfigSummaryList // required
 * //     { // AIWorkloadConfigSummary
 * //       AIWorkloadConfigName: "STRING_VALUE", // required
 * //       AIWorkloadConfigArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAIWorkloadConfigsCommandInput - {@link ListAIWorkloadConfigsCommandInput}
 * @returns {@link ListAIWorkloadConfigsCommandOutput}
 * @see {@link ListAIWorkloadConfigsCommandInput} for command's `input` shape.
 * @see {@link ListAIWorkloadConfigsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListAIWorkloadConfigsCommand extends $Command
  .classBuilder<
    ListAIWorkloadConfigsCommandInput,
    ListAIWorkloadConfigsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListAIWorkloadConfigs", {})
  .n("SageMakerClient", "ListAIWorkloadConfigsCommand")
  .sc(ListAIWorkloadConfigs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAIWorkloadConfigsRequest;
      output: ListAIWorkloadConfigsResponse;
    };
    sdk: {
      input: ListAIWorkloadConfigsCommandInput;
      output: ListAIWorkloadConfigsCommandOutput;
    };
  };
}
