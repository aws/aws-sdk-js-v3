// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { ListCoverageRequest, ListCoverageResponse } from "../models/models_1";
import { ListCoverage } from "../schemas/schemas_8_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCoverageCommand}.
 */
export interface ListCoverageCommandInput extends ListCoverageRequest {}
/**
 * @public
 *
 * The output of {@link ListCoverageCommand}.
 */
export interface ListCoverageCommandOutput extends ListCoverageResponse, __MetadataBearer {}

/**
 * <p>Lists coverage details for your GuardDuty account. If you're a GuardDuty administrator, you can
 *       retrieve all resources associated with the active member accounts in your organization.</p>
 *          <p>Make sure the accounts have Runtime Monitoring enabled and GuardDuty agent running on
 *       their resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListCoverageCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListCoverageCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // ListCoverageRequest
 *   DetectorId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   FilterCriteria: { // CoverageFilterCriteria
 *     FilterCriterion: [ // CoverageFilterCriterionList
 *       { // CoverageFilterCriterion
 *         CriterionKey: "ACCOUNT_ID" || "CLUSTER_NAME" || "RESOURCE_TYPE" || "COVERAGE_STATUS" || "ADDON_VERSION" || "MANAGEMENT_TYPE" || "EKS_CLUSTER_NAME" || "ECS_CLUSTER_NAME" || "AGENT_VERSION" || "INSTANCE_ID" || "CLUSTER_ARN",
 *         FilterCondition: { // CoverageFilterCondition
 *           Equals: [ // Equals
 *             "STRING_VALUE",
 *           ],
 *           NotEquals: [ // NotEquals
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *   },
 *   SortCriteria: { // CoverageSortCriteria
 *     AttributeName: "ACCOUNT_ID" || "CLUSTER_NAME" || "COVERAGE_STATUS" || "ISSUE" || "ADDON_VERSION" || "UPDATED_AT" || "EKS_CLUSTER_NAME" || "ECS_CLUSTER_NAME" || "INSTANCE_ID",
 *     OrderBy: "ASC" || "DESC",
 *   },
 * };
 * const command = new ListCoverageCommand(input);
 * const response = await client.send(command);
 * // { // ListCoverageResponse
 * //   Resources: [ // CoverageResources // required
 * //     { // CoverageResource
 * //       ResourceId: "STRING_VALUE",
 * //       DetectorId: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       ResourceDetails: { // CoverageResourceDetails
 * //         EksClusterDetails: { // CoverageEksClusterDetails
 * //           ClusterName: "STRING_VALUE",
 * //           CoveredNodes: Number("long"),
 * //           CompatibleNodes: Number("long"),
 * //           AddonDetails: { // AddonDetails
 * //             AddonVersion: "STRING_VALUE",
 * //             AddonStatus: "STRING_VALUE",
 * //           },
 * //           ManagementType: "AUTO_MANAGED" || "MANUAL" || "DISABLED",
 * //         },
 * //         ResourceType: "EKS" || "ECS" || "EC2",
 * //         EcsClusterDetails: { // CoverageEcsClusterDetails
 * //           ClusterName: "STRING_VALUE",
 * //           FargateDetails: { // FargateDetails
 * //             Issues: [ // Issues
 * //               "STRING_VALUE",
 * //             ],
 * //             ManagementType: "AUTO_MANAGED" || "MANUAL" || "DISABLED",
 * //           },
 * //           ContainerInstanceDetails: { // ContainerInstanceDetails
 * //             CoveredContainerInstances: Number("long"),
 * //             CompatibleContainerInstances: Number("long"),
 * //           },
 * //         },
 * //         Ec2InstanceDetails: { // CoverageEc2InstanceDetails
 * //           InstanceId: "STRING_VALUE",
 * //           InstanceType: "STRING_VALUE",
 * //           ClusterArn: "STRING_VALUE",
 * //           AgentDetails: { // AgentDetails
 * //             Version: "STRING_VALUE",
 * //           },
 * //           ManagementType: "AUTO_MANAGED" || "MANUAL" || "DISABLED",
 * //         },
 * //       },
 * //       CoverageStatus: "HEALTHY" || "UNHEALTHY",
 * //       Issue: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCoverageCommandInput - {@link ListCoverageCommandInput}
 * @returns {@link ListCoverageCommandOutput}
 * @see {@link ListCoverageCommandInput} for command's `input` shape.
 * @see {@link ListCoverageCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class ListCoverageCommand extends $Command
  .classBuilder<
    ListCoverageCommandInput,
    ListCoverageCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "ListCoverage", {})
  .n("GuardDutyClient", "ListCoverageCommand")
  .sc(ListCoverage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCoverageRequest;
      output: ListCoverageResponse;
    };
    sdk: {
      input: ListCoverageCommandInput;
      output: ListCoverageCommandOutput;
    };
  };
}
