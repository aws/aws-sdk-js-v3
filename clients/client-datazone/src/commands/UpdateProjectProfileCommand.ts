// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateProjectProfileInput, UpdateProjectProfileOutput } from "../models/models_2";
import { UpdateProjectProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProjectProfileCommand}.
 */
export interface UpdateProjectProfileCommandInput extends UpdateProjectProfileInput {}
/**
 * @public
 *
 * The output of {@link UpdateProjectProfileCommand}.
 */
export interface UpdateProjectProfileCommandOutput extends UpdateProjectProfileOutput, __MetadataBearer {}

/**
 * <p>Updates a project profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateProjectProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateProjectProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateProjectProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
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
 * const command = new UpdateProjectProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProjectProfileOutput
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
 * @param UpdateProjectProfileCommandInput - {@link UpdateProjectProfileCommandInput}
 * @returns {@link UpdateProjectProfileCommandOutput}
 * @see {@link UpdateProjectProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateProjectProfileCommandOutput} for command's `response` shape.
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
export class UpdateProjectProfileCommand extends $Command
  .classBuilder<
    UpdateProjectProfileCommandInput,
    UpdateProjectProfileCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "UpdateProjectProfile", {})
  .n("DataZoneClient", "UpdateProjectProfileCommand")
  .sc(UpdateProjectProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProjectProfileInput;
      output: UpdateProjectProfileOutput;
    };
    sdk: {
      input: UpdateProjectProfileCommandInput;
      output: UpdateProjectProfileCommandOutput;
    };
  };
}
