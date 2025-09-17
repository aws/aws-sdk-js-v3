// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAccountInformationRequest,
  GetAccountInformationResponse,
  GetAccountInformationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetAccountInformationCommand, se_GetAccountInformationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves information about the specified account including its account name, account ID, and account creation date and time. To use this API, an IAM user or role must have the <code>account:GetAccountInformation</code> IAM permission. </p>
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
export class GetAccountInformationCommand extends $Command
  .classBuilder<
    GetAccountInformationCommandInput,
    GetAccountInformationCommandOutput,
    AccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccountClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Account", "GetAccountInformation", {})
  .n("AccountClient", "GetAccountInformationCommand")
  .f(void 0, GetAccountInformationResponseFilterSensitiveLog)
  .ser(se_GetAccountInformationCommand)
  .de(de_GetAccountInformationCommand)
  .build() {
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
