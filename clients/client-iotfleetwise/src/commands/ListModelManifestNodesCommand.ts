// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListModelManifestNodesRequest, ListModelManifestNodesResponse } from "../models/models_0";
import { ListModelManifestNodes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists information about nodes specified in a vehicle model (model manifest).
 *
 * > **Note:** This API operation uses pagination. Specify the `nextToken` parameter in the request to return more results.
 *
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
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A service quota was exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request couldn't be completed due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class ListModelManifestNodesCommand extends command<ListModelManifestNodesCommandInput, ListModelManifestNodesCommandOutput>(
  _ep0,
  _mw0,
  "ListModelManifestNodes",
  ListModelManifestNodes$
) {
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
