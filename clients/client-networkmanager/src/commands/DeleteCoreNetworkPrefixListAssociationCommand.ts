// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteCoreNetworkPrefixListAssociationRequest,
  DeleteCoreNetworkPrefixListAssociationResponse,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { DeleteCoreNetworkPrefixListAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCoreNetworkPrefixListAssociationCommand}.
 */
export interface DeleteCoreNetworkPrefixListAssociationCommandInput
  extends DeleteCoreNetworkPrefixListAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCoreNetworkPrefixListAssociationCommand}.
 */
export interface DeleteCoreNetworkPrefixListAssociationCommandOutput
  extends DeleteCoreNetworkPrefixListAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an association between a core network and a prefix list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteCoreNetworkPrefixListAssociationCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteCoreNetworkPrefixListAssociationCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DeleteCoreNetworkPrefixListAssociationRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   PrefixListArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCoreNetworkPrefixListAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCoreNetworkPrefixListAssociationResponse
 * //   CoreNetworkId: "STRING_VALUE",
 * //   PrefixListArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteCoreNetworkPrefixListAssociationCommandInput - {@link DeleteCoreNetworkPrefixListAssociationCommandInput}
 * @returns {@link DeleteCoreNetworkPrefixListAssociationCommandOutput}
 * @see {@link DeleteCoreNetworkPrefixListAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteCoreNetworkPrefixListAssociationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service limit was exceeded.</p>
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
export class DeleteCoreNetworkPrefixListAssociationCommand extends $Command
  .classBuilder<
    DeleteCoreNetworkPrefixListAssociationCommandInput,
    DeleteCoreNetworkPrefixListAssociationCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "DeleteCoreNetworkPrefixListAssociation", {})
  .n("NetworkManagerClient", "DeleteCoreNetworkPrefixListAssociationCommand")
  .sc(DeleteCoreNetworkPrefixListAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCoreNetworkPrefixListAssociationRequest;
      output: DeleteCoreNetworkPrefixListAssociationResponse;
    };
    sdk: {
      input: DeleteCoreNetworkPrefixListAssociationCommandInput;
      output: DeleteCoreNetworkPrefixListAssociationCommandOutput;
    };
  };
}
