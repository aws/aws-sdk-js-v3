// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { Connection, DisassociateConnectionFromLagRequest } from "../models/models_0";
import { DisassociateConnectionFromLag } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateConnectionFromLagCommand}.
 */
export interface DisassociateConnectionFromLagCommandInput extends DisassociateConnectionFromLagRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateConnectionFromLagCommand}.
 */
export interface DisassociateConnectionFromLagCommandOutput extends Connection, __MetadataBearer {}

/**
 * <p>Disassociates a connection from a link aggregation group (LAG). The connection is
 *       interrupted and re-established as a standalone connection (the connection is not
 *       deleted; to delete the connection, use the <a>DeleteConnection</a> request).
 *       If the LAG has associated virtual interfaces or hosted connections, they remain
 *       associated with the LAG. A disassociated connection owned by an Direct Connect Partner is
 *       automatically converted to an interconnect.</p>
 *          <p>If disassociating the connection would cause the LAG to fall below its setting for
 *       minimum number of operational connections, the request fails, except when it's the last
 *       member of the LAG. If all connections are disassociated, the LAG continues to exist as
 *       an empty LAG with no physical connections. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DisassociateConnectionFromLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DisassociateConnectionFromLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DisassociateConnectionFromLagRequest
 *   connectionId: "STRING_VALUE", // required
 *   lagId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateConnectionFromLagCommand(input);
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
 * //   partnerInterconnectMacSecCapable: true || false,
 * // };
 *
 * ```
 *
 * @param DisassociateConnectionFromLagCommandInput - {@link DisassociateConnectionFromLagCommandInput}
 * @returns {@link DisassociateConnectionFromLagCommandOutput}
 * @see {@link DisassociateConnectionFromLagCommandInput} for command's `input` shape.
 * @see {@link DisassociateConnectionFromLagCommandOutput} for command's `response` shape.
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
export class DisassociateConnectionFromLagCommand extends $Command
  .classBuilder<
    DisassociateConnectionFromLagCommandInput,
    DisassociateConnectionFromLagCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "DisassociateConnectionFromLag", {})
  .n("DirectConnectClient", "DisassociateConnectionFromLagCommand")
  .sc(DisassociateConnectionFromLag)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateConnectionFromLagRequest;
      output: Connection;
    };
    sdk: {
      input: DisassociateConnectionFromLagCommandInput;
      output: DisassociateConnectionFromLagCommandOutput;
    };
  };
}
