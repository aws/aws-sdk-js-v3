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
import type { PutDestinationRequest, PutDestinationResponse } from "../models/models_0";
import { PutDestination } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDestinationCommand}.
 */
export interface PutDestinationCommandInput extends PutDestinationRequest {}
/**
 * @public
 *
 * The output of {@link PutDestinationCommand}.
 */
export interface PutDestinationCommandOutput extends PutDestinationResponse, __MetadataBearer {}

/**
 * <p>Creates or updates a destination. This operation is used only to create destinations
 *       for cross-account subscriptions.</p>
 *          <p>A destination encapsulates a physical resource (such as an Amazon Kinesis stream). With
 *       a destination, you can subscribe to a real-time stream of log events for a different account,
 *       ingested using <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p>
 *          <p>Through an access policy, a destination controls what is written to it. By default,
 *         <code>PutDestination</code> does not set any access policy with the destination, which means
 *       a cross-account user cannot call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html">PutSubscriptionFilter</a> against this destination. To enable this, the destination
 *       owner must call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html">PutDestinationPolicy</a> after <code>PutDestination</code>.</p>
 *          <p>To perform a <code>PutDestination</code> operation, you must also have the
 *         <code>iam:PassRole</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutDestinationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutDestinationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutDestinationRequest
 *   destinationName: "STRING_VALUE", // required
 *   targetArn: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutDestinationCommand(input);
 * const response = await client.send(command);
 * // { // PutDestinationResponse
 * //   destination: { // Destination
 * //     destinationName: "STRING_VALUE",
 * //     targetArn: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     accessPolicy: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     creationTime: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param PutDestinationCommandInput - {@link PutDestinationCommandInput}
 * @returns {@link PutDestinationCommandOutput}
 * @see {@link PutDestinationCommandInput} for command's `input` shape.
 * @see {@link PutDestinationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class PutDestinationCommand extends $Command
  .classBuilder<
    PutDestinationCommandInput,
    PutDestinationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "PutDestination", {})
  .n("CloudWatchLogsClient", "PutDestinationCommand")
  .sc(PutDestination)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDestinationRequest;
      output: PutDestinationResponse;
    };
    sdk: {
      input: PutDestinationCommandInput;
      output: PutDestinationCommandOutput;
    };
  };
}
