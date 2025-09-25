// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetProjectInput, GetProjectOutput } from "../models/models_1";
import { GetProject } from "../schemas/schemas_13_Project";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets a project in Amazon DataZone.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class GetProjectCommand extends $Command
  .classBuilder<
    GetProjectCommandInput,
    GetProjectCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "GetProject", {})
  .n("DataZoneClient", "GetProjectCommand")
  .sc(GetProject)
  .build() {
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
