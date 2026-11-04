// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateNetworkResourceMetadataRequest, UpdateNetworkResourceMetadataResponse } from "../models/models_0";
import { UpdateNetworkResourceMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateNetworkResourceMetadataCommandOutput extends UpdateNetworkResourceMetadataResponse, __MetadataBearer {}

/**
 * Updates the resource metadata for the specified global network.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateNetworkResourceMetadataCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateNetworkResourceMetadataCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
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
export class UpdateNetworkResourceMetadataCommand extends command<UpdateNetworkResourceMetadataCommandInput, UpdateNetworkResourceMetadataCommandOutput>(
  _ep0,
  _mw0,
  "UpdateNetworkResourceMetadata",
  UpdateNetworkResourceMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNetworkResourceMetadataRequest;
      output: UpdateNetworkResourceMetadataResponse;
    };
    sdk: {
      input: UpdateNetworkResourceMetadataCommandInput;
      output: UpdateNetworkResourceMetadataCommandOutput;
    };
  };
}
