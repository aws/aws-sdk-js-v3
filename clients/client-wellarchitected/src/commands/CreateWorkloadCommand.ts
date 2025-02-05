// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWorkloadInput, CreateWorkloadOutput } from "../models/models_0";
import { de_CreateWorkloadCommand, se_CreateWorkloadCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkloadCommand}.
 */
export interface CreateWorkloadCommandInput extends CreateWorkloadInput {}
/**
 * @public
 *
 * The output of {@link CreateWorkloadCommand}.
 */
export interface CreateWorkloadCommandOutput extends CreateWorkloadOutput, __MetadataBearer {}

/**
 * <p>Create a new workload.</p>
 *          <p>The owner of a workload can share the workload with other Amazon Web Services accounts, users,
 *             an organization, and organizational units (OUs)
 *             in the same Amazon Web Services Region. Only the owner of a workload can delete it.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the
 *                 <i>Well-Architected Tool User Guide</i>.</p>
 *          <important>
 *             <p>Either <code>AwsRegions</code>, <code>NonAwsRegions</code>, or both must be specified when
 *                 creating a workload.</p>
 *             <p>You also must specify <code>ReviewOwner</code>, even though the
 *                 parameter is listed as not being required in the following section.
 *             </p>
 *          </important>
 *          <p>When creating a workload using a review template, you must have the following IAM permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>wellarchitected:GetReviewTemplate</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>wellarchitected:GetReviewTemplateAnswer</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>wellarchitected:ListReviewTemplateAnswers</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>wellarchitected:GetReviewTemplateLensReview</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateWorkloadCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateWorkloadCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateWorkloadInput
 *   WorkloadName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Environment: "PRODUCTION" || "PREPRODUCTION", // required
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
 *   IndustryType: "STRING_VALUE",
 *   Industry: "STRING_VALUE",
 *   Lenses: [ // WorkloadLenses // required
 *     "STRING_VALUE",
 *   ],
 *   Notes: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DiscoveryConfig: { // WorkloadDiscoveryConfig
 *     TrustedAdvisorIntegrationStatus: "ENABLED" || "DISABLED",
 *     WorkloadResourceDefinition: [ // WorkloadResourceDefinition
 *       "WORKLOAD_METADATA" || "APP_REGISTRY",
 *     ],
 *   },
 *   Applications: [ // WorkloadApplications
 *     "STRING_VALUE",
 *   ],
 *   ProfileArns: [ // WorkloadProfileArns
 *     "STRING_VALUE",
 *   ],
 *   ReviewTemplateArns: [ // ReviewTemplateArns
 *     "STRING_VALUE",
 *   ],
 *   JiraConfiguration: { // WorkloadJiraConfigurationInput
 *     IssueManagementStatus: "ENABLED" || "DISABLED" || "INHERIT",
 *     IssueManagementType: "AUTO" || "MANUAL",
 *     JiraProjectKey: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateWorkloadCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkloadOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   WorkloadArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWorkloadCommandInput - {@link CreateWorkloadCommandInput}
 * @returns {@link CreateWorkloadCommandOutput}
 * @see {@link CreateWorkloadCommandInput} for command's `input` shape.
 * @see {@link CreateWorkloadCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
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
 * @public
 */
export class CreateWorkloadCommand extends $Command
  .classBuilder<
    CreateWorkloadCommandInput,
    CreateWorkloadCommandOutput,
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
  .s("WellArchitectedApiServiceLambda", "CreateWorkload", {})
  .n("WellArchitectedClient", "CreateWorkloadCommand")
  .f(void 0, void 0)
  .ser(se_CreateWorkloadCommand)
  .de(de_CreateWorkloadCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkloadInput;
      output: CreateWorkloadOutput;
    };
    sdk: {
      input: CreateWorkloadCommandInput;
      output: CreateWorkloadCommandOutput;
    };
  };
}
