// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PredictQAppInput, PredictQAppOutput } from "../models/models_0";
import type { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { PredictQApp } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PredictQAppCommand}.
 */
export interface PredictQAppCommandInput extends PredictQAppInput {}
/**
 * @public
 *
 * The output of {@link PredictQAppCommand}.
 */
export interface PredictQAppCommandOutput extends PredictQAppOutput, __MetadataBearer {}

/**
 * <p>Generates an Amazon Q App definition based on either a conversation or a problem statement provided as input.The resulting app definition can be used to call <code>CreateQApp</code>. This API doesn't create Amazon Q Apps directly.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, PredictQAppCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, PredictQAppCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // PredictQAppInput
 *   instanceId: "STRING_VALUE", // required
 *   options: { // PredictQAppInputOptions Union: only one key present
 *     conversation: [ // MessageList
 *       { // ConversationMessage
 *         body: "STRING_VALUE", // required
 *         type: "USER" || "SYSTEM", // required
 *       },
 *     ],
 *     problemStatement: "STRING_VALUE",
 *   },
 * };
 * const command = new PredictQAppCommand(input);
 * const response = await client.send(command);
 * // { // PredictQAppOutput
 * //   app: { // PredictAppDefinition
 * //     title: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     appDefinition: { // AppDefinitionInput
 * //       cards: [ // CardList // required
 * //         { // CardInput Union: only one key present
 * //           textInput: { // TextInputCardInput
 * //             title: "STRING_VALUE", // required
 * //             id: "STRING_VALUE", // required
 * //             type: "text-input" || "q-query" || "file-upload" || "q-plugin" || "form-input", // required
 * //             placeholder: "STRING_VALUE",
 * //             defaultValue: "STRING_VALUE",
 * //           },
 * //           qQuery: { // QQueryCardInput
 * //             title: "STRING_VALUE", // required
 * //             id: "STRING_VALUE", // required
 * //             type: "text-input" || "q-query" || "file-upload" || "q-plugin" || "form-input", // required
 * //             prompt: "STRING_VALUE", // required
 * //             outputSource: "approved-sources" || "llm",
 * //             attributeFilter: { // AttributeFilter
 * //               andAllFilters: [ // AttributeFilters
 * //                 {
 * //                   andAllFilters: [
 * //                     "<AttributeFilter>",
 * //                   ],
 * //                   orAllFilters: [
 * //                     "<AttributeFilter>",
 * //                   ],
 * //                   notFilter: "<AttributeFilter>",
 * //                   equalsTo: { // DocumentAttribute
 * //                     name: "STRING_VALUE", // required
 * //                     value: { // DocumentAttributeValue Union: only one key present
 * //                       stringValue: "STRING_VALUE",
 * //                       stringListValue: [ // DocumentAttributeStringListValue
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       longValue: Number("long"),
 * //                       dateValue: new Date("TIMESTAMP"),
 * //                     },
 * //                   },
 * //                   containsAll: {
 * //                     name: "STRING_VALUE", // required
 * //                     value: {//  Union: only one key present
 * //                       stringValue: "STRING_VALUE",
 * //                       stringListValue: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       longValue: Number("long"),
 * //                       dateValue: new Date("TIMESTAMP"),
 * //                     },
 * //                   },
 * //                   containsAny: {
 * //                     name: "STRING_VALUE", // required
 * //                     value: {//  Union: only one key present
 * //                       stringValue: "STRING_VALUE",
 * //                       stringListValue: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       longValue: Number("long"),
 * //                       dateValue: new Date("TIMESTAMP"),
 * //                     },
 * //                   },
 * //                   greaterThan: {
 * //                     name: "STRING_VALUE", // required
 * //                     value: {//  Union: only one key present
 * //                       stringValue: "STRING_VALUE",
 * //                       stringListValue: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       longValue: Number("long"),
 * //                       dateValue: new Date("TIMESTAMP"),
 * //                     },
 * //                   },
 * //                   greaterThanOrEquals: {
 * //                     name: "STRING_VALUE", // required
 * //                     value: {//  Union: only one key present
 * //                       stringValue: "STRING_VALUE",
 * //                       stringListValue: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       longValue: Number("long"),
 * //                       dateValue: new Date("TIMESTAMP"),
 * //                     },
 * //                   },
 * //                   lessThan: "<DocumentAttribute>",
 * //                   lessThanOrEquals: "<DocumentAttribute>",
 * //                 },
 * //               ],
 * //               orAllFilters: [
 * //                 "<AttributeFilter>",
 * //               ],
 * //               notFilter: "<AttributeFilter>",
 * //               equalsTo: "<DocumentAttribute>",
 * //               containsAll: "<DocumentAttribute>",
 * //               containsAny: "<DocumentAttribute>",
 * //               greaterThan: "<DocumentAttribute>",
 * //               greaterThanOrEquals: "<DocumentAttribute>",
 * //               lessThan: "<DocumentAttribute>",
 * //               lessThanOrEquals: "<DocumentAttribute>",
 * //             },
 * //           },
 * //           qPlugin: { // QPluginCardInput
 * //             title: "STRING_VALUE", // required
 * //             id: "STRING_VALUE", // required
 * //             type: "text-input" || "q-query" || "file-upload" || "q-plugin" || "form-input", // required
 * //             prompt: "STRING_VALUE", // required
 * //             pluginId: "STRING_VALUE", // required
 * //             actionIdentifier: "STRING_VALUE",
 * //           },
 * //           fileUpload: { // FileUploadCardInput
 * //             title: "STRING_VALUE", // required
 * //             id: "STRING_VALUE", // required
 * //             type: "text-input" || "q-query" || "file-upload" || "q-plugin" || "form-input", // required
 * //             filename: "STRING_VALUE",
 * //             fileId: "STRING_VALUE",
 * //             allowOverride: true || false,
 * //           },
 * //           formInput: { // FormInputCardInput
 * //             title: "STRING_VALUE", // required
 * //             id: "STRING_VALUE", // required
 * //             type: "text-input" || "q-query" || "file-upload" || "q-plugin" || "form-input", // required
 * //             metadata: { // FormInputCardMetadata
 * //               schema: "DOCUMENT_VALUE", // required
 * //             },
 * //             computeMode: "append" || "replace",
 * //           },
 * //         },
 * //       ],
 * //       initialPrompt: "STRING_VALUE",
 * //     },
 * //   },
 * //   problemStatement: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PredictQAppCommandInput - {@link PredictQAppCommandInput}
 * @returns {@link PredictQAppCommandOutput}
 * @see {@link PredictQAppCommandInput} for command's `input` shape.
 * @see {@link PredictQAppCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
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
 * @public
 */
export class PredictQAppCommand extends $Command
  .classBuilder<
    PredictQAppCommandInput,
    PredictQAppCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "PredictQApp", {})
  .n("QAppsClient", "PredictQAppCommand")
  .sc(PredictQApp)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PredictQAppInput;
      output: PredictQAppOutput;
    };
    sdk: {
      input: PredictQAppCommandInput;
      output: PredictQAppCommandOutput;
    };
  };
}
