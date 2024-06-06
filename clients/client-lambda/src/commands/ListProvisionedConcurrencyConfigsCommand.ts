// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  ListProvisionedConcurrencyConfigsRequest,
  ListProvisionedConcurrencyConfigsResponse,
} from "../models/models_0";
import {
  de_ListProvisionedConcurrencyConfigsCommand,
  se_ListProvisionedConcurrencyConfigsCommand,
} from "../protocols/Aws_restJson1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "ListProvisionedConcurrencyConfigs", {})
  .n("LambdaClient", "ListProvisionedConcurrencyConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListProvisionedConcurrencyConfigsCommand)
  .de(de_ListProvisionedConcurrencyConfigsCommand)
  .build() {}
