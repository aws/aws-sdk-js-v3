// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRouterConfigurationRequest, DescribeRouterConfigurationResponse } from "../models/models_0";
import { de_DescribeRouterConfigurationCommand, se_DescribeRouterConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRouterConfigurationCommand}.
 */
export interface DescribeRouterConfigurationCommandInput extends DescribeRouterConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRouterConfigurationCommand}.
 */
export interface DescribeRouterConfigurationCommandOutput
  extends DescribeRouterConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Details about the router.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeRouterConfigurationCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeRouterConfigurationCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeRouterConfigurationRequest
 *   virtualInterfaceId: "STRING_VALUE", // required
 *   routerTypeIdentifier: "STRING_VALUE",
 * };
 * const command = new DescribeRouterConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRouterConfigurationResponse
 * //   customerRouterConfig: "STRING_VALUE",
 * //   router: { // RouterType
 * //     vendor: "STRING_VALUE",
 * //     platform: "STRING_VALUE",
 * //     software: "STRING_VALUE",
 * //     xsltTemplateName: "STRING_VALUE",
 * //     xsltTemplateNameForMacSec: "STRING_VALUE",
 * //     routerTypeIdentifier: "STRING_VALUE",
 * //   },
 * //   virtualInterfaceId: "STRING_VALUE",
 * //   virtualInterfaceName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRouterConfigurationCommandInput - {@link DescribeRouterConfigurationCommandInput}
 * @returns {@link DescribeRouterConfigurationCommandOutput}
 * @see {@link DescribeRouterConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeRouterConfigurationCommandOutput} for command's `response` shape.
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
export class DescribeRouterConfigurationCommand extends $Command
  .classBuilder<
    DescribeRouterConfigurationCommandInput,
    DescribeRouterConfigurationCommandOutput,
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
  .s("OvertureService", "DescribeRouterConfiguration", {})
  .n("DirectConnectClient", "DescribeRouterConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRouterConfigurationCommand)
  .de(de_DescribeRouterConfigurationCommand)
  .build() {}
