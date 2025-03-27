// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeactivateOrganizationsAccessInput, DeactivateOrganizationsAccessOutput } from "../models/models_0";
import {
  de_DeactivateOrganizationsAccessCommand,
  se_DeactivateOrganizationsAccessCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeactivateOrganizationsAccessCommand}.
 */
export interface DeactivateOrganizationsAccessCommandInput extends DeactivateOrganizationsAccessInput {}
/**
 * @public
 *
 * The output of {@link DeactivateOrganizationsAccessCommand}.
 */
export interface DeactivateOrganizationsAccessCommandOutput
  extends DeactivateOrganizationsAccessOutput,
    __MetadataBearer {}

/**
 * <p>Deactivates trusted access with Organizations. If trusted access is deactivated,
 *       the management account does not have permissions to create and manage
 *       service-managed StackSets for your organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeactivateOrganizationsAccessCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeactivateOrganizationsAccessCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = {};
 * const command = new DeactivateOrganizationsAccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeactivateOrganizationsAccessCommandInput - {@link DeactivateOrganizationsAccessCommandInput}
 * @returns {@link DeactivateOrganizationsAccessCommandOutput}
 * @see {@link DeactivateOrganizationsAccessCommandInput} for command's `input` shape.
 * @see {@link DeactivateOrganizationsAccessCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The specified operation isn't valid.</p>
 *
 * @throws {@link OperationNotFoundException} (client fault)
 *  <p>The specified ID refers to an operation that doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DeactivateOrganizationsAccessCommand extends $Command
  .classBuilder<
    DeactivateOrganizationsAccessCommandInput,
    DeactivateOrganizationsAccessCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "DeactivateOrganizationsAccess", {})
  .n("CloudFormationClient", "DeactivateOrganizationsAccessCommand")
  .f(void 0, void 0)
  .ser(se_DeactivateOrganizationsAccessCommand)
  .de(de_DeactivateOrganizationsAccessCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DeactivateOrganizationsAccessCommandInput;
      output: DeactivateOrganizationsAccessCommandOutput;
    };
  };
}
