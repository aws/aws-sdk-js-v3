// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociatePhoneNumberWithUserRequest, AssociatePhoneNumberWithUserResponse } from "../models/models_0";
import { AssociatePhoneNumberWithUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Associates a phone number with the specified Amazon Chime user.</p>
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
 *  <p>You don't have permissions to perform the requested operation.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 *
 * @public
 */
export class AssociatePhoneNumberWithUserCommand extends $Command
  .classBuilder<
    AssociatePhoneNumberWithUserCommandInput,
    AssociatePhoneNumberWithUserCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "AssociatePhoneNumberWithUser", {})
  .n("ChimeClient", "AssociatePhoneNumberWithUserCommand")
  .sc(AssociatePhoneNumberWithUser$)
  .build() {
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
