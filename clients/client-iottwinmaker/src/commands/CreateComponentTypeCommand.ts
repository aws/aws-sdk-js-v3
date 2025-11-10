// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { CreateComponentTypeRequest, CreateComponentTypeResponse } from "../models/models_0";
import { CreateComponentType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateComponentTypeCommand}.
 */
export interface CreateComponentTypeCommandInput extends CreateComponentTypeRequest {}
/**
 * @public
 *
 * The output of {@link CreateComponentTypeCommand}.
 */
export interface CreateComponentTypeCommandOutput extends CreateComponentTypeResponse, __MetadataBearer {}

/**
 * <p>Creates a component type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, CreateComponentTypeCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, CreateComponentTypeCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // CreateComponentTypeRequest
 *   workspaceId: "STRING_VALUE", // required
 *   isSingleton: true || false,
 *   componentTypeId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   propertyDefinitions: { // PropertyDefinitionsRequest
 *     "<keys>": { // PropertyDefinitionRequest
 *       dataType: { // DataType
 *         type: "STRING_VALUE", // required
 *         nestedType: {
 *           type: "STRING_VALUE", // required
 *           nestedType: "<DataType>",
 *           allowedValues: [ // DataValueList
 *             { // DataValue
 *               booleanValue: true || false,
 *               doubleValue: Number("double"),
 *               integerValue: Number("int"),
 *               longValue: Number("long"),
 *               stringValue: "STRING_VALUE",
 *               listValue: [
 *                 {
 *                   booleanValue: true || false,
 *                   doubleValue: Number("double"),
 *                   integerValue: Number("int"),
 *                   longValue: Number("long"),
 *                   stringValue: "STRING_VALUE",
 *                   listValue: "<DataValueList>",
 *                   mapValue: { // DataValueMap
 *                     "<keys>": "<DataValue>",
 *                   },
 *                   relationshipValue: { // RelationshipValue
 *                     targetEntityId: "STRING_VALUE",
 *                     targetComponentName: "STRING_VALUE",
 *                   },
 *                   expression: "STRING_VALUE",
 *                 },
 *               ],
 *               mapValue: {
 *                 "<keys>": "<DataValue>",
 *               },
 *               relationshipValue: {
 *                 targetEntityId: "STRING_VALUE",
 *                 targetComponentName: "STRING_VALUE",
 *               },
 *               expression: "STRING_VALUE",
 *             },
 *           ],
 *           unitOfMeasure: "STRING_VALUE",
 *           relationship: { // Relationship
 *             targetComponentTypeId: "STRING_VALUE",
 *             relationshipType: "STRING_VALUE",
 *           },
 *         },
 *         allowedValues: "<DataValueList>",
 *         unitOfMeasure: "STRING_VALUE",
 *         relationship: {
 *           targetComponentTypeId: "STRING_VALUE",
 *           relationshipType: "STRING_VALUE",
 *         },
 *       },
 *       isRequiredInEntity: true || false,
 *       isExternalId: true || false,
 *       isStoredExternally: true || false,
 *       isTimeSeries: true || false,
 *       defaultValue: "<DataValue>",
 *       configuration: { // Configuration
 *         "<keys>": "STRING_VALUE",
 *       },
 *       displayName: "STRING_VALUE",
 *     },
 *   },
 *   extendsFrom: [ // ExtendsFrom
 *     "STRING_VALUE",
 *   ],
 *   functions: { // FunctionsRequest
 *     "<keys>": { // FunctionRequest
 *       requiredProperties: [ // RequiredProperties
 *         "STRING_VALUE",
 *       ],
 *       scope: "STRING_VALUE",
 *       implementedBy: { // DataConnector
 *         lambda: { // LambdaFunction
 *           arn: "STRING_VALUE", // required
 *         },
 *         isNative: true || false,
 *       },
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   propertyGroups: { // PropertyGroupsRequest
 *     "<keys>": { // PropertyGroupRequest
 *       groupType: "STRING_VALUE",
 *       propertyNames: [ // PropertyNames
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   componentTypeName: "STRING_VALUE",
 *   compositeComponentTypes: { // CompositeComponentTypesRequest
 *     "<keys>": { // CompositeComponentTypeRequest
 *       componentTypeId: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateComponentTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateComponentTypeResponse
 * //   arn: "STRING_VALUE", // required
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * //   state: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateComponentTypeCommandInput - {@link CreateComponentTypeCommandInput}
 * @returns {@link CreateComponentTypeCommandOutput}
 * @see {@link CreateComponentTypeCommandInput} for command's `input` shape.
 * @see {@link CreateComponentTypeCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota was exceeded.</p>
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
export class CreateComponentTypeCommand extends $Command
  .classBuilder<
    CreateComponentTypeCommandInput,
    CreateComponentTypeCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "CreateComponentType", {})
  .n("IoTTwinMakerClient", "CreateComponentTypeCommand")
  .sc(CreateComponentType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateComponentTypeRequest;
      output: CreateComponentTypeResponse;
    };
    sdk: {
      input: CreateComponentTypeCommandInput;
      output: CreateComponentTypeCommandOutput;
    };
  };
}
