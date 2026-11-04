// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDeliveryConfigurationRequest, UpdateDeliveryConfigurationResponse } from "../models/models_1";
import { UpdateDeliveryConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateDeliveryConfigurationCommandOutput extends UpdateDeliveryConfigurationResponse, __MetadataBearer {}

/**
 * Use this operation to update the configuration of a [delivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_Delivery.html) to change either the S3 path pattern or the format of the delivered logs. You can't use this operation to change the source or destination of the delivery.
 *
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
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This operation attempted to create a resource that already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
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
export class UpdateDeliveryConfigurationCommand extends command<UpdateDeliveryConfigurationCommandInput, UpdateDeliveryConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDeliveryConfiguration",
  UpdateDeliveryConfiguration$
) {
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
