// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  ListProvisionedConcurrencyConfigsRequest,
  ListProvisionedConcurrencyConfigsResponse,
} from "../models/models_0";
import { ListProvisionedConcurrencyConfigs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProvisionedConcurrencyConfigsCommand}.
 */
export interface ListProvisionedConcurrencyConfigsCommandInput extends ListProvisionedConcurrencyConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListProvisionedConcurrencyConfigsCommand}.
 */
export interface ListProvisionedConcurrencyConfigsCommandOutput
  extends ListProvisionedConcurrencyConfigsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of provisioned concurrency configurations for a function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListProvisionedConcurrencyConfigsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListProvisionedConcurrencyConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // ListProvisionedConcurrencyConfigsRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListProvisionedConcurrencyConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListProvisionedConcurrencyConfigsResponse
 * //   ProvisionedConcurrencyConfigs: [ // ProvisionedConcurrencyConfigList
 * //     { // ProvisionedConcurrencyConfigListItem
 * //       FunctionArn: "STRING_VALUE",
 * //       RequestedProvisionedConcurrentExecutions: Number("int"),
 * //       AvailableProvisionedConcurrentExecutions: Number("int"),
 * //       AllocatedProvisionedConcurrentExecutions: Number("int"),
 * //       Status: "IN_PROGRESS" || "READY" || "FAILED",
 * //       StatusReason: "STRING_VALUE",
 * //       LastModified: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProvisionedConcurrencyConfigsCommandInput - {@link ListProvisionedConcurrencyConfigsCommandInput}
 * @returns {@link ListProvisionedConcurrencyConfigsCommandOutput}
 * @see {@link ListProvisionedConcurrencyConfigsCommandInput} for command's `input` shape.
 * @see {@link ListProvisionedConcurrencyConfigsCommandOutput} for command's `response` shape.
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
 * @example To get a list of provisioned concurrency configurations
 * ```javascript
 * // The following example returns a list of provisioned concurrency configurations for a function named my-function.
 * const input = {
 *   FunctionName: "my-function"
 * };
 * const command = new ListProvisionedConcurrencyConfigsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ProvisionedConcurrencyConfigs: [
 *     {
 *       AllocatedProvisionedConcurrentExecutions: 100,
 *       AvailableProvisionedConcurrentExecutions: 100,
 *       FunctionArn: "arn:aws:lambda:us-east-2:123456789012:function:my-function:GREEN",
 *       LastModified: "2019-12-31T20:29:00+0000",
 *       RequestedProvisionedConcurrentExecutions: 100,
 *       Status: "READY"
 *     },
 *     {
 *       AllocatedProvisionedConcurrentExecutions: 100,
 *       AvailableProvisionedConcurrentExecutions: 100,
 *       FunctionArn: "arn:aws:lambda:us-east-2:123456789012:function:my-function:BLUE",
 *       LastModified: "2019-12-31T20:28:49+0000",
 *       RequestedProvisionedConcurrentExecutions: 100,
 *       Status: "READY"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListProvisionedConcurrencyConfigsCommand extends $Command
  .classBuilder<
    ListProvisionedConcurrencyConfigsCommandInput,
    ListProvisionedConcurrencyConfigsCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "ListProvisionedConcurrencyConfigs", {})
  .n("LambdaClient", "ListProvisionedConcurrencyConfigsCommand")
  .sc(ListProvisionedConcurrencyConfigs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProvisionedConcurrencyConfigsRequest;
      output: ListProvisionedConcurrencyConfigsResponse;
    };
    sdk: {
      input: ListProvisionedConcurrencyConfigsCommandInput;
      output: ListProvisionedConcurrencyConfigsCommandOutput;
    };
  };
}
