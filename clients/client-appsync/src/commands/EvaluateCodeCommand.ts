// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EvaluateCodeRequest, EvaluateCodeResponse } from "../models/models_0";
import { de_EvaluateCodeCommand, se_EvaluateCodeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EvaluateCodeCommand}.
 */
export interface EvaluateCodeCommandInput extends EvaluateCodeRequest {}
/**
 * @public
 *
 * The output of {@link EvaluateCodeCommand}.
 */
export interface EvaluateCodeCommandOutput extends EvaluateCodeResponse, __MetadataBearer {}

/**
 * <p>Evaluates the given code and returns the response. The code definition requirements
 *          depend on the specified runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the
 *          request and response functions. The request function takes the incoming request after a
 *          GraphQL operation is parsed and converts it into a request configuration for the selected
 *          data source operation. The response function interprets responses from the data source and
 *          maps it to the shape of the GraphQL field output type. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, EvaluateCodeCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, EvaluateCodeCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppSyncClient(config);
 * const input = { // EvaluateCodeRequest
 *   runtime: { // AppSyncRuntime
 *     name: "APPSYNC_JS", // required
 *     runtimeVersion: "STRING_VALUE", // required
 *   },
 *   code: "STRING_VALUE", // required
 *   context: "STRING_VALUE", // required
 *   function: "STRING_VALUE",
 * };
 * const command = new EvaluateCodeCommand(input);
 * const response = await client.send(command);
 * // { // EvaluateCodeResponse
 * //   evaluationResult: "STRING_VALUE",
 * //   error: { // EvaluateCodeErrorDetail
 * //     message: "STRING_VALUE",
 * //     codeErrors: [ // CodeErrors
 * //       { // CodeError
 * //         errorType: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //         location: { // CodeErrorLocation
 * //           line: Number("int"),
 * //           column: Number("int"),
 * //           span: Number("int"),
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   logs: [ // Logs
 * //     "STRING_VALUE",
 * //   ],
 * //   stash: "STRING_VALUE",
 * //   outErrors: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EvaluateCodeCommandInput - {@link EvaluateCodeCommandInput}
 * @returns {@link EvaluateCodeCommandOutput}
 * @see {@link EvaluateCodeCommandInput} for command's `input` shape.
 * @see {@link EvaluateCodeCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to perform this operation on this resource.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 * @public
 */
export class EvaluateCodeCommand extends $Command
  .classBuilder<
    EvaluateCodeCommandInput,
    EvaluateCodeCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "EvaluateCode", {})
  .n("AppSyncClient", "EvaluateCodeCommand")
  .f(void 0, void 0)
  .ser(se_EvaluateCodeCommand)
  .de(de_EvaluateCodeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EvaluateCodeRequest;
      output: EvaluateCodeResponse;
    };
    sdk: {
      input: EvaluateCodeCommandInput;
      output: EvaluateCodeCommandOutput;
    };
  };
}
