// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutEnvironmentBlueprintConfigurationInput,
  PutEnvironmentBlueprintConfigurationOutput,
} from "../models/models_1";
import { PutEnvironmentBlueprintConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutEnvironmentBlueprintConfigurationCommand}.
 */
export interface PutEnvironmentBlueprintConfigurationCommandInput extends PutEnvironmentBlueprintConfigurationInput {}
/**
 * @public
 *
 * The output of {@link PutEnvironmentBlueprintConfigurationCommand}.
 */
export interface PutEnvironmentBlueprintConfigurationCommandOutput
  extends PutEnvironmentBlueprintConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Writes the configuration for the specified environment blueprint in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, PutEnvironmentBlueprintConfigurationCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, PutEnvironmentBlueprintConfigurationCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // PutEnvironmentBlueprintConfigurationInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentBlueprintIdentifier: "STRING_VALUE", // required
 *   provisioningRoleArn: "STRING_VALUE",
 *   manageAccessRoleArn: "STRING_VALUE",
 *   environmentRolePermissionBoundary: "STRING_VALUE",
 *   enabledRegions: [ // EnabledRegionList // required
 *     "STRING_VALUE",
 *   ],
 *   regionalParameters: { // RegionalParameterMap
 *     "<keys>": { // RegionalParameter
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   globalParameters: { // GlobalParameterMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   provisioningConfigurations: [ // ProvisioningConfigurationList
 *     { // ProvisioningConfiguration Union: only one key present
 *       lakeFormationConfiguration: { // LakeFormationConfiguration
 *         locationRegistrationRole: "STRING_VALUE",
 *         locationRegistrationExcludeS3Locations: [ // S3LocationList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 * };
 * const command = new PutEnvironmentBlueprintConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutEnvironmentBlueprintConfigurationOutput
 * //   domainId: "STRING_VALUE", // required
 * //   environmentBlueprintId: "STRING_VALUE", // required
 * //   provisioningRoleArn: "STRING_VALUE",
 * //   environmentRolePermissionBoundary: "STRING_VALUE",
 * //   manageAccessRoleArn: "STRING_VALUE",
 * //   enabledRegions: [ // EnabledRegionList
 * //     "STRING_VALUE",
 * //   ],
 * //   regionalParameters: { // RegionalParameterMap
 * //     "<keys>": { // RegionalParameter
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   provisioningConfigurations: [ // ProvisioningConfigurationList
 * //     { // ProvisioningConfiguration Union: only one key present
 * //       lakeFormationConfiguration: { // LakeFormationConfiguration
 * //         locationRegistrationRole: "STRING_VALUE",
 * //         locationRegistrationExcludeS3Locations: [ // S3LocationList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutEnvironmentBlueprintConfigurationCommandInput - {@link PutEnvironmentBlueprintConfigurationCommandInput}
 * @returns {@link PutEnvironmentBlueprintConfigurationCommandOutput}
 * @see {@link PutEnvironmentBlueprintConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutEnvironmentBlueprintConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
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
export class PutEnvironmentBlueprintConfigurationCommand extends $Command
  .classBuilder<
    PutEnvironmentBlueprintConfigurationCommandInput,
    PutEnvironmentBlueprintConfigurationCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "PutEnvironmentBlueprintConfiguration", {})
  .n("DataZoneClient", "PutEnvironmentBlueprintConfigurationCommand")
  .sc(PutEnvironmentBlueprintConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEnvironmentBlueprintConfigurationInput;
      output: PutEnvironmentBlueprintConfigurationOutput;
    };
    sdk: {
      input: PutEnvironmentBlueprintConfigurationCommandInput;
      output: PutEnvironmentBlueprintConfigurationCommandOutput;
    };
  };
}
