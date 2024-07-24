// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetQAppInput, GetQAppOutput } from "../models/models_0";
import { de_GetQAppCommand, se_GetQAppCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

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
 * const client = new QAppsClient(config);
 * const input = { // GetQAppInput
 *   instanceId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
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
 * //           type: "text-input" || "q-query" || "file-upload" || "q-plugin", // required
 * //           placeholder: "STRING_VALUE",
 * //           defaultValue: "STRING_VALUE",
 * //         },
 * //         qQuery: { // QQueryCard
 * //           id: "STRING_VALUE", // required
 * //           title: "STRING_VALUE", // required
 * //           dependencies: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           type: "text-input" || "q-query" || "file-upload" || "q-plugin", // required
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
 * //         },
 * //         qPlugin: { // QPluginCard
 * //           id: "STRING_VALUE", // required
 * //           title: "STRING_VALUE", // required
 * //           dependencies: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           type: "text-input" || "q-query" || "file-upload" || "q-plugin", // required
 * //           prompt: "STRING_VALUE", // required
 * //           pluginType: "SERVICE_NOW" || "SALESFORCE" || "JIRA" || "ZENDESK" || "CUSTOM", // required
 * //           pluginId: "STRING_VALUE", // required
 * //         },
 * //         fileUpload: { // FileUploadCard
 * //           id: "STRING_VALUE", // required
 * //           title: "STRING_VALUE", // required
 * //           dependencies: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           type: "text-input" || "q-query" || "file-upload" || "q-plugin", // required
 * //           filename: "STRING_VALUE",
 * //           fileId: "STRING_VALUE",
 * //           allowOverride: true || false,
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
 *  <p>The requested operation could not be completed because too many
 *       requests were sent at once. Wait a bit and try again later.</p>
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QAppsService", "GetQApp", {})
  .n("QAppsClient", "GetQAppCommand")
  .f(void 0, void 0)
  .ser(se_GetQAppCommand)
  .de(de_GetQAppCommand)
  .build() {}
