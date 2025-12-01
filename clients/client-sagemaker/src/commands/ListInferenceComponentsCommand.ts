// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListInferenceComponentsInput, ListInferenceComponentsOutput } from "../models/models_3";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListInferenceComponents } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInferenceComponentsCommand}.
 */
export interface ListInferenceComponentsCommandInput extends ListInferenceComponentsInput {}
/**
 * @public
 *
 * The output of {@link ListInferenceComponentsCommand}.
 */
export interface ListInferenceComponentsCommandOutput extends ListInferenceComponentsOutput, __MetadataBearer {}

/**
 * <p>Lists the inference components in your account and their properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListInferenceComponentsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListInferenceComponentsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListInferenceComponentsInput
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   StatusEquals: "InService" || "Creating" || "Updating" || "Failed" || "Deleting",
 *   EndpointNameEquals: "STRING_VALUE",
 *   VariantNameEquals: "STRING_VALUE",
 * };
 * const command = new ListInferenceComponentsCommand(input);
 * const response = await client.send(command);
 * // { // ListInferenceComponentsOutput
 * //   InferenceComponents: [ // InferenceComponentSummaryList // required
 * //     { // InferenceComponentSummary
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       InferenceComponentArn: "STRING_VALUE", // required
 * //       InferenceComponentName: "STRING_VALUE", // required
 * //       EndpointArn: "STRING_VALUE", // required
 * //       EndpointName: "STRING_VALUE", // required
 * //       VariantName: "STRING_VALUE", // required
 * //       InferenceComponentStatus: "InService" || "Creating" || "Updating" || "Failed" || "Deleting",
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInferenceComponentsCommandInput - {@link ListInferenceComponentsCommandInput}
 * @returns {@link ListInferenceComponentsCommandOutput}
 * @see {@link ListInferenceComponentsCommandInput} for command's `input` shape.
 * @see {@link ListInferenceComponentsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListInferenceComponentsCommand extends $Command
  .classBuilder<
    ListInferenceComponentsCommandInput,
    ListInferenceComponentsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListInferenceComponents", {})
  .n("SageMakerClient", "ListInferenceComponentsCommand")
  .sc(ListInferenceComponents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInferenceComponentsInput;
      output: ListInferenceComponentsOutput;
    };
    sdk: {
      input: ListInferenceComponentsCommandInput;
      output: ListInferenceComponentsCommandOutput;
    };
  };
}
