// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListModelExplainabilityJobDefinitionsRequest,
  ListModelExplainabilityJobDefinitionsResponse,
} from "../models/models_4";
import {
  de_ListModelExplainabilityJobDefinitionsCommand,
  se_ListModelExplainabilityJobDefinitionsCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListModelExplainabilityJobDefinitionsCommand}.
 */
export interface ListModelExplainabilityJobDefinitionsCommandInput
  extends ListModelExplainabilityJobDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelExplainabilityJobDefinitionsCommand}.
 */
export interface ListModelExplainabilityJobDefinitionsCommandOutput
  extends ListModelExplainabilityJobDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists model explainability job definitions that satisfy various filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelExplainabilityJobDefinitionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelExplainabilityJobDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListModelExplainabilityJobDefinitionsRequest
 *   EndpointName: "STRING_VALUE",
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 * };
 * const command = new ListModelExplainabilityJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelExplainabilityJobDefinitionsResponse
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
 * @param ListModelExplainabilityJobDefinitionsCommandInput - {@link ListModelExplainabilityJobDefinitionsCommandInput}
 * @returns {@link ListModelExplainabilityJobDefinitionsCommandOutput}
 * @see {@link ListModelExplainabilityJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListModelExplainabilityJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListModelExplainabilityJobDefinitionsCommand extends $Command
  .classBuilder<
    ListModelExplainabilityJobDefinitionsCommandInput,
    ListModelExplainabilityJobDefinitionsCommandOutput,
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
  .s("SageMaker", "ListModelExplainabilityJobDefinitions", {})
  .n("SageMakerClient", "ListModelExplainabilityJobDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_ListModelExplainabilityJobDefinitionsCommand)
  .de(de_ListModelExplainabilityJobDefinitionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListModelExplainabilityJobDefinitionsRequest;
      output: ListModelExplainabilityJobDefinitionsResponse;
    };
    sdk: {
      input: ListModelExplainabilityJobDefinitionsCommandInput;
      output: ListModelExplainabilityJobDefinitionsCommandOutput;
    };
  };
}
