// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { CreateJobTemplateRequest, CreateJobTemplateResponse } from "../models/models_0";
import { CreateJobTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateJobTemplateCommand}.
 */
export interface CreateJobTemplateCommandInput extends CreateJobTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobTemplateCommand}.
 */
export interface CreateJobTemplateCommandOutput extends CreateJobTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a job template.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJobTemplate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateJobTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateJobTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateJobTemplateRequest
 *   jobTemplateId: "STRING_VALUE", // required
 *   jobArn: "STRING_VALUE",
 *   documentSource: "STRING_VALUE",
 *   document: "STRING_VALUE",
 *   description: "STRING_VALUE", // required
 *   presignedUrlConfig: { // PresignedUrlConfig
 *     roleArn: "STRING_VALUE",
 *     expiresInSec: Number("long"),
 *   },
 *   jobExecutionsRolloutConfig: { // JobExecutionsRolloutConfig
 *     maximumPerMinute: Number("int"),
 *     exponentialRate: { // ExponentialRolloutRate
 *       baseRatePerMinute: Number("int"), // required
 *       incrementFactor: Number("double"), // required
 *       rateIncreaseCriteria: { // RateIncreaseCriteria
 *         numberOfNotifiedThings: Number("int"),
 *         numberOfSucceededThings: Number("int"),
 *       },
 *     },
 *   },
 *   abortConfig: { // AbortConfig
 *     criteriaList: [ // AbortCriteriaList // required
 *       { // AbortCriteria
 *         failureType: "FAILED" || "REJECTED" || "TIMED_OUT" || "ALL", // required
 *         action: "CANCEL", // required
 *         thresholdPercentage: Number("double"), // required
 *         minNumberOfExecutedThings: Number("int"), // required
 *       },
 *     ],
 *   },
 *   timeoutConfig: { // TimeoutConfig
 *     inProgressTimeoutInMinutes: Number("long"),
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   jobExecutionsRetryConfig: { // JobExecutionsRetryConfig
 *     criteriaList: [ // RetryCriteriaList // required
 *       { // RetryCriteria
 *         failureType: "FAILED" || "TIMED_OUT" || "ALL", // required
 *         numberOfRetries: Number("int"), // required
 *       },
 *     ],
 *   },
 *   maintenanceWindows: [ // MaintenanceWindows
 *     { // MaintenanceWindow
 *       startTime: "STRING_VALUE", // required
 *       durationInMinutes: Number("int"), // required
 *     },
 *   ],
 *   destinationPackageVersions: [ // DestinationPackageVersions
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateJobTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateJobTemplateResponse
 * //   jobTemplateArn: "STRING_VALUE",
 * //   jobTemplateId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateJobTemplateCommandInput - {@link CreateJobTemplateCommandInput}
 * @returns {@link CreateJobTemplateCommandOutput}
 * @see {@link CreateJobTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
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
export class CreateJobTemplateCommand extends $Command
  .classBuilder<
    CreateJobTemplateCommandInput,
    CreateJobTemplateCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "CreateJobTemplate", {})
  .n("IoTClient", "CreateJobTemplateCommand")
  .sc(CreateJobTemplate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateJobTemplateRequest;
      output: CreateJobTemplateResponse;
    };
    sdk: {
      input: CreateJobTemplateCommandInput;
      output: CreateJobTemplateCommandOutput;
    };
  };
}
