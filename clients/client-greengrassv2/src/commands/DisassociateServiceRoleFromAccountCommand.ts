// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
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
 * <p>Disassociates the Greengrass service role from IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.
 *       Without a service role, IoT Greengrass can't verify the identity of client devices or manage core device
 *       connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in
 *       the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, DisassociateServiceRoleFromAccountCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, DisassociateServiceRoleFromAccountCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const input = {};
 * const command = new DisassociateServiceRoleFromAccountCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateServiceRoleFromAccountResponse
 * //   disassociatedAt: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateServiceRoleFromAccountCommandInput - {@link DisassociateServiceRoleFromAccountCommandInput}
 * @returns {@link DisassociateServiceRoleFromAccountCommandOutput}
 * @see {@link DisassociateServiceRoleFromAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateServiceRoleFromAccountCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 * @public
 */
export class DisassociateServiceRoleFromAccountCommand extends $Command
  .classBuilder<
    DisassociateServiceRoleFromAccountCommandInput,
    DisassociateServiceRoleFromAccountCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GreengrassV2", "DisassociateServiceRoleFromAccount", {})
  .n("GreengrassV2Client", "DisassociateServiceRoleFromAccountCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateServiceRoleFromAccountCommand)
  .de(de_DisassociateServiceRoleFromAccountCommand)
  .build() {}
