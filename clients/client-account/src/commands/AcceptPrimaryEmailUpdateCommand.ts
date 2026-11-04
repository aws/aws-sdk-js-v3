// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AcceptPrimaryEmailUpdateRequest, AcceptPrimaryEmailUpdateResponse } from "../models/models_0";
import { AcceptPrimaryEmailUpdate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcceptPrimaryEmailUpdateCommand}.
 */
export interface AcceptPrimaryEmailUpdateCommandInput extends AcceptPrimaryEmailUpdateRequest {}
/**
 * @public
 *
 * The output of {@link AcceptPrimaryEmailUpdateCommand}.
 */
export interface AcceptPrimaryEmailUpdateCommandOutput extends AcceptPrimaryEmailUpdateResponse, __MetadataBearer {}

/**
 * Accepts the request that originated from StartPrimaryEmailUpdate to update the primary email address (also known as the root user email address) for the specified account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, AcceptPrimaryEmailUpdateCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, AcceptPrimaryEmailUpdateCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * // import type { AccountClientConfig } from "@aws-sdk/client-account";
 * const config = {}; // type is AccountClientConfig
 * const client = new AccountClient(config);
 * const input = { // AcceptPrimaryEmailUpdateRequest
 *   AccountId: "STRING_VALUE", // required
 *   PrimaryEmail: "STRING_VALUE", // required
 *   Otp: "STRING_VALUE", // required
 * };
 * const command = new AcceptPrimaryEmailUpdateCommand(input);
 * const response = await client.send(command);
 * // { // AcceptPrimaryEmailUpdateResponse
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AcceptPrimaryEmailUpdateCommandInput - {@link AcceptPrimaryEmailUpdateCommandInput}
 * @returns {@link AcceptPrimaryEmailUpdateCommandOutput}
 * @see {@link AcceptPrimaryEmailUpdateCommandInput} for command's `input` shape.
 * @see {@link AcceptPrimaryEmailUpdateCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The operation failed because the calling identity doesn't have the minimum required permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of a conflict in the current status of the resource. For example, this happens if you try to enable a Region that is currently being disabled (in a status of DISABLING) or if you try to change an account’s root user email to an email address which is already in use.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The operation failed because of an error internal to Amazon Web Services. Try your operation again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation failed because it specified a resource that can't be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The operation failed because it was called too frequently and exceeded a throttle limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The operation failed because one of the input parameters was invalid.
 *
 * @throws {@link AccountServiceException}
 *
 * Base exception class for all service exceptions from Account service.
 *
 * @public
 */
export class AcceptPrimaryEmailUpdateCommand extends command<AcceptPrimaryEmailUpdateCommandInput, AcceptPrimaryEmailUpdateCommandOutput>(
  _ep0,
  _mw0,
  "AcceptPrimaryEmailUpdate",
  AcceptPrimaryEmailUpdate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptPrimaryEmailUpdateRequest;
      output: AcceptPrimaryEmailUpdateResponse;
    };
    sdk: {
      input: AcceptPrimaryEmailUpdateCommandInput;
      output: AcceptPrimaryEmailUpdateCommandOutput;
    };
  };
}
