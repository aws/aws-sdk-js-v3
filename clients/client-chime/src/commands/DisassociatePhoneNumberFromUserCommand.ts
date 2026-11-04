// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociatePhoneNumberFromUserRequest,
  DisassociatePhoneNumberFromUserResponse,
} from "../models/models_0";
import { DisassociatePhoneNumberFromUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociatePhoneNumberFromUserCommand}.
 */
export interface DisassociatePhoneNumberFromUserCommandInput extends DisassociatePhoneNumberFromUserRequest {}
/**
 * @public
 *
 * The output of {@link DisassociatePhoneNumberFromUserCommand}.
 */
export interface DisassociatePhoneNumberFromUserCommandOutput extends DisassociatePhoneNumberFromUserResponse, __MetadataBearer {}

/**
 * Disassociates the primary provisioned phone number from the specified Amazon Chime user.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DisassociatePhoneNumberFromUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DisassociatePhoneNumberFromUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // DisassociatePhoneNumberFromUserRequest
 *   AccountId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 * };
 * const command = new DisassociatePhoneNumberFromUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociatePhoneNumberFromUserCommandInput - {@link DisassociatePhoneNumberFromUserCommandInput}
 * @returns {@link DisassociatePhoneNumberFromUserCommandOutput}
 * @see {@link DisassociatePhoneNumberFromUserCommandInput} for command's `input` shape.
 * @see {@link DisassociatePhoneNumberFromUserCommandOutput} for command's `response` shape.
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
export class DisassociatePhoneNumberFromUserCommand extends command<DisassociatePhoneNumberFromUserCommandInput, DisassociatePhoneNumberFromUserCommandOutput>(
  _ep0,
  _mw0,
  "DisassociatePhoneNumberFromUser",
  DisassociatePhoneNumberFromUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociatePhoneNumberFromUserRequest;
      output: {};
    };
    sdk: {
      input: DisassociatePhoneNumberFromUserCommandInput;
      output: DisassociatePhoneNumberFromUserCommandOutput;
    };
  };
}
