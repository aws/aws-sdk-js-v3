// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ExchangeCodeForTokenRequest,
  ExchangeCodeForTokenRequestFilterSensitiveLog,
  ExchangeCodeForTokenResponse,
  ExchangeCodeForTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ExchangeCodeForTokenCommand, se_ExchangeCodeForTokenCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExchangeCodeForTokenCommand}.
 */
export interface ExchangeCodeForTokenCommandInput extends ExchangeCodeForTokenRequest {}
/**
 * @public
 *
 * The output of {@link ExchangeCodeForTokenCommand}.
 */
export interface ExchangeCodeForTokenCommandOutput extends ExchangeCodeForTokenResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is for internal use.</p>
 *          </note>
 *          <p>Amplify uses this action to exchange an access code for a token.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, ExchangeCodeForTokenCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, ExchangeCodeForTokenCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // ExchangeCodeForTokenRequest
 *   provider: "STRING_VALUE", // required
 *   request: { // ExchangeCodeForTokenRequestBody
 *     code: "STRING_VALUE", // required
 *     redirectUri: "STRING_VALUE", // required
 *     clientId: "STRING_VALUE",
 *   },
 * };
 * const command = new ExchangeCodeForTokenCommand(input);
 * const response = await client.send(command);
 * // { // ExchangeCodeForTokenResponse
 * //   accessToken: "STRING_VALUE", // required
 * //   expiresIn: Number("int"), // required
 * //   refreshToken: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ExchangeCodeForTokenCommandInput - {@link ExchangeCodeForTokenCommandInput}
 * @returns {@link ExchangeCodeForTokenCommandOutput}
 * @see {@link ExchangeCodeForTokenCommandInput} for command's `input` shape.
 * @see {@link ExchangeCodeForTokenCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link AmplifyUIBuilderServiceException}
 * <p>Base exception class for all service exceptions from AmplifyUIBuilder service.</p>
 *
 * @public
 */
export class ExchangeCodeForTokenCommand extends $Command
  .classBuilder<
    ExchangeCodeForTokenCommandInput,
    ExchangeCodeForTokenCommandOutput,
    AmplifyUIBuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AmplifyUIBuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmplifyUIBuilder", "ExchangeCodeForToken", {})
  .n("AmplifyUIBuilderClient", "ExchangeCodeForTokenCommand")
  .f(ExchangeCodeForTokenRequestFilterSensitiveLog, ExchangeCodeForTokenResponseFilterSensitiveLog)
  .ser(se_ExchangeCodeForTokenCommand)
  .de(de_ExchangeCodeForTokenCommand)
  .build() {}
