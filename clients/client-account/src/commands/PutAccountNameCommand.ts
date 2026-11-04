// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutAccountNameRequest } from "../models/models_0";
import { PutAccountName$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAccountNameCommand}.
 */
export interface PutAccountNameCommandInput extends PutAccountNameRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountNameCommand}.
 */
export interface PutAccountNameCommandOutput extends __MetadataBearer {}

/**
 * Updates the account name of the specified account. To use this API, IAM principals must have the `account:PutAccountName` IAM permission.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, PutAccountNameCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, PutAccountNameCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * // import type { AccountClientConfig } from "@aws-sdk/client-account";
 * const config = {}; // type is AccountClientConfig
 * const client = new AccountClient(config);
 * const input = { // PutAccountNameRequest
 *   AccountName: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new PutAccountNameCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccountNameCommandInput - {@link PutAccountNameCommandInput}
 * @returns {@link PutAccountNameCommandOutput}
 * @see {@link PutAccountNameCommandInput} for command's `input` shape.
 * @see {@link PutAccountNameCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The operation failed because the calling identity doesn't have the minimum required permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The operation failed because of an error internal to Amazon Web Services. Try your operation again later.
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
export class PutAccountNameCommand extends command<PutAccountNameCommandInput, PutAccountNameCommandOutput>(
  _ep0,
  _mw0,
  "PutAccountName",
  PutAccountName$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountNameRequest;
      output: {};
    };
    sdk: {
      input: PutAccountNameCommandInput;
      output: PutAccountNameCommandOutput;
    };
  };
}
