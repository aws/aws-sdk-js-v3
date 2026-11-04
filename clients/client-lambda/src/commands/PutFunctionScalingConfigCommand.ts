// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutFunctionScalingConfigRequest, PutFunctionScalingConfigResponse } from "../models/models_0";
import { PutFunctionScalingConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutFunctionScalingConfigCommand}.
 */
export interface PutFunctionScalingConfigCommandInput extends PutFunctionScalingConfigRequest {}
/**
 * @public
 *
 * The output of {@link PutFunctionScalingConfigCommand}.
 */
export interface PutFunctionScalingConfigCommandOutput extends PutFunctionScalingConfigResponse, __MetadataBearer {}

/**
 * Sets the scaling configuration for a Lambda Managed Instances function. The scaling configuration defines the minimum and maximum number of execution environments that can be provisioned for the function, allowing you to control scaling behavior and resource allocation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutFunctionScalingConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutFunctionScalingConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // PutFunctionScalingConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE", // required
 *   FunctionScalingConfig: { // FunctionScalingConfig
 *     MinExecutionEnvironments: Number("int"),
 *     MaxExecutionEnvironments: Number("int"),
 *   },
 * };
 * const command = new PutFunctionScalingConfigCommand(input);
 * const response = await client.send(command);
 * // { // PutFunctionScalingConfigResponse
 * //   FunctionState: "Pending" || "Active" || "Inactive" || "Failed" || "Deactivating" || "Deactivated" || "ActiveNonInvocable" || "Deleting",
 * // };
 *
 * ```
 *
 * @param PutFunctionScalingConfigCommandInput - {@link PutFunctionScalingConfigCommandInput}
 * @returns {@link PutFunctionScalingConfigCommandOutput}
 * @see {@link PutFunctionScalingConfigCommandInput} for command's `input` shape.
 * @see {@link PutFunctionScalingConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * The resource already exists, or another operation is in progress.
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
export class PutFunctionScalingConfigCommand extends command<PutFunctionScalingConfigCommandInput, PutFunctionScalingConfigCommandOutput>(
  _ep0,
  _mw0,
  "PutFunctionScalingConfig",
  PutFunctionScalingConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutFunctionScalingConfigRequest;
      output: PutFunctionScalingConfigResponse;
    };
    sdk: {
      input: PutFunctionScalingConfigCommandInput;
      output: PutFunctionScalingConfigCommandOutput;
    };
  };
}
