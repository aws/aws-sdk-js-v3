// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLagRequest, Lag } from "../models/models_0";
import { de_DeleteLagCommand, se_DeleteLagCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLagCommand}.
 */
export interface DeleteLagCommandInput extends DeleteLagRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLagCommand}.
 */
export interface DeleteLagCommandOutput extends Lag, __MetadataBearer {}

/**
 * <p>Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active
 *       virtual interfaces or hosted connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // DeleteLagRequest
 *   lagId: "STRING_VALUE", // required
 * };
 * const command = new DeleteLagCommand(input);
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
 * @param DeleteLagCommandInput - {@link DeleteLagCommandInput}
 * @returns {@link DeleteLagCommandOutput}
 * @see {@link DeleteLagCommandInput} for command's `input` shape.
 * @see {@link DeleteLagCommandOutput} for command's `response` shape.
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
export class DeleteLagCommand extends $Command
  .classBuilder<
    DeleteLagCommandInput,
    DeleteLagCommandOutput,
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
  .s("OvertureService", "DeleteLag", {})
  .n("DirectConnectClient", "DeleteLagCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLagCommand)
  .de(de_DeleteLagCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLagRequest;
      output: Lag;
    };
    sdk: {
      input: DeleteLagCommandInput;
      output: DeleteLagCommandOutput;
    };
  };
}
