// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetConnectivityInfoRequest, GetConnectivityInfoResponse } from "../models/models_0";
import { de_GetConnectivityInfoCommand, se_GetConnectivityInfoCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConnectivityInfoCommand}.
 */
export interface GetConnectivityInfoCommandInput extends GetConnectivityInfoRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectivityInfoCommand}.
 */
export interface GetConnectivityInfoCommandOutput extends GetConnectivityInfoResponse, __MetadataBearer {}

/**
 * Retrieves the connectivity information for a core.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetConnectivityInfoCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetConnectivityInfoCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetConnectivityInfoRequest
 *   ThingName: "STRING_VALUE", // required
 * };
 * const command = new GetConnectivityInfoCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectivityInfoResponse
 * //   ConnectivityInfo: [ // __listOfConnectivityInfo
 * //     { // ConnectivityInfo
 * //       HostAddress: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Metadata: "STRING_VALUE",
 * //       PortNumber: Number("int"),
 * //     },
 * //   ],
 * //   Message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConnectivityInfoCommandInput - {@link GetConnectivityInfoCommandInput}
 * @returns {@link GetConnectivityInfoCommandOutput}
 * @see {@link GetConnectivityInfoCommandInput} for command's `input` shape.
 * @see {@link GetConnectivityInfoCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 * @public
 */
export class GetConnectivityInfoCommand extends $Command
  .classBuilder<
    GetConnectivityInfoCommandInput,
    GetConnectivityInfoCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "GetConnectivityInfo", {})
  .n("GreengrassClient", "GetConnectivityInfoCommand")
  .f(void 0, void 0)
  .ser(se_GetConnectivityInfoCommand)
  .de(de_GetConnectivityInfoCommand)
  .build() {}
