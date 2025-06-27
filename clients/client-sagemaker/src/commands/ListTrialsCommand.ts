// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTrialsRequest, ListTrialsResponse } from "../models/models_4";
import { de_ListTrialsCommand, se_ListTrialsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTrialsCommand}.
 */
export interface ListTrialsCommandInput extends ListTrialsRequest {}
/**
 * @public
 *
 * The output of {@link ListTrialsCommand}.
 */
export interface ListTrialsCommandOutput extends ListTrialsResponse, __MetadataBearer {}

/**
 * <p>Lists the trials in your account. Specify an experiment name to limit the list to the trials that are part of that experiment. Specify a trial component name to limit the list to the trials that associated with that trial component. The list can be filtered to show only trials that were created in a specific time range. The list can be sorted by trial name or creation time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTrialsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTrialsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListTrialsRequest
 *   ExperimentName: "STRING_VALUE",
 *   TrialComponentName: "STRING_VALUE",
 *   CreatedAfter: new Date("TIMESTAMP"),
 *   CreatedBefore: new Date("TIMESTAMP"),
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTrialsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrialsResponse
 * //   TrialSummaries: [ // TrialSummaries
 * //     { // TrialSummary
 * //       TrialArn: "STRING_VALUE",
 * //       TrialName: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       TrialSource: { // TrialSource
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
 * @param ListTrialsCommandInput - {@link ListTrialsCommandInput}
 * @returns {@link ListTrialsCommandOutput}
 * @see {@link ListTrialsCommandInput} for command's `input` shape.
 * @see {@link ListTrialsCommandOutput} for command's `response` shape.
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
export class ListTrialsCommand extends $Command
  .classBuilder<
    ListTrialsCommandInput,
    ListTrialsCommandOutput,
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
  .s("SageMaker", "ListTrials", {})
  .n("SageMakerClient", "ListTrialsCommand")
  .f(void 0, void 0)
  .ser(se_ListTrialsCommand)
  .de(de_ListTrialsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrialsRequest;
      output: ListTrialsResponse;
    };
    sdk: {
      input: ListTrialsCommandInput;
      output: ListTrialsCommandOutput;
    };
  };
}
