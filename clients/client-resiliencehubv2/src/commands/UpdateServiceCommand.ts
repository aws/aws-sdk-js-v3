// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateServiceRequest, UpdateServiceResponse } from "../models/models_0";
import type {
  Resiliencehubv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Resiliencehubv2Client";
import { UpdateService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceCommand}.
 */
export interface UpdateServiceCommandInput extends UpdateServiceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceCommand}.
 */
export interface UpdateServiceCommandOutput extends UpdateServiceResponse, __MetadataBearer {}

/**
 * <p>Updates an existing service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, UpdateServiceCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, UpdateServiceCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // UpdateServiceRequest
 *   serviceArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   associatedSystems: [ // AssociatedSystemList
 *     { // AssociatedSystem
 *       systemArn: "STRING_VALUE", // required
 *       systemName: "STRING_VALUE",
 *       userJourneyIds: [ // UserJourneyIdList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   policyArn: "STRING_VALUE",
 *   regions: [ // RegionList
 *     "STRING_VALUE",
 *   ],
 *   permissionModel: { // PermissionModel
 *     invokerRoleName: "STRING_VALUE", // required
 *     crossAccountRoles: [ // CrossAccountRoleList
 *       { // CrossAccountRole
 *         crossAccountRoleArn: "STRING_VALUE", // required
 *         externalId: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   dependencyDiscovery: "ENABLED" || "DISABLED",
 *   reportConfiguration: { // ServiceReportConfiguration
 *     reportOutputs: [ // ReportOutputConfigurationList // required
 *       { // ReportOutputConfiguration Union: only one key present
 *         s3: { // S3ReportOutputConfiguration
 *           bucketPath: "STRING_VALUE", // required
 *           bucketOwner: "STRING_VALUE", // required
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceResponse
 * //   service: { // Service
 * //     serviceArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     associatedSystems: [ // AssociatedSystemList
 * //       { // AssociatedSystem
 * //         systemArn: "STRING_VALUE", // required
 * //         systemName: "STRING_VALUE",
 * //         userJourneyIds: [ // UserJourneyIdList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     policyArn: "STRING_VALUE",
 * //     regions: [ // RegionList
 * //       "STRING_VALUE",
 * //     ],
 * //     permissionModel: { // PermissionModel
 * //       invokerRoleName: "STRING_VALUE", // required
 * //       crossAccountRoles: [ // CrossAccountRoleList
 * //         { // CrossAccountRole
 * //           crossAccountRoleArn: "STRING_VALUE", // required
 * //           externalId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     dependencyDiscovery: { // DependencyDiscoveryConfig
 * //       status: "ENABLED" || "INITIALIZING" || "DISABLED", // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //     effectivePolicyValues: { // EffectivePolicyValues
 * //       availabilitySlo: { // SloSource
 * //         value: Number("double"),
 * //         policyName: "STRING_VALUE",
 * //         source: "SELF" || "CROSS_ACCOUNT",
 * //       },
 * //       multiAzRto: { // TargetSource
 * //         value: Number("int"),
 * //         policyName: "STRING_VALUE",
 * //         source: "SELF" || "CROSS_ACCOUNT",
 * //       },
 * //       multiAzRpo: {
 * //         value: Number("int"),
 * //         policyName: "STRING_VALUE",
 * //         source: "SELF" || "CROSS_ACCOUNT",
 * //       },
 * //       multiAzDrApproach: { // DisasterRecoverySource
 * //         value: "STRING_VALUE",
 * //         policyName: "STRING_VALUE",
 * //         source: "SELF" || "CROSS_ACCOUNT",
 * //       },
 * //       multiRegionRto: {
 * //         value: Number("int"),
 * //         policyName: "STRING_VALUE",
 * //         source: "SELF" || "CROSS_ACCOUNT",
 * //       },
 * //       multiRegionRpo: {
 * //         value: Number("int"),
 * //         policyName: "STRING_VALUE",
 * //         source: "SELF" || "CROSS_ACCOUNT",
 * //       },
 * //       multiRegionDrApproach: {
 * //         value: "STRING_VALUE",
 * //         policyName: "STRING_VALUE",
 * //         source: "SELF" || "CROSS_ACCOUNT",
 * //       },
 * //       dataRecoveryTimeBetweenBackups: {
 * //         value: Number("int"),
 * //         policyName: "STRING_VALUE",
 * //         source: "SELF" || "CROSS_ACCOUNT",
 * //       },
 * //     },
 * //     achievability: { // Achievability
 * //       availabilitySlo: "ACHIEVABLE" || "NOT_ACHIEVABLE",
 * //       multiAzRtoRpo: "ACHIEVABLE" || "NOT_ACHIEVABLE",
 * //       multiRegionRtoRpo: "ACHIEVABLE" || "NOT_ACHIEVABLE",
 * //     },
 * //     reportConfiguration: { // ServiceReportConfiguration
 * //       reportOutputs: [ // ReportOutputConfigurationList // required
 * //         { // ReportOutputConfiguration Union: only one key present
 * //           s3: { // S3ReportOutputConfiguration
 * //             bucketPath: "STRING_VALUE", // required
 * //             bucketOwner: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     kmsKeyId: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     estimatedAssessmentCost: { // AssessmentCost
 * //       amount: Number("double"),
 * //       currency: "USD",
 * //     },
 * //     resourceDiscovery: { // ResourceDiscoveryStatus
 * //       status: "RUNNING" || "SUCCEEDED" || "FAILED" || "COMPLETED_WITH_FAILURES" || "NOT_STARTED",
 * //       lastRunAt: new Date("TIMESTAMP"),
 * //       errorCode: "INVALID_PERMISSIONS" || "STACK_NOT_FOUND" || "CLUSTER_NOT_FOUND" || "STATE_FILE_NOT_FOUND" || "ACCESS_DENIED" || "UNSUPPORTED_CLUSTER" || "INTERNAL_ERROR",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //     assessmentStatus: "NOT_STARTED" || "PENDING" || "IN_PROGRESS" || "FAILED" || "SUCCESS",
 * //     rerunAssessment: true || false,
 * //     openFindingsCount: Number("int"),
 * //     resolvedFindingsCount: Number("int"),
 * //     organizationId: "STRING_VALUE",
 * //     ouId: "STRING_VALUE",
 * //     accountId: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateServiceCommandInput - {@link UpdateServiceCommandInput}
 * @returns {@link UpdateServiceCommandOutput}
 * @see {@link UpdateServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Conflict — resource already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Service quota exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class UpdateServiceCommand extends $Command
  .classBuilder<
    UpdateServiceCommandInput,
    UpdateServiceCommandOutput,
    Resiliencehubv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Resiliencehubv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NGRHServiceCore", "UpdateService", {})
  .n("Resiliencehubv2Client", "UpdateServiceCommand")
  .sc(UpdateService$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceRequest;
      output: UpdateServiceResponse;
    };
    sdk: {
      input: UpdateServiceCommandInput;
      output: UpdateServiceCommandOutput;
    };
  };
}
