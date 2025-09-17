// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDirectConnectGatewaysRequest, DescribeDirectConnectGatewaysResult } from "../models/models_0";
import {
  de_DescribeDirectConnectGatewaysCommand,
  se_DescribeDirectConnectGatewaysCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDirectConnectGatewaysCommand}.
 */
export interface DescribeDirectConnectGatewaysCommandInput extends DescribeDirectConnectGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDirectConnectGatewaysCommand}.
 */
export interface DescribeDirectConnectGatewaysCommandOutput
  extends DescribeDirectConnectGatewaysResult,
    __MetadataBearer {}

/**
 * <p>Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeDirectConnectGatewaysCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeDirectConnectGatewaysCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeDirectConnectGatewaysRequest
 *   directConnectGatewayId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeDirectConnectGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDirectConnectGatewaysResult
 * //   directConnectGateways: [ // DirectConnectGatewayList
 * //     { // DirectConnectGateway
 * //       directConnectGatewayId: "STRING_VALUE",
 * //       directConnectGatewayName: "STRING_VALUE",
 * //       amazonSideAsn: Number("long"),
 * //       ownerAccount: "STRING_VALUE",
 * //       directConnectGatewayState: "pending" || "available" || "deleting" || "deleted",
 * //       stateChangeError: "STRING_VALUE",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDirectConnectGatewaysCommandInput - {@link DescribeDirectConnectGatewaysCommandInput}
 * @returns {@link DescribeDirectConnectGatewaysCommandOutput}
 * @see {@link DescribeDirectConnectGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectConnectGatewaysCommandOutput} for command's `response` shape.
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
export class DescribeDirectConnectGatewaysCommand extends $Command
  .classBuilder<
    DescribeDirectConnectGatewaysCommandInput,
    DescribeDirectConnectGatewaysCommandOutput,
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
  .s("OvertureService", "DescribeDirectConnectGateways", {})
  .n("DirectConnectClient", "DescribeDirectConnectGatewaysCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDirectConnectGatewaysCommand)
  .de(de_DescribeDirectConnectGatewaysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDirectConnectGatewaysRequest;
      output: DescribeDirectConnectGatewaysResult;
    };
    sdk: {
      input: DescribeDirectConnectGatewaysCommandInput;
      output: DescribeDirectConnectGatewaysCommandOutput;
    };
  };
}
