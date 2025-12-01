// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetFunctionScalingConfigRequest, GetFunctionScalingConfigResponse } from "../models/models_0";
import { GetFunctionScalingConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFunctionScalingConfigCommand}.
 */
export interface GetFunctionScalingConfigCommandInput extends GetFunctionScalingConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetFunctionScalingConfigCommand}.
 */
export interface GetFunctionScalingConfigCommandOutput extends GetFunctionScalingConfigResponse, __MetadataBearer {}

/**
 * <p>Retrieves the scaling configuration for a Lambda Managed Instances function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionScalingConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionScalingConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetFunctionScalingConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE", // required
 * };
 * const command = new GetFunctionScalingConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetFunctionScalingConfigResponse
 * //   FunctionArn: "STRING_VALUE",
 * //   AppliedFunctionScalingConfig: { // FunctionScalingConfig
 * //     MinExecutionEnvironments: Number("int"),
 * //     MaxExecutionEnvironments: Number("int"),
 * //   },
 * //   RequestedFunctionScalingConfig: {
 * //     MinExecutionEnvironments: Number("int"),
 * //     MaxExecutionEnvironments: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFunctionScalingConfigCommandInput - {@link GetFunctionScalingConfigCommandInput}
 * @returns {@link GetFunctionScalingConfigCommandOutput}
 * @see {@link GetFunctionScalingConfigCommandInput} for command's `input` shape.
 * @see {@link GetFunctionScalingConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
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
 * @public
 */
export class GetFunctionScalingConfigCommand extends $Command
  .classBuilder<
    GetFunctionScalingConfigCommandInput,
    GetFunctionScalingConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "GetFunctionScalingConfig", {})
  .n("LambdaClient", "GetFunctionScalingConfigCommand")
  .sc(GetFunctionScalingConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFunctionScalingConfigRequest;
      output: GetFunctionScalingConfigResponse;
    };
    sdk: {
      input: GetFunctionScalingConfigCommandInput;
      output: GetFunctionScalingConfigCommandOutput;
    };
  };
}
