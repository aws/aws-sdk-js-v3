// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AllocateConnectionOnInterconnectRequest, Connection } from "../models/models_0";
import {
  de_AllocateConnectionOnInterconnectCommand,
  se_AllocateConnectionOnInterconnectCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AllocateConnectionOnInterconnectCommand}.
 */
export interface AllocateConnectionOnInterconnectCommandInput extends AllocateConnectionOnInterconnectRequest {}
/**
 * @public
 *
 * The output of {@link AllocateConnectionOnInterconnectCommand}.
 */
export interface AllocateConnectionOnInterconnectCommandOutput extends Connection, __MetadataBearer {}

/**
 * <note>
 *             <p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p>
 *          </note>
 *          <p>Creates a hosted connection on an interconnect.</p>
 *          <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p>
 *          <note>
 *             <p>Intended for use by Direct Connect Partners only.</p>
 *          </note>
 *
 * @deprecated
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocateConnectionOnInterconnectCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocateConnectionOnInterconnectCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // AllocateConnectionOnInterconnectRequest
 *   bandwidth: "STRING_VALUE", // required
 *   connectionName: "STRING_VALUE", // required
 *   ownerAccount: "STRING_VALUE", // required
 *   interconnectId: "STRING_VALUE", // required
 *   vlan: Number("int"), // required
 * };
 * const command = new AllocateConnectionOnInterconnectCommand(input);
 * const response = await client.send(command);
 * // { // Connection
 * //   ownerAccount: "STRING_VALUE",
 * //   connectionId: "STRING_VALUE",
 * //   connectionName: "STRING_VALUE",
 * //   connectionState: "ordering" || "requested" || "pending" || "available" || "down" || "deleting" || "deleted" || "rejected" || "unknown",
 * //   region: "STRING_VALUE",
 * //   location: "STRING_VALUE",
 * //   bandwidth: "STRING_VALUE",
 * //   vlan: Number("int"),
 * //   partnerName: "STRING_VALUE",
 * //   loaIssueTime: new Date("TIMESTAMP"),
 * //   lagId: "STRING_VALUE",
 * //   awsDevice: "STRING_VALUE",
 * //   jumboFrameCapable: true || false,
 * //   awsDeviceV2: "STRING_VALUE",
 * //   awsLogicalDeviceId: "STRING_VALUE",
 * //   hasLogicalRedundancy: "unknown" || "yes" || "no",
 * //   tags: [ // TagList
 * //     { // Tag
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   providerName: "STRING_VALUE",
 * //   macSecCapable: true || false,
 * //   portEncryptionStatus: "STRING_VALUE",
 * //   encryptionMode: "STRING_VALUE",
 * //   macSecKeys: [ // MacSecKeyList
 * //     { // MacSecKey
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
 * @param AllocateConnectionOnInterconnectCommandInput - {@link AllocateConnectionOnInterconnectCommandInput}
 * @returns {@link AllocateConnectionOnInterconnectCommandOutput}
 * @see {@link AllocateConnectionOnInterconnectCommandInput} for command's `input` shape.
 * @see {@link AllocateConnectionOnInterconnectCommandOutput} for command's `response` shape.
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
export class AllocateConnectionOnInterconnectCommand extends $Command
  .classBuilder<
    AllocateConnectionOnInterconnectCommandInput,
    AllocateConnectionOnInterconnectCommandOutput,
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
  .s("OvertureService", "AllocateConnectionOnInterconnect", {})
  .n("DirectConnectClient", "AllocateConnectionOnInterconnectCommand")
  .f(void 0, void 0)
  .ser(se_AllocateConnectionOnInterconnectCommand)
  .de(de_AllocateConnectionOnInterconnectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AllocateConnectionOnInterconnectRequest;
      output: Connection;
    };
    sdk: {
      input: AllocateConnectionOnInterconnectCommandInput;
      output: AllocateConnectionOnInterconnectCommandOutput;
    };
  };
}
