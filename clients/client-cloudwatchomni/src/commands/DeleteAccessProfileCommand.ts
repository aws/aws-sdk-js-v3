// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccessProfileInput, DeleteAccessProfileOutput } from "../models/models_0";
import { DeleteAccessProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccessProfileCommand}.
 */
export interface DeleteAccessProfileCommandInput extends DeleteAccessProfileInput {}
/**
 * @public
 *
 * The output of {@link DeleteAccessProfileCommand}.
 */
export interface DeleteAccessProfileCommandOutput extends DeleteAccessProfileOutput, __MetadataBearer {}

/**
 * Removes an access profile.
 *
 * An access profile cannot be deleted while access grants reference it.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, DeleteAccessProfileCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, DeleteAccessProfileCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // DeleteAccessProfileInput
 *   spaceId: "STRING_VALUE", // required
 *   profileId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessProfileCommandInput - {@link DeleteAccessProfileCommandInput}
 * @returns {@link DeleteAccessProfileCommandOutput}
 * @see {@link DeleteAccessProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessProfileCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The operation could not be completed because of a conflict with the current
 * state of the resource.
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
 * @example Delete an access profile
 * ```javascript
 * // The following example deletes an access profile from a space. An access profile cannot be deleted while access grants reference it. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   profileId: "analyst-readonly",
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new DeleteAccessProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteAccessProfileCommand extends command<DeleteAccessProfileCommandInput, DeleteAccessProfileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccessProfile",
  DeleteAccessProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessProfileInput;
      output: {};
    };
    sdk: {
      input: DeleteAccessProfileCommandInput;
      output: DeleteAccessProfileCommandOutput;
    };
  };
}
