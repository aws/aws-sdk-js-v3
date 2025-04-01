// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetProvisionedConcurrencyConfigRequest, GetProvisionedConcurrencyConfigResponse } from "../models/models_0";
import {
  de_GetProvisionedConcurrencyConfigCommand,
  se_GetProvisionedConcurrencyConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetProvisionedConcurrencyConfigCommandOutput
  extends GetProvisionedConcurrencyConfigResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the provisioned concurrency configuration for a function's alias or version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetProvisionedConcurrencyConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetProvisionedConcurrencyConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
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
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ProvisionedConcurrencyConfigNotFoundException} (client fault)
 *  <p>The specified configuration does not exist.</p>
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
export class GetProvisionedConcurrencyConfigCommand extends $Command
  .classBuilder<
    GetProvisionedConcurrencyConfigCommandInput,
    GetProvisionedConcurrencyConfigCommandOutput,
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
  .s("AWSGirApiService", "GetProvisionedConcurrencyConfig", {})
  .n("LambdaClient", "GetProvisionedConcurrencyConfigCommand")
  .f(void 0, void 0)
  .ser(se_GetProvisionedConcurrencyConfigCommand)
  .de(de_GetProvisionedConcurrencyConfigCommand)
  .build() {
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
