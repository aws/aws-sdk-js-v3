// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableDelegatedAdminAccountRequest, DisableDelegatedAdminAccountResponse } from "../models/models_0";
import { DisableDelegatedAdminAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableDelegatedAdminAccountCommand}.
 */
export interface DisableDelegatedAdminAccountCommandInput extends DisableDelegatedAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisableDelegatedAdminAccountCommand}.
 */
export interface DisableDelegatedAdminAccountCommandOutput extends DisableDelegatedAdminAccountResponse, __MetadataBearer {}

/**
 * Disables the Amazon Inspector delegated administrator for your organization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, DisableDelegatedAdminAccountCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, DisableDelegatedAdminAccountCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // DisableDelegatedAdminAccountRequest
 *   delegatedAdminAccountId: "STRING_VALUE", // required
 * };
 * const command = new DisableDelegatedAdminAccountCommand(input);
 * const response = await client.send(command);
 * // { // DisableDelegatedAdminAccountResponse
 * //   delegatedAdminAccountId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DisableDelegatedAdminAccountCommandInput - {@link DisableDelegatedAdminAccountCommandInput}
 * @returns {@link DisableDelegatedAdminAccountCommandOutput}
 * @see {@link DisableDelegatedAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DisableDelegatedAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * For `Enable`, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict occurred. This exception occurs when the same resource is being modified by concurrent requests.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the Amazon Inspector service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access an invalid resource. Make sure the resource is specified correctly.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation due to missing required fields or having invalid inputs.
 *
 * @throws {@link Inspector2ServiceException}
 *
 * Base exception class for all service exceptions from Inspector2 service.
 *
 * @public
 */
export class DisableDelegatedAdminAccountCommand extends command<DisableDelegatedAdminAccountCommandInput, DisableDelegatedAdminAccountCommandOutput>(
  _ep0,
  _mw0,
  "DisableDelegatedAdminAccount",
  DisableDelegatedAdminAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableDelegatedAdminAccountRequest;
      output: DisableDelegatedAdminAccountResponse;
    };
    sdk: {
      input: DisableDelegatedAdminAccountCommandInput;
      output: DisableDelegatedAdminAccountCommandOutput;
    };
  };
}
