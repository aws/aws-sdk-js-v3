// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateNetworkResourceMetadataRequest, UpdateNetworkResourceMetadataResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_UpdateNetworkResourceMetadataCommand,
  se_UpdateNetworkResourceMetadataCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNetworkResourceMetadataCommand}.
 */
export interface UpdateNetworkResourceMetadataCommandInput extends UpdateNetworkResourceMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNetworkResourceMetadataCommand}.
 */
export interface UpdateNetworkResourceMetadataCommandOutput
  extends UpdateNetworkResourceMetadataResponse,
    __MetadataBearer {}

/**
 * <p>Updates the resource metadata for the specified global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateNetworkResourceMetadataCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateNetworkResourceMetadataCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // UpdateNetworkResourceMetadataRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 *   Metadata: { // NetworkResourceMetadataMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateNetworkResourceMetadataCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNetworkResourceMetadataResponse
 * //   ResourceArn: "STRING_VALUE",
 * //   Metadata: { // NetworkResourceMetadataMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateNetworkResourceMetadataCommandInput - {@link UpdateNetworkResourceMetadataCommandInput}
 * @returns {@link UpdateNetworkResourceMetadataCommandOutput}
 * @see {@link UpdateNetworkResourceMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateNetworkResourceMetadataCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateNetworkResourceMetadataCommand extends $Command
  .classBuilder<
    UpdateNetworkResourceMetadataCommandInput,
    UpdateNetworkResourceMetadataCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "UpdateNetworkResourceMetadata", {})
  .n("NetworkManagerClient", "UpdateNetworkResourceMetadataCommand")
  .f(void 0, void 0)
  .ser(se_UpdateNetworkResourceMetadataCommand)
  .de(de_UpdateNetworkResourceMetadataCommand)
  .build() {}
