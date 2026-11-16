// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContextStoreRequest, GetContextStoreResponse } from "../models/models_0";
import { GetContextStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetContextStoreCommand}.
 */
export interface GetContextStoreCommandInput extends GetContextStoreRequest {}
/**
 * @public
 *
 * The output of {@link GetContextStoreCommand}.
 */
export interface GetContextStoreCommandOutput extends GetContextStoreResponse, __MetadataBearer {}

/**
 * <p>Returns information about a context store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetContextStoreCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetContextStoreCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetContextStoreRequest
 *   ContextStoreId: "STRING_VALUE", // required
 * };
 * const command = new GetContextStoreCommand(input);
 * const response = await client.send(command);
 * // { // GetContextStoreResponse
 * //   ContextStore: { // ContextStore
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     ContextStoreId: "STRING_VALUE",
 * //     ContextStoreArn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     State: "PENDING" || "AVAILABLE" || "UPDATING" || "DELETING" || "DELETED",
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
 * @param GetContextStoreCommandInput - {@link GetContextStoreCommandInput}
 * @returns {@link GetContextStoreCommandOutput}
 * @see {@link GetContextStoreCommandInput} for command's `input` shape.
 * @see {@link GetContextStoreCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetContextStoreCommand extends command<GetContextStoreCommandInput, GetContextStoreCommandOutput>(
  _ep0,
  _mw0,
  "GetContextStore",
  GetContextStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContextStoreRequest;
      output: GetContextStoreResponse;
    };
    sdk: {
      input: GetContextStoreCommandInput;
      output: GetContextStoreCommandOutput;
    };
  };
}
