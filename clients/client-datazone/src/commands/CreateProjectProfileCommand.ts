// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateProjectProfileInput,
  CreateProjectProfileInputFilterSensitiveLog,
  CreateProjectProfileOutput,
  CreateProjectProfileOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateProjectProfileCommand, se_CreateProjectProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a project profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateProjectProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateProjectProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // CreateProjectProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   status: "ENABLED" || "DISABLED",
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
export class CreateProjectProfileCommand extends $Command
  .classBuilder<
    CreateProjectProfileCommandInput,
    CreateProjectProfileCommandOutput,
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
  .s("DataZone", "CreateProjectProfile", {})
  .n("DataZoneClient", "CreateProjectProfileCommand")
  .f(CreateProjectProfileInputFilterSensitiveLog, CreateProjectProfileOutputFilterSensitiveLog)
  .ser(se_CreateProjectProfileCommand)
  .de(de_CreateProjectProfileCommand)
  .build() {
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
