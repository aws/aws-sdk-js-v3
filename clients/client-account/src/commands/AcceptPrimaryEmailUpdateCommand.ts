// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AcceptPrimaryEmailUpdateRequest,
  AcceptPrimaryEmailUpdateRequestFilterSensitiveLog,
  AcceptPrimaryEmailUpdateResponse,
} from "../models/models_0";
import { de_AcceptPrimaryEmailUpdateCommand, se_AcceptPrimaryEmailUpdateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Accepts the request that originated from <a>StartPrimaryEmailUpdate</a> to update the primary email address (also known
 *             as the root user email address) for the specified account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, AcceptPrimaryEmailUpdateCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, AcceptPrimaryEmailUpdateCommand } = require("@aws-sdk/client-account"); // CommonJS import
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
 *  <p>The operation failed because the calling identity doesn't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of a conflict in the current status of the
 *             resource. For example, this happens if you try to enable a Region that is currently being disabled
 *             (in a status of DISABLING).</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation failed because of an error internal to Amazon Web Services. Try your operation again
 *             later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation failed because it specified a resource that can't be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The operation failed because it was called too frequently and exceeded a throttle
 *             limit.</p>
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
export class AcceptPrimaryEmailUpdateCommand extends $Command
  .classBuilder<
    AcceptPrimaryEmailUpdateCommandInput,
    AcceptPrimaryEmailUpdateCommandOutput,
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
  .s("Account", "AcceptPrimaryEmailUpdate", {})
  .n("AccountClient", "AcceptPrimaryEmailUpdateCommand")
  .f(AcceptPrimaryEmailUpdateRequestFilterSensitiveLog, void 0)
  .ser(se_AcceptPrimaryEmailUpdateCommand)
  .de(de_AcceptPrimaryEmailUpdateCommand)
  .build() {
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
