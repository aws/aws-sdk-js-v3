// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateQAppInput, UpdateQAppOutput } from "../models/models_0";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { UpdateQApp } from "../schemas/schemas_0";

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
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
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
 *           type: "text-input" || "q-query" || "file-upload" || "q-plugin" || "form-input", // required
 *           placeholder: "STRING_VALUE",
 *           defaultValue: "STRING_VALUE",
 *         },
 *         qQuery: { // QQueryCardInput
 *           title: "STRING_VALUE", // required
 *           id: "STRING_VALUE", // required
 *           type: "text-input" || "q-query" || "file-upload" || "q-plugin" || "form-input", // required
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
 *           type: "text-input" || "q-query" || "file-upload" || "q-plugin" || "form-input", // required
 *           prompt: "STRING_VALUE", // required
 *           pluginId: "STRING_VALUE", // required
 *           actionIdentifier: "STRING_VALUE",
 *         },
 *         fileUpload: { // FileUploadCardInput
 *           title: "STRING_VALUE", // required
 *           id: "STRING_VALUE", // required
 *           type: "text-input" || "q-query" || "file-upload" || "q-plugin" || "form-input", // required
 *           filename: "STRING_VALUE",
 *           fileId: "STRING_VALUE",
 *           allowOverride: true || false,
 *         },
 *         formInput: { // FormInputCardInput
 *           title: "STRING_VALUE", // required
 *           id: "STRING_VALUE", // required
 *           type: "text-input" || "q-query" || "file-upload" || "q-plugin" || "form-input", // required
 *           metadata: { // FormInputCardMetadata
 *             schema: "DOCUMENT_VALUE", // required
 *           },
 *           computeMode: "append" || "replace",
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
 *  <p>The requested operation could not be completed because the content exceeds the maximum allowed size.</p>
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
 * @example Updating the title of an app
 * ```javascript
 * //
 * const input = {
 *   appId: "7212ff04-de7b-4831-bd80-45d6975ba1b0",
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f",
 *   title: "This is the new title"
 * };
 * const command = new UpdateQAppCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   appArn: "arn:aws:qapps:us-west-2:123456789012:app/7212ff04-de7b-4831-bd80-45d6975ba1b0",
 *   appId: "7212ff04-de7b-4831-bd80-45d6975ba1b0",
 *   appVersion: 2,
 *   createdAt: "2024-05-14T00:11:54.232Z",
 *   createdBy: "a841e300-40c1-7062-fa34-5b46dadbbaac",
 *   requiredCapabilities: [
 *     "CreatorMode"
 *   ],
 *   status: "DRAFT",
 *   title: "This is the new title",
 *   updatedAt: "2024-05-17T23:15:08.571Z",
 *   updatedBy: "a841e300-40c1-7062-fa34-5b46dadbbaac"
 * }
 * *\/
 * ```
 *
 * @example Updating the app so it has a single q-query card
 * ```javascript
 * //
 * const input = {
 *   appDefinition: {
 *     cards: [
 *       {
 *         qQuery: {
 *           id: "18870b94-1e63-40e0-8c12-669c90ac5acc",
 *           prompt: "Recommend me an itinerary for a trip",
 *           title: "Trip Ideas",
 *           type: "q-query"
 *         }
 *       }
 *     ]
 *   },
 *   appId: "7212ff04-de7b-4831-bd80-45d6975ba1b0",
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f"
 * };
 * const command = new UpdateQAppCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   appArn: "arn:aws:qapps:us-west-2:123456789012:app/7212ff04-de7b-4831-bd80-45d6975ba1b0",
 *   appId: "7212ff04-de7b-4831-bd80-45d6975ba1b0",
 *   appVersion: 99,
 *   createdAt: "2024-05-14T00:11:54.232Z",
 *   createdBy: "a841e300-40c1-7062-fa34-5b46dadbbaac",
 *   requiredCapabilities: [
 *     "CreatorMode"
 *   ],
 *   status: "DRAFT",
 *   title: "Previous Title Stays the Same",
 *   updatedAt: "2024-05-17T23:15:08.571Z",
 *   updatedBy: "a841e300-40c1-7062-fa34-5b46dadbbaac"
 * }
 * *\/
 * ```
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "UpdateQApp", {})
  .n("QAppsClient", "UpdateQAppCommand")
  .sc(UpdateQApp)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQAppInput;
      output: UpdateQAppOutput;
    };
    sdk: {
      input: UpdateQAppCommandInput;
      output: UpdateQAppCommandOutput;
    };
  };
}
