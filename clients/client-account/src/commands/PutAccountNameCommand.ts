// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutAccountNameRequest } from "../models/models_0";
import { PutAccountName } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the account name of the specified account. To use this API, IAM principals must have the <code>account:PutAccountName</code> IAM permission. </p>
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
 *  <p>The operation failed because the calling identity doesn't have the minimum required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation failed because of an error internal to Amazon Web Services. Try your operation again later.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The operation failed because it was called too frequently and exceeded a throttle limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed because one of the input parameters was invalid.</p>
 *
 * @throws {@link AccountServiceException}
 * <p>Base exception class for all service exceptions from Account service.</p>
 *
 *
 * @public
 */
export class PutAccountNameCommand extends $Command
  .classBuilder<
    PutAccountNameCommandInput,
    PutAccountNameCommandOutput,
    AccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Account", "PutAccountName", {})
  .n("AccountClient", "PutAccountNameCommand")
  .sc(PutAccountName)
  .build() {
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
