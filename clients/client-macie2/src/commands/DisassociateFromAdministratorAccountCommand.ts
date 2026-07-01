// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateFromAdministratorAccountRequest,
  DisassociateFromAdministratorAccountResponse,
} from "../models/models_0";
import { DisassociateFromAdministratorAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateFromAdministratorAccountCommand}.
 */
export interface DisassociateFromAdministratorAccountCommandInput extends DisassociateFromAdministratorAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateFromAdministratorAccountCommand}.
 */
export interface DisassociateFromAdministratorAccountCommandOutput extends DisassociateFromAdministratorAccountResponse, __MetadataBearer {}

/**
 * <p>Disassociates a member account from its Amazon Macie administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DisassociateFromAdministratorAccountCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DisassociateFromAdministratorAccountCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = {};
 * const command = new DisassociateFromAdministratorAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateFromAdministratorAccountCommandInput - {@link DisassociateFromAdministratorAccountCommandInput}
 * @returns {@link DisassociateFromAdministratorAccountCommandOutput}
 * @see {@link DisassociateFromAdministratorAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateFromAdministratorAccountCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class DisassociateFromAdministratorAccountCommand extends command<DisassociateFromAdministratorAccountCommandInput, DisassociateFromAdministratorAccountCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateFromAdministratorAccount",
  DisassociateFromAdministratorAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DisassociateFromAdministratorAccountCommandInput;
      output: DisassociateFromAdministratorAccountCommandOutput;
    };
  };
}
