// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLagRequest, Lag } from "../models/models_0";
import { de_CreateLagCommand, se_CreateLagCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLagCommand}.
 */
export interface CreateLagCommandInput extends CreateLagRequest {}
/**
 * @public
 *
 * The output of {@link CreateLagCommand}.
 */
export interface CreateLagCommandOutput extends Lag, __MetadataBearer {}

/**
 * <p>Creates a link aggregation group (LAG) with the specified number of bundled
 *       physical dedicated connections between the customer network and a specific Direct Connect location.
 *       A LAG is a logical interface that uses the Link Aggregation Control Protocol
 *       (LACP) to aggregate multiple interfaces, enabling you to treat them as a single
 *       interface.</p>
 *          <p>All connections in a LAG must use the same bandwidth (either 1Gbps or 10Gbps) and must terminate at the same Direct Connect endpoint.</p>
 *          <p>You can have up to 10 dedicated connections per LAG. Regardless of this limit, if you
 *       request more connections for the LAG than Direct Connect can allocate on a single endpoint, no LAG is
 *       created.</p>
 *          <p>You can specify an existing physical dedicated connection or interconnect to include in
 *       the LAG (which counts towards the total number of connections). Doing so interrupts the
 *       current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG
 *       will be created on the same Direct Connect endpoint to which the dedicated connection terminates. Any
 *       virtual interfaces associated with the dedicated connection are automatically disassociated
 *       and re-associated with the LAG. The connection ID does not change.</p>
 *          <p>If the Amazon Web Services account used to create a LAG is a registered Direct Connect Partner, the LAG is
 *       automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual
 *       interfaces cannot be directly configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // CreateLagRequest
 *   numberOfConnections: Number("int"), // required
 *   location: "STRING_VALUE", // required
 *   connectionsBandwidth: "STRING_VALUE", // required
 *   lagName: "STRING_VALUE", // required
 *   connectionId: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   childConnectionTags: [
 *     {
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   providerName: "STRING_VALUE",
 *   requestMACSec: true || false,
 * };
 * const command = new CreateLagCommand(input);
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
 * @param CreateLagCommandInput - {@link CreateLagCommandInput}
 * @returns {@link CreateLagCommandOutput}
 * @see {@link CreateLagCommandInput} for command's `input` shape.
 * @see {@link CreateLagCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateLagCommand extends $Command
  .classBuilder<
    CreateLagCommandInput,
    CreateLagCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OvertureService", "CreateLag", {})
  .n("DirectConnectClient", "CreateLagCommand")
  .f(void 0, void 0)
  .ser(se_CreateLagCommand)
  .de(de_CreateLagCommand)
  .build() {}
