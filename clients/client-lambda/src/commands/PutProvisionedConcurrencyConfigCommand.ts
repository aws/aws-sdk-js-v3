// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutProvisionedConcurrencyConfigRequest,
  PutProvisionedConcurrencyConfigResponse,
} from "../models/models_0";
import { PutProvisionedConcurrencyConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutProvisionedConcurrencyConfigCommand}.
 */
export interface PutProvisionedConcurrencyConfigCommandInput extends PutProvisionedConcurrencyConfigRequest {}
/**
 * @public
 *
 * The output of {@link PutProvisionedConcurrencyConfigCommand}.
 */
export interface PutProvisionedConcurrencyConfigCommandOutput extends PutProvisionedConcurrencyConfigResponse, __MetadataBearer {}

/**
 * Adds a provisioned concurrency configuration to a function's alias or version.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutProvisionedConcurrencyConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutProvisionedConcurrencyConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // PutProvisionedConcurrencyConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE", // required
 *   ProvisionedConcurrentExecutions: Number("int"), // required
 * };
 * const command = new PutProvisionedConcurrencyConfigCommand(input);
 * const response = await client.send(command);
 * // { // PutProvisionedConcurrencyConfigResponse
 * //   RequestedProvisionedConcurrentExecutions: Number("int"),
 * //   AllocatedProvisionedConcurrentExecutions: Number("int"),
 * //   AvailableProvisionedConcurrentExecutions: Number("int"),
 * //   Status: "IN_PROGRESS" || "READY" || "FAILED",
 * //   StatusReason: "STRING_VALUE",
 * //   LastModified: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutProvisionedConcurrencyConfigCommandInput - {@link PutProvisionedConcurrencyConfigCommandInput}
 * @returns {@link PutProvisionedConcurrencyConfigCommandOutput}
 * @see {@link PutProvisionedConcurrencyConfigCommandInput} for command's `input` shape.
 * @see {@link PutProvisionedConcurrencyConfigCommandOutput} for command's `response` shape.
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
 * @example To allocate provisioned concurrency
 * ```javascript
 * // The following example allocates 100 provisioned concurrency for the BLUE alias of the specified function.
 * const input = {
 *   FunctionName: "my-function",
 *   ProvisionedConcurrentExecutions: 100,
 *   Qualifier: "BLUE"
 * };
 * const command = new PutProvisionedConcurrencyConfigCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AllocatedProvisionedConcurrentExecutions: 0,
 *   LastModified: "2019-11-21T19:32:12+0000",
 *   RequestedProvisionedConcurrentExecutions: 100,
 *   Status: "IN_PROGRESS"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutProvisionedConcurrencyConfigCommand extends command<PutProvisionedConcurrencyConfigCommandInput, PutProvisionedConcurrencyConfigCommandOutput>(
  _ep0,
  _mw0,
  "PutProvisionedConcurrencyConfig",
  PutProvisionedConcurrencyConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutProvisionedConcurrencyConfigRequest;
      output: PutProvisionedConcurrencyConfigResponse;
    };
    sdk: {
      input: PutProvisionedConcurrencyConfigCommandInput;
      output: PutProvisionedConcurrencyConfigCommandOutput;
    };
  };
}
