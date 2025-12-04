// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DisassociatePhoneNumberFromUserRequest,
  DisassociatePhoneNumberFromUserResponse,
} from "../models/models_0";
import { DisassociatePhoneNumberFromUser } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DisassociatePhoneNumberFromUserCommandOutput
  extends DisassociatePhoneNumberFromUserResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates the primary provisioned phone number from the specified Amazon Chime user.</p>
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
export class DisassociatePhoneNumberFromUserCommand extends $Command
  .classBuilder<
    DisassociatePhoneNumberFromUserCommandInput,
    DisassociatePhoneNumberFromUserCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "DisassociatePhoneNumberFromUser", {})
  .n("ChimeClient", "DisassociatePhoneNumberFromUserCommand")
  .sc(DisassociatePhoneNumberFromUser)
  .build() {
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
