// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  RefreshTokenRequest,
  RefreshTokenRequestFilterSensitiveLog,
  RefreshTokenResponse,
  RefreshTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_RefreshTokenCommand, se_RefreshTokenCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RefreshTokenCommand}.
 */
export interface RefreshTokenCommandInput extends RefreshTokenRequest {}
/**
 * @public
 *
 * The output of {@link RefreshTokenCommand}.
 */
export interface RefreshTokenCommandOutput extends RefreshTokenResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is for internal use.</p>
 *          </note>
 *          <p>Amplify uses this action to refresh a previously issued access token that might have expired.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, RefreshTokenCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, RefreshTokenCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * // import type { AmplifyUIBuilderClientConfig } from "@aws-sdk/client-amplifyuibuilder";
 * const config = {}; // type is AmplifyUIBuilderClientConfig
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // RefreshTokenRequest
 *   provider: "STRING_VALUE", // required
 *   refreshTokenBody: { // RefreshTokenRequestBody
 *     token: "STRING_VALUE", // required
 *     clientId: "STRING_VALUE",
 *   },
 * };
 * const command = new RefreshTokenCommand(input);
 * const response = await client.send(command);
 * // { // RefreshTokenResponse
 * //   accessToken: "STRING_VALUE", // required
 * //   expiresIn: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param RefreshTokenCommandInput - {@link RefreshTokenCommandInput}
 * @returns {@link RefreshTokenCommandOutput}
 * @see {@link RefreshTokenCommandInput} for command's `input` shape.
 * @see {@link RefreshTokenCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link AmplifyUIBuilderServiceException}
 * <p>Base exception class for all service exceptions from AmplifyUIBuilder service.</p>
 *
 *
 * @public
 */
export class RefreshTokenCommand extends $Command
  .classBuilder<
    RefreshTokenCommandInput,
    RefreshTokenCommandOutput,
    AmplifyUIBuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyUIBuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmplifyUIBuilder", "RefreshToken", {})
  .n("AmplifyUIBuilderClient", "RefreshTokenCommand")
  .f(RefreshTokenRequestFilterSensitiveLog, RefreshTokenResponseFilterSensitiveLog)
  .ser(se_RefreshTokenCommand)
  .de(de_RefreshTokenCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RefreshTokenRequest;
      output: RefreshTokenResponse;
    };
    sdk: {
      input: RefreshTokenCommandInput;
      output: RefreshTokenCommandOutput;
    };
  };
}
