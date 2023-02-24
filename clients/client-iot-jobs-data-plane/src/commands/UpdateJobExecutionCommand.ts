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
  UpdateJobExecutionRequest,
  UpdateJobExecutionRequestFilterSensitiveLog,
  UpdateJobExecutionResponse,
  UpdateJobExecutionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateJobExecutionCommand,
  serializeAws_restJson1UpdateJobExecutionCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateJobExecutionCommandInput extends UpdateJobExecutionRequest {}
export interface UpdateJobExecutionCommandOutput extends UpdateJobExecutionResponse, __MetadataBearer {}

/**
 * <p>Updates the status of a job execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, UpdateJobExecutionCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, UpdateJobExecutionCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * const client = new IoTJobsDataPlaneClient(config);
 * const command = new UpdateJobExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJobExecutionCommandInput} for command's `input` shape.
 * @see {@link UpdateJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTJobsDataPlaneClientResolvedConfig | config} for IoTJobsDataPlaneClient's `config` shape.
 *
 */
export class UpdateJobExecutionCommand extends $Command<
  UpdateJobExecutionCommandInput,
  UpdateJobExecutionCommandOutput,
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

  constructor(readonly input: UpdateJobExecutionCommandInput) {
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
  ): Handler<UpdateJobExecutionCommandInput, UpdateJobExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateJobExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTJobsDataPlaneClient";
    const commandName = "UpdateJobExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateJobExecutionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateJobExecutionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateJobExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateJobExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateJobExecutionCommandOutput> {
    return deserializeAws_restJson1UpdateJobExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
