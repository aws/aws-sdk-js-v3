import {
  ServiceInputTypes,
  ServiceOutputTypes,
  imagebuilderClientResolvedConfig
} from "../imagebuilderClient";
import {
  DeleteDistributionConfigurationRequest,
  DeleteDistributionConfigurationResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1DeleteDistributionConfigurationCommand,
  serializeAws_restJson1_1DeleteDistributionConfigurationCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type DeleteDistributionConfigurationCommandInput = DeleteDistributionConfigurationRequest;
export type DeleteDistributionConfigurationCommandOutput = DeleteDistributionConfigurationResponse;

export class DeleteDistributionConfigurationCommand extends $Command<
  DeleteDistributionConfigurationCommandInput,
  DeleteDistributionConfigurationCommandOutput,
  imagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDistributionConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: imagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteDistributionConfigurationCommandInput,
    DeleteDistributionConfigurationCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteDistributionConfigurationCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DeleteDistributionConfigurationCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeleteDistributionConfigurationCommandOutput> {
    return deserializeAws_restJson1_1DeleteDistributionConfigurationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
