// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDeliveryDestinationRequest } from "../models/models_0";
import { DeleteDeliveryDestination } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeliveryDestinationCommand}.
 */
export interface DeleteDeliveryDestinationCommandInput extends DeleteDeliveryDestinationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDeliveryDestinationCommand}.
 */
export interface DeleteDeliveryDestinationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a <i>delivery destination</i>. A delivery is a connection between a
 *       logical <i>delivery source</i> and a logical <i>delivery
 *         destination</i>.</p>
 *          <p>You can't delete a delivery destination if any current deliveries are associated with it.
 *       To find whether any deliveries are associated with this delivery destination, use the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveries.html">DescribeDeliveries</a> operation and check the <code>deliveryDestinationArn</code>
 *       field in the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteDeliveryDestinationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteDeliveryDestinationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteDeliveryDestinationRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeliveryDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDeliveryDestinationCommandInput - {@link DeleteDeliveryDestinationCommandInput}
 * @returns {@link DeleteDeliveryDestinationCommandOutput}
 * @see {@link DeleteDeliveryDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteDeliveryDestinationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request exceeds a service quota.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
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
export class DeleteDeliveryDestinationCommand extends $Command
  .classBuilder<
    DeleteDeliveryDestinationCommandInput,
    DeleteDeliveryDestinationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DeleteDeliveryDestination", {})
  .n("CloudWatchLogsClient", "DeleteDeliveryDestinationCommand")
  .sc(DeleteDeliveryDestination)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDeliveryDestinationRequest;
      output: {};
    };
    sdk: {
      input: DeleteDeliveryDestinationCommandInput;
      output: DeleteDeliveryDestinationCommandOutput;
    };
  };
}
