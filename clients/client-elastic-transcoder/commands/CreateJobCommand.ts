import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { CreateJobRequest, CreateJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateJobCommand,
  serializeAws_restJson1CreateJobCommand,
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

export type CreateJobCommandInput = CreateJobRequest;
export type CreateJobCommandOutput = CreateJobResponse & __MetadataBearer;

/**
 * <p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified
 *             plus information about the job that is created.</p>
 *         <p>If you have specified more than one output for your jobs (for example, one output for the
 *             Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to
 *             list the jobs (as opposed to the AWS Console).</p>
 */
export class CreateJobCommand extends $Command<
  CreateJobCommandInput,
  CreateJobCommandOutput,
  ElasticTranscoderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateJobCommandInput, CreateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "CreateJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateJobCommandOutput> {
    return deserializeAws_restJson1CreateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
