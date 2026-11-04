// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWorkloadInput, CreateWorkloadOutput } from "../models/models_0";
import { CreateWorkload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Create a new workload.
 *
 * The owner of a workload can share the workload with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it.
 *
 * For more information, see [Defining a Workload](https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html) in the *Well-Architected Tool User Guide*.
 *
 * > **Important:**
 * >
 * > Either `AwsRegions`, `NonAwsRegions`, or both must be specified when creating a workload.
 * >
 * > You also must specify `ReviewOwner`, even though the parameter is listed as not being required in the following section.
 *
 * When creating a workload using a review template, you must have the following IAM permissions:
 *
 * - `wellarchitected:GetReviewTemplate`
 * - `wellarchitected:GetReviewTemplateAnswer`
 * - `wellarchitected:ListReviewTemplateAnswers`
 * - `wellarchitected:GetReviewTemplateLensReview`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateWorkloadCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateWorkloadCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
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
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The user has reached their resource quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class CreateWorkloadCommand extends command<CreateWorkloadCommandInput, CreateWorkloadCommandOutput>(
  _ep0,
  _mw0,
  "CreateWorkload",
  CreateWorkload$
) {
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
