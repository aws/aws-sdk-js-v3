// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import type { ListPropertiesRequest, ListPropertiesResponse } from "../models/models_0";
import { ListProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPropertiesCommand}.
 */
export interface ListPropertiesCommandInput extends ListPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ListPropertiesCommand}.
 */
export interface ListPropertiesCommandOutput extends ListPropertiesResponse, __MetadataBearer {}

/**
 * <p>This API lists the properties of a component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, ListPropertiesCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, ListPropertiesCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // ListPropertiesRequest
 *   workspaceId: "STRING_VALUE", // required
 *   componentName: "STRING_VALUE",
 *   componentPath: "STRING_VALUE",
 *   entityId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // ListPropertiesResponse
 * //   propertySummaries: [ // PropertySummaries // required
 * //     { // PropertySummary
 * //       definition: { // PropertyDefinitionResponse
 * //         dataType: { // DataType
 * //           type: "STRING_VALUE", // required
 * //           nestedType: {
 * //             type: "STRING_VALUE", // required
 * //             nestedType: "<DataType>",
 * //             allowedValues: [ // DataValueList
 * //               { // DataValue
 * //                 booleanValue: true || false,
 * //                 doubleValue: Number("double"),
 * //                 integerValue: Number("int"),
 * //                 longValue: Number("long"),
 * //                 stringValue: "STRING_VALUE",
 * //                 listValue: [
 * //                   {
 * //                     booleanValue: true || false,
 * //                     doubleValue: Number("double"),
 * //                     integerValue: Number("int"),
 * //                     longValue: Number("long"),
 * //                     stringValue: "STRING_VALUE",
 * //                     listValue: "<DataValueList>",
 * //                     mapValue: { // DataValueMap
 * //                       "<keys>": "<DataValue>",
 * //                     },
 * //                     relationshipValue: { // RelationshipValue
 * //                       targetEntityId: "STRING_VALUE",
 * //                       targetComponentName: "STRING_VALUE",
 * //                     },
 * //                     expression: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 mapValue: {
 * //                   "<keys>": "<DataValue>",
 * //                 },
 * //                 relationshipValue: {
 * //                   targetEntityId: "STRING_VALUE",
 * //                   targetComponentName: "STRING_VALUE",
 * //                 },
 * //                 expression: "STRING_VALUE",
 * //               },
 * //             ],
 * //             unitOfMeasure: "STRING_VALUE",
 * //             relationship: { // Relationship
 * //               targetComponentTypeId: "STRING_VALUE",
 * //               relationshipType: "STRING_VALUE",
 * //             },
 * //           },
 * //           allowedValues: "<DataValueList>",
 * //           unitOfMeasure: "STRING_VALUE",
 * //           relationship: {
 * //             targetComponentTypeId: "STRING_VALUE",
 * //             relationshipType: "STRING_VALUE",
 * //           },
 * //         },
 * //         isTimeSeries: true || false, // required
 * //         isRequiredInEntity: true || false, // required
 * //         isExternalId: true || false, // required
 * //         isStoredExternally: true || false, // required
 * //         isImported: true || false, // required
 * //         isFinal: true || false, // required
 * //         isInherited: true || false, // required
 * //         defaultValue: "<DataValue>",
 * //         configuration: { // Configuration
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         displayName: "STRING_VALUE",
 * //       },
 * //       propertyName: "STRING_VALUE", // required
 * //       value: "<DataValue>",
 * //       areAllPropertyValuesReturned: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPropertiesCommandInput - {@link ListPropertiesCommandInput}
 * @returns {@link ListPropertiesCommandOutput}
 * @see {@link ListPropertiesCommandInput} for command's `input` shape.
 * @see {@link ListPropertiesCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 *
 * @public
 */
export class ListPropertiesCommand extends $Command
  .classBuilder<
    ListPropertiesCommandInput,
    ListPropertiesCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "ListProperties", {})
  .n("IoTTwinMakerClient", "ListPropertiesCommand")
  .sc(ListProperties$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPropertiesRequest;
      output: ListPropertiesResponse;
    };
    sdk: {
      input: ListPropertiesCommandInput;
      output: ListPropertiesCommandOutput;
    };
  };
}
