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
import { ListCloudConnectorsRequest, ListCloudConnectorsResponse } from "../models/models_0";
import { de_ListCloudConnectorsCommand, se_ListCloudConnectorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCloudConnectorsCommand}.
 */
export interface ListCloudConnectorsCommandInput extends ListCloudConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListCloudConnectorsCommand}.
 */
export interface ListCloudConnectorsCommandOutput extends ListCloudConnectorsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of connectors based on permissions. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListCloudConnectorsCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListCloudConnectorsCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListCloudConnectorsRequest
 *   Type: "LISTED" || "UNLISTED",
 *   LambdaArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCloudConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListCloudConnectorsResponse
 * //   Items: [ // ConnectorList
 * //     { // ConnectorItem
 * //       Name: "STRING_VALUE", // required
 * //       EndpointConfig: { // EndpointConfig
 * //         lambda: { // LambdaConfig
 * //           arn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       Description: "STRING_VALUE",
 * //       EndpointType: "LAMBDA",
 * //       Id: "STRING_VALUE",
 * //       Type: "LISTED" || "UNLISTED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCloudConnectorsCommandInput - {@link ListCloudConnectorsCommandInput}
 * @returns {@link ListCloudConnectorsCommandOutput}
 * @see {@link ListCloudConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListCloudConnectorsCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
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
 * @example ListCloudConnectors happy path to get a list of connector resources
 * ```javascript
 * //
 * const input = {
 *   MaxResults: 5
 * };
 * const command = new ListCloudConnectorsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Description: "Description for TP Link Cloud V2",
 *       EndpointConfig: {
 *         lambda: {
 *           arn: "arn:aws:lambda:us-east-1:111122223333:function:my-function:myVersion"
 *         }
 *       },
 *       EndpointType: "LAMBDA",
 *       Name: "Connector for TP Link Cloud V2"
 *     },
 *     {
 *       Description: "Description for Ring Cloud",
 *       EndpointConfig: {
 *         lambda: {
 *           arn: "arn:aws:lambda:us-east-1:111122223333:function:my-function:myVersion"
 *         }
 *       },
 *       EndpointType: "LAMBDA",
 *       Name: "Connector for Ring Cloud"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example ListCloudConnectors error path for unauthorized user
 * ```javascript
 * //
 * const input = {
 *   MaxResults: 5
 * };
 * const command = new ListCloudConnectorsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ListCloudConnectorsCommand extends $Command
  .classBuilder<
    ListCloudConnectorsCommandInput,
    ListCloudConnectorsCommandOutput,
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
  .s("IotManagedIntegrations", "ListCloudConnectors", {})
  .n("IoTManagedIntegrationsClient", "ListCloudConnectorsCommand")
  .f(void 0, void 0)
  .ser(se_ListCloudConnectorsCommand)
  .de(de_ListCloudConnectorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCloudConnectorsRequest;
      output: ListCloudConnectorsResponse;
    };
    sdk: {
      input: ListCloudConnectorsCommandInput;
      output: ListCloudConnectorsCommandOutput;
    };
  };
}
