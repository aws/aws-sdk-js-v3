// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateComponentRequest, UpdateComponentResponse } from "../models/models_0";
import { de_UpdateComponentCommand, se_UpdateComponentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateComponentCommand}.
 */
export interface UpdateComponentCommandInput extends UpdateComponentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateComponentCommand}.
 */
export interface UpdateComponentCommandOutput extends UpdateComponentResponse, __MetadataBearer {}

/**
 * <p>Updates an existing component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, UpdateComponentCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, UpdateComponentCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // UpdateComponentRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   updatedComponent: { // UpdateComponentData
 *     id: "STRING_VALUE",
 *     name: "STRING_VALUE",
 *     sourceId: "STRING_VALUE",
 *     componentType: "STRING_VALUE",
 *     properties: { // ComponentProperties
 *       "<keys>": { // ComponentProperty
 *         value: "STRING_VALUE",
 *         bindingProperties: { // ComponentPropertyBindingProperties
 *           property: "STRING_VALUE", // required
 *           field: "STRING_VALUE",
 *         },
 *         collectionBindingProperties: {
 *           property: "STRING_VALUE", // required
 *           field: "STRING_VALUE",
 *         },
 *         defaultValue: "STRING_VALUE",
 *         model: "STRING_VALUE",
 *         bindings: { // FormBindings
 *           "<keys>": { // FormBindingElement
 *             element: "STRING_VALUE", // required
 *             property: "STRING_VALUE", // required
 *           },
 *         },
 *         event: "STRING_VALUE",
 *         userAttribute: "STRING_VALUE",
 *         concat: [ // ComponentPropertyList
 *           {
 *             value: "STRING_VALUE",
 *             bindingProperties: {
 *               property: "STRING_VALUE", // required
 *               field: "STRING_VALUE",
 *             },
 *             collectionBindingProperties: {
 *               property: "STRING_VALUE", // required
 *               field: "STRING_VALUE",
 *             },
 *             defaultValue: "STRING_VALUE",
 *             model: "STRING_VALUE",
 *             bindings: {
 *               "<keys>": {
 *                 element: "STRING_VALUE", // required
 *                 property: "STRING_VALUE", // required
 *               },
 *             },
 *             event: "STRING_VALUE",
 *             userAttribute: "STRING_VALUE",
 *             concat: [
 *               "<ComponentProperty>",
 *             ],
 *             condition: { // ComponentConditionProperty
 *               property: "STRING_VALUE",
 *               field: "STRING_VALUE",
 *               operator: "STRING_VALUE",
 *               operand: "STRING_VALUE",
 *               then: "<ComponentProperty>",
 *               else: "<ComponentProperty>",
 *               operandType: "STRING_VALUE",
 *             },
 *             configured: true || false,
 *             type: "STRING_VALUE",
 *             importedValue: "STRING_VALUE",
 *             componentName: "STRING_VALUE",
 *             property: "STRING_VALUE",
 *           },
 *         ],
 *         condition: {
 *           property: "STRING_VALUE",
 *           field: "STRING_VALUE",
 *           operator: "STRING_VALUE",
 *           operand: "STRING_VALUE",
 *           then: "<ComponentProperty>",
 *           else: "<ComponentProperty>",
 *           operandType: "STRING_VALUE",
 *         },
 *         configured: true || false,
 *         type: "STRING_VALUE",
 *         importedValue: "STRING_VALUE",
 *         componentName: "STRING_VALUE",
 *         property: "STRING_VALUE",
 *       },
 *     },
 *     children: [ // ComponentChildList
 *       { // ComponentChild
 *         componentType: "STRING_VALUE", // required
 *         name: "STRING_VALUE", // required
 *         properties: { // required
 *           "<keys>": "<ComponentProperty>",
 *         },
 *         children: [
 *           {
 *             componentType: "STRING_VALUE", // required
 *             name: "STRING_VALUE", // required
 *             properties: "<ComponentProperties>", // required
 *             children: "<ComponentChildList>",
 *             events: { // ComponentEvents
 *               "<keys>": { // ComponentEvent
 *                 action: "STRING_VALUE",
 *                 parameters: { // ActionParameters
 *                   type: "<ComponentProperty>",
 *                   url: "<ComponentProperty>",
 *                   anchor: "<ComponentProperty>",
 *                   target: "<ComponentProperty>",
 *                   global: "<ComponentProperty>",
 *                   model: "STRING_VALUE",
 *                   id: "<ComponentProperty>",
 *                   fields: "<ComponentProperties>",
 *                   state: { // MutationActionSetStateParameter
 *                     componentName: "STRING_VALUE", // required
 *                     property: "STRING_VALUE", // required
 *                     set: "<ComponentProperty>", // required
 *                   },
 *                 },
 *                 bindingEvent: "STRING_VALUE",
 *               },
 *             },
 *             sourceId: "STRING_VALUE",
 *           },
 *         ],
 *         events: {
 *           "<keys>": {
 *             action: "STRING_VALUE",
 *             parameters: {
 *               type: "<ComponentProperty>",
 *               url: "<ComponentProperty>",
 *               anchor: "<ComponentProperty>",
 *               target: "<ComponentProperty>",
 *               global: "<ComponentProperty>",
 *               model: "STRING_VALUE",
 *               id: "<ComponentProperty>",
 *               fields: "<ComponentProperties>",
 *               state: {
 *                 componentName: "STRING_VALUE", // required
 *                 property: "STRING_VALUE", // required
 *                 set: "<ComponentProperty>", // required
 *               },
 *             },
 *             bindingEvent: "STRING_VALUE",
 *           },
 *         },
 *         sourceId: "STRING_VALUE",
 *       },
 *     ],
 *     variants: [ // ComponentVariants
 *       { // ComponentVariant
 *         variantValues: { // ComponentVariantValues
 *           "<keys>": "STRING_VALUE",
 *         },
 *         overrides: { // ComponentOverrides
 *           "<keys>": { // ComponentOverridesValue
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *     overrides: {
 *       "<keys>": {
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     bindingProperties: { // ComponentBindingProperties
 *       "<keys>": { // ComponentBindingPropertiesValue
 *         type: "STRING_VALUE",
 *         bindingProperties: { // ComponentBindingPropertiesValueProperties
 *           model: "STRING_VALUE",
 *           field: "STRING_VALUE",
 *           predicates: [ // PredicateList
 *             { // Predicate
 *               or: [
 *                 {
 *                   or: "<PredicateList>",
 *                   and: "<PredicateList>",
 *                   field: "STRING_VALUE",
 *                   operator: "STRING_VALUE",
 *                   operand: "STRING_VALUE",
 *                   operandType: "STRING_VALUE",
 *                 },
 *               ],
 *               and: "<PredicateList>",
 *               field: "STRING_VALUE",
 *               operator: "STRING_VALUE",
 *               operand: "STRING_VALUE",
 *               operandType: "STRING_VALUE",
 *             },
 *           ],
 *           userAttribute: "STRING_VALUE",
 *           bucket: "STRING_VALUE",
 *           key: "STRING_VALUE",
 *           defaultValue: "STRING_VALUE",
 *           slotName: "STRING_VALUE",
 *         },
 *         defaultValue: "STRING_VALUE",
 *       },
 *     },
 *     collectionProperties: { // ComponentCollectionProperties
 *       "<keys>": { // ComponentDataConfiguration
 *         model: "STRING_VALUE", // required
 *         sort: [ // SortPropertyList
 *           { // SortProperty
 *             field: "STRING_VALUE", // required
 *             direction: "ASC" || "DESC", // required
 *           },
 *         ],
 *         predicate: "<Predicate>",
 *         identifiers: [ // IdentifierList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     events: "<ComponentEvents>",
 *     schemaVersion: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateComponentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateComponentResponse
 * //   entity: { // Component
 * //     appId: "STRING_VALUE", // required
 * //     environmentName: "STRING_VALUE", // required
 * //     sourceId: "STRING_VALUE",
 * //     id: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     componentType: "STRING_VALUE", // required
 * //     properties: { // ComponentProperties // required
 * //       "<keys>": { // ComponentProperty
 * //         value: "STRING_VALUE",
 * //         bindingProperties: { // ComponentPropertyBindingProperties
 * //           property: "STRING_VALUE", // required
 * //           field: "STRING_VALUE",
 * //         },
 * //         collectionBindingProperties: {
 * //           property: "STRING_VALUE", // required
 * //           field: "STRING_VALUE",
 * //         },
 * //         defaultValue: "STRING_VALUE",
 * //         model: "STRING_VALUE",
 * //         bindings: { // FormBindings
 * //           "<keys>": { // FormBindingElement
 * //             element: "STRING_VALUE", // required
 * //             property: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         event: "STRING_VALUE",
 * //         userAttribute: "STRING_VALUE",
 * //         concat: [ // ComponentPropertyList
 * //           {
 * //             value: "STRING_VALUE",
 * //             bindingProperties: {
 * //               property: "STRING_VALUE", // required
 * //               field: "STRING_VALUE",
 * //             },
 * //             collectionBindingProperties: {
 * //               property: "STRING_VALUE", // required
 * //               field: "STRING_VALUE",
 * //             },
 * //             defaultValue: "STRING_VALUE",
 * //             model: "STRING_VALUE",
 * //             bindings: {
 * //               "<keys>": {
 * //                 element: "STRING_VALUE", // required
 * //                 property: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             event: "STRING_VALUE",
 * //             userAttribute: "STRING_VALUE",
 * //             concat: [
 * //               "<ComponentProperty>",
 * //             ],
 * //             condition: { // ComponentConditionProperty
 * //               property: "STRING_VALUE",
 * //               field: "STRING_VALUE",
 * //               operator: "STRING_VALUE",
 * //               operand: "STRING_VALUE",
 * //               then: "<ComponentProperty>",
 * //               else: "<ComponentProperty>",
 * //               operandType: "STRING_VALUE",
 * //             },
 * //             configured: true || false,
 * //             type: "STRING_VALUE",
 * //             importedValue: "STRING_VALUE",
 * //             componentName: "STRING_VALUE",
 * //             property: "STRING_VALUE",
 * //           },
 * //         ],
 * //         condition: {
 * //           property: "STRING_VALUE",
 * //           field: "STRING_VALUE",
 * //           operator: "STRING_VALUE",
 * //           operand: "STRING_VALUE",
 * //           then: "<ComponentProperty>",
 * //           else: "<ComponentProperty>",
 * //           operandType: "STRING_VALUE",
 * //         },
 * //         configured: true || false,
 * //         type: "STRING_VALUE",
 * //         importedValue: "STRING_VALUE",
 * //         componentName: "STRING_VALUE",
 * //         property: "STRING_VALUE",
 * //       },
 * //     },
 * //     children: [ // ComponentChildList
 * //       { // ComponentChild
 * //         componentType: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         properties: { // required
 * //           "<keys>": "<ComponentProperty>",
 * //         },
 * //         children: [
 * //           {
 * //             componentType: "STRING_VALUE", // required
 * //             name: "STRING_VALUE", // required
 * //             properties: "<ComponentProperties>", // required
 * //             children: "<ComponentChildList>",
 * //             events: { // ComponentEvents
 * //               "<keys>": { // ComponentEvent
 * //                 action: "STRING_VALUE",
 * //                 parameters: { // ActionParameters
 * //                   type: "<ComponentProperty>",
 * //                   url: "<ComponentProperty>",
 * //                   anchor: "<ComponentProperty>",
 * //                   target: "<ComponentProperty>",
 * //                   global: "<ComponentProperty>",
 * //                   model: "STRING_VALUE",
 * //                   id: "<ComponentProperty>",
 * //                   fields: "<ComponentProperties>",
 * //                   state: { // MutationActionSetStateParameter
 * //                     componentName: "STRING_VALUE", // required
 * //                     property: "STRING_VALUE", // required
 * //                     set: "<ComponentProperty>", // required
 * //                   },
 * //                 },
 * //                 bindingEvent: "STRING_VALUE",
 * //               },
 * //             },
 * //             sourceId: "STRING_VALUE",
 * //           },
 * //         ],
 * //         events: {
 * //           "<keys>": {
 * //             action: "STRING_VALUE",
 * //             parameters: {
 * //               type: "<ComponentProperty>",
 * //               url: "<ComponentProperty>",
 * //               anchor: "<ComponentProperty>",
 * //               target: "<ComponentProperty>",
 * //               global: "<ComponentProperty>",
 * //               model: "STRING_VALUE",
 * //               id: "<ComponentProperty>",
 * //               fields: "<ComponentProperties>",
 * //               state: {
 * //                 componentName: "STRING_VALUE", // required
 * //                 property: "STRING_VALUE", // required
 * //                 set: "<ComponentProperty>", // required
 * //               },
 * //             },
 * //             bindingEvent: "STRING_VALUE",
 * //           },
 * //         },
 * //         sourceId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     variants: [ // ComponentVariants // required
 * //       { // ComponentVariant
 * //         variantValues: { // ComponentVariantValues
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         overrides: { // ComponentOverrides
 * //           "<keys>": { // ComponentOverridesValue
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     overrides: { // required
 * //       "<keys>": {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     bindingProperties: { // ComponentBindingProperties // required
 * //       "<keys>": { // ComponentBindingPropertiesValue
 * //         type: "STRING_VALUE",
 * //         bindingProperties: { // ComponentBindingPropertiesValueProperties
 * //           model: "STRING_VALUE",
 * //           field: "STRING_VALUE",
 * //           predicates: [ // PredicateList
 * //             { // Predicate
 * //               or: [
 * //                 {
 * //                   or: "<PredicateList>",
 * //                   and: "<PredicateList>",
 * //                   field: "STRING_VALUE",
 * //                   operator: "STRING_VALUE",
 * //                   operand: "STRING_VALUE",
 * //                   operandType: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               and: "<PredicateList>",
 * //               field: "STRING_VALUE",
 * //               operator: "STRING_VALUE",
 * //               operand: "STRING_VALUE",
 * //               operandType: "STRING_VALUE",
 * //             },
 * //           ],
 * //           userAttribute: "STRING_VALUE",
 * //           bucket: "STRING_VALUE",
 * //           key: "STRING_VALUE",
 * //           defaultValue: "STRING_VALUE",
 * //           slotName: "STRING_VALUE",
 * //         },
 * //         defaultValue: "STRING_VALUE",
 * //       },
 * //     },
 * //     collectionProperties: { // ComponentCollectionProperties
 * //       "<keys>": { // ComponentDataConfiguration
 * //         model: "STRING_VALUE", // required
 * //         sort: [ // SortPropertyList
 * //           { // SortProperty
 * //             field: "STRING_VALUE", // required
 * //             direction: "ASC" || "DESC", // required
 * //           },
 * //         ],
 * //         predicate: "<Predicate>",
 * //         identifiers: [ // IdentifierList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     events: "<ComponentEvents>",
 * //     schemaVersion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateComponentCommandInput - {@link UpdateComponentCommandInput}
 * @returns {@link UpdateComponentCommandOutput}
 * @see {@link UpdateComponentCommandInput} for command's `input` shape.
 * @see {@link UpdateComponentCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource specified in the request conflicts with an existing resource.</p>
 *
 * @throws {@link AmplifyUIBuilderServiceException}
 * <p>Base exception class for all service exceptions from AmplifyUIBuilder service.</p>
 *
 * @public
 */
export class UpdateComponentCommand extends $Command
  .classBuilder<
    UpdateComponentCommandInput,
    UpdateComponentCommandOutput,
    AmplifyUIBuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyUIBuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmplifyUIBuilder", "UpdateComponent", {})
  .n("AmplifyUIBuilderClient", "UpdateComponentCommand")
  .f(void 0, void 0)
  .ser(se_UpdateComponentCommand)
  .de(de_UpdateComponentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateComponentRequest;
      output: UpdateComponentResponse;
    };
    sdk: {
      input: UpdateComponentCommandInput;
      output: UpdateComponentCommandOutput;
    };
  };
}
