// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { Lag, UpdateLagRequest } from "../models/models_0";
import { de_UpdateLagCommand, se_UpdateLagCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLagCommand}.
 */
export interface UpdateLagCommandInput extends UpdateLagRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLagCommand}.
 */
export interface UpdateLagCommandOutput extends Lag, __MetadataBearer {}

/**
 * <p>Updates the attributes of the specified link aggregation group (LAG).</p>
 *          <p>You can update the following LAG attributes:</p>
 *          <ul>
 *             <li>
 *                <p>The name of the LAG.</p>
 *             </li>
 *             <li>
 *                <p>The value for the minimum number of connections that must be operational
 *           for the LAG itself to be operational. </p>
 *             </li>
 *             <li>
 *                <p>The LAG's MACsec encryption mode.</p>
 *                <p>Amazon Web Services assigns this value to each connection which is part of the LAG.</p>
 *             </li>
 *             <li>
 *                <p>The tags</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If you adjust the threshold value for the minimum number of operational connections, ensure
 *       that the new value does not cause the LAG to fall below the threshold and become
 *       non-operational.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, UpdateLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, UpdateLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // UpdateLagRequest
 *   lagId: "STRING_VALUE", // required
 *   lagName: "STRING_VALUE",
 *   minimumLinks: Number("int"),
 *   encryptionMode: "STRING_VALUE",
 * };
 * const command = new UpdateLagCommand(input);
 * const response = await client.send(command);
 * // { // Lag
 * //   connectionsBandwidth: "STRING_VALUE",
 * //   numberOfConnections: Number("int"),
 * //   lagId: "STRING_VALUE",
 * //   ownerAccount: "STRING_VALUE",
 * //   lagName: "STRING_VALUE",
 * //   lagState: "requested" || "pending" || "available" || "down" || "deleting" || "deleted" || "unknown",
 * //   location: "STRING_VALUE",
 * //   region: "STRING_VALUE",
 * //   minimumLinks: Number("int"),
 * //   awsDevice: "STRING_VALUE",
 * //   awsDeviceV2: "STRING_VALUE",
 * //   awsLogicalDeviceId: "STRING_VALUE",
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
 * //   allowsHostedConnections: true || false,
 * //   jumboFrameCapable: true || false,
 * //   hasLogicalRedundancy: "unknown" || "yes" || "no",
 * //   tags: [
 * //     {
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   providerName: "STRING_VALUE",
 * //   macSecCapable: true || false,
 * //   encryptionMode: "STRING_VALUE",
 * //   macSecKeys: [
 * //     {
 * //       secretARN: "STRING_VALUE",
 * //       ckn: "STRING_VALUE",
 * //       state: "STRING_VALUE",
 * //       startOn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateLagCommandInput - {@link UpdateLagCommandInput}
 * @returns {@link UpdateLagCommandOutput}
 * @see {@link UpdateLagCommandInput} for command's `input` shape.
 * @see {@link UpdateLagCommandOutput} for command's `response` shape.
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
export class UpdateLagCommand extends $Command
  .classBuilder<
    UpdateLagCommandInput,
    UpdateLagCommandOutput,
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
  .s("OvertureService", "UpdateLag", {})
  .n("DirectConnectClient", "UpdateLagCommand")
  .f(void 0, void 0)
  .ser(se_UpdateLagCommand)
  .de(de_UpdateLagCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLagRequest;
      output: Lag;
    };
    sdk: {
      input: UpdateLagCommandInput;
      output: UpdateLagCommandOutput;
    };
  };
}
