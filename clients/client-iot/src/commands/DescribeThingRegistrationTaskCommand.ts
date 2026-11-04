// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeThingRegistrationTaskRequest, DescribeThingRegistrationTaskResponse } from "../models/models_1";
import { DescribeThingRegistrationTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeThingRegistrationTaskCommandOutput extends DescribeThingRegistrationTaskResponse, __MetadataBearer {}

/**
 * Describes a bulk thing provisioning task.
 *
 * Requires permission to access the [DescribeThingRegistrationTask](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DescribeThingRegistrationTaskCommand extends command<DescribeThingRegistrationTaskCommandInput, DescribeThingRegistrationTaskCommandOutput>(
  _ep0,
  _mw0,
  "DescribeThingRegistrationTask",
  DescribeThingRegistrationTask$
) {
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
