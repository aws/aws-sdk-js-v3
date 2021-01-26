import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  ListProvisionedConcurrencyConfigsRequest,
  ListProvisionedConcurrencyConfigsResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommand,
  serializeAws_restJson1ListProvisionedConcurrencyConfigsCommand,
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

export type ListProvisionedConcurrencyConfigsCommandInput = ListProvisionedConcurrencyConfigsRequest;
export type ListProvisionedConcurrencyConfigsCommandOutput = ListProvisionedConcurrencyConfigsResponse &
  __MetadataBearer;

/**
 * <p>Retrieves a list of provisioned concurrency configurations for a function.</p>
 */
export class ListProvisionedConcurrencyConfigsCommand extends $Command<
  ListProvisionedConcurrencyConfigsCommandInput,
  ListProvisionedConcurrencyConfigsCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProvisionedConcurrencyConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProvisionedConcurrencyConfigsCommandInput, ListProvisionedConcurrencyConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListProvisionedConcurrencyConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProvisionedConcurrencyConfigsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListProvisionedConcurrencyConfigsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListProvisionedConcurrencyConfigsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProvisionedConcurrencyConfigsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProvisionedConcurrencyConfigsCommandOutput> {
    return deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
