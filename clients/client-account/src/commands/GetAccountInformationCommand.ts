// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccountInformationRequest, GetAccountInformationResponse } from "../models/models_0";
import { GetAccountInformation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccountInformationCommand}.
 */
export interface GetAccountInformationCommandInput extends GetAccountInformationRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountInformationCommand}.
 */
export interface GetAccountInformationCommandOutput extends GetAccountInformationResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified account including its account name, account ID, account creation date and time, and account state. To use this API, an IAM user or role must have the <code>account:GetAccountInformation</code> IAM permission. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, GetAccountInformationCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, GetAccountInformationCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * // import type { AccountClientConfig } from "@aws-sdk/client-account";
 * const config = {}; // type is AccountClientConfig
 * const client = new AccountClient(config);
 * const input = { // GetAccountInformationRequest
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new GetAccountInformationCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountInformationResponse
 * //   AccountId: "STRING_VALUE",
 * //   AccountName: "STRING_VALUE",
 * //   AccountCreatedDate: new Date("TIMESTAMP"),
 * //   AccountState: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccountInformationCommandInput - {@link GetAccountInformationCommandInput}
 * @returns {@link GetAccountInformationCommandOutput}
 * @see {@link GetAccountInformationCommandInput} for command's `input` shape.
 * @see {@link GetAccountInformationCommandOutput} for command's `response` shape.
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
export class GetAccountInformationCommand extends command<GetAccountInformationCommandInput, GetAccountInformationCommandOutput>(
  _ep0,
  _mw0,
  "GetAccountInformation",
  GetAccountInformation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccountInformationRequest;
      output: GetAccountInformationResponse;
    };
    sdk: {
      input: GetAccountInformationCommandInput;
      output: GetAccountInformationCommandOutput;
    };
  };
}
