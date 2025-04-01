// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DescribeConnectionTypeRequest, DescribeConnectionTypeResponse } from "../models/models_1";
import { de_DescribeConnectionTypeCommand, se_DescribeConnectionTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectionTypeCommand}.
 */
export interface DescribeConnectionTypeCommandInput extends DescribeConnectionTypeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectionTypeCommand}.
 */
export interface DescribeConnectionTypeCommandOutput extends DescribeConnectionTypeResponse, __MetadataBearer {}

/**
 * <p>The <code>DescribeConnectionType</code> API provides full details of the supported options for a given connection type in Glue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DescribeConnectionTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DescribeConnectionTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // DescribeConnectionTypeRequest
 *   ConnectionType: "STRING_VALUE", // required
 * };
 * const command = new DescribeConnectionTypeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectionTypeResponse
 * //   ConnectionType: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Capabilities: { // Capabilities
 * //     SupportedAuthenticationTypes: [ // AuthenticationTypes // required
 * //       "BASIC" || "OAUTH2" || "CUSTOM" || "IAM",
 * //     ],
 * //     SupportedDataOperations: [ // DataOperations // required
 * //       "READ" || "WRITE",
 * //     ],
 * //     SupportedComputeEnvironments: [ // ComputeEnvironments // required
 * //       "SPARK" || "ATHENA" || "PYTHON",
 * //     ],
 * //   },
 * //   ConnectionProperties: { // PropertiesMap
 * //     "<keys>": { // Property
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       Required: true || false, // required
 * //       DefaultValue: "STRING_VALUE",
 * //       PropertyTypes: [ // PropertyTypes // required
 * //         "USER_INPUT" || "SECRET" || "READ_ONLY" || "UNUSED" || "SECRET_OR_USER_INPUT",
 * //       ],
 * //       AllowedValues: [ // AllowedValues
 * //         { // AllowedValue
 * //           Description: "STRING_VALUE",
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       DataOperationScopes: [
 * //         "READ" || "WRITE",
 * //       ],
 * //     },
 * //   },
 * //   ConnectionOptions: {
 * //     "<keys>": {
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       Required: true || false, // required
 * //       DefaultValue: "STRING_VALUE",
 * //       PropertyTypes: [ // required
 * //         "USER_INPUT" || "SECRET" || "READ_ONLY" || "UNUSED" || "SECRET_OR_USER_INPUT",
 * //       ],
 * //       AllowedValues: [
 * //         {
 * //           Description: "STRING_VALUE",
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       DataOperationScopes: [
 * //         "READ" || "WRITE",
 * //       ],
 * //     },
 * //   },
 * //   AuthenticationConfiguration: { // AuthConfiguration
 * //     AuthenticationType: {
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       Required: true || false, // required
 * //       DefaultValue: "STRING_VALUE",
 * //       PropertyTypes: [ // required
 * //         "USER_INPUT" || "SECRET" || "READ_ONLY" || "UNUSED" || "SECRET_OR_USER_INPUT",
 * //       ],
 * //       AllowedValues: [
 * //         {
 * //           Description: "STRING_VALUE",
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       DataOperationScopes: [
 * //         "READ" || "WRITE",
 * //       ],
 * //     },
 * //     SecretArn: {
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       Required: true || false, // required
 * //       DefaultValue: "STRING_VALUE",
 * //       PropertyTypes: [ // required
 * //         "USER_INPUT" || "SECRET" || "READ_ONLY" || "UNUSED" || "SECRET_OR_USER_INPUT",
 * //       ],
 * //       AllowedValues: [
 * //         {
 * //           Description: "STRING_VALUE",
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       DataOperationScopes: [
 * //         "READ" || "WRITE",
 * //       ],
 * //     },
 * //     OAuth2Properties: {
 * //       "<keys>": {
 * //         Name: "STRING_VALUE", // required
 * //         Description: "STRING_VALUE", // required
 * //         Required: true || false, // required
 * //         DefaultValue: "STRING_VALUE",
 * //         PropertyTypes: [ // required
 * //           "USER_INPUT" || "SECRET" || "READ_ONLY" || "UNUSED" || "SECRET_OR_USER_INPUT",
 * //         ],
 * //         AllowedValues: [
 * //           {
 * //             Description: "STRING_VALUE",
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         DataOperationScopes: "<DataOperations>",
 * //       },
 * //     },
 * //     BasicAuthenticationProperties: {
 * //       "<keys>": "<Property>",
 * //     },
 * //     CustomAuthenticationProperties: {
 * //       "<keys>": "<Property>",
 * //     },
 * //   },
 * //   ComputeEnvironmentConfigurations: { // ComputeEnvironmentConfigurationMap
 * //     "<keys>": { // ComputeEnvironmentConfiguration
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       ComputeEnvironment: "SPARK" || "ATHENA" || "PYTHON", // required
 * //       SupportedAuthenticationTypes: [ // required
 * //         "BASIC" || "OAUTH2" || "CUSTOM" || "IAM",
 * //       ],
 * //       ConnectionOptions: "<PropertiesMap>", // required
 * //       ConnectionPropertyNameOverrides: { // PropertyNameOverrides // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ConnectionOptionNameOverrides: { // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ConnectionPropertiesRequiredOverrides: [ // ListOfString // required
 * //         "STRING_VALUE",
 * //       ],
 * //       PhysicalConnectionPropertiesRequired: true || false,
 * //     },
 * //   },
 * //   PhysicalConnectionRequirements: "<PropertiesMap>",
 * //   AthenaConnectionProperties: "<PropertiesMap>",
 * //   PythonConnectionProperties: "<PropertiesMap>",
 * //   SparkConnectionProperties: "<PropertiesMap>",
 * // };
 *
 * ```
 *
 * @param DescribeConnectionTypeCommandInput - {@link DescribeConnectionTypeCommandInput}
 * @returns {@link DescribeConnectionTypeCommandOutput}
 * @see {@link DescribeConnectionTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionTypeCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DescribeConnectionTypeCommand extends $Command
  .classBuilder<
    DescribeConnectionTypeCommandInput,
    DescribeConnectionTypeCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "DescribeConnectionType", {})
  .n("GlueClient", "DescribeConnectionTypeCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConnectionTypeCommand)
  .de(de_DescribeConnectionTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConnectionTypeRequest;
      output: DescribeConnectionTypeResponse;
    };
    sdk: {
      input: DescribeConnectionTypeCommandInput;
      output: DescribeConnectionTypeCommandOutput;
    };
  };
}
