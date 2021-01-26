import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { CreateEnvironmentEC2Request, CreateEnvironmentEC2Result } from "../models/models_0";
import {
  deserializeAws_json1_1CreateEnvironmentEC2Command,
  serializeAws_json1_1CreateEnvironmentEC2Command,
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

export type CreateEnvironmentEC2CommandInput = CreateEnvironmentEC2Request;
export type CreateEnvironmentEC2CommandOutput = CreateEnvironmentEC2Result & __MetadataBearer;

/**
 * <p>Creates an AWS Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.</p>
 */
export class CreateEnvironmentEC2Command extends $Command<
  CreateEnvironmentEC2CommandInput,
  CreateEnvironmentEC2CommandOutput,
  Cloud9ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateEnvironmentEC2CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Cloud9ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEnvironmentEC2CommandInput, CreateEnvironmentEC2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Cloud9Client";
    const commandName = "CreateEnvironmentEC2Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEnvironmentEC2Request.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEnvironmentEC2Result.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEnvironmentEC2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEnvironmentEC2Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEnvironmentEC2CommandOutput> {
    return deserializeAws_json1_1CreateEnvironmentEC2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
