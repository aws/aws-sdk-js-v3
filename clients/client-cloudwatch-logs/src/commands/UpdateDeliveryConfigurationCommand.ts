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
import type { UpdateDeliveryConfigurationRequest, UpdateDeliveryConfigurationResponse } from "../models/models_0";
import { UpdateDeliveryConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDeliveryConfigurationCommand}.
 */
export interface UpdateDeliveryConfigurationCommandInput extends UpdateDeliveryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDeliveryConfigurationCommand}.
 */
export interface UpdateDeliveryConfigurationCommandOutput
  extends UpdateDeliveryConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Use this operation to update the configuration of a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_Delivery.html">delivery</a> to change
 *       either the S3 path pattern or the format of the delivered logs. You can't use this operation
 *       to change the source or destination of the delivery.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, UpdateDeliveryConfigurationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, UpdateDeliveryConfigurationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // UpdateDeliveryConfigurationRequest
 *   id: "STRING_VALUE", // required
 *   recordFields: [ // RecordFields
 *     "STRING_VALUE",
 *   ],
 *   fieldDelimiter: "STRING_VALUE",
 *   s3DeliveryConfiguration: { // S3DeliveryConfiguration
 *     suffixPath: "STRING_VALUE",
 *     enableHiveCompatiblePath: true || false,
 *   },
 * };
 * const command = new UpdateDeliveryConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDeliveryConfigurationCommandInput - {@link UpdateDeliveryConfigurationCommandInput}
 * @returns {@link UpdateDeliveryConfigurationCommandOutput}
 * @see {@link UpdateDeliveryConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateDeliveryConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
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
export class UpdateDeliveryConfigurationCommand extends $Command
  .classBuilder<
    UpdateDeliveryConfigurationCommandInput,
    UpdateDeliveryConfigurationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "UpdateDeliveryConfiguration", {})
  .n("CloudWatchLogsClient", "UpdateDeliveryConfigurationCommand")
  .sc(UpdateDeliveryConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDeliveryConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateDeliveryConfigurationCommandInput;
      output: UpdateDeliveryConfigurationCommandOutput;
    };
  };
}
