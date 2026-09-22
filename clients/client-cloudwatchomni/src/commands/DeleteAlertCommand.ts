// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAlertInput, DeleteAlertOutput } from "../models/models_0";
import { DeleteAlert$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAlertCommand}.
 */
export interface DeleteAlertCommandInput extends DeleteAlertInput {}
/**
 * @public
 *
 * The output of {@link DeleteAlertCommand}.
 */
export interface DeleteAlertCommandOutput extends DeleteAlertOutput, __MetadataBearer {}

/**
 * Deletes an alert by its identifier.
 *
 * Idempotent: deleting an alert that has already been removed succeeds without error.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, DeleteAlertCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, DeleteAlertCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // DeleteAlertInput
 *   spaceId: "STRING_VALUE", // required
 *   alertId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAlertCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAlertCommandInput - {@link DeleteAlertCommandInput}
 * @returns {@link DeleteAlertCommandOutput}
 * @see {@link DeleteAlertCommandInput} for command's `input` shape.
 * @see {@link DeleteAlertCommandOutput} for command's `response` shape.
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
 * @example Delete an alert
 * ```javascript
 * // The following example removes an alert from a space. Deleting an alert that has already been removed succeeds without error. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   alertId: "c3d4e5f67a8b4c9d8e0f1a2b3c4d5e6f",
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new DeleteAlertCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteAlertCommand extends command<DeleteAlertCommandInput, DeleteAlertCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAlert",
  DeleteAlert$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAlertInput;
      output: {};
    };
    sdk: {
      input: DeleteAlertCommandInput;
      output: DeleteAlertCommandOutput;
    };
  };
}
