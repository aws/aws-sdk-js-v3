// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { EvaluateCodeRequest, EvaluateCodeResponse } from "../models/models_0";
import { EvaluateCode$ } from "../schemas/schemas_0";

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
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepdishControlPlaneService", "EvaluateCode", {})
  .n("AppSyncClient", "EvaluateCodeCommand")
  .sc(EvaluateCode$)
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
