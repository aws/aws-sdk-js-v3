// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutAccountAliasRequest, PutAccountAliasResult } from "../models/models_0";
import { de_PutAccountAliasCommand, se_PutAccountAliasCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupportAppClientResolvedConfig } from "../SupportAppClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAccountAliasCommand}.
 */
export interface PutAccountAliasCommandInput extends PutAccountAliasRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountAliasCommand}.
 */
export interface PutAccountAliasCommandOutput extends PutAccountAliasResult, __MetadataBearer {}

/**
 * <p>Creates or updates an individual alias for each Amazon Web Services account ID. The alias appears in the
 *       Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the
 *       Amazon Web Services Support App.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAppClient, PutAccountAliasCommand } from "@aws-sdk/client-support-app"; // ES Modules import
 * // const { SupportAppClient, PutAccountAliasCommand } = require("@aws-sdk/client-support-app"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SupportAppClient(config);
 * const input = { // PutAccountAliasRequest
 *   accountAlias: "STRING_VALUE", // required
 * };
 * const command = new PutAccountAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccountAliasCommandInput - {@link PutAccountAliasCommandInput}
 * @returns {@link PutAccountAliasCommandOutput}
 * @see {@link PutAccountAliasCommandInput} for command's `input` shape.
 * @see {@link PutAccountAliasCommandOutput} for command's `response` shape.
 * @see {@link SupportAppClientResolvedConfig | config} for SupportAppClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Your request input doesn't meet the constraints that the Amazon Web Services Support App specifies.</p>
 *
 * @throws {@link SupportAppServiceException}
 * <p>Base exception class for all service exceptions from SupportApp service.</p>
 *
 * @public
 */
export class PutAccountAliasCommand extends $Command
  .classBuilder<
    PutAccountAliasCommandInput,
    PutAccountAliasCommandOutput,
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
  .s("SupportApp", "PutAccountAlias", {})
  .n("SupportAppClient", "PutAccountAliasCommand")
  .f(void 0, void 0)
  .ser(se_PutAccountAliasCommand)
  .de(de_PutAccountAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountAliasRequest;
      output: {};
    };
    sdk: {
      input: PutAccountAliasCommandInput;
      output: PutAccountAliasCommandOutput;
    };
  };
}
