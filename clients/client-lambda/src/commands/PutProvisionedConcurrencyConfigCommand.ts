// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import type {
  PutProvisionedConcurrencyConfigRequest,
  PutProvisionedConcurrencyConfigResponse,
} from "../models/models_0";
import { PutProvisionedConcurrencyConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface PutProvisionedConcurrencyConfigCommandOutput
  extends PutProvisionedConcurrencyConfigResponse,
    __MetadataBearer {}

/**
 * <p>Adds a provisioned concurrency configuration to a function's alias or version.</p>
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
 * //   AvailableProvisionedConcurrentExecutions: Number("int"),
 * //   AllocatedProvisionedConcurrentExecutions: Number("int"),
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
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
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
export class PutProvisionedConcurrencyConfigCommand extends $Command
  .classBuilder<
    PutProvisionedConcurrencyConfigCommandInput,
    PutProvisionedConcurrencyConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "PutProvisionedConcurrencyConfig", {})
  .n("LambdaClient", "PutProvisionedConcurrencyConfigCommand")
  .sc(PutProvisionedConcurrencyConfig)
  .build() {
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
