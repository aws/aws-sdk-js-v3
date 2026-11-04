// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPropertyValueRequest, GetPropertyValueResponse } from "../models/models_0";
import { GetPropertyValue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPropertyValueCommand}.
 */
export interface GetPropertyValueCommandInput extends GetPropertyValueRequest {}
/**
 * @public
 *
 * The output of {@link GetPropertyValueCommand}.
 */
export interface GetPropertyValueCommandOutput extends GetPropertyValueResponse, __MetadataBearer {}

/**
 * Gets the property values for a component, component type, entity, or workspace.
 *
 * You must specify a value for either `componentName`, `componentTypeId`, `entityId`, or `workspaceId`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, GetPropertyValueCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, GetPropertyValueCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // GetPropertyValueRequest
 *   componentName: "STRING_VALUE",
 *   componentPath: "STRING_VALUE",
 *   componentTypeId: "STRING_VALUE",
 *   entityId: "STRING_VALUE",
 *   selectedProperties: [ // SelectedPropertyList // required
 *     "STRING_VALUE",
 *   ],
 *   workspaceId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   propertyGroupName: "STRING_VALUE",
 *   tabularConditions: { // TabularConditions
 *     orderBy: [ // OrderByList
 *       { // OrderBy
 *         order: "STRING_VALUE",
 *         propertyName: "STRING_VALUE", // required
 *       },
 *     ],
 *     propertyFilters: [ // PropertyFilters
 *       { // PropertyFilter
 *         propertyName: "STRING_VALUE",
 *         operator: "STRING_VALUE",
 *         value: { // DataValue
 *           booleanValue: true || false,
 *           doubleValue: Number("double"),
 *           integerValue: Number("int"),
 *           longValue: Number("long"),
 *           stringValue: "STRING_VALUE",
 *           listValue: [ // DataValueList
 *             {
 *               booleanValue: true || false,
 *               doubleValue: Number("double"),
 *               integerValue: Number("int"),
 *               longValue: Number("long"),
 *               stringValue: "STRING_VALUE",
 *               listValue: [
 *                 "<DataValue>",
 *               ],
 *               mapValue: { // DataValueMap
 *                 "<keys>": "<DataValue>",
 *               },
 *               relationshipValue: { // RelationshipValue
 *                 targetEntityId: "STRING_VALUE",
 *                 targetComponentName: "STRING_VALUE",
 *               },
 *               expression: "STRING_VALUE",
 *             },
 *           ],
 *           mapValue: {
 *             "<keys>": "<DataValue>",
 *           },
 *           relationshipValue: {
 *             targetEntityId: "STRING_VALUE",
 *             targetComponentName: "STRING_VALUE",
 *           },
 *           expression: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new GetPropertyValueCommand(input);
 * const response = await client.send(command);
 * // { // GetPropertyValueResponse
 * //   propertyValues: { // PropertyLatestValueMap
 * //     "<keys>": { // PropertyLatestValue
 * //       propertyReference: { // EntityPropertyReference
 * //         componentName: "STRING_VALUE",
 * //         componentPath: "STRING_VALUE",
 * //         externalIdProperty: { // ExternalIdProperty
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         entityId: "STRING_VALUE",
 * //         propertyName: "STRING_VALUE", // required
 * //       },
 * //       propertyValue: { // DataValue
 * //         booleanValue: true || false,
 * //         doubleValue: Number("double"),
 * //         integerValue: Number("int"),
 * //         longValue: Number("long"),
 * //         stringValue: "STRING_VALUE",
 * //         listValue: [ // DataValueList
 * //           {
 * //             booleanValue: true || false,
 * //             doubleValue: Number("double"),
 * //             integerValue: Number("int"),
 * //             longValue: Number("long"),
 * //             stringValue: "STRING_VALUE",
 * //             listValue: [
 * //               "<DataValue>",
 * //             ],
 * //             mapValue: { // DataValueMap
 * //               "<keys>": "<DataValue>",
 * //             },
 * //             relationshipValue: { // RelationshipValue
 * //               targetEntityId: "STRING_VALUE",
 * //               targetComponentName: "STRING_VALUE",
 * //             },
 * //             expression: "STRING_VALUE",
 * //           },
 * //         ],
 * //         mapValue: {
 * //           "<keys>": "<DataValue>",
 * //         },
 * //         relationshipValue: {
 * //           targetEntityId: "STRING_VALUE",
 * //           targetComponentName: "STRING_VALUE",
 * //         },
 * //         expression: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   nextToken: "STRING_VALUE",
 * //   tabularPropertyValues: [ // TabularPropertyValues
 * //     [ // TabularPropertyValue
 * //       { // PropertyTableValue
 * //         "<keys>": "<DataValue>",
 * //       },
 * //     ],
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPropertyValueCommandInput - {@link GetPropertyValueCommandInput}
 * @returns {@link GetPropertyValueCommandOutput}
 * @see {@link GetPropertyValueCommandInput} for command's `input` shape.
 * @see {@link GetPropertyValueCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link ConnectorFailureException} (client fault)
 *
 * The connector failed.
 *
 * @throws {@link ConnectorTimeoutException} (client fault)
 *
 * The connector timed out.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Failed
 *
 * @throws {@link IoTTwinMakerServiceException}
 *
 * Base exception class for all service exceptions from IoTTwinMaker service.
 *
 * @public
 */
export class GetPropertyValueCommand extends command<GetPropertyValueCommandInput, GetPropertyValueCommandOutput>(
  _ep0,
  _mw0,
  "GetPropertyValue",
  GetPropertyValue$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPropertyValueRequest;
      output: GetPropertyValueResponse;
    };
    sdk: {
      input: GetPropertyValueCommandInput;
      output: GetPropertyValueCommandOutput;
    };
  };
}
