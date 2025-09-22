// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { UpdateSignalCatalogRequest, UpdateSignalCatalogResponse } from "../models/models_0";
import { UpdateSignalCatalog } from "../schemas/schemas_7_Update";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSignalCatalogCommand}.
 */
export interface UpdateSignalCatalogCommandInput extends UpdateSignalCatalogRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSignalCatalogCommand}.
 */
export interface UpdateSignalCatalogCommandOutput extends UpdateSignalCatalogResponse, __MetadataBearer {}

/**
 * <p> Updates a signal catalog. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, UpdateSignalCatalogCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, UpdateSignalCatalogCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // UpdateSignalCatalogRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   nodesToAdd: [ // Nodes
 *     { // Node Union: only one key present
 *       branch: { // Branch
 *         fullyQualifiedName: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         deprecationMessage: "STRING_VALUE",
 *         comment: "STRING_VALUE",
 *       },
 *       sensor: { // Sensor
 *         fullyQualifiedName: "STRING_VALUE", // required
 *         dataType: "INT8" || "UINT8" || "INT16" || "UINT16" || "INT32" || "UINT32" || "INT64" || "UINT64" || "BOOLEAN" || "FLOAT" || "DOUBLE" || "STRING" || "UNIX_TIMESTAMP" || "INT8_ARRAY" || "UINT8_ARRAY" || "INT16_ARRAY" || "UINT16_ARRAY" || "INT32_ARRAY" || "UINT32_ARRAY" || "INT64_ARRAY" || "UINT64_ARRAY" || "BOOLEAN_ARRAY" || "FLOAT_ARRAY" || "DOUBLE_ARRAY" || "STRING_ARRAY" || "UNIX_TIMESTAMP_ARRAY" || "UNKNOWN" || "STRUCT" || "STRUCT_ARRAY", // required
 *         description: "STRING_VALUE",
 *         unit: "STRING_VALUE",
 *         allowedValues: [ // listOfStrings
 *           "STRING_VALUE",
 *         ],
 *         min: Number("double"),
 *         max: Number("double"),
 *         deprecationMessage: "STRING_VALUE",
 *         comment: "STRING_VALUE",
 *         structFullyQualifiedName: "STRING_VALUE",
 *       },
 *       actuator: { // Actuator
 *         fullyQualifiedName: "STRING_VALUE", // required
 *         dataType: "INT8" || "UINT8" || "INT16" || "UINT16" || "INT32" || "UINT32" || "INT64" || "UINT64" || "BOOLEAN" || "FLOAT" || "DOUBLE" || "STRING" || "UNIX_TIMESTAMP" || "INT8_ARRAY" || "UINT8_ARRAY" || "INT16_ARRAY" || "UINT16_ARRAY" || "INT32_ARRAY" || "UINT32_ARRAY" || "INT64_ARRAY" || "UINT64_ARRAY" || "BOOLEAN_ARRAY" || "FLOAT_ARRAY" || "DOUBLE_ARRAY" || "STRING_ARRAY" || "UNIX_TIMESTAMP_ARRAY" || "UNKNOWN" || "STRUCT" || "STRUCT_ARRAY", // required
 *         description: "STRING_VALUE",
 *         unit: "STRING_VALUE",
 *         allowedValues: [
 *           "STRING_VALUE",
 *         ],
 *         min: Number("double"),
 *         max: Number("double"),
 *         assignedValue: "STRING_VALUE",
 *         deprecationMessage: "STRING_VALUE",
 *         comment: "STRING_VALUE",
 *         structFullyQualifiedName: "STRING_VALUE",
 *       },
 *       attribute: { // Attribute
 *         fullyQualifiedName: "STRING_VALUE", // required
 *         dataType: "INT8" || "UINT8" || "INT16" || "UINT16" || "INT32" || "UINT32" || "INT64" || "UINT64" || "BOOLEAN" || "FLOAT" || "DOUBLE" || "STRING" || "UNIX_TIMESTAMP" || "INT8_ARRAY" || "UINT8_ARRAY" || "INT16_ARRAY" || "UINT16_ARRAY" || "INT32_ARRAY" || "UINT32_ARRAY" || "INT64_ARRAY" || "UINT64_ARRAY" || "BOOLEAN_ARRAY" || "FLOAT_ARRAY" || "DOUBLE_ARRAY" || "STRING_ARRAY" || "UNIX_TIMESTAMP_ARRAY" || "UNKNOWN" || "STRUCT" || "STRUCT_ARRAY", // required
 *         description: "STRING_VALUE",
 *         unit: "STRING_VALUE",
 *         allowedValues: [
 *           "STRING_VALUE",
 *         ],
 *         min: Number("double"),
 *         max: Number("double"),
 *         assignedValue: "STRING_VALUE",
 *         defaultValue: "STRING_VALUE",
 *         deprecationMessage: "STRING_VALUE",
 *         comment: "STRING_VALUE",
 *       },
 *       struct: { // CustomStruct
 *         fullyQualifiedName: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         deprecationMessage: "STRING_VALUE",
 *         comment: "STRING_VALUE",
 *       },
 *       property: { // CustomProperty
 *         fullyQualifiedName: "STRING_VALUE", // required
 *         dataType: "INT8" || "UINT8" || "INT16" || "UINT16" || "INT32" || "UINT32" || "INT64" || "UINT64" || "BOOLEAN" || "FLOAT" || "DOUBLE" || "STRING" || "UNIX_TIMESTAMP" || "INT8_ARRAY" || "UINT8_ARRAY" || "INT16_ARRAY" || "UINT16_ARRAY" || "INT32_ARRAY" || "UINT32_ARRAY" || "INT64_ARRAY" || "UINT64_ARRAY" || "BOOLEAN_ARRAY" || "FLOAT_ARRAY" || "DOUBLE_ARRAY" || "STRING_ARRAY" || "UNIX_TIMESTAMP_ARRAY" || "UNKNOWN" || "STRUCT" || "STRUCT_ARRAY", // required
 *         dataEncoding: "BINARY" || "TYPED",
 *         description: "STRING_VALUE",
 *         deprecationMessage: "STRING_VALUE",
 *         comment: "STRING_VALUE",
 *         structFullyQualifiedName: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   nodesToUpdate: [
 *     {//  Union: only one key present
 *       branch: {
 *         fullyQualifiedName: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         deprecationMessage: "STRING_VALUE",
 *         comment: "STRING_VALUE",
 *       },
 *       sensor: {
 *         fullyQualifiedName: "STRING_VALUE", // required
 *         dataType: "INT8" || "UINT8" || "INT16" || "UINT16" || "INT32" || "UINT32" || "INT64" || "UINT64" || "BOOLEAN" || "FLOAT" || "DOUBLE" || "STRING" || "UNIX_TIMESTAMP" || "INT8_ARRAY" || "UINT8_ARRAY" || "INT16_ARRAY" || "UINT16_ARRAY" || "INT32_ARRAY" || "UINT32_ARRAY" || "INT64_ARRAY" || "UINT64_ARRAY" || "BOOLEAN_ARRAY" || "FLOAT_ARRAY" || "DOUBLE_ARRAY" || "STRING_ARRAY" || "UNIX_TIMESTAMP_ARRAY" || "UNKNOWN" || "STRUCT" || "STRUCT_ARRAY", // required
 *         description: "STRING_VALUE",
 *         unit: "STRING_VALUE",
 *         allowedValues: [
 *           "STRING_VALUE",
 *         ],
 *         min: Number("double"),
 *         max: Number("double"),
 *         deprecationMessage: "STRING_VALUE",
 *         comment: "STRING_VALUE",
 *         structFullyQualifiedName: "STRING_VALUE",
 *       },
 *       actuator: {
 *         fullyQualifiedName: "STRING_VALUE", // required
 *         dataType: "INT8" || "UINT8" || "INT16" || "UINT16" || "INT32" || "UINT32" || "INT64" || "UINT64" || "BOOLEAN" || "FLOAT" || "DOUBLE" || "STRING" || "UNIX_TIMESTAMP" || "INT8_ARRAY" || "UINT8_ARRAY" || "INT16_ARRAY" || "UINT16_ARRAY" || "INT32_ARRAY" || "UINT32_ARRAY" || "INT64_ARRAY" || "UINT64_ARRAY" || "BOOLEAN_ARRAY" || "FLOAT_ARRAY" || "DOUBLE_ARRAY" || "STRING_ARRAY" || "UNIX_TIMESTAMP_ARRAY" || "UNKNOWN" || "STRUCT" || "STRUCT_ARRAY", // required
 *         description: "STRING_VALUE",
 *         unit: "STRING_VALUE",
 *         allowedValues: [
 *           "STRING_VALUE",
 *         ],
 *         min: Number("double"),
 *         max: Number("double"),
 *         assignedValue: "STRING_VALUE",
 *         deprecationMessage: "STRING_VALUE",
 *         comment: "STRING_VALUE",
 *         structFullyQualifiedName: "STRING_VALUE",
 *       },
 *       attribute: {
 *         fullyQualifiedName: "STRING_VALUE", // required
 *         dataType: "INT8" || "UINT8" || "INT16" || "UINT16" || "INT32" || "UINT32" || "INT64" || "UINT64" || "BOOLEAN" || "FLOAT" || "DOUBLE" || "STRING" || "UNIX_TIMESTAMP" || "INT8_ARRAY" || "UINT8_ARRAY" || "INT16_ARRAY" || "UINT16_ARRAY" || "INT32_ARRAY" || "UINT32_ARRAY" || "INT64_ARRAY" || "UINT64_ARRAY" || "BOOLEAN_ARRAY" || "FLOAT_ARRAY" || "DOUBLE_ARRAY" || "STRING_ARRAY" || "UNIX_TIMESTAMP_ARRAY" || "UNKNOWN" || "STRUCT" || "STRUCT_ARRAY", // required
 *         description: "STRING_VALUE",
 *         unit: "STRING_VALUE",
 *         allowedValues: "<listOfStrings>",
 *         min: Number("double"),
 *         max: Number("double"),
 *         assignedValue: "STRING_VALUE",
 *         defaultValue: "STRING_VALUE",
 *         deprecationMessage: "STRING_VALUE",
 *         comment: "STRING_VALUE",
 *       },
 *       struct: {
 *         fullyQualifiedName: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         deprecationMessage: "STRING_VALUE",
 *         comment: "STRING_VALUE",
 *       },
 *       property: {
 *         fullyQualifiedName: "STRING_VALUE", // required
 *         dataType: "INT8" || "UINT8" || "INT16" || "UINT16" || "INT32" || "UINT32" || "INT64" || "UINT64" || "BOOLEAN" || "FLOAT" || "DOUBLE" || "STRING" || "UNIX_TIMESTAMP" || "INT8_ARRAY" || "UINT8_ARRAY" || "INT16_ARRAY" || "UINT16_ARRAY" || "INT32_ARRAY" || "UINT32_ARRAY" || "INT64_ARRAY" || "UINT64_ARRAY" || "BOOLEAN_ARRAY" || "FLOAT_ARRAY" || "DOUBLE_ARRAY" || "STRING_ARRAY" || "UNIX_TIMESTAMP_ARRAY" || "UNKNOWN" || "STRUCT" || "STRUCT_ARRAY", // required
 *         dataEncoding: "BINARY" || "TYPED",
 *         description: "STRING_VALUE",
 *         deprecationMessage: "STRING_VALUE",
 *         comment: "STRING_VALUE",
 *         structFullyQualifiedName: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   nodesToRemove: [ // NodePaths
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateSignalCatalogCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSignalCatalogResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateSignalCatalogCommandInput - {@link UpdateSignalCatalogCommandInput}
 * @returns {@link UpdateSignalCatalogCommandOutput}
 * @see {@link UpdateSignalCatalogCommandInput} for command's `input` shape.
 * @see {@link UpdateSignalCatalogCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link InvalidNodeException} (client fault)
 *  <p>The specified node type doesn't match the expected node type for a node. You can
 *             specify the node type as branch, sensor, actuator, or attribute.</p>
 *
 * @throws {@link InvalidSignalsException} (client fault)
 *  <p>The request couldn't be completed because it contains signals that aren't
 *             valid.</p>
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
export class UpdateSignalCatalogCommand extends $Command
  .classBuilder<
    UpdateSignalCatalogCommandInput,
    UpdateSignalCatalogCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IoTAutobahnControlPlane", "UpdateSignalCatalog", {})
  .n("IoTFleetWiseClient", "UpdateSignalCatalogCommand")
  .sc(UpdateSignalCatalog)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSignalCatalogRequest;
      output: UpdateSignalCatalogResponse;
    };
    sdk: {
      input: UpdateSignalCatalogCommandInput;
      output: UpdateSignalCatalogCommandOutput;
    };
  };
}
