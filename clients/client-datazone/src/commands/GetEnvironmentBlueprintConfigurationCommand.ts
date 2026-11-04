// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetEnvironmentBlueprintConfigurationInput,
  GetEnvironmentBlueprintConfigurationOutput,
} from "../models/models_1";
import { GetEnvironmentBlueprintConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetEnvironmentBlueprintConfigurationCommandOutput extends GetEnvironmentBlueprintConfigurationOutput, __MetadataBearer {}

/**
 * Gets the blueprint configuration in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetEnvironmentBlueprintConfigurationCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetEnvironmentBlueprintConfigurationCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
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
 * //   allowUserProvidedConfigurations: true || false,
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   resourceConfigurations: [ // ResourceConfigurations
 * //     { // ResourceConfiguration
 * //       identifier: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       region: "STRING_VALUE", // required
 * //       parameters: { // ResourceConfigurationParameterMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
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
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
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
export class GetEnvironmentBlueprintConfigurationCommand extends command<GetEnvironmentBlueprintConfigurationCommandInput, GetEnvironmentBlueprintConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetEnvironmentBlueprintConfiguration",
  GetEnvironmentBlueprintConfiguration$
) {
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
