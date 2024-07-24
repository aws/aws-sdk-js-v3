// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateQAppInput, UpdateQAppOutput } from "../models/models_0";
import { de_UpdateQAppCommand, se_UpdateQAppCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQAppCommand}.
 */
export interface UpdateQAppCommandInput extends UpdateQAppInput {}
/**
 * @public
 *
 * The output of {@link UpdateQAppCommand}.
 */
export interface UpdateQAppCommandOutput extends UpdateQAppOutput, __MetadataBearer {}

/**
 * <p>Updates an existing Amazon Q App, allowing modifications to its title, description, and definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, UpdateQAppCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, UpdateQAppCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * const client = new QAppsClient(config);
 * const input = { // UpdateQAppInput
 *   instanceId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 *   title: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   appDefinition: { // AppDefinitionInput
 *     cards: [ // CardList // required
 *       { // CardInput Union: only one key present
 *         textInput: { // TextInputCardInput
 *           title: "STRING_VALUE", // required
 *           id: "STRING_VALUE", // required
 *           type: "text-input" || "q-query" || "file-upload" || "q-plugin", // required
 *           placeholder: "STRING_VALUE",
 *           defaultValue: "STRING_VALUE",
 *         },
 *         qQuery: { // QQueryCardInput
 *           title: "STRING_VALUE", // required
 *           id: "STRING_VALUE", // required
 *           type: "text-input" || "q-query" || "file-upload" || "q-plugin", // required
 *           prompt: "STRING_VALUE", // required
 *           outputSource: "approved-sources" || "llm",
 *           attributeFilter: { // AttributeFilter
 *             andAllFilters: [ // AttributeFilters
 *               {
 *                 andAllFilters: [
 *                   "<AttributeFilter>",
 *                 ],
 *                 orAllFilters: [
 *                   "<AttributeFilter>",
 *                 ],
 *                 notFilter: "<AttributeFilter>",
 *                 equalsTo: { // DocumentAttribute
 *                   name: "STRING_VALUE", // required
 *                   value: { // DocumentAttributeValue Union: only one key present
 *                     stringValue: "STRING_VALUE",
 *                     stringListValue: [ // DocumentAttributeStringListValue
 *                       "STRING_VALUE",
 *                     ],
 *                     longValue: Number("long"),
 *                     dateValue: new Date("TIMESTAMP"),
 *                   },
 *                 },
 *                 containsAll: {
 *                   name: "STRING_VALUE", // required
 *                   value: {//  Union: only one key present
 *                     stringValue: "STRING_VALUE",
 *                     stringListValue: [
 *                       "STRING_VALUE",
 *                     ],
 *                     longValue: Number("long"),
 *                     dateValue: new Date("TIMESTAMP"),
 *                   },
 *                 },
 *                 containsAny: {
 *                   name: "STRING_VALUE", // required
 *                   value: {//  Union: only one key present
 *                     stringValue: "STRING_VALUE",
 *                     stringListValue: [
 *                       "STRING_VALUE",
 *                     ],
 *                     longValue: Number("long"),
 *                     dateValue: new Date("TIMESTAMP"),
 *                   },
 *                 },
 *                 greaterThan: {
 *                   name: "STRING_VALUE", // required
 *                   value: {//  Union: only one key present
 *                     stringValue: "STRING_VALUE",
 *                     stringListValue: [
 *                       "STRING_VALUE",
 *                     ],
 *                     longValue: Number("long"),
 *                     dateValue: new Date("TIMESTAMP"),
 *                   },
 *                 },
 *                 greaterThanOrEquals: {
 *                   name: "STRING_VALUE", // required
 *                   value: {//  Union: only one key present
 *                     stringValue: "STRING_VALUE",
 *                     stringListValue: [
 *                       "STRING_VALUE",
 *                     ],
 *                     longValue: Number("long"),
 *                     dateValue: new Date("TIMESTAMP"),
 *                   },
 *                 },
 *                 lessThan: "<DocumentAttribute>",
 *                 lessThanOrEquals: "<DocumentAttribute>",
 *               },
 *             ],
 *             orAllFilters: [
 *               "<AttributeFilter>",
 *             ],
 *             notFilter: "<AttributeFilter>",
 *             equalsTo: "<DocumentAttribute>",
 *             containsAll: "<DocumentAttribute>",
 *             containsAny: "<DocumentAttribute>",
 *             greaterThan: "<DocumentAttribute>",
 *             greaterThanOrEquals: "<DocumentAttribute>",
 *             lessThan: "<DocumentAttribute>",
 *             lessThanOrEquals: "<DocumentAttribute>",
 *           },
 *         },
 *         qPlugin: { // QPluginCardInput
 *           title: "STRING_VALUE", // required
 *           id: "STRING_VALUE", // required
 *           type: "text-input" || "q-query" || "file-upload" || "q-plugin", // required
 *           prompt: "STRING_VALUE", // required
 *           pluginId: "STRING_VALUE", // required
 *         },
 *         fileUpload: { // FileUploadCardInput
 *           title: "STRING_VALUE", // required
 *           id: "STRING_VALUE", // required
 *           type: "text-input" || "q-query" || "file-upload" || "q-plugin", // required
 *           filename: "STRING_VALUE",
 *           fileId: "STRING_VALUE",
 *           allowOverride: true || false,
 *         },
 *       },
 *     ],
 *     initialPrompt: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateQAppCommand(input);
 * const response = await client.send(command);
 * // { // UpdateQAppOutput
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
 * // };
 *
 * ```
 *
 * @param UpdateQAppCommandInput - {@link UpdateQAppCommandInput}
 * @returns {@link UpdateQAppCommandOutput}
 * @see {@link UpdateQAppCommandInput} for command's `input` shape.
 * @see {@link UpdateQAppCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link ContentTooLargeException} (client fault)
 *  <p>The requested operation could not be completed because
 *       the content exceeds the maximum allowed size.</p>
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
export class UpdateQAppCommand extends $Command
  .classBuilder<
    UpdateQAppCommandInput,
    UpdateQAppCommandOutput,
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
  .s("QAppsService", "UpdateQApp", {})
  .n("QAppsClient", "UpdateQAppCommand")
  .f(void 0, void 0)
  .ser(se_UpdateQAppCommand)
  .de(de_UpdateQAppCommand)
  .build() {}
