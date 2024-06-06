// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteFleetMetricRequest } from "../models/models_1";
import { de_DeleteFleetMetricCommand, se_DeleteFleetMetricCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFleetMetricCommand}.
 */
export interface DeleteFleetMetricCommandInput extends DeleteFleetMetricRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFleetMetricCommand}.
 */
export interface DeleteFleetMetricCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified fleet metric.
 *         Returns successfully with no error if the deletion is successful or you specify a fleet metric that doesn't exist.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteFleetMetric</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteFleetMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteFleetMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DeleteFleetMetricRequest
 *   metricName: "STRING_VALUE", // required
 *   expectedVersion: Number("long"),
 * };
 * const command = new DeleteFleetMetricCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFleetMetricCommandInput - {@link DeleteFleetMetricCommandInput}
 * @returns {@link DeleteFleetMetricCommandOutput}
 * @see {@link DeleteFleetMetricCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link VersionConflictException} (client fault)
 *  <p>An exception thrown when the version of an entity specified with the
 *             <code>expectedVersion</code> parameter does not match the latest version in the
 *          system.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class DeleteFleetMetricCommand extends $Command
  .classBuilder<
    DeleteFleetMetricCommandInput,
    DeleteFleetMetricCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "DeleteFleetMetric", {})
  .n("IoTClient", "DeleteFleetMetricCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFleetMetricCommand)
  .de(de_DeleteFleetMetricCommand)
  .build() {}
