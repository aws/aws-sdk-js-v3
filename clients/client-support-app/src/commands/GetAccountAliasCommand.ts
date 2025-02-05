// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccountAliasRequest, GetAccountAliasResult } from "../models/models_0";
import { de_GetAccountAliasCommand, se_GetAccountAliasCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupportAppClientResolvedConfig } from "../SupportAppClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountAliasCommand}.
 */
export interface GetAccountAliasCommandInput extends GetAccountAliasRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountAliasCommand}.
 */
export interface GetAccountAliasCommandOutput extends GetAccountAliasResult, __MetadataBearer {}

/**
 * <p>Retrieves the alias from an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of
 *       the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAppClient, GetAccountAliasCommand } from "@aws-sdk/client-support-app"; // ES Modules import
 * // const { SupportAppClient, GetAccountAliasCommand } = require("@aws-sdk/client-support-app"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SupportAppClient(config);
 * const input = {};
 * const command = new GetAccountAliasCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountAliasResult
 * //   accountAlias: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccountAliasCommandInput - {@link GetAccountAliasCommandInput}
 * @returns {@link GetAccountAliasCommandOutput}
 * @see {@link GetAccountAliasCommandInput} for command's `input` shape.
 * @see {@link GetAccountAliasCommandOutput} for command's `response` shape.
 * @see {@link SupportAppClientResolvedConfig | config} for SupportAppClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link SupportAppServiceException}
 * <p>Base exception class for all service exceptions from SupportApp service.</p>
 *
 * @public
 */
export class GetAccountAliasCommand extends $Command
  .classBuilder<
    GetAccountAliasCommandInput,
    GetAccountAliasCommandOutput,
    SupportAppClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportAppClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SupportApp", "GetAccountAlias", {})
  .n("SupportAppClient", "GetAccountAliasCommand")
  .f(void 0, void 0)
  .ser(se_GetAccountAliasCommand)
  .de(de_GetAccountAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountAliasResult;
    };
    sdk: {
      input: GetAccountAliasCommandInput;
      output: GetAccountAliasCommandOutput;
    };
  };
}
