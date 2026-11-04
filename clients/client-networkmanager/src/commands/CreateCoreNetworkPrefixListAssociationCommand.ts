// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateCoreNetworkPrefixListAssociationRequest,
  CreateCoreNetworkPrefixListAssociationResponse,
} from "../models/models_0";
import { CreateCoreNetworkPrefixListAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCoreNetworkPrefixListAssociationCommand}.
 */
export interface CreateCoreNetworkPrefixListAssociationCommandInput extends CreateCoreNetworkPrefixListAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateCoreNetworkPrefixListAssociationCommand}.
 */
export interface CreateCoreNetworkPrefixListAssociationCommandOutput extends CreateCoreNetworkPrefixListAssociationResponse, __MetadataBearer {}

/**
 * Creates an association between a core network and a prefix list for routing control.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict processing the request. Updating or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A service limit was exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints.
 *
 * @throws {@link NetworkManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkManager service.
 *
 * @public
 */
export class CreateCoreNetworkPrefixListAssociationCommand extends command<CreateCoreNetworkPrefixListAssociationCommandInput, CreateCoreNetworkPrefixListAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateCoreNetworkPrefixListAssociation",
  CreateCoreNetworkPrefixListAssociation$
) {
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
