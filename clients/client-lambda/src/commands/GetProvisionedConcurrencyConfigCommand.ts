// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetProvisionedConcurrencyConfigRequest,
  GetProvisionedConcurrencyConfigResponse,
} from "../models/models_0";
import { GetProvisionedConcurrencyConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProvisionedConcurrencyConfigCommand}.
 */
export interface GetProvisionedConcurrencyConfigCommandInput extends GetProvisionedConcurrencyConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetProvisionedConcurrencyConfigCommand}.
 */
export interface GetProvisionedConcurrencyConfigCommandOutput extends GetProvisionedConcurrencyConfigResponse, __MetadataBearer {}

/**
 * Retrieves the provisioned concurrency configuration for a function's alias or version.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetProvisionedConcurrencyConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetProvisionedConcurrencyConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetProvisionedConcurrencyConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE", // required
 * };
 * const command = new GetProvisionedConcurrencyConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetProvisionedConcurrencyConfigResponse
 * //   RequestedProvisionedConcurrentExecutions: Number("int"),
 * //   AvailableProvisionedConcurrentExecutions: Number("int"),
 * //   AllocatedProvisionedConcurrentExecutions: Number("int"),
 * //   Status: "IN_PROGRESS" || "READY" || "FAILED",
 * //   StatusReason: "STRING_VALUE",
 * //   LastModified: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetProvisionedConcurrencyConfigCommandInput - {@link GetProvisionedConcurrencyConfigCommandInput}
 * @returns {@link GetProvisionedConcurrencyConfigCommandOutput}
 * @see {@link GetProvisionedConcurrencyConfigCommandInput} for command's `input` shape.
 * @see {@link GetProvisionedConcurrencyConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link ProvisionedConcurrencyConfigNotFoundException} (client fault)
 *
 * The specified configuration does not exist.
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
 * @example To get a provisioned concurrency configuration
 * ```javascript
 * // The following example returns details for the provisioned concurrency configuration for the BLUE alias of the specified function.
 * const input = {
 *   FunctionName: "my-function",
 *   Qualifier: "BLUE"
 * };
 * const command = new GetProvisionedConcurrencyConfigCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AllocatedProvisionedConcurrentExecutions: 100,
 *   AvailableProvisionedConcurrentExecutions: 100,
 *   LastModified: "2019-12-31T20:28:49+0000",
 *   RequestedProvisionedConcurrentExecutions: 100,
 *   Status: "READY"
 * }
 * *\/
 * ```
 *
 * @example To view a provisioned concurrency configuration
 * ```javascript
 * // The following example displays details for the provisioned concurrency configuration for the BLUE alias of the specified function.
 * const input = {
 *   FunctionName: "my-function",
 *   Qualifier: "BLUE"
 * };
 * const command = new GetProvisionedConcurrencyConfigCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AllocatedProvisionedConcurrentExecutions: 100,
 *   AvailableProvisionedConcurrentExecutions: 100,
 *   LastModified: "2019-12-31T20:28:49+0000",
 *   RequestedProvisionedConcurrentExecutions: 100,
 *   Status: "READY"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetProvisionedConcurrencyConfigCommand extends command<GetProvisionedConcurrencyConfigCommandInput, GetProvisionedConcurrencyConfigCommandOutput>(
  _ep0,
  _mw0,
  "GetProvisionedConcurrencyConfig",
  GetProvisionedConcurrencyConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProvisionedConcurrencyConfigRequest;
      output: GetProvisionedConcurrencyConfigResponse;
    };
    sdk: {
      input: GetProvisionedConcurrencyConfigCommandInput;
      output: GetProvisionedConcurrencyConfigCommandOutput;
    };
  };
}
