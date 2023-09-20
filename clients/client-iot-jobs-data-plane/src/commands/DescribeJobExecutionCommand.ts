// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { IoTJobsDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTJobsDataPlaneClient";
import { DescribeJobExecutionRequest, DescribeJobExecutionResponse } from "../models/models_0";
import { de_DescribeJobExecutionCommand, se_DescribeJobExecutionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Gets details of a job execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, DescribeJobExecutionCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, DescribeJobExecutionCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * const client = new IoTJobsDataPlaneClient(config);
 * const input = { // DescribeJobExecutionRequest
 *   jobId: "STRING_VALUE", // required
 *   thingName: "STRING_VALUE", // required
 *   includeJobDocument: true || false,
 *   executionNumber: Number("long"),
 * };
 * const command = new DescribeJobExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobExecutionResponse
 * //   execution: { // JobExecution
 * //     jobId: "STRING_VALUE",
 * //     thingName: "STRING_VALUE",
 * //     status: "QUEUED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "REJECTED" || "REMOVED" || "CANCELED",
 * //     statusDetails: { // DetailsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     queuedAt: Number("long"),
 * //     startedAt: Number("long"),
 * //     lastUpdatedAt: Number("long"),
 * //     approximateSecondsBeforeTimedOut: Number("long"),
 * //     versionNumber: Number("long"),
 * //     executionNumber: Number("long"),
 * //     jobDocument: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeJobExecutionCommandInput - {@link DescribeJobExecutionCommandInput}
 * @returns {@link DescribeJobExecutionCommandOutput}
 * @see {@link DescribeJobExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTJobsDataPlaneClientResolvedConfig | config} for IoTJobsDataPlaneClient's `config` shape.
 *
 * @throws {@link CertificateValidationException} (client fault)
 *  <p>The certificate is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The contents of the request were invalid. For example, this code is returned when an UpdateJobExecution request contains invalid status details. The message contains details about the error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link TerminalStateException} (client fault)
 *  <p>The job is in a terminal state.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTJobsDataPlaneServiceException}
 * <p>Base exception class for all service exceptions from IoTJobsDataPlane service.</p>
 *
 */
export class DescribeJobExecutionCommand extends $Command<
  DescribeJobExecutionCommandInput,
  DescribeJobExecutionCommandOutput,
  IoTJobsDataPlaneClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: DescribeJobExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTJobsDataPlaneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJobExecutionCommandInput, DescribeJobExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeJobExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTJobsDataPlaneClient";
    const commandName = "DescribeJobExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IotLaserThingJobManagerExternalService",
        operation: "DescribeJobExecution",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeJobExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeJobExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobExecutionCommandOutput> {
    return de_DescribeJobExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
