// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateEnvironmentInput,
  UpdateEnvironmentOutput,
  UpdateEnvironmentOutputFilterSensitiveLog,
} from "../models/models_2";
import { de_UpdateEnvironmentCommand, se_UpdateEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandInput extends UpdateEnvironmentInput {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandOutput extends UpdateEnvironmentOutput, __MetadataBearer {}

/**
 * <p>Updates the specified environment in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateEnvironmentCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateEnvironmentCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // UpdateEnvironmentInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   glossaryTerms: [ // GlossaryTerms
 *     "STRING_VALUE",
 *   ],
 *   blueprintVersion: "STRING_VALUE",
 *   userParameters: [ // EnvironmentParametersList
 *     { // EnvironmentParameter
 *       name: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentOutput
 * //   projectId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE",
 * //   domainId: "STRING_VALUE", // required
 * //   createdBy: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   environmentProfileId: "STRING_VALUE",
 * //   awsAccountId: "STRING_VALUE",
 * //   awsAccountRegion: "STRING_VALUE",
 * //   provider: "STRING_VALUE", // required
 * //   provisionedResources: [ // ResourceList
 * //     { // Resource
 * //       provider: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       value: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   status: "ACTIVE" || "CREATING" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED" || "VALIDATION_FAILED" || "SUSPENDED" || "DISABLED" || "EXPIRED" || "DELETED" || "INACCESSIBLE",
 * //   environmentActions: [ // EnvironmentActionList
 * //     { // ConfigurableEnvironmentAction
 * //       type: "STRING_VALUE", // required
 * //       auth: "IAM" || "HTTPS",
 * //       parameters: [ // ConfigurableActionParameterList // required
 * //         { // ConfigurableActionParameter
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   glossaryTerms: [ // GlossaryTerms
 * //     "STRING_VALUE",
 * //   ],
 * //   userParameters: [ // CustomParameterList
 * //     { // CustomParameter
 * //       keyName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       fieldType: "STRING_VALUE", // required
 * //       defaultValue: "STRING_VALUE",
 * //       isEditable: true || false,
 * //       isOptional: true || false,
 * //     },
 * //   ],
 * //   lastDeployment: { // Deployment
 * //     deploymentId: "STRING_VALUE",
 * //     deploymentType: "CREATE" || "UPDATE" || "DELETE",
 * //     deploymentStatus: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "PENDING_DEPLOYMENT",
 * //     failureReason: { // EnvironmentError
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE", // required
 * //     },
 * //     messages: [ // DeploymentMessagesList
 * //       "STRING_VALUE",
 * //     ],
 * //     isDeploymentComplete: true || false,
 * //   },
 * //   provisioningProperties: { // ProvisioningProperties Union: only one key present
 * //     cloudFormation: { // CloudFormationProperties
 * //       templateUrl: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   deploymentProperties: { // DeploymentProperties
 * //     startTimeoutMinutes: Number("int"),
 * //     endTimeoutMinutes: Number("int"),
 * //   },
 * //   environmentBlueprintId: "STRING_VALUE",
 * //   environmentConfigurationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateEnvironmentCommandInput - {@link UpdateEnvironmentCommandInput}
 * @returns {@link UpdateEnvironmentCommandOutput}
 * @see {@link UpdateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateEnvironmentCommand extends $Command
  .classBuilder<
    UpdateEnvironmentCommandInput,
    UpdateEnvironmentCommandOutput,
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
  .s("DataZone", "UpdateEnvironment", {})
  .n("DataZoneClient", "UpdateEnvironmentCommand")
  .f(void 0, UpdateEnvironmentOutputFilterSensitiveLog)
  .ser(se_UpdateEnvironmentCommand)
  .de(de_UpdateEnvironmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnvironmentInput;
      output: UpdateEnvironmentOutput;
    };
    sdk: {
      input: UpdateEnvironmentCommandInput;
      output: UpdateEnvironmentCommandOutput;
    };
  };
}
