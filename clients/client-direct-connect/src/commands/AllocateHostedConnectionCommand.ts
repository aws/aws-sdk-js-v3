// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AllocateHostedConnectionRequest, Connection } from "../models/models_0";
import { AllocateHostedConnection } from "../schemas/schemas_15_Virtual";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AllocateHostedConnectionCommand}.
 */
export interface AllocateHostedConnectionCommandInput extends AllocateHostedConnectionRequest {}
/**
 * @public
 *
 * The output of {@link AllocateHostedConnectionCommand}.
 */
export interface AllocateHostedConnectionCommandOutput extends Connection, __MetadataBearer {}

/**
 * <p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p>
 *          <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects.
 *       Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity.</p>
 *          <note>
 *             <p>Intended for use by Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocateHostedConnectionCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocateHostedConnectionCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // AllocateHostedConnectionRequest
 *   connectionId: "STRING_VALUE", // required
 *   ownerAccount: "STRING_VALUE", // required
 *   bandwidth: "STRING_VALUE", // required
 *   connectionName: "STRING_VALUE", // required
 *   vlan: Number("int"), // required
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AllocateHostedConnectionCommand(input);
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
 * @param AllocateHostedConnectionCommandInput - {@link AllocateHostedConnectionCommandInput}
 * @returns {@link AllocateHostedConnectionCommandOutput}
 * @see {@link AllocateHostedConnectionCommandInput} for command's `input` shape.
 * @see {@link AllocateHostedConnectionCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DuplicateTagKeysException} (client fault)
 *  <p>A tag key was specified more than once.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have reached the limit on the number of tags that can be assigned.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class AllocateHostedConnectionCommand extends $Command
  .classBuilder<
    AllocateHostedConnectionCommandInput,
    AllocateHostedConnectionCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "AllocateHostedConnection", {})
  .n("DirectConnectClient", "AllocateHostedConnectionCommand")
  .sc(AllocateHostedConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AllocateHostedConnectionRequest;
      output: Connection;
    };
    sdk: {
      input: AllocateHostedConnectionCommandInput;
      output: AllocateHostedConnectionCommandOutput;
    };
  };
}
