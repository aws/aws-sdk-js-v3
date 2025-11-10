// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetQAppInput, GetQAppOutput } from "../models/models_0";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { GetQApp } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQAppCommand}.
 */
export interface GetQAppCommandInput extends GetQAppInput {}
/**
 * @public
 *
 * The output of {@link GetQAppCommand}.
 */
export interface GetQAppCommandOutput extends GetQAppOutput, __MetadataBearer {}

/**
 * <p>Retrieves the full details of an Q App, including its definition specifying the cards and flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, GetQAppCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, GetQAppCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // GetQAppInput
 *   instanceId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 *   appVersion: Number("int"),
 * };
 * const command = new GetQAppCommand(input);
 * const response = await client.send(command);
 * // { // GetQAppOutput
 * //   appId: "STRING_VALUE", // required
 * //   appArn: "STRING_VALUE", // required
 * //   title: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   initialPrompt: "STRING_VALUE",
 * //   appVersion: Number("int"), // required
 * //   status: "PUBLISHED" || "DRAFT" || "DELETED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   updatedBy: "STRING_VALUE", // required
 * //   requiredCapabilities: [ // AppRequiredCapabilities
 * //     "FileUpload" || "CreatorMode" || "RetrievalMode" || "PluginMode",
 * //   ],
 * //   appDefinition: { // AppDefinition
 * //     appDefinitionVersion: "STRING_VALUE", // required
 * //     cards: [ // CardModelList // required
 * //       { // Card Union: only one key present
 * //         textInput: { // TextInputCard
 * //           id: "STRING_VALUE", // required
 * //           title: "STRING_VALUE", // required
 * //           dependencies: [ // DependencyList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           type: "text-input" || "q-query" || "file-upload" || "q-plugin" || "form-input", // required
 * //           placeholder: "STRING_VALUE",
 * //           defaultValue: "STRING_VALUE",
 * //         },
 * //         qQuery: { // QQueryCard
 * //           id: "STRING_VALUE", // required
 * //           title: "STRING_VALUE", // required
 * //           dependencies: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           type: "text-input" || "q-query" || "file-upload" || "q-plugin" || "form-input", // required
 * //           prompt: "STRING_VALUE", // required
 * //           outputSource: "approved-sources" || "llm", // required
 * //           attributeFilter: { // AttributeFilter
 * //             andAllFilters: [ // AttributeFilters
 * //               {
 * //                 andAllFilters: [
 * //                   "<AttributeFilter>",
 * //                 ],
 * //                 orAllFilters: [
 * //                   "<AttributeFilter>",
 * //                 ],
 * //                 notFilter: "<AttributeFilter>",
 * //                 equalsTo: { // DocumentAttribute
 * //                   name: "STRING_VALUE", // required
 * //                   value: { // DocumentAttributeValue Union: only one key present
 * //                     stringValue: "STRING_VALUE",
 * //                     stringListValue: [ // DocumentAttributeStringListValue
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     longValue: Number("long"),
 * //                     dateValue: new Date("TIMESTAMP"),
 * //                   },
 * //                 },
 * //                 containsAll: {
 * //                   name: "STRING_VALUE", // required
 * //                   value: {//  Union: only one key present
 * //                     stringValue: "STRING_VALUE",
 * //                     stringListValue: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     longValue: Number("long"),
 * //                     dateValue: new Date("TIMESTAMP"),
 * //                   },
 * //                 },
 * //                 containsAny: {
 * //                   name: "STRING_VALUE", // required
 * //                   value: {//  Union: only one key present
 * //                     stringValue: "STRING_VALUE",
 * //                     stringListValue: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     longValue: Number("long"),
 * //                     dateValue: new Date("TIMESTAMP"),
 * //                   },
 * //                 },
 * //                 greaterThan: {
 * //                   name: "STRING_VALUE", // required
 * //                   value: {//  Union: only one key present
 * //                     stringValue: "STRING_VALUE",
 * //                     stringListValue: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     longValue: Number("long"),
 * //                     dateValue: new Date("TIMESTAMP"),
 * //                   },
 * //                 },
 * //                 greaterThanOrEquals: {
 * //                   name: "STRING_VALUE", // required
 * //                   value: {//  Union: only one key present
 * //                     stringValue: "STRING_VALUE",
 * //                     stringListValue: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     longValue: Number("long"),
 * //                     dateValue: new Date("TIMESTAMP"),
 * //                   },
 * //                 },
 * //                 lessThan: "<DocumentAttribute>",
 * //                 lessThanOrEquals: "<DocumentAttribute>",
 * //               },
 * //             ],
 * //             orAllFilters: [
 * //               "<AttributeFilter>",
 * //             ],
 * //             notFilter: "<AttributeFilter>",
 * //             equalsTo: "<DocumentAttribute>",
 * //             containsAll: "<DocumentAttribute>",
 * //             containsAny: "<DocumentAttribute>",
 * //             greaterThan: "<DocumentAttribute>",
 * //             greaterThanOrEquals: "<DocumentAttribute>",
 * //             lessThan: "<DocumentAttribute>",
 * //             lessThanOrEquals: "<DocumentAttribute>",
 * //           },
 * //           memoryReferences: [ // MemoryReferenceList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         qPlugin: { // QPluginCard
 * //           id: "STRING_VALUE", // required
 * //           title: "STRING_VALUE", // required
 * //           dependencies: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           type: "text-input" || "q-query" || "file-upload" || "q-plugin" || "form-input", // required
 * //           prompt: "STRING_VALUE", // required
 * //           pluginType: "SERVICE_NOW" || "SALESFORCE" || "JIRA" || "ZENDESK" || "CUSTOM" || "ASANA" || "ATLASSIAN_CONFLUENCE" || "GOOGLE_CALENDAR" || "JIRA_CLOUD" || "MICROSOFT_EXCHANGE" || "MICROSOFT_TEAMS" || "PAGERDUTY_ADVANCE" || "SALESFORCE_CRM" || "SERVICENOW_NOW_PLATFORM" || "SMARTSHEET" || "ZENDESK_SUITE", // required
 * //           pluginId: "STRING_VALUE", // required
 * //           actionIdentifier: "STRING_VALUE",
 * //         },
 * //         fileUpload: { // FileUploadCard
 * //           id: "STRING_VALUE", // required
 * //           title: "STRING_VALUE", // required
 * //           dependencies: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           type: "text-input" || "q-query" || "file-upload" || "q-plugin" || "form-input", // required
 * //           filename: "STRING_VALUE",
 * //           fileId: "STRING_VALUE",
 * //           allowOverride: true || false,
 * //         },
 * //         formInput: { // FormInputCard
 * //           id: "STRING_VALUE", // required
 * //           title: "STRING_VALUE", // required
 * //           dependencies: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           type: "text-input" || "q-query" || "file-upload" || "q-plugin" || "form-input", // required
 * //           metadata: { // FormInputCardMetadata
 * //             schema: "DOCUMENT_VALUE", // required
 * //           },
 * //           computeMode: "append" || "replace",
 * //         },
 * //       },
 * //     ],
 * //     canEdit: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetQAppCommandInput - {@link GetQAppCommandInput}
 * @returns {@link GetQAppCommandOutput}
 * @see {@link GetQAppCommandInput} for command's `input` shape.
 * @see {@link GetQAppCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many requests were sent at once. Wait a bit and try again later.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client is not authenticated or authorized to perform the requested operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link QAppsServiceException}
 * <p>Base exception class for all service exceptions from QApps service.</p>
 *
 *
 * @example A basic application with 1 text input card and 1 output card
 * ```javascript
 * //
 * const input = {
 *   appId: "3d110749-efc3-427c-87e8-15e966e5c168",
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f"
 * };
 * const command = new GetQAppCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   appArn: "arn:aws:qapps:us-west-2:123456789012:app/7212ff04-de7b-4831-bd80-45d6975ba1b0",
 *   appDefinition: {
 *     appDefinitionVersion: "1",
 *     cards: [
 *       {
 *         textInput: {
 *           dependencies:           [],
 *           id: "4cf94d96-8819-45c2-98cc-58c56b35c72f",
 *           title: "Color Base",
 *           type: "text-input"
 *         }
 *       },
 *       {
 *         qQuery: {
 *           dependencies: [
 *             "91e4513d-6981-454a-9329-329c9302eef4"
 *           ],
 *           id: "18870b94-1e63-40e0-8c12-669c90ac5acc",
 *           outputSource: "llm",
 *           prompt: "Recommend me a list of colors that go well with @91e4513d-6981-454a-9329-329c9302eef4 ",
 *           title: "Recommended Palette",
 *           type: "q-query"
 *         }
 *       }
 *     ]
 *   },
 *   appId: "7212ff04-de7b-4831-bd80-45d6975ba1b0",
 *   appVersion: 1,
 *   createdAt: "2024-05-14T00:11:54.232Z",
 *   createdBy: "a841e300-40c1-7062-fa34-5b46dadbbaac",
 *   status: "DRAFT",
 *   title: "Color Palette Generator",
 *   updatedAt: "2024-05-14T00:13:26.168Z",
 *   updatedBy: "a841e300-40c1-7062-fa34-5b46dadbbaac"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetQAppCommand extends $Command
  .classBuilder<
    GetQAppCommandInput,
    GetQAppCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "GetQApp", {})
  .n("QAppsClient", "GetQAppCommand")
  .sc(GetQApp)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQAppInput;
      output: GetQAppOutput;
    };
    sdk: {
      input: GetQAppCommandInput;
      output: GetQAppCommandOutput;
    };
  };
}
