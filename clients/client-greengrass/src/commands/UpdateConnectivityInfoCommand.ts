// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateConnectivityInfoRequest, UpdateConnectivityInfoResponse } from "../models/models_0";
import { de_UpdateConnectivityInfoCommand, se_UpdateConnectivityInfoCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectivityInfoCommand}.
 */
export interface UpdateConnectivityInfoCommandInput extends UpdateConnectivityInfoRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectivityInfoCommand}.
 */
export interface UpdateConnectivityInfoCommandOutput extends UpdateConnectivityInfoResponse, __MetadataBearer {}

/**
 * Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateConnectivityInfoCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateConnectivityInfoCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // UpdateConnectivityInfoRequest
 *   ConnectivityInfo: [ // __listOfConnectivityInfo
 *     { // ConnectivityInfo
 *       HostAddress: "STRING_VALUE",
 *       Id: "STRING_VALUE",
 *       Metadata: "STRING_VALUE",
 *       PortNumber: Number("int"),
 *     },
 *   ],
 *   ThingName: "STRING_VALUE", // required
 * };
 * const command = new UpdateConnectivityInfoCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectivityInfoResponse
 * //   Message: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateConnectivityInfoCommandInput - {@link UpdateConnectivityInfoCommandInput}
 * @returns {@link UpdateConnectivityInfoCommandOutput}
 * @see {@link UpdateConnectivityInfoCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectivityInfoCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateConnectivityInfoCommand extends $Command
  .classBuilder<
    UpdateConnectivityInfoCommandInput,
    UpdateConnectivityInfoCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "UpdateConnectivityInfo", {})
  .n("GreengrassClient", "UpdateConnectivityInfoCommand")
  .f(void 0, void 0)
  .ser(se_UpdateConnectivityInfoCommand)
  .de(de_UpdateConnectivityInfoCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectivityInfoRequest;
      output: UpdateConnectivityInfoResponse;
    };
    sdk: {
      input: UpdateConnectivityInfoCommandInput;
      output: UpdateConnectivityInfoCommandOutput;
    };
  };
}
