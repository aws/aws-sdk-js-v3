// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { DisableDelegatedAdminAccountRequest, DisableDelegatedAdminAccountResponse } from "../models/models_0";
import {
  de_DisableDelegatedAdminAccountCommand,
  se_DisableDelegatedAdminAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableDelegatedAdminAccountCommand}.
 */
export interface DisableDelegatedAdminAccountCommandInput extends DisableDelegatedAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisableDelegatedAdminAccountCommand}.
 */
export interface DisableDelegatedAdminAccountCommandOutput
  extends DisableDelegatedAdminAccountResponse,
    __MetadataBearer {}

/**
 * <p>Disables the Amazon Inspector delegated administrator for your organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, DisableDelegatedAdminAccountCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, DisableDelegatedAdminAccountCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // DisableDelegatedAdminAccountRequest
 *   delegatedAdminAccountId: "STRING_VALUE", // required
 * };
 * const command = new DisableDelegatedAdminAccountCommand(input);
 * const response = await client.send(command);
 * // { // DisableDelegatedAdminAccountResponse
 * //   delegatedAdminAccountId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DisableDelegatedAdminAccountCommandInput - {@link DisableDelegatedAdminAccountCommandInput}
 * @returns {@link DisableDelegatedAdminAccountCommandOutput}
 * @see {@link DisableDelegatedAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DisableDelegatedAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred. This exception occurs when the same resource is being modified by
 *          concurrent requests.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified
 *          correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class DisableDelegatedAdminAccountCommand extends $Command
  .classBuilder<
    DisableDelegatedAdminAccountCommandInput,
    DisableDelegatedAdminAccountCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "DisableDelegatedAdminAccount", {})
  .n("Inspector2Client", "DisableDelegatedAdminAccountCommand")
  .f(void 0, void 0)
  .ser(se_DisableDelegatedAdminAccountCommand)
  .de(de_DisableDelegatedAdminAccountCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableDelegatedAdminAccountRequest;
      output: DisableDelegatedAdminAccountResponse;
    };
    sdk: {
      input: DisableDelegatedAdminAccountCommandInput;
      output: DisableDelegatedAdminAccountCommandOutput;
    };
  };
}
