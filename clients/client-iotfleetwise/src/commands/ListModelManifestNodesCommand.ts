// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { ListModelManifestNodesRequest, ListModelManifestNodesResponse } from "../models/models_0";
import { ListModelManifestNodes } from "../schemas/schemas_7_Update";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListModelManifestNodesCommand}.
 */
export interface ListModelManifestNodesCommandInput extends ListModelManifestNodesRequest {}
/**
 * @public
 *
 * The output of {@link ListModelManifestNodesCommand}.
 */
export interface ListModelManifestNodesCommandOutput extends ListModelManifestNodesResponse, __MetadataBearer {}

/**
 * <p> Lists information about nodes specified in a vehicle model (model manifest). </p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListModelManifestNodesCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListModelManifestNodesCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // ListModelManifestNodesRequest
 *   name: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListModelManifestNodesCommand(input);
 * const response = await client.send(command);
 * // { // ListModelManifestNodesResponse
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
 * @param ListModelManifestNodesCommandInput - {@link ListModelManifestNodesCommandInput}
 * @returns {@link ListModelManifestNodesCommandOutput}
 * @see {@link ListModelManifestNodesCommandInput} for command's `input` shape.
 * @see {@link ListModelManifestNodesCommandOutput} for command's `response` shape.
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
export class ListModelManifestNodesCommand extends $Command
  .classBuilder<
    ListModelManifestNodesCommandInput,
    ListModelManifestNodesCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IoTAutobahnControlPlane", "ListModelManifestNodes", {})
  .n("IoTFleetWiseClient", "ListModelManifestNodesCommand")
  .sc(ListModelManifestNodes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListModelManifestNodesRequest;
      output: ListModelManifestNodesResponse;
    };
    sdk: {
      input: ListModelManifestNodesCommandInput;
      output: ListModelManifestNodesCommandOutput;
    };
  };
}
