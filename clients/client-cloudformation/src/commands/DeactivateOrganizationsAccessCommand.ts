// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeactivateOrganizationsAccessInput, DeactivateOrganizationsAccessOutput } from "../models/models_0";
import { DeactivateOrganizationsAccess } from "../schemas/schemas_0";

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
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "DeactivateOrganizationsAccess", {})
  .n("CloudFormationClient", "DeactivateOrganizationsAccessCommand")
  .sc(DeactivateOrganizationsAccess)
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
