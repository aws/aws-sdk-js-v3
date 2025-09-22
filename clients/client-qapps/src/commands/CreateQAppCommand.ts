// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateQAppInput, CreateQAppOutput } from "../models/models_0";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { CreateQApp } from "../schemas/schemas_1_LibraryItem";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateQAppCommand}.
 */
export interface CreateQAppCommandInput extends CreateQAppInput {}
/**
 * @public
 *
 * The output of {@link CreateQAppCommand}.
 */
export interface CreateQAppCommandOutput extends CreateQAppOutput, __MetadataBearer {}

/**
 * <p>Creates a new Amazon Q App based on the provided definition. The Q App definition specifies the cards and flow of the Q App. This operation also calculates the dependencies between the cards by inspecting the references in the prompts. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, CreateQAppCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, CreateQAppCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // CreateQAppInput
 *   instanceId: "STRING_VALUE", // required
 *   title: "STRING_VALUE", // required
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
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateQAppCommand(input);
 * const response = await client.send(command);
 * // { // CreateQAppOutput
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
 * @param CreateQAppCommandInput - {@link CreateQAppCommandInput}
 * @returns {@link CreateQAppCommandOutput}
 * @see {@link CreateQAppCommandInput} for command's `input` shape.
 * @see {@link CreateQAppCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link ContentTooLargeException} (client fault)
 *  <p>The requested operation could not be completed because the content exceeds the maximum allowed size.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The requested operation could not be completed because it would exceed the service's quota or limit.</p>
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
 *   appDefinition: {
 *     cards: [
 *       {
 *         textInput: {
 *           id: "4cf94d96-8819-45c2-98cc-58c56b35c72f",
 *           title: "Color Base",
 *           type: "text-input"
 *         }
 *       },
 *       {
 *         qQuery: {
 *           id: "18870b94-1e63-40e0-8c12-669c90ac5acc",
 *           prompt: "Recommend me a list of colors that go well with @4cf94d96-8819-45c2-98cc-58c56b35c72f",
 *           title: "Recommended Palette",
 *           type: "q-query"
 *         }
 *       }
 *     ],
 *     initialPrompt: "Create an app that recommend a list of colors based on input."
 *   },
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f",
 *   title: "Color Palette Generator"
 * };
 * const command = new CreateQAppCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   appArn: "arn:aws:qapps:us-west-2:123456789012:app/7212ff04-de7b-4831-bd80-45d6975ba1b0",
 *   appId: "7212ff04-de7b-4831-bd80-45d6975ba1b0",
 *   appVersion: 1,
 *   createdAt: "2024-05-14T00:11:54.232Z",
 *   createdBy: "a841e300-40c1-7062-fa34-5b46dadbbaac",
 *   initialPrompt: "Create an app that recommend a list of colors based on input.",
 *   requiredCapabilities: [
 *     "CreatorMode"
 *   ],
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
export class CreateQAppCommand extends $Command
  .classBuilder<
    CreateQAppCommandInput,
    CreateQAppCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "CreateQApp", {})
  .n("QAppsClient", "CreateQAppCommand")
  .sc(CreateQApp)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQAppInput;
      output: CreateQAppOutput;
    };
    sdk: {
      input: CreateQAppCommandInput;
      output: CreateQAppCommandOutput;
    };
  };
}
