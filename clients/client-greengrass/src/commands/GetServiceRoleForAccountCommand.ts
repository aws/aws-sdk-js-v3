// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetServiceRoleForAccountRequest, GetServiceRoleForAccountResponse } from "../models/models_0";
import { de_GetServiceRoleForAccountCommand, se_GetServiceRoleForAccountCommand } from "../protocols/Aws_restJson1";

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
 * Retrieves the service role that is attached to your account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetServiceRoleForAccountCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetServiceRoleForAccountCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = {};
 * const command = new GetServiceRoleForAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceRoleForAccountResponse
 * //   AssociatedAt: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetServiceRoleForAccountCommandInput - {@link GetServiceRoleForAccountCommandInput}
 * @returns {@link GetServiceRoleForAccountCommandOutput}
 * @see {@link GetServiceRoleForAccountCommandInput} for command's `input` shape.
 * @see {@link GetServiceRoleForAccountCommandOutput} for command's `response` shape.
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
export class GetServiceRoleForAccountCommand extends $Command
  .classBuilder<
    GetServiceRoleForAccountCommandInput,
    GetServiceRoleForAccountCommandOutput,
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
  .s("Greengrass", "GetServiceRoleForAccount", {})
  .n("GreengrassClient", "GetServiceRoleForAccountCommand")
  .f(void 0, void 0)
  .ser(se_GetServiceRoleForAccountCommand)
  .de(de_GetServiceRoleForAccountCommand)
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
