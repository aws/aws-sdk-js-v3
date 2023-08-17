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
} from "@smithy/types";

import { IoTJobsDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTJobsDataPlaneClient";
import { StartNextPendingJobExecutionRequest, StartNextPendingJobExecutionResponse } from "../models/models_0";
import {
  de_StartNextPendingJobExecutionCommand,
  se_StartNextPendingJobExecutionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartNextPendingJobExecutionCommand}.
 */
export interface StartNextPendingJobExecutionCommandInput extends StartNextPendingJobExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartNextPendingJobExecutionCommand}.
 */
export interface StartNextPendingJobExecutionCommandOutput
  extends StartNextPendingJobExecutionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, StartNextPendingJobExecutionCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, StartNextPendingJobExecutionCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * const client = new IoTJobsDataPlaneClient(config);
 * const input = { // StartNextPendingJobExecutionRequest
 *   thingName: "STRING_VALUE", // required
 *   statusDetails: { // DetailsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   stepTimeoutInMinutes: Number("long"),
 * };
 * const command = new StartNextPendingJobExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartNextPendingJobExecutionResponse
 * //   execution: { // JobExecution
 * //     jobId: "STRING_VALUE",
 * //     thingName: "STRING_VALUE",
 * //     status: "STRING_VALUE",
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
 * @param StartNextPendingJobExecutionCommandInput - {@link StartNextPendingJobExecutionCommandInput}
 * @returns {@link StartNextPendingJobExecutionCommandOutput}
 * @see {@link StartNextPendingJobExecutionCommandInput} for command's `input` shape.
 * @see {@link StartNextPendingJobExecutionCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTJobsDataPlaneServiceException}
 * <p>Base exception class for all service exceptions from IoTJobsDataPlane service.</p>
 *
 */
export class StartNextPendingJobExecutionCommand extends $Command<
  StartNextPendingJobExecutionCommandInput,
  StartNextPendingJobExecutionCommandOutput,
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
  constructor(readonly input: StartNextPendingJobExecutionCommandInput) {
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
  ): Handler<StartNextPendingJobExecutionCommandInput, StartNextPendingJobExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartNextPendingJobExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTJobsDataPlaneClient";
    const commandName = "StartNextPendingJobExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: StartNextPendingJobExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartNextPendingJobExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartNextPendingJobExecutionCommandOutput> {
    return de_StartNextPendingJobExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
