// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateProjectInput,
  UpdateProjectInputFilterSensitiveLog,
  UpdateProjectOutput,
  UpdateProjectOutputFilterSensitiveLog,
} from "../models/models_2";
import { de_UpdateProjectCommand, se_UpdateProjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProjectCommand}.
 */
export interface UpdateProjectCommandInput extends UpdateProjectInput {}
/**
 * @public
 *
 * The output of {@link UpdateProjectCommand}.
 */
export interface UpdateProjectCommandOutput extends UpdateProjectOutput, __MetadataBearer {}

/**
 * <p>Updates the specified project in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateProjectCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateProjectCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // UpdateProjectInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   glossaryTerms: [ // GlossaryTerms
 *     "STRING_VALUE",
 *   ],
 *   domainUnitId: "STRING_VALUE",
 *   environmentDeploymentDetails: { // EnvironmentDeploymentDetails
 *     overallDeploymentStatus: "PENDING_DEPLOYMENT" || "IN_PROGRESS" || "SUCCESSFUL" || "FAILED_VALIDATION" || "FAILED_DEPLOYMENT",
 *     environmentFailureReasons: { // EnvironmentFailureReasons
 *       "<keys>": [ // EnvironmentFailureReasonsList
 *         { // EnvironmentError
 *           code: "STRING_VALUE",
 *           message: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   userParameters: [ // EnvironmentConfigurationUserParametersList
 *     { // EnvironmentConfigurationUserParameter
 *       environmentId: "STRING_VALUE",
 *       environmentConfigurationName: "STRING_VALUE",
 *       environmentParameters: [ // EnvironmentParametersList
 *         { // EnvironmentParameter
 *           name: "STRING_VALUE",
 *           value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   projectProfileVersion: "STRING_VALUE",
 * };
 * const command = new UpdateProjectCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProjectOutput
 * //   domainId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   projectStatus: "ACTIVE" || "DELETING" || "DELETE_FAILED" || "UPDATING" || "UPDATE_FAILED",
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
 * @param UpdateProjectCommandInput - {@link UpdateProjectCommandInput}
 * @returns {@link UpdateProjectCommandOutput}
 * @see {@link UpdateProjectCommandInput} for command's `input` shape.
 * @see {@link UpdateProjectCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
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
export class UpdateProjectCommand extends $Command
  .classBuilder<
    UpdateProjectCommandInput,
    UpdateProjectCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "UpdateProject", {})
  .n("DataZoneClient", "UpdateProjectCommand")
  .f(UpdateProjectInputFilterSensitiveLog, UpdateProjectOutputFilterSensitiveLog)
  .ser(se_UpdateProjectCommand)
  .de(de_UpdateProjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProjectInput;
      output: UpdateProjectOutput;
    };
    sdk: {
      input: UpdateProjectCommandInput;
      output: UpdateProjectCommandOutput;
    };
  };
}
