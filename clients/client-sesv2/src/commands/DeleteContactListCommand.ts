// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteContactListRequest, DeleteContactListResponse } from "../models/models_0";
import { DeleteContactList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteContactListCommand}.
 */
export interface DeleteContactListCommandInput extends DeleteContactListRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContactListCommand}.
 */
export interface DeleteContactListCommandOutput extends DeleteContactListResponse, __MetadataBearer {}

/**
 * Deletes a contact list and all of the contacts on that list.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteContactListCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteContactListCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // DeleteContactListRequest
 *   ContactListName: "STRING_VALUE", // required
 * };
 * const command = new DeleteContactListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContactListCommandInput - {@link DeleteContactListCommandInput}
 * @returns {@link DeleteContactListCommandOutput}
 * @see {@link DeleteContactListCommandInput} for command's `input` shape.
 * @see {@link DeleteContactListCommandOutput} for command's `response` shape.
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
export class DeleteContactListCommand extends command<DeleteContactListCommandInput, DeleteContactListCommandOutput>(
  _ep0,
  _mw0,
  "DeleteContactList",
  DeleteContactList$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContactListRequest;
      output: {};
    };
    sdk: {
      input: DeleteContactListCommandInput;
      output: DeleteContactListCommandOutput;
    };
  };
}
