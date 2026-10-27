// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVolumeRequest, DeleteVolumeResponse } from "../models/models_0";
import { DeleteVolume$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVolumeCommand}.
 */
export interface DeleteVolumeCommandInput extends DeleteVolumeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVolumeCommand}.
 */
export interface DeleteVolumeCommandOutput extends DeleteVolumeResponse, __MetadataBearer {}

/**
 * Deletes a persistent volume.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteVolumeCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteVolumeCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // DeleteVolumeRequest
 *   farmId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 *   volumeId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVolumeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVolumeCommandInput - {@link DeleteVolumeCommandInput}
 * @returns {@link DeleteVolumeCommandOutput}
 * @see {@link DeleteVolumeCommandInput} for command's `input` shape.
 * @see {@link DeleteVolumeCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You don't have permission to perform the action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Deadline Cloud can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Your request exceeded a request rate quota.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @example Delete a volume
 * ```javascript
 * //
 * const input = {
 *   farmId: "farm-1234567890abcdef1234567890abcdef",
 *   fleetId: "fleet-1234567890abcdef1234567890abcdef",
 *   volumeId: "volume-1234567890abcdef1234567890abcdef"
 * };
 * const command = new DeleteVolumeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteVolumeCommand extends command<DeleteVolumeCommandInput, DeleteVolumeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVolume",
  DeleteVolume$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVolumeRequest;
      output: {};
    };
    sdk: {
      input: DeleteVolumeCommandInput;
      output: DeleteVolumeCommandOutput;
    };
  };
}
