// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateGlobalNetworkRequest, UpdateGlobalNetworkResponse } from "../models/models_0";
import { UpdateGlobalNetwork$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates an existing global network. To remove information for any of the parameters, specify an empty string.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateGlobalNetworkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateGlobalNetworkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
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
export class UpdateGlobalNetworkCommand extends command<UpdateGlobalNetworkCommandInput, UpdateGlobalNetworkCommandOutput>(
  _ep0,
  _mw0,
  "UpdateGlobalNetwork",
  UpdateGlobalNetwork$
) {
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
