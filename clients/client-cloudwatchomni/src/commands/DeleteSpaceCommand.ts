// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSpaceInput, DeleteSpaceOutput } from "../models/models_0";
import { DeleteSpace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSpaceCommand}.
 */
export interface DeleteSpaceCommandInput extends DeleteSpaceInput {}
/**
 * @public
 *
 * The output of {@link DeleteSpaceCommand}.
 */
export interface DeleteSpaceCommandOutput extends DeleteSpaceOutput, __MetadataBearer {}

/**
 * Removes a space and all of its resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, DeleteSpaceCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, DeleteSpaceCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // DeleteSpaceInput
 *   spaceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSpaceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSpaceCommandInput - {@link DeleteSpaceCommandInput}
 * @returns {@link DeleteSpaceCommandOutput}
 * @see {@link DeleteSpaceCommandInput} for command's `input` shape.
 * @see {@link DeleteSpaceCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Delete a space
 * ```javascript
 * // The following example removes a space and all of its resources. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new DeleteSpaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteSpaceCommand extends command<DeleteSpaceCommandInput, DeleteSpaceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSpace",
  DeleteSpace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSpaceInput;
      output: {};
    };
    sdk: {
      input: DeleteSpaceCommandInput;
      output: DeleteSpaceCommandOutput;
    };
  };
}
