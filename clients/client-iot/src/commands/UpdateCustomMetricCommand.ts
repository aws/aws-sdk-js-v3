// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateCustomMetricRequest, UpdateCustomMetricResponse } from "../models/models_2";
import { de_UpdateCustomMetricCommand, se_UpdateCustomMetricCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCustomMetricCommand}.
 */
export interface UpdateCustomMetricCommandInput extends UpdateCustomMetricRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCustomMetricCommand}.
 */
export interface UpdateCustomMetricCommandOutput extends UpdateCustomMetricResponse, __MetadataBearer {}

/**
 * <p>Updates a
 *       Device Defender detect custom metric. </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCustomMetric</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateCustomMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateCustomMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // UpdateCustomMetricRequest
 *   metricName: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE", // required
 * };
 * const command = new UpdateCustomMetricCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCustomMetricResponse
 * //   metricName: "STRING_VALUE",
 * //   metricArn: "STRING_VALUE",
 * //   metricType: "string-list" || "ip-address-list" || "number-list" || "number",
 * //   displayName: "STRING_VALUE",
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateCustomMetricCommandInput - {@link UpdateCustomMetricCommandInput}
 * @returns {@link UpdateCustomMetricCommandOutput}
 * @see {@link UpdateCustomMetricCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class UpdateCustomMetricCommand extends $Command
  .classBuilder<
    UpdateCustomMetricCommandInput,
    UpdateCustomMetricCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "UpdateCustomMetric", {})
  .n("IoTClient", "UpdateCustomMetricCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCustomMetricCommand)
  .de(de_UpdateCustomMetricCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCustomMetricRequest;
      output: UpdateCustomMetricResponse;
    };
    sdk: {
      input: UpdateCustomMetricCommandInput;
      output: UpdateCustomMetricCommandOutput;
    };
  };
}
