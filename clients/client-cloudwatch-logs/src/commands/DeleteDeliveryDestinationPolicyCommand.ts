// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDeliveryDestinationPolicyRequest } from "../models/models_0";
import {
  de_DeleteDeliveryDestinationPolicyCommand,
  se_DeleteDeliveryDestinationPolicyCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeliveryDestinationPolicyCommand}.
 */
export interface DeleteDeliveryDestinationPolicyCommandInput extends DeleteDeliveryDestinationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDeliveryDestinationPolicyCommand}.
 */
export interface DeleteDeliveryDestinationPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a delivery destination policy. For more information about these policies,
 *         see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html">PutDeliveryDestinationPolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteDeliveryDestinationPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteDeliveryDestinationPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteDeliveryDestinationPolicyRequest
 *   deliveryDestinationName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeliveryDestinationPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDeliveryDestinationPolicyCommandInput - {@link DeleteDeliveryDestinationPolicyCommandInput}
 * @returns {@link DeleteDeliveryDestinationPolicyCommandOutput}
 * @see {@link DeleteDeliveryDestinationPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteDeliveryDestinationPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
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
export class DeleteDeliveryDestinationPolicyCommand extends $Command
  .classBuilder<
    DeleteDeliveryDestinationPolicyCommandInput,
    DeleteDeliveryDestinationPolicyCommandOutput,
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
  .s("Logs_20140328", "DeleteDeliveryDestinationPolicy", {})
  .n("CloudWatchLogsClient", "DeleteDeliveryDestinationPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDeliveryDestinationPolicyCommand)
  .de(de_DeleteDeliveryDestinationPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDeliveryDestinationPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteDeliveryDestinationPolicyCommandInput;
      output: DeleteDeliveryDestinationPolicyCommandOutput;
    };
  };
}
