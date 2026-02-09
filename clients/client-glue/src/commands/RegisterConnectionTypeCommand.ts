// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { RegisterConnectionTypeRequest, RegisterConnectionTypeResponse } from "../models/models_2";
import { RegisterConnectionType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterConnectionTypeCommand}.
 */
export interface RegisterConnectionTypeCommandInput extends RegisterConnectionTypeRequest {}
/**
 * @public
 *
 * The output of {@link RegisterConnectionTypeCommand}.
 */
export interface RegisterConnectionTypeCommandOutput extends RegisterConnectionTypeResponse, __MetadataBearer {}

/**
 * <p>Registers a custom connection type in Glue based on the configuration provided. This operation enables customers to configure custom connectors for any data source with REST-based APIs, eliminating the need for building custom Lambda connectors.</p>
 *          <p>The registered connection type stores details about how requests and responses are interpreted by REST sources, including connection properties, authentication configuration, and REST configuration with entity definitions. Once registered, customers can create connections using this connection type and work with them the same way as natively supported Glue connectors.</p>
 *          <p>Supports multiple authentication types including Basic, OAuth2 (Client Credentials, JWT Bearer, Authorization Code), and Custom Auth configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, RegisterConnectionTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, RegisterConnectionTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // RegisterConnectionTypeRequest
 *   ConnectionType: "STRING_VALUE", // required
 *   IntegrationType: "REST", // required
 *   Description: "STRING_VALUE",
 *   ConnectionProperties: { // ConnectionPropertiesConfiguration
 *     Url: { // ConnectorProperty
 *       Name: "STRING_VALUE", // required
 *       KeyOverride: "STRING_VALUE",
 *       Required: true || false, // required
 *       DefaultValue: "STRING_VALUE",
 *       AllowedValues: [ // ListOfString
 *         "STRING_VALUE",
 *       ],
 *       PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
 *       PropertyType: "USER_INPUT" || "SECRET" || "READ_ONLY" || "UNUSED" || "SECRET_OR_USER_INPUT", // required
 *     },
 *     AdditionalRequestParameters: [ // ConnectorPropertyList
 *       {
 *         Name: "STRING_VALUE", // required
 *         KeyOverride: "STRING_VALUE",
 *         Required: true || false, // required
 *         DefaultValue: "STRING_VALUE",
 *         AllowedValues: [
 *           "STRING_VALUE",
 *         ],
 *         PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
 *         PropertyType: "USER_INPUT" || "SECRET" || "READ_ONLY" || "UNUSED" || "SECRET_OR_USER_INPUT", // required
 *       },
 *     ],
 *   },
 *   ConnectorAuthenticationConfiguration: { // ConnectorAuthenticationConfiguration
 *     AuthenticationTypes: [ // AuthenticationTypes // required
 *       "BASIC" || "OAUTH2" || "CUSTOM" || "IAM",
 *     ],
 *     OAuth2Properties: { // ConnectorOAuth2Properties
 *       OAuth2GrantType: "CLIENT_CREDENTIALS" || "JWT_BEARER" || "AUTHORIZATION_CODE", // required
 *       ClientCredentialsProperties: { // ClientCredentialsProperties
 *         TokenUrl: "<ConnectorProperty>",
 *         RequestMethod: "GET" || "POST",
 *         ContentType: "APPLICATION_JSON" || "URL_ENCODED",
 *         ClientId: "<ConnectorProperty>",
 *         ClientSecret: "<ConnectorProperty>",
 *         Scope: "<ConnectorProperty>",
 *         TokenUrlParameters: [
 *           "<ConnectorProperty>",
 *         ],
 *       },
 *       JWTBearerProperties: { // JWTBearerProperties
 *         TokenUrl: "<ConnectorProperty>",
 *         RequestMethod: "GET" || "POST",
 *         ContentType: "APPLICATION_JSON" || "URL_ENCODED",
 *         JwtToken: "<ConnectorProperty>",
 *         TokenUrlParameters: [
 *           "<ConnectorProperty>",
 *         ],
 *       },
 *       AuthorizationCodeProperties: { // ConnectorAuthorizationCodeProperties
 *         AuthorizationCodeUrl: "<ConnectorProperty>",
 *         AuthorizationCode: "<ConnectorProperty>",
 *         RedirectUri: "<ConnectorProperty>",
 *         TokenUrl: "<ConnectorProperty>",
 *         RequestMethod: "GET" || "POST",
 *         ContentType: "APPLICATION_JSON" || "URL_ENCODED",
 *         ClientId: "<ConnectorProperty>",
 *         ClientSecret: "<ConnectorProperty>",
 *         Scope: "<ConnectorProperty>",
 *         Prompt: "<ConnectorProperty>",
 *         TokenUrlParameters: [
 *           "<ConnectorProperty>",
 *         ],
 *       },
 *     },
 *     BasicAuthenticationProperties: { // BasicAuthenticationProperties
 *       Username: "<ConnectorProperty>",
 *       Password: "<ConnectorProperty>",
 *     },
 *     CustomAuthenticationProperties: { // CustomAuthenticationProperties
 *       AuthenticationParameters: "<ConnectorPropertyList>", // required
 *     },
 *   },
 *   RestConfiguration: { // RestConfiguration
 *     GlobalSourceConfiguration: { // SourceConfiguration
 *       RequestMethod: "GET" || "POST",
 *       RequestPath: "STRING_VALUE",
 *       RequestParameters: "<ConnectorPropertyList>",
 *       ResponseConfiguration: { // ResponseConfiguration
 *         ResultPath: "STRING_VALUE", // required
 *         ErrorPath: "STRING_VALUE",
 *       },
 *       PaginationConfiguration: { // PaginationConfiguration
 *         CursorConfiguration: { // CursorConfiguration
 *           NextPage: { // ExtractedParameter
 *             Key: "STRING_VALUE",
 *             DefaultValue: "STRING_VALUE",
 *             PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
 *             Value: { // ResponseExtractionMapping
 *               ContentPath: "STRING_VALUE",
 *               HeaderKey: "STRING_VALUE",
 *             },
 *           },
 *           LimitParameter: {
 *             Key: "STRING_VALUE",
 *             DefaultValue: "STRING_VALUE",
 *             PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
 *             Value: {
 *               ContentPath: "STRING_VALUE",
 *               HeaderKey: "STRING_VALUE",
 *             },
 *           },
 *         },
 *         OffsetConfiguration: { // OffsetConfiguration
 *           OffsetParameter: {
 *             Key: "STRING_VALUE",
 *             DefaultValue: "STRING_VALUE",
 *             PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
 *             Value: {
 *               ContentPath: "STRING_VALUE",
 *               HeaderKey: "STRING_VALUE",
 *             },
 *           },
 *           LimitParameter: {
 *             Key: "STRING_VALUE",
 *             DefaultValue: "STRING_VALUE",
 *             PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
 *             Value: {
 *               ContentPath: "STRING_VALUE",
 *               HeaderKey: "STRING_VALUE",
 *             },
 *           },
 *         },
 *       },
 *     },
 *     ValidationEndpointConfiguration: {
 *       RequestMethod: "GET" || "POST",
 *       RequestPath: "STRING_VALUE",
 *       RequestParameters: "<ConnectorPropertyList>",
 *       ResponseConfiguration: {
 *         ResultPath: "STRING_VALUE", // required
 *         ErrorPath: "STRING_VALUE",
 *       },
 *       PaginationConfiguration: {
 *         CursorConfiguration: {
 *           NextPage: {
 *             Key: "STRING_VALUE",
 *             DefaultValue: "STRING_VALUE",
 *             PropertyLocation: "HEADER" || "BODY" || "QUERY_PARAM" || "PATH",
 *             Value: {
 *               ContentPath: "STRING_VALUE",
 *               HeaderKey: "STRING_VALUE",
 *             },
 *           },
 *           LimitParameter: "<ExtractedParameter>",
 *         },
 *         OffsetConfiguration: {
 *           OffsetParameter: "<ExtractedParameter>", // required
 *           LimitParameter: "<ExtractedParameter>", // required
 *         },
 *       },
 *     },
 *     EntityConfigurations: { // EntityConfigurationMap
 *       "<keys>": { // EntityConfiguration
 *         SourceConfiguration: {
 *           RequestMethod: "GET" || "POST",
 *           RequestPath: "STRING_VALUE",
 *           RequestParameters: "<ConnectorPropertyList>",
 *           ResponseConfiguration: {
 *             ResultPath: "STRING_VALUE", // required
 *             ErrorPath: "STRING_VALUE",
 *           },
 *           PaginationConfiguration: {
 *             CursorConfiguration: {
 *               NextPage: "<ExtractedParameter>", // required
 *               LimitParameter: "<ExtractedParameter>",
 *             },
 *             OffsetConfiguration: {
 *               OffsetParameter: "<ExtractedParameter>", // required
 *               LimitParameter: "<ExtractedParameter>", // required
 *             },
 *           },
 *         },
 *         Schema: { // FieldDefinitionMap
 *           "<keys>": { // FieldDefinition
 *             Name: "STRING_VALUE", // required
 *             FieldDataType: "INT" || "SMALLINT" || "BIGINT" || "FLOAT" || "LONG" || "DATE" || "BOOLEAN" || "MAP" || "ARRAY" || "STRING" || "TIMESTAMP" || "DECIMAL" || "BYTE" || "SHORT" || "DOUBLE" || "STRUCT" || "BINARY" || "UNION", // required
 *           },
 *         },
 *       },
 *     },
 *   },
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new RegisterConnectionTypeCommand(input);
 * const response = await client.send(command);
 * // { // RegisterConnectionTypeResponse
 * //   ConnectionTypeArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterConnectionTypeCommandInput - {@link RegisterConnectionTypeCommandInput}
 * @returns {@link RegisterConnectionTypeCommandOutput}
 * @see {@link RegisterConnectionTypeCommandInput} for command's `input` shape.
 * @see {@link RegisterConnectionTypeCommandOutput} for command's `response` shape.
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
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
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
export class RegisterConnectionTypeCommand extends $Command
  .classBuilder<
    RegisterConnectionTypeCommandInput,
    RegisterConnectionTypeCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "RegisterConnectionType", {})
  .n("GlueClient", "RegisterConnectionTypeCommand")
  .sc(RegisterConnectionType$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterConnectionTypeRequest;
      output: RegisterConnectionTypeResponse;
    };
    sdk: {
      input: RegisterConnectionTypeCommandInput;
      output: RegisterConnectionTypeCommandOutput;
    };
  };
}
