// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import {
  PollForTaskInput,
  PollForTaskInputFilterSensitiveLog,
  PollForTaskOutput,
  PollForTaskOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PollForTaskCommand,
  serializeAws_json1_1PollForTaskCommand,
} from "../protocols/Aws_json1_1";

export interface PollForTaskCommandInput extends PollForTaskInput {}
export interface PollForTaskCommandOutput extends PollForTaskOutput, __MetadataBearer {}

/**
 * <p>Task runners call <code>PollForTask</code> to receive a task to perform from AWS Data Pipeline. The task runner specifies which tasks it can perform
 *             by setting a value for the <code>workerGroup</code> parameter. The task returned can come from any of the pipelines that
 *             match the <code>workerGroup</code> value passed in by the task runner and that was launched using the IAM user credentials
 *             specified by the task runner.</p>
 *         <p>If tasks are ready in the work queue, <code>PollForTask</code> returns a response immediately. If no tasks are available in the queue,
 *             <code>PollForTask</code> uses long-polling and holds on to a poll connection for up to a 90 seconds, during which time the first newly
 *             scheduled task is handed to the task runner. To accomodate this, set the socket timeout in your task runner to 90 seconds. The task
 *             runner should not call <code>PollForTask</code> again on the same <code>workerGroup</code> until it receives a response, and this can take up to 90 seconds.
 *         </p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.PollForTask
 * Content-Length: 59
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {"workerGroup": "MyworkerGroup",
 *  "hostname": "example.com"}
 *
 *             </request>
 *
 *             <response>
 *
 * x-amzn-RequestId: 41c713d2-0775-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 39
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"taskObject":
 *   {"attemptId": "@SayHello_2012-12-12T00:00:00_Attempt=1",
 *    "objects":
 *     {"@SayHello_2012-12-12T00:00:00_Attempt=1":
 *       {"fields":
 *         [
 *           {"key": "@componentParent",
 *            "refValue": "SayHello"},
 *           {"key": "@scheduledStartTime",
 *            "stringValue": "2012-12-12T00:00:00"},
 *           {"key": "parent",
 *            "refValue": "SayHello"},
 *           {"key": "@sphere",
 *            "stringValue": "ATTEMPT"},
 *           {"key": "workerGroup",
 *            "stringValue": "workerGroup"},
 *           {"key": "@instanceParent",
 *            "refValue": "@SayHello_2012-12-12T00:00:00"},
 *           {"key": "type",
 *            "stringValue": "ShellCommandActivity"},
 *           {"key": "@status",
 *            "stringValue": "WAITING_FOR_RUNNER"},
 *           {"key": "@version",
 *            "stringValue": "1"},
 *           {"key": "schedule",
 *            "refValue": "Schedule"},
 *           {"key": "@actualStartTime",
 *            "stringValue": "2012-12-13T01:40:50"},
 *           {"key": "command",
 *            "stringValue": "echo hello"},
 *           {"key": "@scheduledEndTime",
 *            "stringValue": "2012-12-12T01:00:00"},
 *           {"key": "@activeInstances",
 *            "refValue": "@SayHello_2012-12-12T00:00:00"},
 *           {"key": "@pipelineId",
 *            "stringValue": "df-0937003356ZJEXAMPLE"}
 *         ],
 *        "id": "@SayHello_2012-12-12T00:00:00_Attempt=1",
 *        "name": "@SayHello_2012-12-12T00:00:00_Attempt=1"}
 *     },
 *    "pipelineId": "df-0937003356ZJEXAMPLE",
 *    "taskId": "2xaM4wRs5zOsIH+g9U3oVHfAgAlbSqU6XduncB0HhZ3xMnmvfePZPn4dIbYXHyWyRK+cU15MqDHwdrvftx/4wv+sNS4w34vJfv7QA9aOoOazW28l1GYSb2ZRR0N0paiQp+d1MhSKo10hOTWOsVK5S5Lnx9Qm6omFgXHyIvZRIvTlrQMpr1xuUrflyGOfbFOGpOLpvPE172MYdqpZKnbSS4TcuqgQKSWV2833fEubI57DPOP7ghWa2TcYeSIv4pdLYG53fTuwfbnbdc98g2LNUQzSVhSnt7BoqyNwht2aQ6b/UHg9A80+KVpuXuqmz3m1MXwHFgxjdmuesXNOrrlGpeLCcRWD+aGo0RN1NqhQRzNAig8V4GlaPTQzMsRCljKqvrIyAoP3Tt2XEGsHkkQo12rEX8Z90957XX2qKRwhruwYzqGkSLWjINoLdAxUJdpRXRc5DJTrBd3D5mdzn7kY1l7NEh4kFHJDt3Cx4Z3Mk8MYCACyCk/CEyy9DwuPi66cLz0NBcgbCM5LKjTBOwo1m+am+pvM1kSposE9FPP1+RFGb8k6jQBTJx3TRz1yKilnGXQTZ5xvdOFpJrklIT0OXP1MG3+auM9FlJA+1dX90QoNJE5z7axmK//MOGXUdkqFe2kiDkorqjxwDvc0Js9pVKfKvAmW8YqUbmI9l0ERpWCXXnLVHNmPWz3jaPY+OBAmuJWDmxB/Z8p94aEDg4BVXQ7LvsKQ3DLYhaB7yJ390CJT+i0mm+EBqY60V6YikPSWDFrYQ/NPi2b1DgE19mX8zHqw8qprIl4yh1Ckx2Iige4En/N5ktOoIxnASxAw/TzcE2skxdw5KlHDF+UTj71m16CR/dIaKlXijlfNlNzUBo/bNSadCQn3G5NoO501wPKI:XO50TgDNyo8EXAMPLE/g==:1"}
 * }
 *
 *             </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, PollForTaskCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, PollForTaskCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new PollForTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PollForTaskCommandInput} for command's `input` shape.
 * @see {@link PollForTaskCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 */
export class PollForTaskCommand extends $Command<
  PollForTaskCommandInput,
  PollForTaskCommandOutput,
  DataPipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: PollForTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataPipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PollForTaskCommandInput, PollForTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PollForTaskCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "PollForTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PollForTaskInputFilterSensitiveLog,
      outputFilterSensitiveLog: PollForTaskOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PollForTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PollForTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PollForTaskCommandOutput> {
    return deserializeAws_json1_1PollForTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
