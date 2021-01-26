import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { CreatePlatformVersionRequest, CreatePlatformVersionResult } from "../models/models_0";
import {
  deserializeAws_queryCreatePlatformVersionCommand,
  serializeAws_queryCreatePlatformVersionCommand,
} from "../protocols/Aws_query";
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

export type CreatePlatformVersionCommandInput = CreatePlatformVersionRequest;
export type CreatePlatformVersionCommandOutput = CreatePlatformVersionResult & __MetadataBearer;

/**
 * <p>Create a new version of your custom platform.</p>
 */
export class CreatePlatformVersionCommand extends $Command<
  CreatePlatformVersionCommandInput,
  CreatePlatformVersionCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePlatformVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePlatformVersionCommandInput, CreatePlatformVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "CreatePlatformVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePlatformVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePlatformVersionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePlatformVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreatePlatformVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePlatformVersionCommandOutput> {
    return deserializeAws_queryCreatePlatformVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
