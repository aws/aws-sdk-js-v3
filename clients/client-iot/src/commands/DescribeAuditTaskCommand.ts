// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { DescribeAuditTaskRequest, DescribeAuditTaskResponse } from "../models/models_1";
import { DescribeAuditTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAuditTaskCommand}.
 */
export interface DescribeAuditTaskCommandInput extends DescribeAuditTaskRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAuditTaskCommand}.
 */
export interface DescribeAuditTaskCommandOutput extends DescribeAuditTaskResponse, __MetadataBearer {}

/**
 * <p>Gets information about a Device Defender audit.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeAuditTaskRequest
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAuditTaskCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAuditTaskResponse
 * //   taskStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "CANCELED",
 * //   taskType: "ON_DEMAND_AUDIT_TASK" || "SCHEDULED_AUDIT_TASK",
 * //   taskStartTime: new Date("TIMESTAMP"),
 * //   taskStatistics: { // TaskStatistics
 * //     totalChecks: Number("int"),
 * //     inProgressChecks: Number("int"),
 * //     waitingForDataCollectionChecks: Number("int"),
 * //     compliantChecks: Number("int"),
 * //     nonCompliantChecks: Number("int"),
 * //     failedChecks: Number("int"),
 * //     canceledChecks: Number("int"),
 * //   },
 * //   scheduledAuditName: "STRING_VALUE",
 * //   auditDetails: { // AuditDetails
 * //     "<keys>": { // AuditCheckDetails
 * //       checkRunStatus: "IN_PROGRESS" || "WAITING_FOR_DATA_COLLECTION" || "CANCELED" || "COMPLETED_COMPLIANT" || "COMPLETED_NON_COMPLIANT" || "FAILED",
 * //       checkCompliant: true || false,
 * //       totalResourcesCount: Number("long"),
 * //       nonCompliantResourcesCount: Number("long"),
 * //       suppressedNonCompliantResourcesCount: Number("long"),
 * //       errorCode: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAuditTaskCommandInput - {@link DescribeAuditTaskCommandInput}
 * @returns {@link DescribeAuditTaskCommandOutput}
 * @see {@link DescribeAuditTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditTaskCommandOutput} for command's `response` shape.
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
export class DescribeAuditTaskCommand extends $Command
  .classBuilder<
    DescribeAuditTaskCommandInput,
    DescribeAuditTaskCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DescribeAuditTask", {})
  .n("IoTClient", "DescribeAuditTaskCommand")
  .sc(DescribeAuditTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAuditTaskRequest;
      output: DescribeAuditTaskResponse;
    };
    sdk: {
      input: DescribeAuditTaskCommandInput;
      output: DescribeAuditTaskCommandOutput;
    };
  };
}
