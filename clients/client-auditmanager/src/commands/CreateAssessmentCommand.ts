// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateAssessmentRequest,
  CreateAssessmentRequestFilterSensitiveLog,
  CreateAssessmentResponse,
  CreateAssessmentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAssessmentCommand, se_CreateAssessmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAssessmentCommand}.
 */
export interface CreateAssessmentCommandInput extends CreateAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssessmentCommand}.
 */
export interface CreateAssessmentCommandOutput extends CreateAssessmentResponse, __MetadataBearer {}

/**
 * <p> Creates an assessment in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, CreateAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, CreateAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // CreateAssessmentRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   assessmentReportsDestination: { // AssessmentReportsDestination
 *     destinationType: "S3",
 *     destination: "STRING_VALUE",
 *   },
 *   scope: { // Scope
 *     awsAccounts: [ // AWSAccounts
 *       { // AWSAccount
 *         id: "STRING_VALUE",
 *         emailAddress: "STRING_VALUE",
 *         name: "STRING_VALUE",
 *       },
 *     ],
 *     awsServices: [ // AWSServices
 *       { // AWSService
 *         serviceName: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   roles: [ // Roles // required
 *     { // Role
 *       roleType: "PROCESS_OWNER" || "RESOURCE_OWNER", // required
 *       roleArn: "STRING_VALUE", // required
 *     },
 *   ],
 *   frameworkId: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssessmentResponse
 * //   assessment: { // Assessment
 * //     arn: "STRING_VALUE",
 * //     awsAccount: { // AWSAccount
 * //       id: "STRING_VALUE",
 * //       emailAddress: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //     metadata: { // AssessmentMetadata
 * //       name: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       complianceType: "STRING_VALUE",
 * //       status: "ACTIVE" || "INACTIVE",
 * //       assessmentReportsDestination: { // AssessmentReportsDestination
 * //         destinationType: "S3",
 * //         destination: "STRING_VALUE",
 * //       },
 * //       scope: { // Scope
 * //         awsAccounts: [ // AWSAccounts
 * //           {
 * //             id: "STRING_VALUE",
 * //             emailAddress: "STRING_VALUE",
 * //             name: "STRING_VALUE",
 * //           },
 * //         ],
 * //         awsServices: [ // AWSServices
 * //           { // AWSService
 * //             serviceName: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       roles: [ // Roles
 * //         { // Role
 * //           roleType: "PROCESS_OWNER" || "RESOURCE_OWNER", // required
 * //           roleArn: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       delegations: [ // Delegations
 * //         { // Delegation
 * //           id: "STRING_VALUE",
 * //           assessmentName: "STRING_VALUE",
 * //           assessmentId: "STRING_VALUE",
 * //           status: "IN_PROGRESS" || "UNDER_REVIEW" || "COMPLETE",
 * //           roleArn: "STRING_VALUE",
 * //           roleType: "PROCESS_OWNER" || "RESOURCE_OWNER",
 * //           creationTime: new Date("TIMESTAMP"),
 * //           lastUpdated: new Date("TIMESTAMP"),
 * //           controlSetId: "STRING_VALUE",
 * //           comment: "STRING_VALUE",
 * //           createdBy: "STRING_VALUE",
 * //         },
 * //       ],
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdated: new Date("TIMESTAMP"),
 * //     },
 * //     framework: { // AssessmentFramework
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       metadata: { // FrameworkMetadata
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         logo: "STRING_VALUE",
 * //         complianceType: "STRING_VALUE",
 * //       },
 * //       controlSets: [ // AssessmentControlSets
 * //         { // AssessmentControlSet
 * //           id: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           status: "ACTIVE" || "UNDER_REVIEW" || "REVIEWED",
 * //           roles: [
 * //             {
 * //               roleType: "PROCESS_OWNER" || "RESOURCE_OWNER", // required
 * //               roleArn: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           controls: [ // AssessmentControls
 * //             { // AssessmentControl
 * //               id: "STRING_VALUE",
 * //               name: "STRING_VALUE",
 * //               description: "STRING_VALUE",
 * //               status: "UNDER_REVIEW" || "REVIEWED" || "INACTIVE",
 * //               response: "MANUAL" || "AUTOMATE" || "DEFER" || "IGNORE",
 * //               comments: [ // ControlComments
 * //                 { // ControlComment
 * //                   authorName: "STRING_VALUE",
 * //                   commentBody: "STRING_VALUE",
 * //                   postedDate: new Date("TIMESTAMP"),
 * //                 },
 * //               ],
 * //               evidenceSources: [ // EvidenceSources
 * //                 "STRING_VALUE",
 * //               ],
 * //               evidenceCount: Number("int"),
 * //               assessmentReportEvidenceCount: Number("int"),
 * //             },
 * //           ],
 * //           delegations: [
 * //             {
 * //               id: "STRING_VALUE",
 * //               assessmentName: "STRING_VALUE",
 * //               assessmentId: "STRING_VALUE",
 * //               status: "IN_PROGRESS" || "UNDER_REVIEW" || "COMPLETE",
 * //               roleArn: "STRING_VALUE",
 * //               roleType: "PROCESS_OWNER" || "RESOURCE_OWNER",
 * //               creationTime: new Date("TIMESTAMP"),
 * //               lastUpdated: new Date("TIMESTAMP"),
 * //               controlSetId: "STRING_VALUE",
 * //               comment: "STRING_VALUE",
 * //               createdBy: "STRING_VALUE",
 * //             },
 * //           ],
 * //           systemEvidenceCount: Number("int"),
 * //           manualEvidenceCount: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAssessmentCommandInput - {@link CreateAssessmentCommandInput}
 * @returns {@link CreateAssessmentCommandOutput}
 * @see {@link CreateAssessmentCommandInput} for command's `input` shape.
 * @see {@link CreateAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Your account isn't registered with Audit Manager. Check the delegated
 *          administrator setup on the Audit Manager settings page, and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource that's specified in the request can't be found. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've reached your account quota for this resource type. To perform the requested
 *          action, delete some existing resources or <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">request a quota increase</a> from
 *          the Service Quotas console. For a list of Audit Manager service quotas, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and
 *             restrictions for Audit Manager</a>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 * @public
 */
export class CreateAssessmentCommand extends $Command
  .classBuilder<
    CreateAssessmentCommandInput,
    CreateAssessmentCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BedrockAssessmentManagerLambda", "CreateAssessment", {})
  .n("AuditManagerClient", "CreateAssessmentCommand")
  .f(CreateAssessmentRequestFilterSensitiveLog, CreateAssessmentResponseFilterSensitiveLog)
  .ser(se_CreateAssessmentCommand)
  .de(de_CreateAssessmentCommand)
  .build() {}
