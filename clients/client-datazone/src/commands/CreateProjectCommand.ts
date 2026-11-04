// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProjectInput, CreateProjectOutput } from "../models/models_0";
import { CreateProject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateProjectCommand}.
 */
export interface CreateProjectCommandInput extends CreateProjectInput {}
/**
 * @public
 *
 * The output of {@link CreateProjectCommand}.
 */
export interface CreateProjectCommandOutput extends CreateProjectOutput, __MetadataBearer {}

/**
 * Creates an Amazon DataZone project.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateProjectCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateProjectCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateProjectInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   resourceTags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   glossaryTerms: [ // GlossaryTerms
 *     "STRING_VALUE",
 *   ],
 *   domainUnitId: "STRING_VALUE",
 *   projectProfileId: "STRING_VALUE",
 *   userParameters: [ // EnvironmentConfigurationUserParametersList
 *     { // EnvironmentConfigurationUserParameter
 *       environmentId: "STRING_VALUE",
 *       environmentResolvedAccount: { // EnvironmentResolvedAccount
 *         awsAccountId: "STRING_VALUE", // required
 *         regionName: "STRING_VALUE", // required
 *         sourceAccountPoolId: "STRING_VALUE",
 *       },
 *       environmentConfigurationName: "STRING_VALUE",
 *       environmentParameters: [ // EnvironmentParametersList
 *         { // EnvironmentParameter
 *           name: "STRING_VALUE",
 *           value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   projectCategory: "STRING_VALUE",
 *   projectExecutionRole: "STRING_VALUE",
 *   membershipAssignments: [ // ProjectMembershipAssignments
 *     { // ProjectMembershipAssignment
 *       member: { // Member Union: only one key present
 *         userIdentifier: "STRING_VALUE",
 *         groupIdentifier: "STRING_VALUE",
 *       },
 *       designation: "PROJECT_OWNER" || "PROJECT_CONTRIBUTOR" || "PROJECT_CATALOG_VIEWER" || "PROJECT_CATALOG_CONSUMER" || "PROJECT_CATALOG_STEWARD" || "USER_CREATED_DESIGNATION", // required
 *       userCreatedDesignationId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateProjectCommand(input);
 * const response = await client.send(command);
 * // { // CreateProjectOutput
 * //   domainId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   projectStatus: "ACTIVE" || "DELETING" || "DELETE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "MOVING",
 * //   failureReasons: [ // FailureReasons
 * //     { // ProjectDeletionError
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   createdBy: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   resourceTags: [ // ResourceTags
 * //     { // ResourceTag
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //       source: "PROJECT" || "PROJECT_PROFILE", // required
 * //     },
 * //   ],
 * //   glossaryTerms: [ // GlossaryTerms
 * //     "STRING_VALUE",
 * //   ],
 * //   domainUnitId: "STRING_VALUE",
 * //   projectProfileId: "STRING_VALUE",
 * //   userParameters: [ // EnvironmentConfigurationUserParametersList
 * //     { // EnvironmentConfigurationUserParameter
 * //       environmentId: "STRING_VALUE",
 * //       environmentResolvedAccount: { // EnvironmentResolvedAccount
 * //         awsAccountId: "STRING_VALUE", // required
 * //         regionName: "STRING_VALUE", // required
 * //         sourceAccountPoolId: "STRING_VALUE",
 * //       },
 * //       environmentConfigurationName: "STRING_VALUE",
 * //       environmentParameters: [ // EnvironmentParametersList
 * //         { // EnvironmentParameter
 * //           name: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   environmentDeploymentDetails: { // EnvironmentDeploymentDetails
 * //     overallDeploymentStatus: "PENDING_DEPLOYMENT" || "IN_PROGRESS" || "SUCCESSFUL" || "FAILED_VALIDATION" || "FAILED_DEPLOYMENT",
 * //     environmentFailureReasons: { // EnvironmentFailureReasons
 * //       "<keys>": [ // EnvironmentFailureReasonsList
 * //         { // EnvironmentError
 * //           code: "STRING_VALUE",
 * //           message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   projectCategory: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateProjectCommandInput - {@link CreateProjectCommandInput}
 * @returns {@link CreateProjectCommandOutput}
 * @see {@link CreateProjectCommandInput} for command's `input` shape.
 * @see {@link CreateProjectCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request has exceeded the specified service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class CreateProjectCommand extends command<CreateProjectCommandInput, CreateProjectCommandOutput>(
  _ep0,
  _mw0,
  "CreateProject",
  CreateProject$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProjectInput;
      output: CreateProjectOutput;
    };
    sdk: {
      input: CreateProjectCommandInput;
      output: CreateProjectCommandOutput;
    };
  };
}
