// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSlotRequest } from "../models/models_0";
import { DeleteSlot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSlotCommand}.
 */
export interface DeleteSlotCommandInput extends DeleteSlotRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSlotCommand}.
 */
export interface DeleteSlotCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified slot from an intent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteSlotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteSlotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DeleteSlotRequest
 *   slotId: "STRING_VALUE", // required
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   intentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSlotCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSlotCommandInput - {@link DeleteSlotCommandInput}
 * @returns {@link DeleteSlotCommandOutput}
 * @see {@link DeleteSlotCommandInput} for command's `input` shape.
 * @see {@link DeleteSlotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 *
 * @public
 */
export class DeleteSlotCommand extends command<DeleteSlotCommandInput, DeleteSlotCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSlot",
  DeleteSlot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSlotRequest;
      output: {};
    };
    sdk: {
      input: DeleteSlotCommandInput;
      output: DeleteSlotCommandOutput;
    };
  };
}
