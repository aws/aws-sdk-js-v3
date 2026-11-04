// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateMemberRequest, DisassociateMemberResponse } from "../models/models_0";
import { DisassociateMember$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateMemberCommand}.
 */
export interface DisassociateMemberCommandInput extends DisassociateMemberRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateMemberCommand}.
 */
export interface DisassociateMemberCommandOutput extends DisassociateMemberResponse, __MetadataBearer {}

/**
 * Disassociates a member account from an Amazon Inspector delegated administrator.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, DisassociateMemberCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, DisassociateMemberCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // DisassociateMemberRequest
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateMemberCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateMemberResponse
 * //   accountId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DisassociateMemberCommandInput - {@link DisassociateMemberCommandInput}
 * @returns {@link DisassociateMemberCommandOutput}
 * @see {@link DisassociateMemberCommandInput} for command's `input` shape.
 * @see {@link DisassociateMemberCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * For `Enable`, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the Amazon Inspector service.
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
export class DisassociateMemberCommand extends command<DisassociateMemberCommandInput, DisassociateMemberCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateMember",
  DisassociateMember$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateMemberRequest;
      output: DisassociateMemberResponse;
    };
    sdk: {
      input: DisassociateMemberCommandInput;
      output: DisassociateMemberCommandOutput;
    };
  };
}
