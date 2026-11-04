// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRuntimeManagementConfigRequest, GetRuntimeManagementConfigResponse } from "../models/models_0";
import { GetRuntimeManagementConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRuntimeManagementConfigCommand}.
 */
export interface GetRuntimeManagementConfigCommandInput extends GetRuntimeManagementConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetRuntimeManagementConfigCommand}.
 */
export interface GetRuntimeManagementConfigCommandOutput extends GetRuntimeManagementConfigResponse, __MetadataBearer {}

/**
 * Retrieves the runtime management configuration for a function's version. If the runtime update mode is **Manual**, this includes the ARN of the runtime version and the runtime update mode. If the runtime update mode is **Auto** or **Function update**, this includes the runtime update mode and `null` is returned for the ARN. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetRuntimeManagementConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetRuntimeManagementConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetRuntimeManagementConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE",
 * };
 * const command = new GetRuntimeManagementConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetRuntimeManagementConfigResponse
 * //   UpdateRuntimeOn: "Auto" || "Manual" || "FunctionUpdate",
 * //   FunctionArn: "STRING_VALUE",
 * //   RuntimeVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRuntimeManagementConfigCommandInput - {@link GetRuntimeManagementConfigCommandInput}
 * @returns {@link GetRuntimeManagementConfigCommandOutput}
 * @see {@link GetRuntimeManagementConfigCommandInput} for command's `input` shape.
 * @see {@link GetRuntimeManagementConfigCommandOutput} for command's `response` shape.
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
export class GetRuntimeManagementConfigCommand extends command<GetRuntimeManagementConfigCommandInput, GetRuntimeManagementConfigCommandOutput>(
  _ep0,
  _mw0,
  "GetRuntimeManagementConfig",
  GetRuntimeManagementConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRuntimeManagementConfigRequest;
      output: GetRuntimeManagementConfigResponse;
    };
    sdk: {
      input: GetRuntimeManagementConfigCommandInput;
      output: GetRuntimeManagementConfigCommandOutput;
    };
  };
}
