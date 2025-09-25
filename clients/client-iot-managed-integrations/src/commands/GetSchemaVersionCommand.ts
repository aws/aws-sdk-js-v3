// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { GetSchemaVersionRequest, GetSchemaVersionResponse } from "../models/models_0";
import { GetSchemaVersion } from "../schemas/schemas_6_ManagedThing";

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
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
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
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
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
 *
 * @example GetSchemaVersion happy path for an example schema version.
 * ```javascript
 * //
 * const input = {
 *   SchemaVersionedId: "matter.ColorControl@1.4",
 *   Type: "capability"
 * };
 * const command = new GetSchemaVersionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Description: "The Color Control cluster defined as Harmony Capability.",
 *   Namespace: "matter",
 *   Schema: {
 *     $defs:     { /* empty *\/ },
 *     $id: "/schema-versions/capability/matter.ColorControl@1.4",
 *     $ref: "/schema-versions/definition/aws.capability@1.0",
 *     actions: [
 *       {
 *         extrinsicId: "0x00",
 *         name: "MoveToHue",
 *         request: {
 *           parameters: {
 *             Hue: {
 *               extrinsicId: "0",
 *               value: {
 *                 $ref: "aws.integer@1.0"
 *               }
 *             }
 *           }
 *         }
 *       }
 *     ],
 *     description: "The Color Control cluster defined as Harmony Capability.",
 *     events:     [],
 *     extrinsicId: "0x0300",
 *     extrinsicVersion: "14",
 *     name: "Color Control",
 *     properties: {
 *       CurrentHue: {
 *         mutable: false,
 *         value: {
 *           $ref: "aws.integer@1.0"
 *         }
 *       }
 *     },
 *     title: "Color Control Cluster"
 *   },
 *   SchemaId: "matter.ColorControl",
 *   SemanticVersion: "1.4",
 *   Type: "capability"
 * }
 * *\/
 * ```
 *
 * @example GetSchemaVersion happy path for an example schema version.
 * ```javascript
 * //
 * const input = {
 *   Format: "ZCL",
 *   SchemaVersionedId: "matter.ColorControl@1.4",
 *   Type: "capability"
 * };
 * const command = new GetSchemaVersionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Description: "The Color Control cluster defined as Harmony Capability.",
 *   Namespace: "matter",
 *   Schema:   { /* empty *\/ },
 *   SchemaId: "matter.ColorControl",
 *   SemanticVersion: "1.4",
 *   Type: "capability"
 * }
 * *\/
 * ```
 *
 * @example GetSchemaVersion error path for an example schema version that does not exist.
 * ```javascript
 * //
 * const input = {
 *   SchemaVersionedId: "matter.ColorControl@$latest",
 *   Type: "capability"
 * };
 * const command = new GetSchemaVersionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "GetSchemaVersion", {})
  .n("IoTManagedIntegrationsClient", "GetSchemaVersionCommand")
  .sc(GetSchemaVersion)
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
