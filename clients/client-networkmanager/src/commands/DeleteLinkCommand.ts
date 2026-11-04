// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLinkRequest, DeleteLinkResponse } from "../models/models_0";
import { DeleteLink$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLinkCommand}.
 */
export interface DeleteLinkCommandInput extends DeleteLinkRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLinkCommand}.
 */
export interface DeleteLinkCommandOutput extends DeleteLinkResponse, __MetadataBearer {}

/**
 * Deletes an existing link. You must first disassociate the link from any devices and customer gateways.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteLinkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteLinkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DeleteLinkRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   LinkId: "STRING_VALUE", // required
 * };
 * const command = new DeleteLinkCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLinkResponse
 * //   Link: { // Link
 * //     LinkId: "STRING_VALUE",
 * //     LinkArn: "STRING_VALUE",
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     SiteId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Type: "STRING_VALUE",
 * //     Bandwidth: { // Bandwidth
 * //       UploadSpeed: Number("int"),
 * //       DownloadSpeed: Number("int"),
 * //     },
 * //     Provider: "STRING_VALUE",
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
 * @param DeleteLinkCommandInput - {@link DeleteLinkCommandInput}
 * @returns {@link DeleteLinkCommandOutput}
 * @see {@link DeleteLinkCommandInput} for command's `input` shape.
 * @see {@link DeleteLinkCommandOutput} for command's `response` shape.
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
export class DeleteLinkCommand extends command<DeleteLinkCommandInput, DeleteLinkCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLink",
  DeleteLink$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLinkRequest;
      output: DeleteLinkResponse;
    };
    sdk: {
      input: DeleteLinkCommandInput;
      output: DeleteLinkCommandOutput;
    };
  };
}
