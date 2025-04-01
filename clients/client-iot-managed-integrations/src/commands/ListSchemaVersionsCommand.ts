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
import { ListSchemaVersionsRequest, ListSchemaVersionsResponse } from "../models/models_0";
import { de_ListSchemaVersionsCommand, se_ListSchemaVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSchemaVersionsCommand}.
 */
export interface ListSchemaVersionsCommandInput extends ListSchemaVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSchemaVersionsCommand}.
 */
export interface ListSchemaVersionsCommandOutput extends ListSchemaVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists schema versions with the provided information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListSchemaVersionsCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListSchemaVersionsCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListSchemaVersionsRequest
 *   Type: "capability" || "definition", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SchemaId: "STRING_VALUE",
 *   Namespace: "STRING_VALUE",
 *   Visibility: "PUBLIC" || "PRIVATE",
 *   SemanticVersion: "STRING_VALUE",
 * };
 * const command = new ListSchemaVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSchemaVersionsResponse
 * //   Items: [ // SchemaVersionList
 * //     { // SchemaVersionListItem
 * //       SchemaId: "STRING_VALUE",
 * //       Type: "capability" || "definition",
 * //       Description: "STRING_VALUE",
 * //       Namespace: "STRING_VALUE",
 * //       SemanticVersion: "STRING_VALUE",
 * //       Visibility: "PUBLIC" || "PRIVATE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSchemaVersionsCommandInput - {@link ListSchemaVersionsCommandInput}
 * @returns {@link ListSchemaVersionsCommandOutput}
 * @see {@link ListSchemaVersionsCommandInput} for command's `input` shape.
 * @see {@link ListSchemaVersionsCommandOutput} for command's `response` shape.
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
 * @example ListSchemaVersions happy path for an example schema version.
 * ```javascript
 * //
 * const input = {
 *   SchemaId: "matter.ColorControl",
 *   Type: "capability"
 * };
 * const command = new ListSchemaVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Description: "The Color Control cluster defined as Harmony Capability.",
 *       Namespace: "matter",
 *       SchemaId: "matter.ColorControl",
 *       SemanticVersion: "1.3",
 *       Type: "capability"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example ListSchemaVersions by version.
 * ```javascript
 * //
 * const input = {
 *   SemanticVersion: "34.56",
 *   Type: "capability"
 * };
 * const command = new ListSchemaVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Description: "The Color Control cluster defined as Harmony Capability.",
 *       Namespace: "matter",
 *       SchemaId: "matter.ColorControl",
 *       SemanticVersion: "1.3",
 *       Type: "capability"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example ListSchemaVersions error  for invalid input.
 * ```javascript
 * //
 * const input = {
 *   Namespace: "matter",
 *   SchemaId: "matter.ColorControl",
 *   Type: "capability"
 * };
 * const command = new ListSchemaVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ListSchemaVersionsCommand extends $Command
  .classBuilder<
    ListSchemaVersionsCommandInput,
    ListSchemaVersionsCommandOutput,
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
  .s("IotManagedIntegrations", "ListSchemaVersions", {})
  .n("IoTManagedIntegrationsClient", "ListSchemaVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListSchemaVersionsCommand)
  .de(de_ListSchemaVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSchemaVersionsRequest;
      output: ListSchemaVersionsResponse;
    };
    sdk: {
      input: ListSchemaVersionsCommandInput;
      output: ListSchemaVersionsCommandOutput;
    };
  };
}
