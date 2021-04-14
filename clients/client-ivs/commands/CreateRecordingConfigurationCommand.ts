import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { CreateRecordingConfigurationRequest, CreateRecordingConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateRecordingConfigurationCommand,
  serializeAws_restJson1CreateRecordingConfigurationCommand,
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

export type CreateRecordingConfigurationCommandInput = CreateRecordingConfigurationRequest;
export type CreateRecordingConfigurationCommandOutput = CreateRecordingConfigurationResponse & __MetadataBearer;

/**
 * <p>Creates a new recording configuration, used to enable recording to Amazon S3.</p>
 *          <p>
 *             <b>Known issue:</b> In the us-east-1 region, if you use the AWS
 *       CLI to create a recording configuration, it returns success even if the S3 bucket is in a
 *       different region. In this case, the <code>state</code> of the recording configuration is
 *         <code>CREATE_FAILED</code> (instead of <code>ACTIVE</code>). (In other regions, the CLI
 *       correctly returns failure if the bucket is in a different region.)</p>
 *          <p>
 *             <b>Workaround:</b> Ensure that your S3 bucket is in the same region as the recording
 *       configuration. If you create a recording configuration in a different region as your S3
 *       bucket, delete that recording configuration and create a new one with an S3 bucket from the
 *       correct region.</p>
 */
export class CreateRecordingConfigurationCommand extends $Command<
  CreateRecordingConfigurationCommandInput,
  CreateRecordingConfigurationCommandOutput,
  IvsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRecordingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRecordingConfigurationCommandInput, CreateRecordingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "CreateRecordingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRecordingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRecordingConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRecordingConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRecordingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateRecordingConfigurationCommandOutput> {
    return deserializeAws_restJson1CreateRecordingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
