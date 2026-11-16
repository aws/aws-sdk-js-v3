// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContextVersionRequest, GetContextVersionResponse } from "../models/models_0";
import { GetContextVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetContextVersionCommand}.
 */
export interface GetContextVersionCommandInput extends GetContextVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetContextVersionCommand}.
 */
export interface GetContextVersionCommandOutput extends GetContextVersionResponse, __MetadataBearer {}

/**
 * <p>Returns the current version of the context entries of a context store. The context store must be in the <code>AVAILABLE</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetContextVersionCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetContextVersionCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetContextVersionRequest
 *   ContextStoreId: "STRING_VALUE", // required
 * };
 * const command = new GetContextVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetContextVersionResponse
 * //   VersionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetContextVersionCommandInput - {@link GetContextVersionCommandInput}
 * @returns {@link GetContextVersionCommandOutput}
 * @see {@link GetContextVersionCommandInput} for command's `input` shape.
 * @see {@link GetContextVersionCommandOutput} for command's `response` shape.
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
export class GetContextVersionCommand extends command<GetContextVersionCommandInput, GetContextVersionCommandOutput>(
  _ep0,
  _mw0,
  "GetContextVersion",
  GetContextVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContextVersionRequest;
      output: GetContextVersionResponse;
    };
    sdk: {
      input: GetContextVersionCommandInput;
      output: GetContextVersionCommandOutput;
    };
  };
}
