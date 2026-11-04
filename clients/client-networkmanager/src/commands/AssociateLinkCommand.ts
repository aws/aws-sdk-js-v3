// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateLinkRequest, AssociateLinkResponse } from "../models/models_0";
import { AssociateLink$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateLinkCommand}.
 */
export interface AssociateLinkCommandInput extends AssociateLinkRequest {}
/**
 * @public
 *
 * The output of {@link AssociateLinkCommand}.
 */
export interface AssociateLinkCommandOutput extends AssociateLinkResponse, __MetadataBearer {}

/**
 * Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, AssociateLinkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, AssociateLinkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // AssociateLinkRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE", // required
 *   LinkId: "STRING_VALUE", // required
 * };
 * const command = new AssociateLinkCommand(input);
 * const response = await client.send(command);
 * // { // AssociateLinkResponse
 * //   LinkAssociation: { // LinkAssociation
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     DeviceId: "STRING_VALUE",
 * //     LinkId: "STRING_VALUE",
 * //     LinkAssociationState: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateLinkCommandInput - {@link AssociateLinkCommandInput}
 * @returns {@link AssociateLinkCommandOutput}
 * @see {@link AssociateLinkCommandInput} for command's `input` shape.
 * @see {@link AssociateLinkCommandOutput} for command's `response` shape.
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
export class AssociateLinkCommand extends command<AssociateLinkCommandInput, AssociateLinkCommandOutput>(
  _ep0,
  _mw0,
  "AssociateLink",
  AssociateLink$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateLinkRequest;
      output: AssociateLinkResponse;
    };
    sdk: {
      input: AssociateLinkCommandInput;
      output: AssociateLinkCommandOutput;
    };
  };
}
