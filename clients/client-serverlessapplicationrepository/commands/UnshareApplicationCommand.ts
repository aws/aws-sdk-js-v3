import {
  ServerlessApplicationRepositoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServerlessApplicationRepositoryClient";
import { UnshareApplicationRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UnshareApplicationCommand,
  serializeAws_restJson1UnshareApplicationCommand,
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

export type UnshareApplicationCommandInput = UnshareApplicationRequest;
export type UnshareApplicationCommandOutput = __MetadataBearer;

/**
 * <p>Unshares an application from an AWS Organization.</p><p>This operation can be called only from the organization's master account.</p>
 */
export class UnshareApplicationCommand extends $Command<
  UnshareApplicationCommandInput,
  UnshareApplicationCommandOutput,
  ServerlessApplicationRepositoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UnshareApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServerlessApplicationRepositoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnshareApplicationCommandInput, UnshareApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServerlessApplicationRepositoryClient";
    const commandName = "UnshareApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnshareApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnshareApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UnshareApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnshareApplicationCommandOutput> {
    return deserializeAws_restJson1UnshareApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
