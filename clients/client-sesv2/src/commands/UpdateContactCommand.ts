// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateContactRequest, UpdateContactResponse } from "../models/models_1";
import { UpdateContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateContactCommand}.
 */
export interface UpdateContactCommandInput extends UpdateContactRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactCommand}.
 */
export interface UpdateContactCommandOutput extends UpdateContactResponse, __MetadataBearer {}

/**
 * <p>Updates a contact's preferences for a list.</p>
 *          <note>
 *             <p>You must specify all existing topic preferences in the
 *                     <code>TopicPreferences</code> object, not just the ones that need updating;
 *                 otherwise, all your existing preferences will be removed.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, UpdateContactCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, UpdateContactCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // UpdateContactRequest
 *   ContactListName: "STRING_VALUE", // required
 *   EmailAddress: "STRING_VALUE", // required
 *   TopicPreferences: [ // TopicPreferenceList
 *     { // TopicPreference
 *       TopicName: "STRING_VALUE", // required
 *       SubscriptionStatus: "OPT_IN" || "OPT_OUT", // required
 *     },
 *   ],
 *   UnsubscribeAll: true || false,
 *   AttributesData: "STRING_VALUE",
 * };
 * const command = new UpdateContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactCommandInput - {@link UpdateContactCommandInput}
 * @returns {@link UpdateContactCommandOutput}
 * @see {@link UpdateContactCommandInput} for command's `input` shape.
 * @see {@link UpdateContactCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>The resource is being modified by another operation or thread.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class UpdateContactCommand extends command<UpdateContactCommandInput, UpdateContactCommandOutput>(
  _ep0,
  _mw0,
  "UpdateContact",
  UpdateContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactRequest;
      output: {};
    };
    sdk: {
      input: UpdateContactCommandInput;
      output: UpdateContactCommandOutput;
    };
  };
}
