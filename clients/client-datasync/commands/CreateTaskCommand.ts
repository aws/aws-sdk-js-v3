import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateTaskRequest, CreateTaskResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateTaskCommand,
  serializeAws_json1_1CreateTaskCommand,
} from "../protocols/Aws_json1_1";
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

export type CreateTaskCommandInput = CreateTaskRequest;
export type CreateTaskCommandOutput = CreateTaskResponse & __MetadataBearer;

/**
 * <p>Creates a task.</p>
 *          <p>A task includes a source location and a destination location, and a configuration
 *       that specifies how data is transferred. A task always transfers data from the source
 *       location to the destination location. The configuration specifies options such as
 *       task scheduling, bandwidth limits, etc. A task is the complete definition of a data
 *       transfer.</p>
 *          <p>When you create a task that transfers data between AWS services in different AWS Regions,
 *       one of the two locations that you specify must reside in the Region where DataSync is being
 *       used. The other location must be specified in a different Region.</p>
 *          <p>You can transfer data between commercial AWS Regions except for China, or between AWS
 *       GovCloud (US-East and US-West) Regions.</p>
 *
 *          <important>
 *             <p>When you use DataSync to copy files or objects between AWS Regions,
 *       you pay for data transfer between Regions. This is billed as data transfer OUT
 *       from your source Region to your destination Region. For more information,
 *       see <a href="http://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer">Data Transfer pricing</a>.
 *     </p>
 *          </important>
 */
export class CreateTaskCommand extends $Command<
  CreateTaskCommandInput,
  CreateTaskCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTaskCommandInput, CreateTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTaskCommandOutput> {
    return deserializeAws_json1_1CreateTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
