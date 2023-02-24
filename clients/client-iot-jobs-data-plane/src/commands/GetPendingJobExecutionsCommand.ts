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

import { IoTJobsDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTJobsDataPlaneClient";
import {
  GetPendingJobExecutionsRequest,
  GetPendingJobExecutionsRequestFilterSensitiveLog,
  GetPendingJobExecutionsResponse,
  GetPendingJobExecutionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetPendingJobExecutionsCommand,
  serializeAws_restJson1GetPendingJobExecutionsCommand,
} from "../protocols/Aws_restJson1";

export interface GetPendingJobExecutionsCommandInput extends GetPendingJobExecutionsRequest {}
export interface GetPendingJobExecutionsCommandOutput extends GetPendingJobExecutionsResponse, __MetadataBearer {}

/**
 * <p>Gets the list of all jobs for a thing that are not in a terminal status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, GetPendingJobExecutionsCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, GetPendingJobExecutionsCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * const client = new IoTJobsDataPlaneClient(config);
 * const command = new GetPendingJobExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPendingJobExecutionsCommandInput} for command's `input` shape.
 * @see {@link GetPendingJobExecutionsCommandOutput} for command's `response` shape.
 * @see {@link IoTJobsDataPlaneClientResolvedConfig | config} for IoTJobsDataPlaneClient's `config` shape.
 *
 */
export class GetPendingJobExecutionsCommand extends $Command<
  GetPendingJobExecutionsCommandInput,
  GetPendingJobExecutionsCommandOutput,
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

  constructor(readonly input: GetPendingJobExecutionsCommandInput) {
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
  ): Handler<GetPendingJobExecutionsCommandInput, GetPendingJobExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPendingJobExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTJobsDataPlaneClient";
    const commandName = "GetPendingJobExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPendingJobExecutionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPendingJobExecutionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPendingJobExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPendingJobExecutionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPendingJobExecutionsCommandOutput> {
    return deserializeAws_restJson1GetPendingJobExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
