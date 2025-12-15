// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDataQualityJobDefinitionsRequest, ListDataQualityJobDefinitionsResponse } from "../models/models_3";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListDataQualityJobDefinitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataQualityJobDefinitionsCommand}.
 */
export interface ListDataQualityJobDefinitionsCommandInput extends ListDataQualityJobDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataQualityJobDefinitionsCommand}.
 */
export interface ListDataQualityJobDefinitionsCommandOutput
  extends ListDataQualityJobDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the data quality job definitions in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListDataQualityJobDefinitionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListDataQualityJobDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListDataQualityJobDefinitionsRequest
 *   EndpointName: "STRING_VALUE",
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 * };
 * const command = new ListDataQualityJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataQualityJobDefinitionsResponse
 * //   JobDefinitionSummaries: [ // MonitoringJobDefinitionSummaryList // required
 * //     { // MonitoringJobDefinitionSummary
 * //       MonitoringJobDefinitionName: "STRING_VALUE", // required
 * //       MonitoringJobDefinitionArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       EndpointName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataQualityJobDefinitionsCommandInput - {@link ListDataQualityJobDefinitionsCommandInput}
 * @returns {@link ListDataQualityJobDefinitionsCommandOutput}
 * @see {@link ListDataQualityJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListDataQualityJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListDataQualityJobDefinitionsCommand extends $Command
  .classBuilder<
    ListDataQualityJobDefinitionsCommandInput,
    ListDataQualityJobDefinitionsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListDataQualityJobDefinitions", {})
  .n("SageMakerClient", "ListDataQualityJobDefinitionsCommand")
  .sc(ListDataQualityJobDefinitions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataQualityJobDefinitionsRequest;
      output: ListDataQualityJobDefinitionsResponse;
    };
    sdk: {
      input: ListDataQualityJobDefinitionsCommandInput;
      output: ListDataQualityJobDefinitionsCommandOutput;
    };
  };
}
