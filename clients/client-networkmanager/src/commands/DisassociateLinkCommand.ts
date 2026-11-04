// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateLinkRequest, DisassociateLinkResponse } from "../models/models_0";
import { DisassociateLink$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateLinkCommand}.
 */
export interface DisassociateLinkCommandInput extends DisassociateLinkRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateLinkCommand}.
 */
export interface DisassociateLinkCommandOutput extends DisassociateLinkResponse, __MetadataBearer {}

/**
 * Disassociates an existing device from a link. You must first disassociate any customer gateways that are associated with the link.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DisassociateLinkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DisassociateLinkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DisassociateLinkRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE", // required
 *   LinkId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateLinkCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateLinkResponse
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
 * @param DisassociateLinkCommandInput - {@link DisassociateLinkCommandInput}
 * @returns {@link DisassociateLinkCommandOutput}
 * @see {@link DisassociateLinkCommandInput} for command's `input` shape.
 * @see {@link DisassociateLinkCommandOutput} for command's `response` shape.
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
export class DisassociateLinkCommand extends command<DisassociateLinkCommandInput, DisassociateLinkCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateLink",
  DisassociateLink$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateLinkRequest;
      output: DisassociateLinkResponse;
    };
    sdk: {
      input: DisassociateLinkCommandInput;
      output: DisassociateLinkCommandOutput;
    };
  };
}
