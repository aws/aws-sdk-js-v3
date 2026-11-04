// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateContactListRequest, UpdateContactListResponse } from "../models/models_1";
import { UpdateContactList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateContactListCommand}.
 */
export interface UpdateContactListCommandInput extends UpdateContactListRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactListCommand}.
 */
export interface UpdateContactListCommandOutput extends UpdateContactListResponse, __MetadataBearer {}

/**
 * Updates contact list metadata. This operation does a complete replacement.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, UpdateContactListCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, UpdateContactListCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // UpdateContactListRequest
 *   ContactListName: "STRING_VALUE", // required
 *   Topics: [ // Topics
 *     { // Topic
 *       TopicName: "STRING_VALUE", // required
 *       DisplayName: "STRING_VALUE", // required
 *       Description: "STRING_VALUE",
 *       DefaultSubscriptionStatus: "OPT_IN" || "OPT_OUT", // required
 *     },
 *   ],
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateContactListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactListCommandInput - {@link UpdateContactListCommandInput}
 * @returns {@link UpdateContactListCommandOutput}
 * @see {@link UpdateContactListCommandInput} for command's `input` shape.
 * @see {@link UpdateContactListCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *
 * The resource is being modified by another operation or thread.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource you attempted to access doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Too many requests have been made to the operation.
 *
 * @throws {@link SESv2ServiceException}
 *
 * Base exception class for all service exceptions from SESv2 service.
 *
 * @public
 */
export class UpdateContactListCommand extends command<UpdateContactListCommandInput, UpdateContactListCommandOutput>(
  _ep0,
  _mw0,
  "UpdateContactList",
  UpdateContactList$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactListRequest;
      output: {};
    };
    sdk: {
      input: UpdateContactListCommandInput;
      output: UpdateContactListCommandOutput;
    };
  };
}
