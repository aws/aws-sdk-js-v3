// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLagsRequest, Lags } from "../models/models_0";
import { DescribeLags } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLagsCommand}.
 */
export interface DescribeLagsCommandInput extends DescribeLagsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLagsCommand}.
 */
export interface DescribeLagsCommandOutput extends Lags, __MetadataBearer {}

/**
 * <p>Describes all your link aggregation groups (LAG) or the specified LAG.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeLagsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeLagsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeLagsRequest
 *   lagId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeLagsCommand(input);
 * const response = await client.send(command);
 * // { // Lags
 * //   lags: [ // LagList
 * //     { // Lag
 * //       connectionsBandwidth: "STRING_VALUE",
 * //       numberOfConnections: Number("int"),
 * //       lagId: "STRING_VALUE",
 * //       ownerAccount: "STRING_VALUE",
 * //       lagName: "STRING_VALUE",
 * //       lagState: "requested" || "pending" || "available" || "down" || "deleting" || "deleted" || "unknown",
 * //       location: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //       minimumLinks: Number("int"),
 * //       awsDevice: "STRING_VALUE",
 * //       awsDeviceV2: "STRING_VALUE",
 * //       awsLogicalDeviceId: "STRING_VALUE",
 * //       connections: [ // ConnectionList
 * //         { // Connection
 * //           ownerAccount: "STRING_VALUE",
 * //           connectionId: "STRING_VALUE",
 * //           connectionName: "STRING_VALUE",
 * //           connectionState: "ordering" || "requested" || "pending" || "available" || "down" || "deleting" || "deleted" || "rejected" || "unknown",
 * //           region: "STRING_VALUE",
 * //           location: "STRING_VALUE",
 * //           bandwidth: "STRING_VALUE",
 * //           vlan: Number("int"),
 * //           partnerName: "STRING_VALUE",
 * //           loaIssueTime: new Date("TIMESTAMP"),
 * //           lagId: "STRING_VALUE",
 * //           awsDevice: "STRING_VALUE",
 * //           jumboFrameCapable: true || false,
 * //           awsDeviceV2: "STRING_VALUE",
 * //           awsLogicalDeviceId: "STRING_VALUE",
 * //           hasLogicalRedundancy: "unknown" || "yes" || "no",
 * //           tags: [ // TagList
 * //             { // Tag
 * //               key: "STRING_VALUE", // required
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           providerName: "STRING_VALUE",
 * //           macSecCapable: true || false,
 * //           portEncryptionStatus: "STRING_VALUE",
 * //           encryptionMode: "STRING_VALUE",
 * //           macSecKeys: [ // MacSecKeyList
 * //             { // MacSecKey
 * //               secretARN: "STRING_VALUE",
 * //               ckn: "STRING_VALUE",
 * //               state: "STRING_VALUE",
 * //               startOn: "STRING_VALUE",
 * //             },
 * //           ],
 * //           partnerInterconnectMacSecCapable: true || false,
 * //         },
 * //       ],
 * //       allowsHostedConnections: true || false,
 * //       jumboFrameCapable: true || false,
 * //       hasLogicalRedundancy: "unknown" || "yes" || "no",
 * //       tags: [
 * //         {
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       providerName: "STRING_VALUE",
 * //       macSecCapable: true || false,
 * //       encryptionMode: "STRING_VALUE",
 * //       macSecKeys: [
 * //         {
 * //           secretARN: "STRING_VALUE",
 * //           ckn: "STRING_VALUE",
 * //           state: "STRING_VALUE",
 * //           startOn: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLagsCommandInput - {@link DescribeLagsCommandInput}
 * @returns {@link DescribeLagsCommandOutput}
 * @see {@link DescribeLagsCommandInput} for command's `input` shape.
 * @see {@link DescribeLagsCommandOutput} for command's `response` shape.
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
export class DescribeLagsCommand extends $Command
  .classBuilder<
    DescribeLagsCommandInput,
    DescribeLagsCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "DescribeLags", {})
  .n("DirectConnectClient", "DescribeLagsCommand")
  .sc(DescribeLags)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLagsRequest;
      output: Lags;
    };
    sdk: {
      input: DescribeLagsCommandInput;
      output: DescribeLagsCommandOutput;
    };
  };
}
