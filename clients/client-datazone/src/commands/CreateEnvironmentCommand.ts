// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateEnvironmentInput,
  CreateEnvironmentOutput,
  CreateEnvironmentOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateEnvironmentCommand, se_CreateEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandInput extends CreateEnvironmentInput {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandOutput extends CreateEnvironmentOutput, __MetadataBearer {}

/**
 * <p>Create an Amazon DataZone environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateEnvironmentCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateEnvironmentCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // CreateEnvironmentInput
 *   projectIdentifier: "STRING_VALUE", // required
 *   domainIdentifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   environmentProfileIdentifier: "STRING_VALUE",
 *   userParameters: [ // EnvironmentParametersList
 *     { // EnvironmentParameter
 *       name: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   glossaryTerms: [ // GlossaryTerms
 *     "STRING_VALUE",
 *   ],
 *   environmentAccountIdentifier: "STRING_VALUE",
 *   environmentAccountRegion: "STRING_VALUE",
 *   environmentBlueprintIdentifier: "STRING_VALUE",
 *   deploymentOrder: Number("int"),
 *   environmentConfigurationId: "STRING_VALUE",
 * };
 * const command = new CreateEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentOutput
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
 * @param CreateEnvironmentCommandInput - {@link CreateEnvironmentCommandInput}
 * @returns {@link CreateEnvironmentCommandOutput}
 * @see {@link CreateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentCommandOutput} for command's `response` shape.
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
export class CreateEnvironmentCommand extends $Command
  .classBuilder<
    CreateEnvironmentCommandInput,
    CreateEnvironmentCommandOutput,
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
  .s("DataZone", "CreateEnvironment", {})
  .n("DataZoneClient", "CreateEnvironmentCommand")
  .f(void 0, CreateEnvironmentOutputFilterSensitiveLog)
  .ser(se_CreateEnvironmentCommand)
  .de(de_CreateEnvironmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEnvironmentInput;
      output: CreateEnvironmentOutput;
    };
    sdk: {
      input: CreateEnvironmentCommandInput;
      output: CreateEnvironmentCommandOutput;
    };
  };
}
