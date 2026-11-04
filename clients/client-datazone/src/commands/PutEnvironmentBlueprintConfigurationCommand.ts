// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutEnvironmentBlueprintConfigurationInput,
  PutEnvironmentBlueprintConfigurationOutput,
} from "../models/models_1";
import { PutEnvironmentBlueprintConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface PutEnvironmentBlueprintConfigurationCommandOutput extends PutEnvironmentBlueprintConfigurationOutput, __MetadataBearer {}

/**
 * Writes the configuration for the specified environment blueprint in Amazon DataZone.
 *
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
 *   resourceConfigurations: [ // PutResourceConfigurations
 *     { // PutResourceConfiguration
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       region: "STRING_VALUE", // required
 *       parameters: { // ResourceConfigurationParameterMap // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   allowUserProvidedConfigurations: true || false,
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
 * @param PutEnvironmentBlueprintConfigurationCommandInput - {@link PutEnvironmentBlueprintConfigurationCommandInput}
 * @returns {@link PutEnvironmentBlueprintConfigurationCommandOutput}
 * @see {@link PutEnvironmentBlueprintConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutEnvironmentBlueprintConfigurationCommandOutput} for command's `response` shape.
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
export class PutEnvironmentBlueprintConfigurationCommand extends command<PutEnvironmentBlueprintConfigurationCommandInput, PutEnvironmentBlueprintConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutEnvironmentBlueprintConfiguration",
  PutEnvironmentBlueprintConfiguration$
) {
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
