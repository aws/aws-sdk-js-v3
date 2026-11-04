// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePhoneNumberRequest } from "../models/models_0";
import { DeletePhoneNumber$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePhoneNumberCommand}.
 */
export interface DeletePhoneNumberCommandInput extends DeletePhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link DeletePhoneNumberCommand}.
 */
export interface DeletePhoneNumberCommandOutput extends __MetadataBearer {}

/**
 * Moves the specified phone number into the **Deletion queue**. A phone number must be disassociated from any users or Amazon Chime Voice Connectors before it can be deleted.
 *
 * Deleted phone numbers remain in the **Deletion queue** for 7 days before they are deleted permanently.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeletePhoneNumberCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeletePhoneNumberCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // DeletePhoneNumberRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 * };
 * const command = new DeletePhoneNumberCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePhoneNumberCommandInput - {@link DeletePhoneNumberCommandInput}
 * @returns {@link DeletePhoneNumberCommandOutput}
 * @see {@link DeletePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link DeletePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeServiceException}
 *
 * Base exception class for all service exceptions from Chime service.
 *
 * @public
 */
export class DeletePhoneNumberCommand extends command<DeletePhoneNumberCommandInput, DeletePhoneNumberCommandOutput>(
  _ep0,
  _mw0,
  "DeletePhoneNumber",
  DeletePhoneNumber$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePhoneNumberRequest;
      output: {};
    };
    sdk: {
      input: DeletePhoneNumberCommandInput;
      output: DeletePhoneNumberCommandOutput;
    };
  };
}
