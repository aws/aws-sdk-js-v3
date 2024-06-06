// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelUpdateStackInput } from "../models/models_0";
import { de_CancelUpdateStackCommand, se_CancelUpdateStackCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelUpdateStackCommand}.
 */
export interface CancelUpdateStackCommandInput extends CancelUpdateStackInput {}
/**
 * @public
 *
 * The output of {@link CancelUpdateStackCommand}.
 */
export interface CancelUpdateStackCommandOutput extends __MetadataBearer {}

/**
 * <p>Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update
 *    and reverts to the previous stack configuration.</p>
 *          <note>
 *             <p>You can cancel only stacks that are in the <code>UPDATE_IN_PROGRESS</code> state.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, CancelUpdateStackCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, CancelUpdateStackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // CancelUpdateStackInput
 *   StackName: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new CancelUpdateStackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelUpdateStackCommandInput - {@link CancelUpdateStackCommandInput}
 * @returns {@link CancelUpdateStackCommandOutput}
 * @see {@link CancelUpdateStackCommandInput} for command's `input` shape.
 * @see {@link CancelUpdateStackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link TokenAlreadyExistsException} (client fault)
 *  <p>A client request token already exists.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class CancelUpdateStackCommand extends $Command
  .classBuilder<
    CancelUpdateStackCommandInput,
    CancelUpdateStackCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "CancelUpdateStack", {})
  .n("CloudFormationClient", "CancelUpdateStackCommand")
  .f(void 0, void 0)
  .ser(se_CancelUpdateStackCommand)
  .de(de_CancelUpdateStackCommand)
  .build() {}
