// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociatePhoneNumberWithUserRequest, AssociatePhoneNumberWithUserResponse } from "../models/models_0";
import { AssociatePhoneNumberWithUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociatePhoneNumberWithUserCommand}.
 */
export interface AssociatePhoneNumberWithUserCommandInput extends AssociatePhoneNumberWithUserRequest {}
/**
 * @public
 *
 * The output of {@link AssociatePhoneNumberWithUserCommand}.
 */
export interface AssociatePhoneNumberWithUserCommandOutput extends AssociatePhoneNumberWithUserResponse, __MetadataBearer {}

/**
 * Associates a phone number with the specified Amazon Chime user.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, AssociatePhoneNumberWithUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, AssociatePhoneNumberWithUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // AssociatePhoneNumberWithUserRequest
 *   AccountId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   E164PhoneNumber: "STRING_VALUE", // required
 * };
 * const command = new AssociatePhoneNumberWithUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociatePhoneNumberWithUserCommandInput - {@link AssociatePhoneNumberWithUserCommandInput}
 * @returns {@link AssociatePhoneNumberWithUserCommandOutput}
 * @see {@link AssociatePhoneNumberWithUserCommandInput} for command's `input` shape.
 * @see {@link AssociatePhoneNumberWithUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permissions to perform the requested operation.
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
export class AssociatePhoneNumberWithUserCommand extends command<AssociatePhoneNumberWithUserCommandInput, AssociatePhoneNumberWithUserCommandOutput>(
  _ep0,
  _mw0,
  "AssociatePhoneNumberWithUser",
  AssociatePhoneNumberWithUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociatePhoneNumberWithUserRequest;
      output: {};
    };
    sdk: {
      input: AssociatePhoneNumberWithUserCommandInput;
      output: AssociatePhoneNumberWithUserCommandOutput;
    };
  };
}
