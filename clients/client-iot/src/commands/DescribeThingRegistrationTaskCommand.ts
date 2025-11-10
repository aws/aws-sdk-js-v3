// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeThingRegistrationTaskRequest, DescribeThingRegistrationTaskResponse } from "../models/models_1";
import { DescribeThingRegistrationTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeThingRegistrationTaskCommand}.
 */
export interface DescribeThingRegistrationTaskCommandInput extends DescribeThingRegistrationTaskRequest {}
/**
 * @public
 *
 * The output of {@link DescribeThingRegistrationTaskCommand}.
 */
export interface DescribeThingRegistrationTaskCommandOutput
  extends DescribeThingRegistrationTaskResponse,
    __MetadataBearer {}

/**
 * <p>Describes a bulk thing provisioning task.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingRegistrationTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingRegistrationTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingRegistrationTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeThingRegistrationTaskRequest
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new DescribeThingRegistrationTaskCommand(input);
 * const response = await client.send(command);
 * // { // DescribeThingRegistrationTaskResponse
 * //   taskId: "STRING_VALUE",
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * //   templateBody: "STRING_VALUE",
 * //   inputFileBucket: "STRING_VALUE",
 * //   inputFileKey: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   status: "InProgress" || "Completed" || "Failed" || "Cancelled" || "Cancelling",
 * //   message: "STRING_VALUE",
 * //   successCount: Number("int"),
 * //   failureCount: Number("int"),
 * //   percentageProgress: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeThingRegistrationTaskCommandInput - {@link DescribeThingRegistrationTaskCommandInput}
 * @returns {@link DescribeThingRegistrationTaskCommandOutput}
 * @see {@link DescribeThingRegistrationTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeThingRegistrationTaskCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class DescribeThingRegistrationTaskCommand extends $Command
  .classBuilder<
    DescribeThingRegistrationTaskCommandInput,
    DescribeThingRegistrationTaskCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DescribeThingRegistrationTask", {})
  .n("IoTClient", "DescribeThingRegistrationTaskCommand")
  .sc(DescribeThingRegistrationTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeThingRegistrationTaskRequest;
      output: DescribeThingRegistrationTaskResponse;
    };
    sdk: {
      input: DescribeThingRegistrationTaskCommandInput;
      output: DescribeThingRegistrationTaskCommandOutput;
    };
  };
}
