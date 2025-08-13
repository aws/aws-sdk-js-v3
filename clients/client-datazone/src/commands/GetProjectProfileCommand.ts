// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetProjectProfileInput,
  GetProjectProfileOutput,
  GetProjectProfileOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_GetProjectProfileCommand, se_GetProjectProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProjectProfileCommand}.
 */
export interface GetProjectProfileCommandInput extends GetProjectProfileInput {}
/**
 * @public
 *
 * The output of {@link GetProjectProfileCommand}.
 */
export interface GetProjectProfileCommandOutput extends GetProjectProfileOutput, __MetadataBearer {}

/**
 * <p>The details of the project profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetProjectProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetProjectProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetProjectProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetProjectProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetProjectProfileOutput
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
 * @param GetProjectProfileCommandInput - {@link GetProjectProfileCommandInput}
 * @returns {@link GetProjectProfileCommandOutput}
 * @see {@link GetProjectProfileCommandInput} for command's `input` shape.
 * @see {@link GetProjectProfileCommandOutput} for command's `response` shape.
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
export class GetProjectProfileCommand extends $Command
  .classBuilder<
    GetProjectProfileCommandInput,
    GetProjectProfileCommandOutput,
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
  .s("DataZone", "GetProjectProfile", {})
  .n("DataZoneClient", "GetProjectProfileCommand")
  .f(void 0, GetProjectProfileOutputFilterSensitiveLog)
  .ser(se_GetProjectProfileCommand)
  .de(de_GetProjectProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProjectProfileInput;
      output: GetProjectProfileOutput;
    };
    sdk: {
      input: GetProjectProfileCommandInput;
      output: GetProjectProfileCommandOutput;
    };
  };
}
