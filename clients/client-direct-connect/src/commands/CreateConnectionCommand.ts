// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { Connection, CreateConnectionRequest } from "../models/models_0";
import { de_CreateConnectionCommand, se_CreateConnectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectionCommand}.
 */
export interface CreateConnectionCommandInput extends CreateConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectionCommand}.
 */
export interface CreateConnectionCommandOutput extends Connection, __MetadataBearer {}

/**
 * <p>Creates a connection between a customer network and a specific Direct Connect location.</p>
 *          <p>A connection links your internal network to an Direct Connect location over a standard Ethernet fiber-optic
 *       cable. One end of the cable is connected to your router, the other to an Direct Connect router.</p>
 *          <p>To find the locations for your Region, use <a>DescribeLocations</a>.</p>
 *          <p>You can automatically add the new connection to a link aggregation group (LAG) by
 *       specifying a LAG ID in the request. This ensures that the new connection is allocated on the
 *       same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint,
 *       the request fails and no connection is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateConnectionCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateConnectionCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // CreateConnectionRequest
 *   location: "STRING_VALUE", // required
 *   bandwidth: "STRING_VALUE", // required
 *   connectionName: "STRING_VALUE", // required
 *   lagId: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   providerName: "STRING_VALUE",
 *   requestMACSec: true || false,
 * };
 * const command = new CreateConnectionCommand(input);
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
 * @param CreateConnectionCommandInput - {@link CreateConnectionCommandInput}
 * @returns {@link CreateConnectionCommandOutput}
 * @see {@link CreateConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionCommandOutput} for command's `response` shape.
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
export class CreateConnectionCommand extends $Command
  .classBuilder<
    CreateConnectionCommandInput,
    CreateConnectionCommandOutput,
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
  .s("OvertureService", "CreateConnection", {})
  .n("DirectConnectClient", "CreateConnectionCommand")
  .f(void 0, void 0)
  .ser(se_CreateConnectionCommand)
  .de(de_CreateConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectionRequest;
      output: Connection;
    };
    sdk: {
      input: CreateConnectionCommandInput;
      output: CreateConnectionCommandOutput;
    };
  };
}
