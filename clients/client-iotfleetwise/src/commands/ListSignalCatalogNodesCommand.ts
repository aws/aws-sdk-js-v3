// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { ListSignalCatalogNodesRequest, ListSignalCatalogNodesResponse } from "../models/models_0";
import { de_ListSignalCatalogNodesCommand, se_ListSignalCatalogNodesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSignalCatalogNodesCommand}.
 */
export interface ListSignalCatalogNodesCommandInput extends ListSignalCatalogNodesRequest {}
/**
 * @public
 *
 * The output of {@link ListSignalCatalogNodesCommand}.
 */
export interface ListSignalCatalogNodesCommandOutput extends ListSignalCatalogNodesResponse, __MetadataBearer {}

/**
 * <p> Lists of information about the signals (nodes) specified in a signal catalog. </p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListSignalCatalogNodesCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListSignalCatalogNodesCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // ListSignalCatalogNodesRequest
 *   name: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   signalNodeType: "SENSOR" || "ACTUATOR" || "ATTRIBUTE" || "BRANCH" || "CUSTOM_STRUCT" || "CUSTOM_PROPERTY",
 * };
 * const command = new ListSignalCatalogNodesCommand(input);
 * const response = await client.send(command);
 * // { // ListSignalCatalogNodesResponse
 * //   nodes: [ // Nodes
 * //     { // Node Union: only one key present
 * //       branch: { // Branch
 * //         fullyQualifiedName: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         deprecationMessage: "STRING_VALUE",
 * //         comment: "STRING_VALUE",
 * //       },
 * //       sensor: { // Sensor
 * //         fullyQualifiedName: "STRING_VALUE", // required
 * //         dataType: "INT8" || "UINT8" || "INT16" || "UINT16" || "INT32" || "UINT32" || "INT64" || "UINT64" || "BOOLEAN" || "FLOAT" || "DOUBLE" || "STRING" || "UNIX_TIMESTAMP" || "INT8_ARRAY" || "UINT8_ARRAY" || "INT16_ARRAY" || "UINT16_ARRAY" || "INT32_ARRAY" || "UINT32_ARRAY" || "INT64_ARRAY" || "UINT64_ARRAY" || "BOOLEAN_ARRAY" || "FLOAT_ARRAY" || "DOUBLE_ARRAY" || "STRING_ARRAY" || "UNIX_TIMESTAMP_ARRAY" || "UNKNOWN" || "STRUCT" || "STRUCT_ARRAY", // required
 * //         description: "STRING_VALUE",
 * //         unit: "STRING_VALUE",
 * //         allowedValues: [ // listOfStrings
 * //           "STRING_VALUE",
 * //         ],
 * //         min: Number("double"),
 * //         max: Number("double"),
 * //         deprecationMessage: "STRING_VALUE",
 * //         comment: "STRING_VALUE",
 * //         structFullyQualifiedName: "STRING_VALUE",
 * //       },
 * //       actuator: { // Actuator
 * //         fullyQualifiedName: "STRING_VALUE", // required
 * //         dataType: "INT8" || "UINT8" || "INT16" || "UINT16" || "INT32" || "UINT32" || "INT64" || "UINT64" || "BOOLEAN" || "FLOAT" || "DOUBLE" || "STRING" || "UNIX_TIMESTAMP" || "INT8_ARRAY" || "UINT8_ARRAY" || "INT16_ARRAY" || "UINT16_ARRAY" || "INT32_ARRAY" || "UINT32_ARRAY" || "INT64_ARRAY" || "UINT64_ARRAY" || "BOOLEAN_ARRAY" || "FLOAT_ARRAY" || "DOUBLE_ARRAY" || "STRING_ARRAY" || "UNIX_TIMESTAMP_ARRAY" || "UNKNOWN" || "STRUCT" || "STRUCT_ARRAY", // required
 * //         description: "STRING_VALUE",
 * //         unit: "STRING_VALUE",
 * //         allowedValues: [
 * //           "STRING_VALUE",
 * //         ],
 * //         min: Number("double"),
 * //         max: Number("double"),
 * //         assignedValue: "STRING_VALUE",
 * //         deprecationMessage: "STRING_VALUE",
 * //         comment: "STRING_VALUE",
 * //         structFullyQualifiedName: "STRING_VALUE",
 * //       },
 * //       attribute: { // Attribute
 * //         fullyQualifiedName: "STRING_VALUE", // required
 * //         dataType: "INT8" || "UINT8" || "INT16" || "UINT16" || "INT32" || "UINT32" || "INT64" || "UINT64" || "BOOLEAN" || "FLOAT" || "DOUBLE" || "STRING" || "UNIX_TIMESTAMP" || "INT8_ARRAY" || "UINT8_ARRAY" || "INT16_ARRAY" || "UINT16_ARRAY" || "INT32_ARRAY" || "UINT32_ARRAY" || "INT64_ARRAY" || "UINT64_ARRAY" || "BOOLEAN_ARRAY" || "FLOAT_ARRAY" || "DOUBLE_ARRAY" || "STRING_ARRAY" || "UNIX_TIMESTAMP_ARRAY" || "UNKNOWN" || "STRUCT" || "STRUCT_ARRAY", // required
 * //         description: "STRING_VALUE",
 * //         unit: "STRING_VALUE",
 * //         allowedValues: [
 * //           "STRING_VALUE",
 * //         ],
 * //         min: Number("double"),
 * //         max: Number("double"),
 * //         assignedValue: "STRING_VALUE",
 * //         defaultValue: "STRING_VALUE",
 * //         deprecationMessage: "STRING_VALUE",
 * //         comment: "STRING_VALUE",
 * //       },
 * //       struct: { // CustomStruct
 * //         fullyQualifiedName: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         deprecationMessage: "STRING_VALUE",
 * //         comment: "STRING_VALUE",
 * //       },
 * //       property: { // CustomProperty
 * //         fullyQualifiedName: "STRING_VALUE", // required
 * //         dataType: "INT8" || "UINT8" || "INT16" || "UINT16" || "INT32" || "UINT32" || "INT64" || "UINT64" || "BOOLEAN" || "FLOAT" || "DOUBLE" || "STRING" || "UNIX_TIMESTAMP" || "INT8_ARRAY" || "UINT8_ARRAY" || "INT16_ARRAY" || "UINT16_ARRAY" || "INT32_ARRAY" || "UINT32_ARRAY" || "INT64_ARRAY" || "UINT64_ARRAY" || "BOOLEAN_ARRAY" || "FLOAT_ARRAY" || "DOUBLE_ARRAY" || "STRING_ARRAY" || "UNIX_TIMESTAMP_ARRAY" || "UNKNOWN" || "STRUCT" || "STRUCT_ARRAY", // required
 * //         dataEncoding: "BINARY" || "TYPED",
 * //         description: "STRING_VALUE",
 * //         deprecationMessage: "STRING_VALUE",
 * //         comment: "STRING_VALUE",
 * //         structFullyQualifiedName: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSignalCatalogNodesCommandInput - {@link ListSignalCatalogNodesCommandInput}
 * @returns {@link ListSignalCatalogNodesCommandOutput}
 * @see {@link ListSignalCatalogNodesCommandInput} for command's `input` shape.
 * @see {@link ListSignalCatalogNodesCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service quota was exceeded. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 *
 * @public
 */
export class ListSignalCatalogNodesCommand extends $Command
  .classBuilder<
    ListSignalCatalogNodesCommandInput,
    ListSignalCatalogNodesCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTAutobahnControlPlane", "ListSignalCatalogNodes", {})
  .n("IoTFleetWiseClient", "ListSignalCatalogNodesCommand")
  .f(void 0, void 0)
  .ser(se_ListSignalCatalogNodesCommand)
  .de(de_ListSignalCatalogNodesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSignalCatalogNodesRequest;
      output: ListSignalCatalogNodesResponse;
    };
    sdk: {
      input: ListSignalCatalogNodesCommandInput;
      output: ListSignalCatalogNodesCommandOutput;
    };
  };
}
