// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { GetSchemaVersionRequest, GetSchemaVersionResponse } from "../models/models_0";
import { de_GetSchemaVersionCommand, se_GetSchemaVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSchemaVersionCommand}.
 */
export interface GetSchemaVersionCommandInput extends GetSchemaVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetSchemaVersionCommand}.
 */
export interface GetSchemaVersionCommandOutput extends GetSchemaVersionResponse, __MetadataBearer {}

/**
 * <p>Gets a schema version with the provided information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetSchemaVersionCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetSchemaVersionCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetSchemaVersionRequest
 *   Type: "capability" || "definition", // required
 *   SchemaVersionedId: "STRING_VALUE", // required
 *   Format: "AWS" || "ZCL" || "CONNECTOR",
 * };
 * const command = new GetSchemaVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetSchemaVersionResponse
 * //   SchemaId: "STRING_VALUE",
 * //   Type: "capability" || "definition",
 * //   Description: "STRING_VALUE",
 * //   Namespace: "STRING_VALUE",
 * //   SemanticVersion: "STRING_VALUE",
 * //   Visibility: "PUBLIC" || "PRIVATE",
 * //   Schema: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSchemaVersionCommandInput - {@link GetSchemaVersionCommandInput}
 * @returns {@link GetSchemaVersionCommandOutput}
 * @see {@link GetSchemaVersionCommandInput} for command's `input` shape.
 * @see {@link GetSchemaVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict with the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *          is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 * @public
 * @example GetSchemaVersion happy path for an example schema version.
 * ```javascript
 * //
 * const input = {
 *   "SchemaVersionedId": "matter.ColorControl@$latest",
 *   "Type": "capability"
 * };
 * const command = new GetSchemaVersionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Description": "The Color Control cluster defined as Harmony Capability.",
 *   "Namespace": "matter",
 *   "Schema": {
 *     "name": "Color Control",
 *     "$defs": {},
 *     "$id": "matter.ColorControl@1.3",
 *     "$ref": "aws.capability@1.0",
 *     "actions": [
 *       {
 *         "$ref": "aws.action.ReadState@1.0"
 *       },
 *       {
 *         "$ref": "aws.action.UpdateState@1.0"
 *       },
 *       {
 *         "name": "MoveToHue",
 *         "extrinsicId": "0x00",
 *         "request": {
 *           "parameters": {
 *             "Hue": {
 *               "value": {
 *                 "$ref": "aws.integer@1.0"
 *               },
 *               "extrinsicId": "0"
 *             }
 *           }
 *         }
 *       }
 *     ],
 *     "description": "The Color Control cluster defined as Harmony Capability.",
 *     "events": [],
 *     "extrinsicId": "0x0300",
 *     "extrinsicVersion": "14",
 *     "properties": {
 *       "CurrentHue": {
 *         "value": {
 *           "$ref": "aws.integer@1.0"
 *         },
 *         "mutable": false
 *       }
 *     },
 *     "title": "Color Control Cluster"
 *   },
 *   "SchemaId": "matter.ColorControl",
 *   "SemanticVersion": "1.3",
 *   "Type": "capability"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 * @example GetSchemaVersion happy path for an example schema version.
 * ```javascript
 * //
 * const input = {
 *   "Format": "ZCL",
 *   "SchemaVersionedId": "matter.ColorControl@1.3",
 *   "Type": "capability"
 * };
 * const command = new GetSchemaVersionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Description": "The Color Control cluster defined as Harmony Capability.",
 *   "Namespace": "matter",
 *   "Schema": {},
 *   "SchemaId": "matter.ColorControl",
 *   "SemanticVersion": "1.3",
 *   "Type": "capability"
 * }
 * *\/
 * // example id: example-2
 * ```
 *
 * @example GetSchemaVersion error path for an example schema version that does not exist.
 * ```javascript
 * //
 * const input = {
 *   "SchemaVersionedId": "matter.ColorControl@$latest",
 *   "Type": "capability"
 * };
 * const command = new GetSchemaVersionCommand(input);
 * await client.send(command);
 * // example id: example-3
 * ```
 *
 */
export class GetSchemaVersionCommand extends $Command
  .classBuilder<
    GetSchemaVersionCommandInput,
    GetSchemaVersionCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotManagedIntegrations", "GetSchemaVersion", {})
  .n("IoTManagedIntegrationsClient", "GetSchemaVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetSchemaVersionCommand)
  .de(de_GetSchemaVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSchemaVersionRequest;
      output: GetSchemaVersionResponse;
    };
    sdk: {
      input: GetSchemaVersionCommandInput;
      output: GetSchemaVersionCommandOutput;
    };
  };
}
