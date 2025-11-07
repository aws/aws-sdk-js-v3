// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDeliverySourceRequest, GetDeliverySourceResponse } from "../models/models_0";
import { GetDeliverySource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeliverySourceCommand}.
 */
export interface GetDeliverySourceCommandInput extends GetDeliverySourceRequest {}
/**
 * @public
 *
 * The output of {@link GetDeliverySourceCommand}.
 */
export interface GetDeliverySourceCommandOutput extends GetDeliverySourceResponse, __MetadataBearer {}

/**
 * <p>Retrieves complete information about one delivery source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetDeliverySourceCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetDeliverySourceCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetDeliverySourceRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetDeliverySourceCommand(input);
 * const response = await client.send(command);
 * // { // GetDeliverySourceResponse
 * //   deliverySource: { // DeliverySource
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     resourceArns: [ // ResourceArns
 * //       "STRING_VALUE",
 * //     ],
 * //     service: "STRING_VALUE",
 * //     logType: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeliverySourceCommandInput - {@link GetDeliverySourceCommandInput}
 * @returns {@link GetDeliverySourceCommandOutput}
 * @see {@link GetDeliverySourceCommandInput} for command's `input` shape.
 * @see {@link GetDeliverySourceCommandOutput} for command's `response` shape.
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
export class GetDeliverySourceCommand extends $Command
  .classBuilder<
    GetDeliverySourceCommandInput,
    GetDeliverySourceCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "GetDeliverySource", {})
  .n("CloudWatchLogsClient", "GetDeliverySourceCommand")
  .sc(GetDeliverySource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeliverySourceRequest;
      output: GetDeliverySourceResponse;
    };
    sdk: {
      input: GetDeliverySourceCommandInput;
      output: GetDeliverySourceCommandOutput;
    };
  };
}
