// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDeliveryDestinationRequest, GetDeliveryDestinationResponse } from "../models/models_0";
import { GetDeliveryDestination } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeliveryDestinationCommand}.
 */
export interface GetDeliveryDestinationCommandInput extends GetDeliveryDestinationRequest {}
/**
 * @public
 *
 * The output of {@link GetDeliveryDestinationCommand}.
 */
export interface GetDeliveryDestinationCommandOutput extends GetDeliveryDestinationResponse, __MetadataBearer {}

/**
 * <p>Retrieves complete information about one delivery destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetDeliveryDestinationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetDeliveryDestinationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetDeliveryDestinationRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetDeliveryDestinationCommand(input);
 * const response = await client.send(command);
 * // { // GetDeliveryDestinationResponse
 * //   deliveryDestination: { // DeliveryDestination
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     deliveryDestinationType: "S3" || "CWL" || "FH" || "XRAY",
 * //     outputFormat: "json" || "plain" || "w3c" || "raw" || "parquet",
 * //     deliveryDestinationConfiguration: { // DeliveryDestinationConfiguration
 * //       destinationResourceArn: "STRING_VALUE", // required
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeliveryDestinationCommandInput - {@link GetDeliveryDestinationCommandInput}
 * @returns {@link GetDeliveryDestinationCommandOutput}
 * @see {@link GetDeliveryDestinationCommandInput} for command's `input` shape.
 * @see {@link GetDeliveryDestinationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
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
export class GetDeliveryDestinationCommand extends $Command
  .classBuilder<
    GetDeliveryDestinationCommandInput,
    GetDeliveryDestinationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "GetDeliveryDestination", {})
  .n("CloudWatchLogsClient", "GetDeliveryDestinationCommand")
  .f(void 0, void 0)
  .sc(GetDeliveryDestination)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeliveryDestinationRequest;
      output: GetDeliveryDestinationResponse;
    };
    sdk: {
      input: GetDeliveryDestinationCommandInput;
      output: GetDeliveryDestinationCommandOutput;
    };
  };
}
