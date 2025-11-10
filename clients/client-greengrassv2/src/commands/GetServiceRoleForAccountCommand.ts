// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { GetServiceRoleForAccountRequest, GetServiceRoleForAccountResponse } from "../models/models_0";
import { GetServiceRoleForAccount } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceRoleForAccountCommand}.
 */
export interface GetServiceRoleForAccountCommandInput extends GetServiceRoleForAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceRoleForAccountCommand}.
 */
export interface GetServiceRoleForAccountCommandOutput extends GetServiceRoleForAccountResponse, __MetadataBearer {}

/**
 * <p>Gets the service role associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.
 *       IoT Greengrass uses this role to verify the identity of client devices and manage core device
 *       connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in
 *       the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, GetServiceRoleForAccountCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, GetServiceRoleForAccountCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // import type { GreengrassV2ClientConfig } from "@aws-sdk/client-greengrassv2";
 * const config = {}; // type is GreengrassV2ClientConfig
 * const client = new GreengrassV2Client(config);
 * const input = {};
 * const command = new GetServiceRoleForAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceRoleForAccountResponse
 * //   associatedAt: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetServiceRoleForAccountCommandInput - {@link GetServiceRoleForAccountCommandInput}
 * @returns {@link GetServiceRoleForAccountCommandOutput}
 * @see {@link GetServiceRoleForAccountCommandInput} for command's `input` shape.
 * @see {@link GetServiceRoleForAccountCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 *
 * @public
 */
export class GetServiceRoleForAccountCommand extends $Command
  .classBuilder<
    GetServiceRoleForAccountCommandInput,
    GetServiceRoleForAccountCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GreengrassV2", "GetServiceRoleForAccount", {})
  .n("GreengrassV2Client", "GetServiceRoleForAccountCommand")
  .sc(GetServiceRoleForAccount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetServiceRoleForAccountResponse;
    };
    sdk: {
      input: GetServiceRoleForAccountCommandInput;
      output: GetServiceRoleForAccountCommandOutput;
    };
  };
}
