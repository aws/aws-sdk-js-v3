// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import type { CreateCloudConnectorRequest, CreateCloudConnectorResponse } from "../models/models_0";
import { CreateCloudConnector } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCloudConnectorCommand}.
 */
export interface CreateCloudConnectorCommandInput extends CreateCloudConnectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateCloudConnectorCommand}.
 */
export interface CreateCloudConnectorCommandOutput extends CreateCloudConnectorResponse, __MetadataBearer {}

/**
 * <p>Creates a C2C (cloud-to-cloud) connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, CreateCloudConnectorCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, CreateCloudConnectorCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // CreateCloudConnectorRequest
 *   Name: "STRING_VALUE", // required
 *   EndpointConfig: { // EndpointConfig
 *     lambda: { // LambdaConfig
 *       arn: "STRING_VALUE", // required
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   EndpointType: "LAMBDA",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateCloudConnectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateCloudConnectorResponse
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCloudConnectorCommandInput - {@link CreateCloudConnectorCommandInput}
 * @returns {@link CreateCloudConnectorCommandOutput}
 * @see {@link CreateCloudConnectorCommandInput} for command's `input` shape.
 * @see {@link CreateCloudConnectorCommandOutput} for command's `response` shape.
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
 * @example CreateCloudConnector happy path for TP Link
 * ```javascript
 * //
 * const input = {
 *   ClientToken: "1234567890",
 *   EndpointConfig: {
 *     lambda: {
 *       arn: "arn:aws:lambda:us-east-1:111122223333:function:my-function:myVersion"
 *     }
 *   },
 *   EndpointType: "LAMBDA",
 *   Name: "Connector for TP Link Cloud"
 * };
 * const command = new CreateCloudConnectorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Id: "TPLinkConnector1211"
 * }
 * *\/
 * ```
 *
 * @example CreateCloudConnector happy path for Ring
 * ```javascript
 * //
 * const input = {
 *   ClientToken: "12312321",
 *   EndpointConfig: {
 *     lambda: {
 *       arn: "arn:aws:lambda:us-east-1:111122223333:function:my-function:myVersion"
 *     }
 *   },
 *   EndpointType: "LAMBDA",
 *   Name: "Connector for Ring Cloud"
 * };
 * const command = new CreateCloudConnectorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Id: "RingConnector1212"
 * }
 * *\/
 * ```
 *
 * @example CreateCloudConnector error path for Ring connector which already exists
 * ```javascript
 * //
 * const input = {
 *   ClientToken: "1213123123",
 *   EndpointConfig: {
 *     lambda: {
 *       arn: "arn:aws:lambda:us-east-1:111122223333:function:my-function:myVersion2"
 *     }
 *   },
 *   EndpointType: "LAMBDA",
 *   Name: "Connector for Ring Cloud"
 * };
 * const command = new CreateCloudConnectorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateCloudConnectorCommand extends $Command
  .classBuilder<
    CreateCloudConnectorCommandInput,
    CreateCloudConnectorCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "CreateCloudConnector", {})
  .n("IoTManagedIntegrationsClient", "CreateCloudConnectorCommand")
  .sc(CreateCloudConnector)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCloudConnectorRequest;
      output: CreateCloudConnectorResponse;
    };
    sdk: {
      input: CreateCloudConnectorCommandInput;
      output: CreateCloudConnectorCommandOutput;
    };
  };
}
