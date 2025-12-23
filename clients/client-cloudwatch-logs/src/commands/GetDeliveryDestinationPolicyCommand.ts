// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDeliveryDestinationPolicyRequest, GetDeliveryDestinationPolicyResponse } from "../models/models_0";
import { GetDeliveryDestinationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeliveryDestinationPolicyCommand}.
 */
export interface GetDeliveryDestinationPolicyCommandInput extends GetDeliveryDestinationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetDeliveryDestinationPolicyCommand}.
 */
export interface GetDeliveryDestinationPolicyCommandOutput extends GetDeliveryDestinationPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the delivery destination policy assigned to the delivery destination that you
 *       specify. For more information about delivery destinations and their policies, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html">PutDeliveryDestinationPolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetDeliveryDestinationPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetDeliveryDestinationPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetDeliveryDestinationPolicyRequest
 *   deliveryDestinationName: "STRING_VALUE", // required
 * };
 * const command = new GetDeliveryDestinationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetDeliveryDestinationPolicyResponse
 * //   policy: { // Policy
 * //     deliveryDestinationPolicy: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeliveryDestinationPolicyCommandInput - {@link GetDeliveryDestinationPolicyCommandInput}
 * @returns {@link GetDeliveryDestinationPolicyCommandOutput}
 * @see {@link GetDeliveryDestinationPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDeliveryDestinationPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class GetDeliveryDestinationPolicyCommand extends $Command
  .classBuilder<
    GetDeliveryDestinationPolicyCommandInput,
    GetDeliveryDestinationPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "GetDeliveryDestinationPolicy", {})
  .n("CloudWatchLogsClient", "GetDeliveryDestinationPolicyCommand")
  .sc(GetDeliveryDestinationPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeliveryDestinationPolicyRequest;
      output: GetDeliveryDestinationPolicyResponse;
    };
    sdk: {
      input: GetDeliveryDestinationPolicyCommandInput;
      output: GetDeliveryDestinationPolicyCommandOutput;
    };
  };
}
