import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { UpdateServiceIntegrationRequest, UpdateServiceIntegrationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateServiceIntegrationCommand,
  serializeAws_restJson1UpdateServiceIntegrationCommand,
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

export type UpdateServiceIntegrationCommandInput = UpdateServiceIntegrationRequest;
export type UpdateServiceIntegrationCommandOutput = UpdateServiceIntegrationResponse & __MetadataBearer;

export class UpdateServiceIntegrationCommand extends $Command<
  UpdateServiceIntegrationCommandInput,
  UpdateServiceIntegrationCommandOutput,
  DevOpsGuruClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateServiceIntegrationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServiceIntegrationCommandInput, UpdateServiceIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "UpdateServiceIntegrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServiceIntegrationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateServiceIntegrationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateServiceIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateServiceIntegrationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServiceIntegrationCommandOutput> {
    return deserializeAws_restJson1UpdateServiceIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
