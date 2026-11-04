// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProjectProfileInput } from "../models/models_0";
import type { CreateProjectProfileOutput } from "../models/models_1";
import { CreateProjectProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateProjectProfileCommand}.
 */
export interface CreateProjectProfileCommandInput extends CreateProjectProfileInput {}
/**
 * @public
 *
 * The output of {@link CreateProjectProfileCommand}.
 */
export interface CreateProjectProfileCommandOutput extends CreateProjectProfileOutput, __MetadataBearer {}

/**
 * Creates a project profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateProjectProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateProjectProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateProjectProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   status: "ENABLED" || "DISABLED",
 *   projectResourceTags: [ // ProjectResourceTagParameters
 *     { // ResourceTagParameter
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *       isValueEditable: true || false, // required
 *     },
 *   ],
 *   allowCustomProjectResourceTags: true || false,
 *   projectResourceTagsDescription: "STRING_VALUE",
 *   environmentConfigurations: [ // EnvironmentConfigurationsList
 *     { // EnvironmentConfiguration
 *       name: "STRING_VALUE", // required
 *       id: "STRING_VALUE",
 *       environmentBlueprintId: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       deploymentMode: "ON_CREATE" || "ON_DEMAND",
 *       configurationParameters: { // EnvironmentConfigurationParametersDetails
 *         ssmPath: "STRING_VALUE",
 *         parameterOverrides: [ // EnvironmentConfigurationParametersList
 *           { // EnvironmentConfigurationParameter
 *             name: "STRING_VALUE",
 *             value: "STRING_VALUE",
 *             isEditable: true || false,
 *           },
 *         ],
 *         resolvedParameters: [
 *           {
 *             name: "STRING_VALUE",
 *             value: "STRING_VALUE",
 *             isEditable: true || false,
 *           },
 *         ],
 *       },
 *       awsAccount: { // AwsAccount Union: only one key present
 *         awsAccountId: "STRING_VALUE",
 *         awsAccountIdPath: "STRING_VALUE",
 *       },
 *       accountPools: [ // AccountPoolList
 *         "STRING_VALUE",
 *       ],
 *       awsRegion: { // Region Union: only one key present
 *         regionName: "STRING_VALUE",
 *         regionNamePath: "STRING_VALUE",
 *       },
 *       deploymentOrder: Number("int"),
 *     },
 *   ],
 *   domainUnitIdentifier: "STRING_VALUE",
 * };
 * const command = new CreateProjectProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateProjectProfileOutput
 * //   domainId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   status: "ENABLED" || "DISABLED",
 * //   projectResourceTags: [ // ProjectResourceTagParameters
 * //     { // ResourceTagParameter
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //       isValueEditable: true || false, // required
 * //     },
 * //   ],
 * //   allowCustomProjectResourceTags: true || false,
 * //   projectResourceTagsDescription: "STRING_VALUE",
 * //   environmentConfigurations: [ // EnvironmentConfigurationsList
 * //     { // EnvironmentConfiguration
 * //       name: "STRING_VALUE", // required
 * //       id: "STRING_VALUE",
 * //       environmentBlueprintId: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       deploymentMode: "ON_CREATE" || "ON_DEMAND",
 * //       configurationParameters: { // EnvironmentConfigurationParametersDetails
 * //         ssmPath: "STRING_VALUE",
 * //         parameterOverrides: [ // EnvironmentConfigurationParametersList
 * //           { // EnvironmentConfigurationParameter
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //             isEditable: true || false,
 * //           },
 * //         ],
 * //         resolvedParameters: [
 * //           {
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //             isEditable: true || false,
 * //           },
 * //         ],
 * //       },
 * //       awsAccount: { // AwsAccount Union: only one key present
 * //         awsAccountId: "STRING_VALUE",
 * //         awsAccountIdPath: "STRING_VALUE",
 * //       },
 * //       accountPools: [ // AccountPoolList
 * //         "STRING_VALUE",
 * //       ],
 * //       awsRegion: { // Region Union: only one key present
 * //         regionName: "STRING_VALUE",
 * //         regionNamePath: "STRING_VALUE",
 * //       },
 * //       deploymentOrder: Number("int"),
 * //     },
 * //   ],
 * //   createdBy: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   domainUnitId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateProjectProfileCommandInput - {@link CreateProjectProfileCommandInput}
 * @returns {@link CreateProjectProfileCommandOutput}
 * @see {@link CreateProjectProfileCommandInput} for command's `input` shape.
 * @see {@link CreateProjectProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request has exceeded the specified service quota.
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
export class CreateProjectProfileCommand extends command<CreateProjectProfileCommandInput, CreateProjectProfileCommandOutput>(
  _ep0,
  _mw0,
  "CreateProjectProfile",
  CreateProjectProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProjectProfileInput;
      output: CreateProjectProfileOutput;
    };
    sdk: {
      input: CreateProjectProfileCommandInput;
      output: CreateProjectProfileCommandOutput;
    };
  };
}
