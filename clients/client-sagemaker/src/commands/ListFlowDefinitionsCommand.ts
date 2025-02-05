// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListFlowDefinitionsRequest, ListFlowDefinitionsResponse } from "../models/models_4";
import { de_ListFlowDefinitionsCommand, se_ListFlowDefinitionsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFlowDefinitionsCommand}.
 */
export interface ListFlowDefinitionsCommandInput extends ListFlowDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListFlowDefinitionsCommand}.
 */
export interface ListFlowDefinitionsCommandOutput extends ListFlowDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Returns information about the flow definitions in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListFlowDefinitionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListFlowDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerClient(config);
 * const input = { // ListFlowDefinitionsRequest
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFlowDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListFlowDefinitionsResponse
 * //   FlowDefinitionSummaries: [ // FlowDefinitionSummaries // required
 * //     { // FlowDefinitionSummary
 * //       FlowDefinitionName: "STRING_VALUE", // required
 * //       FlowDefinitionArn: "STRING_VALUE", // required
 * //       FlowDefinitionStatus: "Initializing" || "Active" || "Failed" || "Deleting", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlowDefinitionsCommandInput - {@link ListFlowDefinitionsCommandInput}
 * @returns {@link ListFlowDefinitionsCommandOutput}
 * @see {@link ListFlowDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListFlowDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListFlowDefinitionsCommand extends $Command
  .classBuilder<
    ListFlowDefinitionsCommandInput,
    ListFlowDefinitionsCommandOutput,
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
  .s("SageMaker", "ListFlowDefinitions", {})
  .n("SageMakerClient", "ListFlowDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_ListFlowDefinitionsCommand)
  .de(de_ListFlowDefinitionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFlowDefinitionsRequest;
      output: ListFlowDefinitionsResponse;
    };
    sdk: {
      input: ListFlowDefinitionsCommandInput;
      output: ListFlowDefinitionsCommandOutput;
    };
  };
}
