// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetEnvironmentBlueprintConfigurationInput,
  GetEnvironmentBlueprintConfigurationOutput,
} from "../models/models_1";
import {
  de_GetEnvironmentBlueprintConfigurationCommand,
  se_GetEnvironmentBlueprintConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEnvironmentBlueprintConfigurationCommand}.
 */
export interface GetEnvironmentBlueprintConfigurationCommandInput extends GetEnvironmentBlueprintConfigurationInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentBlueprintConfigurationCommand}.
 */
export interface GetEnvironmentBlueprintConfigurationCommandOutput
  extends GetEnvironmentBlueprintConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Gets the blueprint configuration in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetEnvironmentBlueprintConfigurationCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetEnvironmentBlueprintConfigurationCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetEnvironmentBlueprintConfigurationInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentBlueprintIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentBlueprintConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentBlueprintConfigurationOutput
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
 * @param GetEnvironmentBlueprintConfigurationCommandInput - {@link GetEnvironmentBlueprintConfigurationCommandInput}
 * @returns {@link GetEnvironmentBlueprintConfigurationCommandOutput}
 * @see {@link GetEnvironmentBlueprintConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentBlueprintConfigurationCommandOutput} for command's `response` shape.
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
export class GetEnvironmentBlueprintConfigurationCommand extends $Command
  .classBuilder<
    GetEnvironmentBlueprintConfigurationCommandInput,
    GetEnvironmentBlueprintConfigurationCommandOutput,
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
  .s("DataZone", "GetEnvironmentBlueprintConfiguration", {})
  .n("DataZoneClient", "GetEnvironmentBlueprintConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetEnvironmentBlueprintConfigurationCommand)
  .de(de_GetEnvironmentBlueprintConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnvironmentBlueprintConfigurationInput;
      output: GetEnvironmentBlueprintConfigurationOutput;
    };
    sdk: {
      input: GetEnvironmentBlueprintConfigurationCommandInput;
      output: GetEnvironmentBlueprintConfigurationCommandOutput;
    };
  };
}
