// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDirectConnectGatewayRequest, CreateDirectConnectGatewayResult } from "../models/models_0";
import { de_CreateDirectConnectGatewayCommand, se_CreateDirectConnectGatewayCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDirectConnectGatewayCommand}.
 */
export interface CreateDirectConnectGatewayCommandInput extends CreateDirectConnectGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateDirectConnectGatewayCommand}.
 */
export interface CreateDirectConnectGatewayCommandOutput extends CreateDirectConnectGatewayResult, __MetadataBearer {}

/**
 * <p>Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set
 *       of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any
 *       Amazon Web Services Region after it is created. The virtual interfaces and virtual private gateways that
 *       are connected through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to
 *       connect to a VPC in any Region, regardless of the Region in which the virtual interfaces
 *       are located, and pass traffic between them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateDirectConnectGatewayCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateDirectConnectGatewayCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // CreateDirectConnectGatewayRequest
 *   directConnectGatewayName: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   amazonSideAsn: Number("long"),
 * };
 * const command = new CreateDirectConnectGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateDirectConnectGatewayResult
 * //   directConnectGateway: { // DirectConnectGateway
 * //     directConnectGatewayId: "STRING_VALUE",
 * //     directConnectGatewayName: "STRING_VALUE",
 * //     amazonSideAsn: Number("long"),
 * //     ownerAccount: "STRING_VALUE",
 * //     directConnectGatewayState: "pending" || "available" || "deleting" || "deleted",
 * //     stateChangeError: "STRING_VALUE",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDirectConnectGatewayCommandInput - {@link CreateDirectConnectGatewayCommandInput}
 * @returns {@link CreateDirectConnectGatewayCommandOutput}
 * @see {@link CreateDirectConnectGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateDirectConnectGatewayCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateDirectConnectGatewayCommand extends $Command
  .classBuilder<
    CreateDirectConnectGatewayCommandInput,
    CreateDirectConnectGatewayCommandOutput,
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
  .s("OvertureService", "CreateDirectConnectGateway", {})
  .n("DirectConnectClient", "CreateDirectConnectGatewayCommand")
  .f(void 0, void 0)
  .ser(se_CreateDirectConnectGatewayCommand)
  .de(de_CreateDirectConnectGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDirectConnectGatewayRequest;
      output: CreateDirectConnectGatewayResult;
    };
    sdk: {
      input: CreateDirectConnectGatewayCommandInput;
      output: CreateDirectConnectGatewayCommandOutput;
    };
  };
}
