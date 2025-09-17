// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { Connections, DescribeConnectionsOnInterconnectRequest } from "../models/models_0";
import {
  de_DescribeConnectionsOnInterconnectCommand,
  se_DescribeConnectionsOnInterconnectCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectionsOnInterconnectCommand}.
 */
export interface DescribeConnectionsOnInterconnectCommandInput extends DescribeConnectionsOnInterconnectRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectionsOnInterconnectCommand}.
 */
export interface DescribeConnectionsOnInterconnectCommandOutput extends Connections, __MetadataBearer {}

/**
 * <note>
 *             <p>Deprecated. Use <a>DescribeHostedConnections</a> instead.</p>
 *          </note>
 *          <p>Lists the connections that have been provisioned on the specified interconnect.</p>
 *          <note>
 *             <p>Intended for use by Direct Connect Partners only.</p>
 *          </note>
 *
 * @deprecated
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeConnectionsOnInterconnectCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeConnectionsOnInterconnectCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeConnectionsOnInterconnectRequest
 *   interconnectId: "STRING_VALUE", // required
 * };
 * const command = new DescribeConnectionsOnInterconnectCommand(input);
 * const response = await client.send(command);
 * // { // Connections
 * //   connections: [ // ConnectionList
 * //     { // Connection
 * //       ownerAccount: "STRING_VALUE",
 * //       connectionId: "STRING_VALUE",
 * //       connectionName: "STRING_VALUE",
 * //       connectionState: "ordering" || "requested" || "pending" || "available" || "down" || "deleting" || "deleted" || "rejected" || "unknown",
 * //       region: "STRING_VALUE",
 * //       location: "STRING_VALUE",
 * //       bandwidth: "STRING_VALUE",
 * //       vlan: Number("int"),
 * //       partnerName: "STRING_VALUE",
 * //       loaIssueTime: new Date("TIMESTAMP"),
 * //       lagId: "STRING_VALUE",
 * //       awsDevice: "STRING_VALUE",
 * //       jumboFrameCapable: true || false,
 * //       awsDeviceV2: "STRING_VALUE",
 * //       awsLogicalDeviceId: "STRING_VALUE",
 * //       hasLogicalRedundancy: "unknown" || "yes" || "no",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       providerName: "STRING_VALUE",
 * //       macSecCapable: true || false,
 * //       portEncryptionStatus: "STRING_VALUE",
 * //       encryptionMode: "STRING_VALUE",
 * //       macSecKeys: [ // MacSecKeyList
 * //         { // MacSecKey
 * //           secretARN: "STRING_VALUE",
 * //           ckn: "STRING_VALUE",
 * //           state: "STRING_VALUE",
 * //           startOn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       partnerInterconnectMacSecCapable: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConnectionsOnInterconnectCommandInput - {@link DescribeConnectionsOnInterconnectCommandInput}
 * @returns {@link DescribeConnectionsOnInterconnectCommandOutput}
 * @see {@link DescribeConnectionsOnInterconnectCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionsOnInterconnectCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class DescribeConnectionsOnInterconnectCommand extends $Command
  .classBuilder<
    DescribeConnectionsOnInterconnectCommandInput,
    DescribeConnectionsOnInterconnectCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OvertureService", "DescribeConnectionsOnInterconnect", {})
  .n("DirectConnectClient", "DescribeConnectionsOnInterconnectCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConnectionsOnInterconnectCommand)
  .de(de_DescribeConnectionsOnInterconnectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConnectionsOnInterconnectRequest;
      output: Connections;
    };
    sdk: {
      input: DescribeConnectionsOnInterconnectCommandInput;
      output: DescribeConnectionsOnInterconnectCommandOutput;
    };
  };
}
