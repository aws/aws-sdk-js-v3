import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetProvisionedConcurrencyConfigRequest, GetProvisionedConcurrencyConfigResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetProvisionedConcurrencyConfigCommand,
  serializeAws_restJson1GetProvisionedConcurrencyConfigCommand,
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

export type GetProvisionedConcurrencyConfigCommandInput = GetProvisionedConcurrencyConfigRequest;
export type GetProvisionedConcurrencyConfigCommandOutput = GetProvisionedConcurrencyConfigResponse & __MetadataBearer;

/**
 * <p>Retrieves the provisioned concurrency configuration for a function's alias or version.</p>
 */
export class GetProvisionedConcurrencyConfigCommand extends $Command<
  GetProvisionedConcurrencyConfigCommandInput,
  GetProvisionedConcurrencyConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetProvisionedConcurrencyConfigCommandInput) {
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
  ): Handler<GetProvisionedConcurrencyConfigCommandInput, GetProvisionedConcurrencyConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "GetProvisionedConcurrencyConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetProvisionedConcurrencyConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetProvisionedConcurrencyConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetProvisionedConcurrencyConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetProvisionedConcurrencyConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetProvisionedConcurrencyConfigCommandOutput> {
    return deserializeAws_restJson1GetProvisionedConcurrencyConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
