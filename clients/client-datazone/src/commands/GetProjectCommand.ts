// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetProjectInput, GetProjectOutput } from "../models/models_1";
import { GetProject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProjectCommand}.
 */
export interface GetProjectCommandInput extends GetProjectInput {}
/**
 * @public
 *
 * The output of {@link GetProjectCommand}.
 */
export interface GetProjectCommandOutput extends GetProjectOutput, __MetadataBearer {}

/**
 * Gets a project in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetProjectCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetProjectCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetProjectInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetProjectCommand(input);
 * const response = await client.send(command);
 * // { // GetProjectOutput
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
 * @param GetProjectCommandInput - {@link GetProjectCommandInput}
 * @returns {@link GetProjectCommandOutput}
 * @see {@link GetProjectCommandInput} for command's `input` shape.
 * @see {@link GetProjectCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
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
export class GetProjectCommand extends command<GetProjectCommandInput, GetProjectCommandOutput>(
  _ep0,
  _mw0,
  "GetProject",
  GetProject$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProjectInput;
      output: GetProjectOutput;
    };
    sdk: {
      input: GetProjectCommandInput;
      output: GetProjectCommandOutput;
    };
  };
}
