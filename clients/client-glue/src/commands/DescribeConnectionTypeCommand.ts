// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { DescribeConnectionTypeRequest, DescribeConnectionTypeResponse } from "../models/models_1";
import { DescribeConnectionType$ } from "../schemas/schemas_0";

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
 * <p>The <code>DescribeConnectionType</code> API provides full details of the supported options for a given connection type in Glue. The response includes authentication configuration details that show supported authentication types and properties, and RestConfiguration for custom REST-based connection types registered via <code>RegisterConnectionType</code>.</p>
 *          <p>See also: <code>ListConnectionTypes</code>, <code>RegisterConnectionType</code>, <code>DeleteConnectionType</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DescribeConnectionTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DescribeConnectionTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
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
 * //       KeyOverride: "STRING_VALUE",
 * //       PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
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
 * //       KeyOverride: "STRING_VALUE",
 * //       PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
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
 * //       KeyOverride: "STRING_VALUE",
 * //       PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
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
 * //       KeyOverride: "STRING_VALUE",
 * //       PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
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
 * //         KeyOverride: "STRING_VALUE",
 * //         PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
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
 * //   RestConfiguration: { // RestConfiguration
 * //     GlobalSourceConfiguration: { // SourceConfiguration
 * //       RequestMethod: "GET" || "POST",
 * //       RequestPath: "STRING_VALUE",
 * //       RequestParameters: [ // ConnectorPropertyList
 * //         { // ConnectorProperty
 * //           Name: "STRING_VALUE", // required
 * //           KeyOverride: "STRING_VALUE",
 * //           Required: true || false, // required
 * //           DefaultValue: "STRING_VALUE",
 * //           AllowedValues: [
 * //             "STRING_VALUE",
 * //           ],
 * //           PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
 * //           PropertyType: "USER_INPUT" || "SECRET" || "READ_ONLY" || "UNUSED" || "SECRET_OR_USER_INPUT", // required
 * //         },
 * //       ],
 * //       ResponseConfiguration: { // ResponseConfiguration
 * //         ResultPath: "STRING_VALUE", // required
 * //         ErrorPath: "STRING_VALUE",
 * //       },
 * //       PaginationConfiguration: { // PaginationConfiguration
 * //         CursorConfiguration: { // CursorConfiguration
 * //           NextPage: { // ExtractedParameter
 * //             Key: "STRING_VALUE",
 * //             DefaultValue: "STRING_VALUE",
 * //             PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
 * //             Value: { // ResponseExtractionMapping
 * //               ContentPath: "STRING_VALUE",
 * //               HeaderKey: "STRING_VALUE",
 * //             },
 * //           },
 * //           LimitParameter: {
 * //             Key: "STRING_VALUE",
 * //             DefaultValue: "STRING_VALUE",
 * //             PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
 * //             Value: {
 * //               ContentPath: "STRING_VALUE",
 * //               HeaderKey: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         OffsetConfiguration: { // OffsetConfiguration
 * //           OffsetParameter: {
 * //             Key: "STRING_VALUE",
 * //             DefaultValue: "STRING_VALUE",
 * //             PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
 * //             Value: {
 * //               ContentPath: "STRING_VALUE",
 * //               HeaderKey: "STRING_VALUE",
 * //             },
 * //           },
 * //           LimitParameter: {
 * //             Key: "STRING_VALUE",
 * //             DefaultValue: "STRING_VALUE",
 * //             PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
 * //             Value: {
 * //               ContentPath: "STRING_VALUE",
 * //               HeaderKey: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //     ValidationEndpointConfiguration: {
 * //       RequestMethod: "GET" || "POST",
 * //       RequestPath: "STRING_VALUE",
 * //       RequestParameters: [
 * //         {
 * //           Name: "STRING_VALUE", // required
 * //           KeyOverride: "STRING_VALUE",
 * //           Required: true || false, // required
 * //           DefaultValue: "STRING_VALUE",
 * //           AllowedValues: [
 * //             "STRING_VALUE",
 * //           ],
 * //           PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
 * //           PropertyType: "USER_INPUT" || "SECRET" || "READ_ONLY" || "UNUSED" || "SECRET_OR_USER_INPUT", // required
 * //         },
 * //       ],
 * //       ResponseConfiguration: {
 * //         ResultPath: "STRING_VALUE", // required
 * //         ErrorPath: "STRING_VALUE",
 * //       },
 * //       PaginationConfiguration: {
 * //         CursorConfiguration: {
 * //           NextPage: {
 * //             Key: "STRING_VALUE",
 * //             DefaultValue: "STRING_VALUE",
 * //             PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
 * //             Value: {
 * //               ContentPath: "STRING_VALUE",
 * //               HeaderKey: "STRING_VALUE",
 * //             },
 * //           },
 * //           LimitParameter: "<ExtractedParameter>",
 * //         },
 * //         OffsetConfiguration: {
 * //           OffsetParameter: "<ExtractedParameter>", // required
 * //           LimitParameter: "<ExtractedParameter>", // required
 * //         },
 * //       },
 * //     },
 * //     EntityConfigurations: { // EntityConfigurationMap
 * //       "<keys>": { // EntityConfiguration
 * //         SourceConfiguration: {
 * //           RequestMethod: "GET" || "POST",
 * //           RequestPath: "STRING_VALUE",
 * //           RequestParameters: [
 * //             {
 * //               Name: "STRING_VALUE", // required
 * //               KeyOverride: "STRING_VALUE",
 * //               Required: true || false, // required
 * //               DefaultValue: "STRING_VALUE",
 * //               AllowedValues: "<ListOfString>",
 * //               PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
 * //               PropertyType: "USER_INPUT" || "SECRET" || "READ_ONLY" || "UNUSED" || "SECRET_OR_USER_INPUT", // required
 * //             },
 * //           ],
 * //           ResponseConfiguration: {
 * //             ResultPath: "STRING_VALUE", // required
 * //             ErrorPath: "STRING_VALUE",
 * //           },
 * //           PaginationConfiguration: {
 * //             CursorConfiguration: {
 * //               NextPage: "<ExtractedParameter>", // required
 * //               LimitParameter: "<ExtractedParameter>",
 * //             },
 * //             OffsetConfiguration: {
 * //               OffsetParameter: "<ExtractedParameter>", // required
 * //               LimitParameter: "<ExtractedParameter>", // required
 * //             },
 * //           },
 * //         },
 * //         Schema: { // FieldDefinitionMap
 * //           "<keys>": { // FieldDefinition
 * //             Name: "STRING_VALUE", // required
 * //             FieldDataType: "INT" || "SMALLINT" || "BIGINT" || "FLOAT" || "LONG" || "DATE" || "BOOLEAN" || "MAP" || "ARRAY" || "STRING" || "TIMESTAMP" || "DECIMAL" || "BYTE" || "SHORT" || "DOUBLE" || "STRUCT" || "BINARY" || "UNION", // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DescribeConnectionType", {})
  .n("GlueClient", "DescribeConnectionTypeCommand")
  .sc(DescribeConnectionType$)
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
