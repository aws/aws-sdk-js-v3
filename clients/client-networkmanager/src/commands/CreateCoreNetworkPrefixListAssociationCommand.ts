// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreateCoreNetworkPrefixListAssociationRequest,
  CreateCoreNetworkPrefixListAssociationResponse,
} from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { CreateCoreNetworkPrefixListAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCoreNetworkPrefixListAssociationCommand}.
 */
export interface CreateCoreNetworkPrefixListAssociationCommandInput
  extends CreateCoreNetworkPrefixListAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateCoreNetworkPrefixListAssociationCommand}.
 */
export interface CreateCoreNetworkPrefixListAssociationCommandOutput
  extends CreateCoreNetworkPrefixListAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Creates an association between a core network and a prefix list for routing control.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateCoreNetworkPrefixListAssociationCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateCoreNetworkPrefixListAssociationCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // CreateCoreNetworkPrefixListAssociationRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   PrefixListArn: "STRING_VALUE", // required
 *   PrefixListAlias: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateCoreNetworkPrefixListAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateCoreNetworkPrefixListAssociationResponse
 * //   CoreNetworkId: "STRING_VALUE",
 * //   PrefixListArn: "STRING_VALUE",
 * //   PrefixListAlias: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCoreNetworkPrefixListAssociationCommandInput - {@link CreateCoreNetworkPrefixListAssociationCommandInput}
 * @returns {@link CreateCoreNetworkPrefixListAssociationCommandOutput}
 * @see {@link CreateCoreNetworkPrefixListAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateCoreNetworkPrefixListAssociationCommandOutput} for command's `response` shape.
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
export class CreateCoreNetworkPrefixListAssociationCommand extends $Command
  .classBuilder<
    CreateCoreNetworkPrefixListAssociationCommandInput,
    CreateCoreNetworkPrefixListAssociationCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "CreateCoreNetworkPrefixListAssociation", {})
  .n("NetworkManagerClient", "CreateCoreNetworkPrefixListAssociationCommand")
  .sc(CreateCoreNetworkPrefixListAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCoreNetworkPrefixListAssociationRequest;
      output: CreateCoreNetworkPrefixListAssociationResponse;
    };
    sdk: {
      input: CreateCoreNetworkPrefixListAssociationCommandInput;
      output: CreateCoreNetworkPrefixListAssociationCommandOutput;
    };
  };
}
