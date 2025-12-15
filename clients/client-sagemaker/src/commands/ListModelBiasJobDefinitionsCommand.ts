// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListModelBiasJobDefinitionsRequest, ListModelBiasJobDefinitionsResponse } from "../models/models_3";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListModelBiasJobDefinitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListModelBiasJobDefinitionsCommand}.
 */
export interface ListModelBiasJobDefinitionsCommandInput extends ListModelBiasJobDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelBiasJobDefinitionsCommand}.
 */
export interface ListModelBiasJobDefinitionsCommandOutput
  extends ListModelBiasJobDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists model bias jobs definitions that satisfy various filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelBiasJobDefinitionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelBiasJobDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListModelBiasJobDefinitionsRequest
 *   EndpointName: "STRING_VALUE",
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 * };
 * const command = new ListModelBiasJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelBiasJobDefinitionsResponse
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
 * @param ListModelBiasJobDefinitionsCommandInput - {@link ListModelBiasJobDefinitionsCommandInput}
 * @returns {@link ListModelBiasJobDefinitionsCommandOutput}
 * @see {@link ListModelBiasJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListModelBiasJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListModelBiasJobDefinitionsCommand extends $Command
  .classBuilder<
    ListModelBiasJobDefinitionsCommandInput,
    ListModelBiasJobDefinitionsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListModelBiasJobDefinitions", {})
  .n("SageMakerClient", "ListModelBiasJobDefinitionsCommand")
  .sc(ListModelBiasJobDefinitions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListModelBiasJobDefinitionsRequest;
      output: ListModelBiasJobDefinitionsResponse;
    };
    sdk: {
      input: ListModelBiasJobDefinitionsCommandInput;
      output: ListModelBiasJobDefinitionsCommandOutput;
    };
  };
}
