// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMilestonesInput, ListMilestonesOutput } from "../models/models_0";
import { de_ListMilestonesCommand, se_ListMilestonesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMilestonesCommand}.
 */
export interface ListMilestonesCommandInput extends ListMilestonesInput {}
/**
 * @public
 *
 * The output of {@link ListMilestonesCommand}.
 */
export interface ListMilestonesCommandOutput extends ListMilestonesOutput, __MetadataBearer {}

/**
 * <p>List all milestones for an existing workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListMilestonesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListMilestonesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListMilestonesInput
 *   WorkloadId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMilestonesCommand(input);
 * const response = await client.send(command);
 * // { // ListMilestonesOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   MilestoneSummaries: [ // MilestoneSummaries
 * //     { // MilestoneSummary
 * //       MilestoneNumber: Number("int"),
 * //       MilestoneName: "STRING_VALUE",
 * //       RecordedAt: new Date("TIMESTAMP"),
 * //       WorkloadSummary: { // WorkloadSummary
 * //         WorkloadId: "STRING_VALUE",
 * //         WorkloadArn: "STRING_VALUE",
 * //         WorkloadName: "STRING_VALUE",
 * //         Owner: "STRING_VALUE",
 * //         UpdatedAt: new Date("TIMESTAMP"),
 * //         Lenses: [ // WorkloadLenses
 * //           "STRING_VALUE",
 * //         ],
 * //         RiskCounts: { // RiskCounts
 * //           "<keys>": Number("int"),
 * //         },
 * //         ImprovementStatus: "NOT_APPLICABLE" || "NOT_STARTED" || "IN_PROGRESS" || "COMPLETE" || "RISK_ACKNOWLEDGED",
 * //         Profiles: [ // WorkloadProfiles
 * //           { // WorkloadProfile
 * //             ProfileArn: "STRING_VALUE",
 * //             ProfileVersion: "STRING_VALUE",
 * //           },
 * //         ],
 * //         PrioritizedRiskCounts: {
 * //           "<keys>": Number("int"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMilestonesCommandInput - {@link ListMilestonesCommandInput}
 * @returns {@link ListMilestonesCommandOutput}
 * @see {@link ListMilestonesCommandInput} for command's `input` shape.
 * @see {@link ListMilestonesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class ListMilestonesCommand extends $Command
  .classBuilder<
    ListMilestonesCommandInput,
    ListMilestonesCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "ListMilestones", {})
  .n("WellArchitectedClient", "ListMilestonesCommand")
  .f(void 0, void 0)
  .ser(se_ListMilestonesCommand)
  .de(de_ListMilestonesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMilestonesInput;
      output: ListMilestonesOutput;
    };
    sdk: {
      input: ListMilestonesCommandInput;
      output: ListMilestonesCommandOutput;
    };
  };
}
