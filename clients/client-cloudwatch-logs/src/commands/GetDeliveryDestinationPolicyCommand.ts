// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDeliveryDestinationPolicyRequest, GetDeliveryDestinationPolicyResponse } from "../models/models_0";
import { GetDeliveryDestinationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the delivery destination policy assigned to the delivery destination that you specify. For more information about delivery destinations and their policies, see [PutDeliveryDestinationPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html).
 *
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
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
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
export class GetDeliveryDestinationPolicyCommand extends command<GetDeliveryDestinationPolicyCommandInput, GetDeliveryDestinationPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetDeliveryDestinationPolicy",
  GetDeliveryDestinationPolicy$
) {
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
