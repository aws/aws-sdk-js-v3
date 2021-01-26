import { IoTJobsDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTJobsDataPlaneClient";
import { GetPendingJobExecutionsRequest, GetPendingJobExecutionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetPendingJobExecutionsCommand,
  serializeAws_restJson1GetPendingJobExecutionsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetPendingJobExecutionsCommandInput = GetPendingJobExecutionsRequest;
export type GetPendingJobExecutionsCommandOutput = GetPendingJobExecutionsResponse & __MetadataBearer;

/**
 * <p>Gets the list of all jobs for a thing that are not in a terminal status.</p>
 */
export class GetPendingJobExecutionsCommand extends $Command<
  GetPendingJobExecutionsCommandInput,
  GetPendingJobExecutionsCommandOutput,
  IoTJobsDataPlaneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTJobsDataPlaneClient";
    const commandName = "GetPendingJobExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPendingJobExecutionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPendingJobExecutionsResponse.filterSensitiveLog,
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
