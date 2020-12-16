import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { DeleteProvisionedConcurrencyConfigRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand,
  serializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand,
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

export type DeleteProvisionedConcurrencyConfigCommandInput = DeleteProvisionedConcurrencyConfigRequest;
export type DeleteProvisionedConcurrencyConfigCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the provisioned concurrency configuration for a function.</p>
 */
export class DeleteProvisionedConcurrencyConfigCommand extends $Command<
  DeleteProvisionedConcurrencyConfigCommandInput,
  DeleteProvisionedConcurrencyConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteProvisionedConcurrencyConfigCommandInput) {
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
  ): Handler<DeleteProvisionedConcurrencyConfigCommandInput, DeleteProvisionedConcurrencyConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "DeleteProvisionedConcurrencyConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteProvisionedConcurrencyConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteProvisionedConcurrencyConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteProvisionedConcurrencyConfigCommandOutput> {
    return deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
