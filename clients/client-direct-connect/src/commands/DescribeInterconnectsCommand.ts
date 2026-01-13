// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeInterconnectsRequest, Interconnects } from "../models/models_0";
import { DescribeInterconnects$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInterconnectsCommand}.
 */
export interface DescribeInterconnectsCommandInput extends DescribeInterconnectsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInterconnectsCommand}.
 */
export interface DescribeInterconnectsCommandOutput extends Interconnects, __MetadataBearer {}

/**
 * <p>Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeInterconnectsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeInterconnectsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeInterconnectsRequest
 *   interconnectId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeInterconnectsCommand(input);
 * const response = await client.send(command);
 * // { // Interconnects
 * //   interconnects: [ // InterconnectList
 * //     { // Interconnect
 * //       interconnectId: "STRING_VALUE",
 * //       interconnectName: "STRING_VALUE",
 * //       interconnectState: "requested" || "pending" || "available" || "down" || "deleting" || "deleted" || "unknown",
 * //       region: "STRING_VALUE",
 * //       location: "STRING_VALUE",
 * //       bandwidth: "STRING_VALUE",
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
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInterconnectsCommandInput - {@link DescribeInterconnectsCommandInput}
 * @returns {@link DescribeInterconnectsCommandOutput}
 * @see {@link DescribeInterconnectsCommandInput} for command's `input` shape.
 * @see {@link DescribeInterconnectsCommandOutput} for command's `response` shape.
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
export class DescribeInterconnectsCommand extends $Command
  .classBuilder<
    DescribeInterconnectsCommandInput,
    DescribeInterconnectsCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "DescribeInterconnects", {})
  .n("DirectConnectClient", "DescribeInterconnectsCommand")
  .sc(DescribeInterconnects$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInterconnectsRequest;
      output: Interconnects;
    };
    sdk: {
      input: DescribeInterconnectsCommandInput;
      output: DescribeInterconnectsCommandOutput;
    };
  };
}
