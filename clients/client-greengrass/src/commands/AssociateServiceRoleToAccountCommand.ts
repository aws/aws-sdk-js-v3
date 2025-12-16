// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type { AssociateServiceRoleToAccountRequest, AssociateServiceRoleToAccountResponse } from "../models/models_0";
import { AssociateServiceRoleToAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateServiceRoleToAccountCommand}.
 */
export interface AssociateServiceRoleToAccountCommandInput extends AssociateServiceRoleToAccountRequest {}
/**
 * @public
 *
 * The output of {@link AssociateServiceRoleToAccountCommand}.
 */
export interface AssociateServiceRoleToAccountCommandOutput
  extends AssociateServiceRoleToAccountResponse,
    __MetadataBearer {}

/**
 * Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, AssociateServiceRoleToAccountCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, AssociateServiceRoleToAccountCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // AssociateServiceRoleToAccountRequest
 *   RoleArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateServiceRoleToAccountCommand(input);
 * const response = await client.send(command);
 * // { // AssociateServiceRoleToAccountResponse
 * //   AssociatedAt: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateServiceRoleToAccountCommandInput - {@link AssociateServiceRoleToAccountCommandInput}
 * @returns {@link AssociateServiceRoleToAccountCommandOutput}
 * @see {@link AssociateServiceRoleToAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateServiceRoleToAccountCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
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
export class AssociateServiceRoleToAccountCommand extends $Command
  .classBuilder<
    AssociateServiceRoleToAccountCommandInput,
    AssociateServiceRoleToAccountCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "AssociateServiceRoleToAccount", {})
  .n("GreengrassClient", "AssociateServiceRoleToAccountCommand")
  .sc(AssociateServiceRoleToAccount$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateServiceRoleToAccountRequest;
      output: AssociateServiceRoleToAccountResponse;
    };
    sdk: {
      input: AssociateServiceRoleToAccountCommandInput;
      output: AssociateServiceRoleToAccountCommandOutput;
    };
  };
}
