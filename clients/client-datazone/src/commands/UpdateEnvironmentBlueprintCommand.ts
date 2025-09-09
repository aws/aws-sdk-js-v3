// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateEnvironmentBlueprintInput,
  UpdateEnvironmentBlueprintInputFilterSensitiveLog,
  UpdateEnvironmentBlueprintOutput,
  UpdateEnvironmentBlueprintOutputFilterSensitiveLog,
} from "../models/models_2";
import { de_UpdateEnvironmentBlueprintCommand, se_UpdateEnvironmentBlueprintCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEnvironmentBlueprintCommand}.
 */
export interface UpdateEnvironmentBlueprintCommandInput extends UpdateEnvironmentBlueprintInput {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentBlueprintCommand}.
 */
export interface UpdateEnvironmentBlueprintCommandOutput extends UpdateEnvironmentBlueprintOutput, __MetadataBearer {}

/**
 * <p>Updates an environment blueprint in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateEnvironmentBlueprintCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateEnvironmentBlueprintCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // UpdateEnvironmentBlueprintInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   provisioningProperties: { // ProvisioningProperties Union: only one key present
 *     cloudFormation: { // CloudFormationProperties
 *       templateUrl: "STRING_VALUE", // required
 *     },
 *   },
 *   userParameters: [ // CustomParameterList
 *     { // CustomParameter
 *       keyName: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       fieldType: "STRING_VALUE", // required
 *       defaultValue: "STRING_VALUE",
 *       isEditable: true || false,
 *       isOptional: true || false,
 *       isUpdateSupported: true || false,
 *     },
 *   ],
 * };
 * const command = new UpdateEnvironmentBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentBlueprintOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   provider: "STRING_VALUE", // required
 * //   provisioningProperties: { // ProvisioningProperties Union: only one key present
 * //     cloudFormation: { // CloudFormationProperties
 * //       templateUrl: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   deploymentProperties: { // DeploymentProperties
 * //     startTimeoutMinutes: Number("int"),
 * //     endTimeoutMinutes: Number("int"),
 * //   },
 * //   userParameters: [ // CustomParameterList
 * //     { // CustomParameter
 * //       keyName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       fieldType: "STRING_VALUE", // required
 * //       defaultValue: "STRING_VALUE",
 * //       isEditable: true || false,
 * //       isOptional: true || false,
 * //       isUpdateSupported: true || false,
 * //     },
 * //   ],
 * //   glossaryTerms: [ // GlossaryTerms
 * //     "STRING_VALUE",
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateEnvironmentBlueprintCommandInput - {@link UpdateEnvironmentBlueprintCommandInput}
 * @returns {@link UpdateEnvironmentBlueprintCommandOutput}
 * @see {@link UpdateEnvironmentBlueprintCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentBlueprintCommandOutput} for command's `response` shape.
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
export class UpdateEnvironmentBlueprintCommand extends $Command
  .classBuilder<
    UpdateEnvironmentBlueprintCommandInput,
    UpdateEnvironmentBlueprintCommandOutput,
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
  .s("DataZone", "UpdateEnvironmentBlueprint", {})
  .n("DataZoneClient", "UpdateEnvironmentBlueprintCommand")
  .f(UpdateEnvironmentBlueprintInputFilterSensitiveLog, UpdateEnvironmentBlueprintOutputFilterSensitiveLog)
  .ser(se_UpdateEnvironmentBlueprintCommand)
  .de(de_UpdateEnvironmentBlueprintCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnvironmentBlueprintInput;
      output: UpdateEnvironmentBlueprintOutput;
    };
    sdk: {
      input: UpdateEnvironmentBlueprintCommandInput;
      output: UpdateEnvironmentBlueprintCommandOutput;
    };
  };
}
