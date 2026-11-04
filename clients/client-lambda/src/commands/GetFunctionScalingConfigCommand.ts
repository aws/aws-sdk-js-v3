// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFunctionScalingConfigRequest, GetFunctionScalingConfigResponse } from "../models/models_0";
import { GetFunctionScalingConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the scaling configuration for a Lambda Managed Instances function.
 *
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
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The Lambda service encountered an internal error.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests).
 *
 * @throws {@link LambdaServiceException}
 *
 * Base exception class for all service exceptions from Lambda service.
 *
 * @public
 */
export class GetFunctionScalingConfigCommand extends command<GetFunctionScalingConfigCommandInput, GetFunctionScalingConfigCommandOutput>(
  _ep0,
  _mw0,
  "GetFunctionScalingConfig",
  GetFunctionScalingConfig$
) {
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
