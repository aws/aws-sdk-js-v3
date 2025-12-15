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
import type { ActivateOrganizationsAccessInput, ActivateOrganizationsAccessOutput } from "../models/models_0";
import { ActivateOrganizationsAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ActivateOrganizationsAccessCommand}.
 */
export interface ActivateOrganizationsAccessCommandInput extends ActivateOrganizationsAccessInput {}
/**
 * @public
 *
 * The output of {@link ActivateOrganizationsAccessCommand}.
 */
export interface ActivateOrganizationsAccessCommandOutput extends ActivateOrganizationsAccessOutput, __MetadataBearer {}

/**
 * <p>Activate trusted access with Organizations. With trusted access between StackSets
 *       and Organizations activated, the management account has permissions to create
 *       and manage StackSets for your organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ActivateOrganizationsAccessCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ActivateOrganizationsAccessCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = {};
 * const command = new ActivateOrganizationsAccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ActivateOrganizationsAccessCommandInput - {@link ActivateOrganizationsAccessCommandInput}
 * @returns {@link ActivateOrganizationsAccessCommandOutput}
 * @see {@link ActivateOrganizationsAccessCommandInput} for command's `input` shape.
 * @see {@link ActivateOrganizationsAccessCommandOutput} for command's `response` shape.
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
export class ActivateOrganizationsAccessCommand extends $Command
  .classBuilder<
    ActivateOrganizationsAccessCommandInput,
    ActivateOrganizationsAccessCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "ActivateOrganizationsAccess", {})
  .n("CloudFormationClient", "ActivateOrganizationsAccessCommand")
  .sc(ActivateOrganizationsAccess$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: ActivateOrganizationsAccessCommandInput;
      output: ActivateOrganizationsAccessCommandOutput;
    };
  };
}
