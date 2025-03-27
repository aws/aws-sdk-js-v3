// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNetworkRequest, DeleteNetworkResponse } from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_DeleteNetworkCommand, se_DeleteNetworkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkCommand}.
 */
export interface DeleteNetworkCommandInput extends DeleteNetworkRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkCommand}.
 */
export interface DeleteNetworkCommandOutput extends DeleteNetworkResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified network. You must delete network sites before you delete the
 *             network. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/APIReference/API_DeleteNetworkSite.html">DeleteNetworkSite</a> in the <i>API Reference for Amazon Web Services Private
 *                 5G</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, DeleteNetworkCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, DeleteNetworkCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // DeleteNetworkRequest
 *   networkArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteNetworkCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkResponse
 * //   network: { // Network
 * //     networkArn: "STRING_VALUE", // required
 * //     networkName: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteNetworkCommandInput - {@link DeleteNetworkCommandInput}
 * @returns {@link DeleteNetworkCommandOutput}
 * @see {@link DeleteNetworkCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Information about an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation.</p>
 *
 * @throws {@link PrivateNetworksServiceException}
 * <p>Base exception class for all service exceptions from PrivateNetworks service.</p>
 *
 *
 * @public
 */
export class DeleteNetworkCommand extends $Command
  .classBuilder<
    DeleteNetworkCommandInput,
    DeleteNetworkCommandOutput,
    PrivateNetworksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PrivateNetworksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("E5GNetworkControllerLambda", "DeleteNetwork", {})
  .n("PrivateNetworksClient", "DeleteNetworkCommand")
  .f(void 0, void 0)
  .ser(se_DeleteNetworkCommand)
  .de(de_DeleteNetworkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkRequest;
      output: DeleteNetworkResponse;
    };
    sdk: {
      input: DeleteNetworkCommandInput;
      output: DeleteNetworkCommandOutput;
    };
  };
}
