// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportComponentsRequest, ExportComponentsResponse } from "../models/models_0";
import { ExportComponents } from "../schemas/schemas_1_Form";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportComponentsCommand}.
 */
export interface ExportComponentsCommandInput extends ExportComponentsRequest {}
/**
 * @public
 *
 * The output of {@link ExportComponentsCommand}.
 */
export interface ExportComponentsCommandOutput extends ExportComponentsResponse, __MetadataBearer {}

/**
 * <p>Exports component configurations to code that is ready to integrate into an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, ExportComponentsCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, ExportComponentsCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * // import type { AmplifyUIBuilderClientConfig } from "@aws-sdk/client-amplifyuibuilder";
 * const config = {}; // type is AmplifyUIBuilderClientConfig
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // ExportComponentsRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ExportComponentsCommand(input);
 * const response = await client.send(command);
 * // { // ExportComponentsResponse
 * //   entities: [ // ComponentList // required
 * //     { // Component
 * //       appId: "STRING_VALUE", // required
 * //       environmentName: "STRING_VALUE", // required
 * //       sourceId: "STRING_VALUE",
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       componentType: "STRING_VALUE", // required
 * //       properties: { // ComponentProperties // required
 * //         "<keys>": { // ComponentProperty
 * //           value: "STRING_VALUE",
 * //           bindingProperties: { // ComponentPropertyBindingProperties
 * //             property: "STRING_VALUE", // required
 * //             field: "STRING_VALUE",
 * //           },
 * //           collectionBindingProperties: {
 * //             property: "STRING_VALUE", // required
 * //             field: "STRING_VALUE",
 * //           },
 * //           defaultValue: "STRING_VALUE",
 * //           model: "STRING_VALUE",
 * //           bindings: { // FormBindings
 * //             "<keys>": { // FormBindingElement
 * //               element: "STRING_VALUE", // required
 * //               property: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           event: "STRING_VALUE",
 * //           userAttribute: "STRING_VALUE",
 * //           concat: [ // ComponentPropertyList
 * //             {
 * //               value: "STRING_VALUE",
 * //               bindingProperties: {
 * //                 property: "STRING_VALUE", // required
 * //                 field: "STRING_VALUE",
 * //               },
 * //               collectionBindingProperties: {
 * //                 property: "STRING_VALUE", // required
 * //                 field: "STRING_VALUE",
 * //               },
 * //               defaultValue: "STRING_VALUE",
 * //               model: "STRING_VALUE",
 * //               bindings: {
 * //                 "<keys>": {
 * //                   element: "STRING_VALUE", // required
 * //                   property: "STRING_VALUE", // required
 * //                 },
 * //               },
 * //               event: "STRING_VALUE",
 * //               userAttribute: "STRING_VALUE",
 * //               concat: [
 * //                 "<ComponentProperty>",
 * //               ],
 * //               condition: { // ComponentConditionProperty
 * //                 property: "STRING_VALUE",
 * //                 field: "STRING_VALUE",
 * //                 operator: "STRING_VALUE",
 * //                 operand: "STRING_VALUE",
 * //                 then: "<ComponentProperty>",
 * //                 else: "<ComponentProperty>",
 * //                 operandType: "STRING_VALUE",
 * //               },
 * //               configured: true || false,
 * //               type: "STRING_VALUE",
 * //               importedValue: "STRING_VALUE",
 * //               componentName: "STRING_VALUE",
 * //               property: "STRING_VALUE",
 * //             },
 * //           ],
 * //           condition: {
 * //             property: "STRING_VALUE",
 * //             field: "STRING_VALUE",
 * //             operator: "STRING_VALUE",
 * //             operand: "STRING_VALUE",
 * //             then: "<ComponentProperty>",
 * //             else: "<ComponentProperty>",
 * //             operandType: "STRING_VALUE",
 * //           },
 * //           configured: true || false,
 * //           type: "STRING_VALUE",
 * //           importedValue: "STRING_VALUE",
 * //           componentName: "STRING_VALUE",
 * //           property: "STRING_VALUE",
 * //         },
 * //       },
 * //       children: [ // ComponentChildList
 * //         { // ComponentChild
 * //           componentType: "STRING_VALUE", // required
 * //           name: "STRING_VALUE", // required
 * //           properties: { // required
 * //             "<keys>": "<ComponentProperty>",
 * //           },
 * //           children: [
 * //             {
 * //               componentType: "STRING_VALUE", // required
 * //               name: "STRING_VALUE", // required
 * //               properties: "<ComponentProperties>", // required
 * //               children: "<ComponentChildList>",
 * //               events: { // ComponentEvents
 * //                 "<keys>": { // ComponentEvent
 * //                   action: "STRING_VALUE",
 * //                   parameters: { // ActionParameters
 * //                     type: "<ComponentProperty>",
 * //                     url: "<ComponentProperty>",
 * //                     anchor: "<ComponentProperty>",
 * //                     target: "<ComponentProperty>",
 * //                     global: "<ComponentProperty>",
 * //                     model: "STRING_VALUE",
 * //                     id: "<ComponentProperty>",
 * //                     fields: "<ComponentProperties>",
 * //                     state: { // MutationActionSetStateParameter
 * //                       componentName: "STRING_VALUE", // required
 * //                       property: "STRING_VALUE", // required
 * //                       set: "<ComponentProperty>", // required
 * //                     },
 * //                   },
 * //                   bindingEvent: "STRING_VALUE",
 * //                 },
 * //               },
 * //               sourceId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           events: {
 * //             "<keys>": {
 * //               action: "STRING_VALUE",
 * //               parameters: {
 * //                 type: "<ComponentProperty>",
 * //                 url: "<ComponentProperty>",
 * //                 anchor: "<ComponentProperty>",
 * //                 target: "<ComponentProperty>",
 * //                 global: "<ComponentProperty>",
 * //                 model: "STRING_VALUE",
 * //                 id: "<ComponentProperty>",
 * //                 fields: "<ComponentProperties>",
 * //                 state: {
 * //                   componentName: "STRING_VALUE", // required
 * //                   property: "STRING_VALUE", // required
 * //                   set: "<ComponentProperty>", // required
 * //                 },
 * //               },
 * //               bindingEvent: "STRING_VALUE",
 * //             },
 * //           },
 * //           sourceId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       variants: [ // ComponentVariants // required
 * //         { // ComponentVariant
 * //           variantValues: { // ComponentVariantValues
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           overrides: { // ComponentOverrides
 * //             "<keys>": { // ComponentOverridesValue
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       overrides: { // required
 * //         "<keys>": {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       bindingProperties: { // ComponentBindingProperties // required
 * //         "<keys>": { // ComponentBindingPropertiesValue
 * //           type: "STRING_VALUE",
 * //           bindingProperties: { // ComponentBindingPropertiesValueProperties
 * //             model: "STRING_VALUE",
 * //             field: "STRING_VALUE",
 * //             predicates: [ // PredicateList
 * //               { // Predicate
 * //                 or: [
 * //                   {
 * //                     or: "<PredicateList>",
 * //                     and: "<PredicateList>",
 * //                     field: "STRING_VALUE",
 * //                     operator: "STRING_VALUE",
 * //                     operand: "STRING_VALUE",
 * //                     operandType: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 and: "<PredicateList>",
 * //                 field: "STRING_VALUE",
 * //                 operator: "STRING_VALUE",
 * //                 operand: "STRING_VALUE",
 * //                 operandType: "STRING_VALUE",
 * //               },
 * //             ],
 * //             userAttribute: "STRING_VALUE",
 * //             bucket: "STRING_VALUE",
 * //             key: "STRING_VALUE",
 * //             defaultValue: "STRING_VALUE",
 * //             slotName: "STRING_VALUE",
 * //           },
 * //           defaultValue: "STRING_VALUE",
 * //         },
 * //       },
 * //       collectionProperties: { // ComponentCollectionProperties
 * //         "<keys>": { // ComponentDataConfiguration
 * //           model: "STRING_VALUE", // required
 * //           sort: [ // SortPropertyList
 * //             { // SortProperty
 * //               field: "STRING_VALUE", // required
 * //               direction: "ASC" || "DESC", // required
 * //             },
 * //           ],
 * //           predicate: "<Predicate>",
 * //           identifiers: [ // IdentifierList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       events: "<ComponentEvents>",
 * //       schemaVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportComponentsCommandInput - {@link ExportComponentsCommandInput}
 * @returns {@link ExportComponentsCommandOutput}
 * @see {@link ExportComponentsCommandInput} for command's `input` shape.
 * @see {@link ExportComponentsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link AmplifyUIBuilderServiceException}
 * <p>Base exception class for all service exceptions from AmplifyUIBuilder service.</p>
 *
 *
 * @public
 */
export class ExportComponentsCommand extends $Command
  .classBuilder<
    ExportComponentsCommandInput,
    ExportComponentsCommandOutput,
    AmplifyUIBuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyUIBuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmplifyUIBuilder", "ExportComponents", {})
  .n("AmplifyUIBuilderClient", "ExportComponentsCommand")
  .sc(ExportComponents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportComponentsRequest;
      output: ExportComponentsResponse;
    };
    sdk: {
      input: ExportComponentsCommandInput;
      output: ExportComponentsCommandOutput;
    };
  };
}
