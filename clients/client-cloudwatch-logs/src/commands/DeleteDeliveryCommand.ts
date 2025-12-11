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
import type { DeleteDeliveryRequest } from "../models/models_0";
import { DeleteDelivery } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeliveryCommand}.
 */
export interface DeleteDeliveryCommandInput extends DeleteDeliveryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDeliveryCommand}.
 */
export interface DeleteDeliveryCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a <i>delivery</i>. A delivery is a connection between a logical
 *         <i>delivery source</i> and a logical <i>delivery
 *       destination</i>. Deleting a delivery only deletes the connection between the delivery
 *       source and delivery destination. It does not delete the delivery destination or the delivery
 *       source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteDeliveryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteDeliveryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteDeliveryRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeliveryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDeliveryCommandInput - {@link DeleteDeliveryCommandInput}
 * @returns {@link DeleteDeliveryCommandOutput}
 * @see {@link DeleteDeliveryCommandInput} for command's `input` shape.
 * @see {@link DeleteDeliveryCommandOutput} for command's `response` shape.
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
export class DeleteDeliveryCommand extends $Command
  .classBuilder<
    DeleteDeliveryCommandInput,
    DeleteDeliveryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DeleteDelivery", {})
  .n("CloudWatchLogsClient", "DeleteDeliveryCommand")
  .sc(DeleteDelivery)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDeliveryRequest;
      output: {};
    };
    sdk: {
      input: DeleteDeliveryCommandInput;
      output: DeleteDeliveryCommandOutput;
    };
  };
}
