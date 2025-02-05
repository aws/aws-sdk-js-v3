// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { GetAddonInstanceRequest, GetAddonInstanceResponse } from "../models/models_0";
import { de_GetAddonInstanceCommand, se_GetAddonInstanceCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAddonInstanceCommand}.
 */
export interface GetAddonInstanceCommandInput extends GetAddonInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetAddonInstanceCommand}.
 */
export interface GetAddonInstanceCommandOutput extends GetAddonInstanceResponse, __MetadataBearer {}

/**
 * <p>Gets detailed information about an Add On instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, GetAddonInstanceCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, GetAddonInstanceCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MailManagerClient(config);
 * const input = { // GetAddonInstanceRequest
 *   AddonInstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetAddonInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetAddonInstanceResponse
 * //   AddonSubscriptionId: "STRING_VALUE",
 * //   AddonName: "STRING_VALUE",
 * //   AddonInstanceArn: "STRING_VALUE",
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAddonInstanceCommandInput - {@link GetAddonInstanceCommandInput}
 * @returns {@link GetAddonInstanceCommandOutput}
 * @see {@link GetAddonInstanceCommandInput} for command's `input` shape.
 * @see {@link GetAddonInstanceCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 * @public
 */
export class GetAddonInstanceCommand extends $Command
  .classBuilder<
    GetAddonInstanceCommandInput,
    GetAddonInstanceCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "GetAddonInstance", {})
  .n("MailManagerClient", "GetAddonInstanceCommand")
  .f(void 0, void 0)
  .ser(se_GetAddonInstanceCommand)
  .de(de_GetAddonInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAddonInstanceRequest;
      output: GetAddonInstanceResponse;
    };
    sdk: {
      input: GetAddonInstanceCommandInput;
      output: GetAddonInstanceCommandOutput;
    };
  };
}
