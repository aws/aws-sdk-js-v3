// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteGlobalNetworkRequest, DeleteGlobalNetworkResponse } from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { DeleteGlobalNetwork$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGlobalNetworkCommand}.
 */
export interface DeleteGlobalNetworkCommandInput extends DeleteGlobalNetworkRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGlobalNetworkCommand}.
 */
export interface DeleteGlobalNetworkCommandOutput extends DeleteGlobalNetworkResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing global network. You must first delete all global network objects
 *             (devices, links, and sites), deregister all transit gateways, and delete any core networks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteGlobalNetworkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteGlobalNetworkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DeleteGlobalNetworkRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 * };
 * const command = new DeleteGlobalNetworkCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGlobalNetworkResponse
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
 * @param DeleteGlobalNetworkCommandInput - {@link DeleteGlobalNetworkCommandInput}
 * @returns {@link DeleteGlobalNetworkCommandOutput}
 * @see {@link DeleteGlobalNetworkCommandInput} for command's `input` shape.
 * @see {@link DeleteGlobalNetworkCommandOutput} for command's `response` shape.
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
export class DeleteGlobalNetworkCommand extends $Command
  .classBuilder<
    DeleteGlobalNetworkCommandInput,
    DeleteGlobalNetworkCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "DeleteGlobalNetwork", {})
  .n("NetworkManagerClient", "DeleteGlobalNetworkCommand")
  .sc(DeleteGlobalNetwork$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGlobalNetworkRequest;
      output: DeleteGlobalNetworkResponse;
    };
    sdk: {
      input: DeleteGlobalNetworkCommandInput;
      output: DeleteGlobalNetworkCommandOutput;
    };
  };
}
