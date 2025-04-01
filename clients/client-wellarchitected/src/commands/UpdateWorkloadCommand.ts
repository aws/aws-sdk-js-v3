// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWorkloadInput, UpdateWorkloadOutput } from "../models/models_0";
import { de_UpdateWorkloadCommand, se_UpdateWorkloadCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkloadCommand}.
 */
export interface UpdateWorkloadCommandInput extends UpdateWorkloadInput {}
/**
 * @public
 *
 * The output of {@link UpdateWorkloadCommand}.
 */
export interface UpdateWorkloadCommandOutput extends UpdateWorkloadOutput, __MetadataBearer {}

/**
 * <p>Update an existing workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateWorkloadCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateWorkloadCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateWorkloadInput
 *   WorkloadId: "STRING_VALUE", // required
 *   WorkloadName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Environment: "PRODUCTION" || "PREPRODUCTION",
 *   AccountIds: [ // WorkloadAccountIds
 *     "STRING_VALUE",
 *   ],
 *   AwsRegions: [ // WorkloadAwsRegions
 *     "STRING_VALUE",
 *   ],
 *   NonAwsRegions: [ // WorkloadNonAwsRegions
 *     "STRING_VALUE",
 *   ],
 *   PillarPriorities: [ // WorkloadPillarPriorities
 *     "STRING_VALUE",
 *   ],
 *   ArchitecturalDesign: "STRING_VALUE",
 *   ReviewOwner: "STRING_VALUE",
 *   IsReviewOwnerUpdateAcknowledged: true || false,
 *   IndustryType: "STRING_VALUE",
 *   Industry: "STRING_VALUE",
 *   Notes: "STRING_VALUE",
 *   ImprovementStatus: "NOT_APPLICABLE" || "NOT_STARTED" || "IN_PROGRESS" || "COMPLETE" || "RISK_ACKNOWLEDGED",
 *   DiscoveryConfig: { // WorkloadDiscoveryConfig
 *     TrustedAdvisorIntegrationStatus: "ENABLED" || "DISABLED",
 *     WorkloadResourceDefinition: [ // WorkloadResourceDefinition
 *       "WORKLOAD_METADATA" || "APP_REGISTRY",
 *     ],
 *   },
 *   Applications: [ // WorkloadApplications
 *     "STRING_VALUE",
 *   ],
 *   JiraConfiguration: { // WorkloadJiraConfigurationInput
 *     IssueManagementStatus: "ENABLED" || "DISABLED" || "INHERIT",
 *     IssueManagementType: "AUTO" || "MANUAL",
 *     JiraProjectKey: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateWorkloadCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkloadOutput
 * //   Workload: { // Workload
 * //     WorkloadId: "STRING_VALUE",
 * //     WorkloadArn: "STRING_VALUE",
 * //     WorkloadName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Environment: "PRODUCTION" || "PREPRODUCTION",
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     AccountIds: [ // WorkloadAccountIds
 * //       "STRING_VALUE",
 * //     ],
 * //     AwsRegions: [ // WorkloadAwsRegions
 * //       "STRING_VALUE",
 * //     ],
 * //     NonAwsRegions: [ // WorkloadNonAwsRegions
 * //       "STRING_VALUE",
 * //     ],
 * //     ArchitecturalDesign: "STRING_VALUE",
 * //     ReviewOwner: "STRING_VALUE",
 * //     ReviewRestrictionDate: new Date("TIMESTAMP"),
 * //     IsReviewOwnerUpdateAcknowledged: true || false,
 * //     IndustryType: "STRING_VALUE",
 * //     Industry: "STRING_VALUE",
 * //     Notes: "STRING_VALUE",
 * //     ImprovementStatus: "NOT_APPLICABLE" || "NOT_STARTED" || "IN_PROGRESS" || "COMPLETE" || "RISK_ACKNOWLEDGED",
 * //     RiskCounts: { // RiskCounts
 * //       "<keys>": Number("int"),
 * //     },
 * //     PillarPriorities: [ // WorkloadPillarPriorities
 * //       "STRING_VALUE",
 * //     ],
 * //     Lenses: [ // WorkloadLenses
 * //       "STRING_VALUE",
 * //     ],
 * //     Owner: "STRING_VALUE",
 * //     ShareInvitationId: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     DiscoveryConfig: { // WorkloadDiscoveryConfig
 * //       TrustedAdvisorIntegrationStatus: "ENABLED" || "DISABLED",
 * //       WorkloadResourceDefinition: [ // WorkloadResourceDefinition
 * //         "WORKLOAD_METADATA" || "APP_REGISTRY",
 * //       ],
 * //     },
 * //     Applications: [ // WorkloadApplications
 * //       "STRING_VALUE",
 * //     ],
 * //     Profiles: [ // WorkloadProfiles
 * //       { // WorkloadProfile
 * //         ProfileArn: "STRING_VALUE",
 * //         ProfileVersion: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PrioritizedRiskCounts: {
 * //       "<keys>": Number("int"),
 * //     },
 * //     JiraConfiguration: { // WorkloadJiraConfigurationOutput
 * //       IssueManagementStatus: "ENABLED" || "DISABLED" || "INHERIT",
 * //       IssueManagementType: "AUTO" || "MANUAL",
 * //       JiraProjectKey: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWorkloadCommandInput - {@link UpdateWorkloadCommandInput}
 * @returns {@link UpdateWorkloadCommandOutput}
 * @see {@link UpdateWorkloadCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkloadCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
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
export class UpdateWorkloadCommand extends $Command
  .classBuilder<
    UpdateWorkloadCommandInput,
    UpdateWorkloadCommandOutput,
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
  .s("WellArchitectedApiServiceLambda", "UpdateWorkload", {})
  .n("WellArchitectedClient", "UpdateWorkloadCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWorkloadCommand)
  .de(de_UpdateWorkloadCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkloadInput;
      output: UpdateWorkloadOutput;
    };
    sdk: {
      input: UpdateWorkloadCommandInput;
      output: UpdateWorkloadCommandOutput;
    };
  };
}
