// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeJobTemplateRequest, DescribeJobTemplateResponse } from "../models/models_1";
import { de_DescribeJobTemplateCommand, se_DescribeJobTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobTemplateCommand}.
 */
export interface DescribeJobTemplateCommandInput extends DescribeJobTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobTemplateCommand}.
 */
export interface DescribeJobTemplateCommandOutput extends DescribeJobTemplateResponse, __MetadataBearer {}

/**
 * <p>Returns information about a job template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeJobTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeJobTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // DescribeJobTemplateRequest
 *   jobTemplateId: "STRING_VALUE", // required
 * };
 * const command = new DescribeJobTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobTemplateResponse
 * //   jobTemplateArn: "STRING_VALUE",
 * //   jobTemplateId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   documentSource: "STRING_VALUE",
 * //   document: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   presignedUrlConfig: { // PresignedUrlConfig
 * //     roleArn: "STRING_VALUE",
 * //     expiresInSec: Number("long"),
 * //   },
 * //   jobExecutionsRolloutConfig: { // JobExecutionsRolloutConfig
 * //     maximumPerMinute: Number("int"),
 * //     exponentialRate: { // ExponentialRolloutRate
 * //       baseRatePerMinute: Number("int"), // required
 * //       incrementFactor: Number("double"), // required
 * //       rateIncreaseCriteria: { // RateIncreaseCriteria
 * //         numberOfNotifiedThings: Number("int"),
 * //         numberOfSucceededThings: Number("int"),
 * //       },
 * //     },
 * //   },
 * //   abortConfig: { // AbortConfig
 * //     criteriaList: [ // AbortCriteriaList // required
 * //       { // AbortCriteria
 * //         failureType: "FAILED" || "REJECTED" || "TIMED_OUT" || "ALL", // required
 * //         action: "CANCEL", // required
 * //         thresholdPercentage: Number("double"), // required
 * //         minNumberOfExecutedThings: Number("int"), // required
 * //       },
 * //     ],
 * //   },
 * //   timeoutConfig: { // TimeoutConfig
 * //     inProgressTimeoutInMinutes: Number("long"),
 * //   },
 * //   jobExecutionsRetryConfig: { // JobExecutionsRetryConfig
 * //     criteriaList: [ // RetryCriteriaList // required
 * //       { // RetryCriteria
 * //         failureType: "FAILED" || "TIMED_OUT" || "ALL", // required
 * //         numberOfRetries: Number("int"), // required
 * //       },
 * //     ],
 * //   },
 * //   maintenanceWindows: [ // MaintenanceWindows
 * //     { // MaintenanceWindow
 * //       startTime: "STRING_VALUE", // required
 * //       durationInMinutes: Number("int"), // required
 * //     },
 * //   ],
 * //   destinationPackageVersions: [ // DestinationPackageVersions
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeJobTemplateCommandInput - {@link DescribeJobTemplateCommandInput}
 * @returns {@link DescribeJobTemplateCommandOutput}
 * @see {@link DescribeJobTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeJobTemplateCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeJobTemplateCommand extends $Command
  .classBuilder<
    DescribeJobTemplateCommandInput,
    DescribeJobTemplateCommandOutput,
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
  .s("AWSIotService", "DescribeJobTemplate", {})
  .n("IoTClient", "DescribeJobTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DescribeJobTemplateCommand)
  .de(de_DescribeJobTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeJobTemplateRequest;
      output: DescribeJobTemplateResponse;
    };
    sdk: {
      input: DescribeJobTemplateCommandInput;
      output: DescribeJobTemplateCommandOutput;
    };
  };
}
