// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAuthenticationProfileMessage, DeleteAuthenticationProfileResult } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteAuthenticationProfile$ } from "../schemas/schemas_0";

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
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DeleteAuthenticationProfile", {})
  .n("RedshiftClient", "DeleteAuthenticationProfileCommand")
  .sc(DeleteAuthenticationProfile$)
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
