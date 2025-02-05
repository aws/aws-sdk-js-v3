// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAuthenticationProfileMessage, DeleteAuthenticationProfileResult } from "../models/models_0";
import { de_DeleteAuthenticationProfileCommand, se_DeleteAuthenticationProfileCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAuthenticationProfileCommand}.
 */
export interface DeleteAuthenticationProfileCommandInput extends DeleteAuthenticationProfileMessage {}
/**
 * @public
 *
 * The output of {@link DeleteAuthenticationProfileCommand}.
 */
export interface DeleteAuthenticationProfileCommandOutput extends DeleteAuthenticationProfileResult, __MetadataBearer {}

/**
 * <p>Deletes an authentication profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteAuthenticationProfileCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteAuthenticationProfileCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RedshiftClient(config);
 * const input = { // DeleteAuthenticationProfileMessage
 *   AuthenticationProfileName: "STRING_VALUE", // required
 * };
 * const command = new DeleteAuthenticationProfileCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAuthenticationProfileResult
 * //   AuthenticationProfileName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteAuthenticationProfileCommandInput - {@link DeleteAuthenticationProfileCommandInput}
 * @returns {@link DeleteAuthenticationProfileCommandOutput}
 * @see {@link DeleteAuthenticationProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteAuthenticationProfileCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link AuthenticationProfileNotFoundFault} (client fault)
 *  <p>The authentication profile can't be found.</p>
 *
 * @throws {@link InvalidAuthenticationProfileRequestFault} (client fault)
 *  <p>The authentication profile request is not valid. The profile name can't be null or empty.
 *             The authentication profile API operation must be available in the Amazon Web Services Region.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class DeleteAuthenticationProfileCommand extends $Command
  .classBuilder<
    DeleteAuthenticationProfileCommandInput,
    DeleteAuthenticationProfileCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DeleteAuthenticationProfile", {})
  .n("RedshiftClient", "DeleteAuthenticationProfileCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAuthenticationProfileCommand)
  .de(de_DeleteAuthenticationProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAuthenticationProfileMessage;
      output: DeleteAuthenticationProfileResult;
    };
    sdk: {
      input: DeleteAuthenticationProfileCommandInput;
      output: DeleteAuthenticationProfileCommandOutput;
    };
  };
}
