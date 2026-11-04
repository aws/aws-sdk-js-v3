// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDeliveryDestinationRequest } from "../models/models_0";
import { DeleteDeliveryDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a *delivery destination*. A delivery is a connection between a logical *delivery source* and a logical *delivery destination*.
 *
 * You can't delete a delivery destination if any current deliveries are associated with it. To find whether any deliveries are associated with this delivery destination, use the [DescribeDeliveries](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveries.html) operation and check the `deliveryDestinationArn` field in the results.
 *
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
 *
 * This operation attempted to create a resource that already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This request exceeds a service quota.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the parameters for the request is not valid.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class DeleteDeliveryDestinationCommand extends command<DeleteDeliveryDestinationCommandInput, DeleteDeliveryDestinationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDeliveryDestination",
  DeleteDeliveryDestination$
) {
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
