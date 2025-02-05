// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateCustomMetricRequest, CreateCustomMetricResponse } from "../models/models_0";
import { de_CreateCustomMetricCommand, se_CreateCustomMetricCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomMetricCommand}.
 */
export interface CreateCustomMetricCommandInput extends CreateCustomMetricRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomMetricCommand}.
 */
export interface CreateCustomMetricCommandOutput extends CreateCustomMetricResponse, __MetadataBearer {}

/**
 * <p> Use this API to define a
 *       Custom
 *       Metric
 *       published by your devices to Device Defender. </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCustomMetric</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateCustomMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateCustomMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // CreateCustomMetricRequest
 *   metricName: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   metricType: "string-list" || "ip-address-list" || "number-list" || "number", // required
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   clientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new CreateCustomMetricCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomMetricResponse
 * //   metricName: "STRING_VALUE",
 * //   metricArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCustomMetricCommandInput - {@link CreateCustomMetricCommandInput}
 * @returns {@link CreateCustomMetricCommandOutput}
 * @see {@link CreateCustomMetricCommandInput} for command's `input` shape.
 * @see {@link CreateCustomMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class CreateCustomMetricCommand extends $Command
  .classBuilder<
    CreateCustomMetricCommandInput,
    CreateCustomMetricCommandOutput,
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
  .s("AWSIotService", "CreateCustomMetric", {})
  .n("IoTClient", "CreateCustomMetricCommand")
  .f(void 0, void 0)
  .ser(se_CreateCustomMetricCommand)
  .de(de_CreateCustomMetricCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomMetricRequest;
      output: CreateCustomMetricResponse;
    };
    sdk: {
      input: CreateCustomMetricCommandInput;
      output: CreateCustomMetricCommandOutput;
    };
  };
}
