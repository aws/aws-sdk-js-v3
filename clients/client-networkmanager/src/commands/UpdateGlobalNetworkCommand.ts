// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateGlobalNetworkRequest, UpdateGlobalNetworkResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_UpdateGlobalNetworkCommand, se_UpdateGlobalNetworkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGlobalNetworkCommand}.
 */
export interface UpdateGlobalNetworkCommandInput extends UpdateGlobalNetworkRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGlobalNetworkCommand}.
 */
export interface UpdateGlobalNetworkCommandOutput extends UpdateGlobalNetworkResponse, __MetadataBearer {}

/**
 * <p>Updates an existing global network. To remove information for any of the parameters,
 *             specify an empty string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateGlobalNetworkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateGlobalNetworkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // UpdateGlobalNetworkRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateGlobalNetworkCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGlobalNetworkResponse
 * //   GlobalNetwork: { // GlobalNetwork
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     GlobalNetworkArn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     State: "PENDING" || "AVAILABLE" || "DELETING" || "UPDATING",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateGlobalNetworkCommandInput - {@link UpdateGlobalNetworkCommandInput}
 * @returns {@link UpdateGlobalNetworkCommandOutput}
 * @see {@link UpdateGlobalNetworkCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalNetworkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 *
 * @public
 */
export class UpdateGlobalNetworkCommand extends $Command
  .classBuilder<
    UpdateGlobalNetworkCommandInput,
    UpdateGlobalNetworkCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "UpdateGlobalNetwork", {})
  .n("NetworkManagerClient", "UpdateGlobalNetworkCommand")
  .f(void 0, void 0)
  .ser(se_UpdateGlobalNetworkCommand)
  .de(de_UpdateGlobalNetworkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGlobalNetworkRequest;
      output: UpdateGlobalNetworkResponse;
    };
    sdk: {
      input: UpdateGlobalNetworkCommandInput;
      output: UpdateGlobalNetworkCommandOutput;
    };
  };
}
