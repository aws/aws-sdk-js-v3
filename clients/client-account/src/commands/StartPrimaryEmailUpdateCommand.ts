// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartPrimaryEmailUpdateRequest,
  StartPrimaryEmailUpdateRequestFilterSensitiveLog,
  StartPrimaryEmailUpdateResponse,
} from "../models/models_0";
import { de_StartPrimaryEmailUpdateCommand, se_StartPrimaryEmailUpdateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartPrimaryEmailUpdateCommand}.
 */
export interface StartPrimaryEmailUpdateCommandInput extends StartPrimaryEmailUpdateRequest {}
/**
 * @public
 *
 * The output of {@link StartPrimaryEmailUpdateCommand}.
 */
export interface StartPrimaryEmailUpdateCommandOutput extends StartPrimaryEmailUpdateResponse, __MetadataBearer {}

/**
 * <p>Starts the process to update the primary email address for the specified
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, StartPrimaryEmailUpdateCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, StartPrimaryEmailUpdateCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * const client = new AccountClient(config);
 * const input = { // StartPrimaryEmailUpdateRequest
 *   AccountId: "STRING_VALUE", // required
 *   PrimaryEmail: "STRING_VALUE", // required
 * };
 * const command = new StartPrimaryEmailUpdateCommand(input);
 * const response = await client.send(command);
 * // { // StartPrimaryEmailUpdateResponse
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartPrimaryEmailUpdateCommandInput - {@link StartPrimaryEmailUpdateCommandInput}
 * @returns {@link StartPrimaryEmailUpdateCommandOutput}
 * @see {@link StartPrimaryEmailUpdateCommandInput} for command's `input` shape.
 * @see {@link StartPrimaryEmailUpdateCommandOutput} for command's `response` shape.
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
 * @public
 */
export class StartPrimaryEmailUpdateCommand extends $Command
  .classBuilder<
    StartPrimaryEmailUpdateCommandInput,
    StartPrimaryEmailUpdateCommandOutput,
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
  .s("Account", "StartPrimaryEmailUpdate", {})
  .n("AccountClient", "StartPrimaryEmailUpdateCommand")
  .f(StartPrimaryEmailUpdateRequestFilterSensitiveLog, void 0)
  .ser(se_StartPrimaryEmailUpdateCommand)
  .de(de_StartPrimaryEmailUpdateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartPrimaryEmailUpdateRequest;
      output: StartPrimaryEmailUpdateResponse;
    };
    sdk: {
      input: StartPrimaryEmailUpdateCommandInput;
      output: StartPrimaryEmailUpdateCommandOutput;
    };
  };
}
