// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
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
export interface AssociateServiceRoleToAccountCommandOutput extends AssociateServiceRoleToAccountResponse, __MetadataBearer {}

/**
 * <p>Associates a Greengrass service role with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass
 *       uses this role to verify the identity of client devices and manage core device connectivity
 *       information. The role must include the <a href="https://console.aws.amazon.com/iam/home#/policies/arn:awsiam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy">AWSGreengrassResourceAccessRolePolicy</a> managed policy or a custom policy that
 *       defines equivalent permissions for the IoT Greengrass features that you use. For more information, see
 *         <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, AssociateServiceRoleToAccountCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, AssociateServiceRoleToAccountCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // import type { GreengrassV2ClientConfig } from "@aws-sdk/client-greengrassv2";
 * const config = {}; // type is GreengrassV2ClientConfig
 * const client = new GreengrassV2Client(config);
 * const input = { // AssociateServiceRoleToAccountRequest
 *   roleArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateServiceRoleToAccountCommand(input);
 * const response = await client.send(command);
 * // { // AssociateServiceRoleToAccountResponse
 * //   associatedAt: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateServiceRoleToAccountCommandInput - {@link AssociateServiceRoleToAccountCommandInput}
 * @returns {@link AssociateServiceRoleToAccountCommandOutput}
 * @see {@link AssociateServiceRoleToAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateServiceRoleToAccountCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 *
 * @public
 */
export class AssociateServiceRoleToAccountCommand extends $Command
  .classBuilder<
    AssociateServiceRoleToAccountCommandInput,
    AssociateServiceRoleToAccountCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GreengrassV2", "AssociateServiceRoleToAccount", {})
  .n("GreengrassV2Client", "AssociateServiceRoleToAccountCommand")
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
