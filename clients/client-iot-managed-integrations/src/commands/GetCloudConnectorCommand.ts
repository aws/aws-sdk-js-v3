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
import { GetCloudConnectorRequest, GetCloudConnectorResponse } from "../models/models_0";
import { de_GetCloudConnectorCommand, se_GetCloudConnectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCloudConnectorCommand}.
 */
export interface GetCloudConnectorCommandInput extends GetCloudConnectorRequest {}
/**
 * @public
 *
 * The output of {@link GetCloudConnectorCommand}.
 */
export interface GetCloudConnectorCommandOutput extends GetCloudConnectorResponse, __MetadataBearer {}

/**
 * <p>Gets all the information about a connector for a connector developer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetCloudConnectorCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetCloudConnectorCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetCloudConnectorRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetCloudConnectorCommand(input);
 * const response = await client.send(command);
 * // { // GetCloudConnectorResponse
 * //   Name: "STRING_VALUE", // required
 * //   EndpointConfig: { // EndpointConfig
 * //     lambda: { // LambdaConfig
 * //       arn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   Description: "STRING_VALUE",
 * //   EndpointType: "LAMBDA",
 * //   Id: "STRING_VALUE",
 * //   Type: "LISTED" || "UNLISTED",
 * // };
 *
 * ```
 *
 * @param GetCloudConnectorCommandInput - {@link GetCloudConnectorCommandInput}
 * @returns {@link GetCloudConnectorCommandOutput}
 * @see {@link GetCloudConnectorCommandInput} for command's `input` shape.
 * @see {@link GetCloudConnectorCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
 * @example GetCloudConnector happy path for TP Link to get connector resource
 * ```javascript
 * //
 * const input = {
 *   Identifier: "123456789012"
 * };
 * const command = new GetCloudConnectorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EndpointConfig: {
 *     lambda: {
 *       arn: "arn:aws:lambda:us-east-1:111122223333:function:my-function:myVersion"
 *     }
 *   },
 *   EndpointType: "LAMBDA",
 *   Id: "123456789012",
 *   Name: "Connector for TP Link Cloud V2"
 * }
 * *\/
 * ```
 *
 * @example GetCloudConnector happy path for Ring to pending status
 * ```javascript
 * //
 * const input = {
 *   Identifier: "123456789012"
 * };
 * const command = new GetCloudConnectorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EndpointConfig: {
 *     lambda: {
 *       arn: "arn:aws:lambda:us-east-1:111122223333:function:my-function:myVersion"
 *     }
 *   },
 *   Name: "Connector for Ring Cloud"
 * }
 * *\/
 * ```
 *
 * @example GetCloudConnector error Id for Ring connector which does not exist
 * ```javascript
 * //
 * const input = {
 *   Identifier: "123456789012"
 * };
 * const command = new GetCloudConnectorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class GetCloudConnectorCommand extends $Command
  .classBuilder<
    GetCloudConnectorCommandInput,
    GetCloudConnectorCommandOutput,
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
  .s("IotManagedIntegrations", "GetCloudConnector", {})
  .n("IoTManagedIntegrationsClient", "GetCloudConnectorCommand")
  .f(void 0, void 0)
  .ser(se_GetCloudConnectorCommand)
  .de(de_GetCloudConnectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCloudConnectorRequest;
      output: GetCloudConnectorResponse;
    };
    sdk: {
      input: GetCloudConnectorCommandInput;
      output: GetCloudConnectorCommandOutput;
    };
  };
}
