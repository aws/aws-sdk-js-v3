// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetAccountSettingsRequest, GetAccountSettingsResponse } from "../models/models_0";
import { de_GetAccountSettingsCommand, se_GetAccountSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountSettingsCommand}.
 */
export interface GetAccountSettingsCommandInput extends GetAccountSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountSettingsCommand}.
 */
export interface GetAccountSettingsCommandOutput extends GetAccountSettingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about your account's <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetAccountSettingsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetAccountSettingsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = {};
 * const command = new GetAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountSettingsResponse
 * //   AccountLimit: { // AccountLimit
 * //     TotalCodeSize: Number("long"),
 * //     CodeSizeUnzipped: Number("long"),
 * //     CodeSizeZipped: Number("long"),
 * //     ConcurrentExecutions: Number("int"),
 * //     UnreservedConcurrentExecutions: Number("int"),
 * //   },
 * //   AccountUsage: { // AccountUsage
 * //     TotalCodeSize: Number("long"),
 * //     FunctionCount: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountSettingsCommandInput - {@link GetAccountSettingsCommandInput}
 * @returns {@link GetAccountSettingsCommandOutput}
 * @see {@link GetAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link GetAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 *
 * @example To get account settings
 * ```javascript
 * // This operation takes no parameters and returns details about storage and concurrency quotas in the current Region.
 * const input = { /* empty *\/ };
 * const command = new GetAccountSettingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AccountLimit: {
 *     CodeSizeUnzipped: 262144000,
 *     CodeSizeZipped: 52428800,
 *     ConcurrentExecutions: 1000,
 *     TotalCodeSize: 80530636800,
 *     UnreservedConcurrentExecutions: 1000
 *   },
 *   AccountUsage: {
 *     FunctionCount: 4,
 *     TotalCodeSize: 9426
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAccountSettingsCommand extends $Command
  .classBuilder<
    GetAccountSettingsCommandInput,
    GetAccountSettingsCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "GetAccountSettings", {})
  .n("LambdaClient", "GetAccountSettingsCommand")
  .f(void 0, void 0)
  .ser(se_GetAccountSettingsCommand)
  .de(de_GetAccountSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountSettingsResponse;
    };
    sdk: {
      input: GetAccountSettingsCommandInput;
      output: GetAccountSettingsCommandOutput;
    };
  };
}
