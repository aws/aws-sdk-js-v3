// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListInferenceExperimentsRequest, ListInferenceExperimentsResponse } from "../models/models_3";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListInferenceExperiments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInferenceExperimentsCommand}.
 */
export interface ListInferenceExperimentsCommandInput extends ListInferenceExperimentsRequest {}
/**
 * @public
 *
 * The output of {@link ListInferenceExperimentsCommand}.
 */
export interface ListInferenceExperimentsCommandOutput extends ListInferenceExperimentsResponse, __MetadataBearer {}

/**
 * <p>Returns the list of all inference experiments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListInferenceExperimentsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListInferenceExperimentsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListInferenceExperimentsRequest
 *   NameContains: "STRING_VALUE",
 *   Type: "ShadowMode",
 *   StatusEquals: "Creating" || "Created" || "Updating" || "Running" || "Starting" || "Stopping" || "Completed" || "Cancelled",
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListInferenceExperimentsCommand(input);
 * const response = await client.send(command);
 * // { // ListInferenceExperimentsResponse
 * //   InferenceExperiments: [ // InferenceExperimentList
 * //     { // InferenceExperimentSummary
 * //       Name: "STRING_VALUE", // required
 * //       Type: "ShadowMode", // required
 * //       Schedule: { // InferenceExperimentSchedule
 * //         StartTime: new Date("TIMESTAMP"),
 * //         EndTime: new Date("TIMESTAMP"),
 * //       },
 * //       Status: "Creating" || "Created" || "Updating" || "Running" || "Starting" || "Stopping" || "Completed" || "Cancelled", // required
 * //       StatusReason: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       CompletionTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       RoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInferenceExperimentsCommandInput - {@link ListInferenceExperimentsCommandInput}
 * @returns {@link ListInferenceExperimentsCommandOutput}
 * @see {@link ListInferenceExperimentsCommandInput} for command's `input` shape.
 * @see {@link ListInferenceExperimentsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListInferenceExperimentsCommand extends $Command
  .classBuilder<
    ListInferenceExperimentsCommandInput,
    ListInferenceExperimentsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListInferenceExperiments", {})
  .n("SageMakerClient", "ListInferenceExperimentsCommand")
  .sc(ListInferenceExperiments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInferenceExperimentsRequest;
      output: ListInferenceExperimentsResponse;
    };
    sdk: {
      input: ListInferenceExperimentsCommandInput;
      output: ListInferenceExperimentsCommandOutput;
    };
  };
}
