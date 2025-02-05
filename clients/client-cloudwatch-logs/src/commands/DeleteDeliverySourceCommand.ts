// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDeliverySourceRequest } from "../models/models_0";
import { de_DeleteDeliverySourceCommand, se_DeleteDeliverySourceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeliverySourceCommand}.
 */
export interface DeleteDeliverySourceCommandInput extends DeleteDeliverySourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDeliverySourceCommand}.
 */
export interface DeleteDeliverySourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a <i>delivery source</i>. A delivery is a connection between a logical <i>delivery source</i> and a logical
 *        <i>delivery destination</i>.</p>
 *          <p>You can't delete a delivery source if any current deliveries are associated with it. To find whether any deliveries are associated with
 *        this delivery source, use the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveries.html">DescribeDeliveries</a> operation and check the <code>deliverySourceName</code> field in the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteDeliverySourceCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteDeliverySourceCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteDeliverySourceRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeliverySourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDeliverySourceCommandInput - {@link DeleteDeliverySourceCommandInput}
 * @returns {@link DeleteDeliverySourceCommandOutput}
 * @see {@link DeleteDeliverySourceCommandInput} for command's `input` shape.
 * @see {@link DeleteDeliverySourceCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteDeliverySourceCommand extends $Command
  .classBuilder<
    DeleteDeliverySourceCommandInput,
    DeleteDeliverySourceCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "DeleteDeliverySource", {})
  .n("CloudWatchLogsClient", "DeleteDeliverySourceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDeliverySourceCommand)
  .de(de_DeleteDeliverySourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDeliverySourceRequest;
      output: {};
    };
    sdk: {
      input: DeleteDeliverySourceCommandInput;
      output: DeleteDeliverySourceCommandOutput;
    };
  };
}
