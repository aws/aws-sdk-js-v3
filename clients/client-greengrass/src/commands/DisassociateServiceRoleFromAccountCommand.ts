// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  DisassociateServiceRoleFromAccountRequest,
  DisassociateServiceRoleFromAccountResponse,
} from "../models/models_0";
import {
  de_DisassociateServiceRoleFromAccountCommand,
  se_DisassociateServiceRoleFromAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateServiceRoleFromAccountCommand}.
 */
export interface DisassociateServiceRoleFromAccountCommandInput extends DisassociateServiceRoleFromAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateServiceRoleFromAccountCommand}.
 */
export interface DisassociateServiceRoleFromAccountCommandOutput
  extends DisassociateServiceRoleFromAccountResponse,
    __MetadataBearer {}

/**
 * Disassociates the service role from your account. Without a service role, deployments will not work.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DisassociateServiceRoleFromAccountCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DisassociateServiceRoleFromAccountCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = {};
 * const command = new DisassociateServiceRoleFromAccountCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateServiceRoleFromAccountResponse
 * //   DisassociatedAt: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateServiceRoleFromAccountCommandInput - {@link DisassociateServiceRoleFromAccountCommandInput}
 * @returns {@link DisassociateServiceRoleFromAccountCommandOutput}
 * @see {@link DisassociateServiceRoleFromAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateServiceRoleFromAccountCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class DisassociateServiceRoleFromAccountCommand extends $Command
  .classBuilder<
    DisassociateServiceRoleFromAccountCommandInput,
    DisassociateServiceRoleFromAccountCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "DisassociateServiceRoleFromAccount", {})
  .n("GreengrassClient", "DisassociateServiceRoleFromAccountCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateServiceRoleFromAccountCommand)
  .de(de_DisassociateServiceRoleFromAccountCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DisassociateServiceRoleFromAccountResponse;
    };
    sdk: {
      input: DisassociateServiceRoleFromAccountCommandInput;
      output: DisassociateServiceRoleFromAccountCommandOutput;
    };
  };
}
