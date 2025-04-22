// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetPrimaryEmailRequest,
  GetPrimaryEmailResponse,
  GetPrimaryEmailResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetPrimaryEmailCommand, se_GetPrimaryEmailCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPrimaryEmailCommand}.
 */
export interface GetPrimaryEmailCommandInput extends GetPrimaryEmailRequest {}
/**
 * @public
 *
 * The output of {@link GetPrimaryEmailCommand}.
 */
export interface GetPrimaryEmailCommandOutput extends GetPrimaryEmailResponse, __MetadataBearer {}

/**
 * <p>Retrieves the primary email address for the specified account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, GetPrimaryEmailCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, GetPrimaryEmailCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * const client = new AccountClient(config);
 * const input = { // GetPrimaryEmailRequest
 *   AccountId: "STRING_VALUE", // required
 * };
 * const command = new GetPrimaryEmailCommand(input);
 * const response = await client.send(command);
 * // { // GetPrimaryEmailResponse
 * //   PrimaryEmail: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPrimaryEmailCommandInput - {@link GetPrimaryEmailCommandInput}
 * @returns {@link GetPrimaryEmailCommandOutput}
 * @see {@link GetPrimaryEmailCommandInput} for command's `input` shape.
 * @see {@link GetPrimaryEmailCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation failed because the calling identity doesn't have the minimum required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation failed because of an error internal to Amazon Web Services. Try your operation again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation failed because it specified a resource that can't be found.</p>
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
export class GetPrimaryEmailCommand extends $Command
  .classBuilder<
    GetPrimaryEmailCommandInput,
    GetPrimaryEmailCommandOutput,
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
  .s("Account", "GetPrimaryEmail", {})
  .n("AccountClient", "GetPrimaryEmailCommand")
  .f(void 0, GetPrimaryEmailResponseFilterSensitiveLog)
  .ser(se_GetPrimaryEmailCommand)
  .de(de_GetPrimaryEmailCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPrimaryEmailRequest;
      output: GetPrimaryEmailResponse;
    };
    sdk: {
      input: GetPrimaryEmailCommandInput;
      output: GetPrimaryEmailCommandOutput;
    };
  };
}
