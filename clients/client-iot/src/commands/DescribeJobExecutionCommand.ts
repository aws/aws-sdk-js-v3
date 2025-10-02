// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeJobExecutionRequest, DescribeJobExecutionResponse } from "../models/models_1";
import { de_DescribeJobExecutionCommand, se_DescribeJobExecutionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobExecutionCommand}.
 */
export interface DescribeJobExecutionCommandInput extends DescribeJobExecutionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobExecutionCommand}.
 */
export interface DescribeJobExecutionCommandOutput extends DescribeJobExecutionResponse, __MetadataBearer {}

/**
 * <p>Describes a job execution.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeJobExecution</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeJobExecutionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeJobExecutionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeJobExecutionRequest
 *   jobId: "STRING_VALUE", // required
 *   thingName: "STRING_VALUE", // required
 *   executionNumber: Number("long"),
 * };
 * const command = new DescribeJobExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobExecutionResponse
 * //   execution: { // JobExecution
 * //     jobId: "STRING_VALUE",
 * //     status: "QUEUED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "REJECTED" || "REMOVED" || "CANCELED",
 * //     forceCanceled: true || false,
 * //     statusDetails: { // JobExecutionStatusDetails
 * //       detailsMap: { // DetailsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     thingArn: "STRING_VALUE",
 * //     queuedAt: new Date("TIMESTAMP"),
 * //     startedAt: new Date("TIMESTAMP"),
 * //     lastUpdatedAt: new Date("TIMESTAMP"),
 * //     executionNumber: Number("long"),
 * //     versionNumber: Number("long"),
 * //     approximateSecondsBeforeTimedOut: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeJobExecutionCommandInput - {@link DescribeJobExecutionCommandInput}
 * @returns {@link DescribeJobExecutionCommandOutput}
 * @see {@link DescribeJobExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
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
export class DescribeJobExecutionCommand extends $Command
  .classBuilder<
    DescribeJobExecutionCommandInput,
    DescribeJobExecutionCommandOutput,
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
  .s("AWSIotService", "DescribeJobExecution", {})
  .n("IoTClient", "DescribeJobExecutionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeJobExecutionCommand)
  .de(de_DescribeJobExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeJobExecutionRequest;
      output: DescribeJobExecutionResponse;
    };
    sdk: {
      input: DescribeJobExecutionCommandInput;
      output: DescribeJobExecutionCommandOutput;
    };
  };
}
