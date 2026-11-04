// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDeliverySourceRequest } from "../models/models_0";
import { DeleteDeliverySource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a *delivery source*. A delivery is a connection between a logical *delivery source* and a logical *delivery destination*.
 *
 * You can't delete a delivery source if any current deliveries are associated with it. To find whether any deliveries are associated with this delivery source, use the [DescribeDeliveries](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveries.html) operation and check the `deliverySourceName` field in the results.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteDeliverySourceCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteDeliverySourceCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
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
export class DeleteDeliverySourceCommand extends command<DeleteDeliverySourceCommandInput, DeleteDeliverySourceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDeliverySource",
  DeleteDeliverySource$
) {
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
