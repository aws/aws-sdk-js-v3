// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListExperimentsRequest, ListExperimentsResponse } from "../models/models_3";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListExperiments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExperimentsCommand}.
 */
export interface ListExperimentsCommandInput extends ListExperimentsRequest {}
/**
 * @public
 *
 * The output of {@link ListExperimentsCommand}.
 */
export interface ListExperimentsCommandOutput extends ListExperimentsResponse, __MetadataBearer {}

/**
 * <p>Lists all the experiments in your account. The list can be filtered to show only experiments that were created in a specific time range. The list can be sorted by experiment name or creation time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListExperimentsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListExperimentsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListExperimentsRequest
 *   CreatedAfter: new Date("TIMESTAMP"),
 *   CreatedBefore: new Date("TIMESTAMP"),
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListExperimentsCommand(input);
 * const response = await client.send(command);
 * // { // ListExperimentsResponse
 * //   ExperimentSummaries: [ // ExperimentSummaries
 * //     { // ExperimentSummary
 * //       ExperimentArn: "STRING_VALUE",
 * //       ExperimentName: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       ExperimentSource: { // ExperimentSource
 * //         SourceArn: "STRING_VALUE", // required
 * //         SourceType: "STRING_VALUE",
 * //       },
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExperimentsCommandInput - {@link ListExperimentsCommandInput}
 * @returns {@link ListExperimentsCommandOutput}
 * @see {@link ListExperimentsCommandInput} for command's `input` shape.
 * @see {@link ListExperimentsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListExperimentsCommand extends $Command
  .classBuilder<
    ListExperimentsCommandInput,
    ListExperimentsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListExperiments", {})
  .n("SageMakerClient", "ListExperimentsCommand")
  .sc(ListExperiments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExperimentsRequest;
      output: ListExperimentsResponse;
    };
    sdk: {
      input: ListExperimentsCommandInput;
      output: ListExperimentsCommandOutput;
    };
  };
}
