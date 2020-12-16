import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DeletePortalRequest, DeletePortalResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeletePortalCommand,
  serializeAws_restJson1DeletePortalCommand,
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

export type DeletePortalCommandInput = DeletePortalRequest;
export type DeletePortalCommandOutput = DeletePortalResponse & __MetadataBearer;

/**
 * <p>Deletes a portal from AWS IoT SiteWise Monitor.</p>
 */
export class DeletePortalCommand extends $Command<
  DeletePortalCommandInput,
  DeletePortalCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePortalCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePortalCommandInput, DeletePortalCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DeletePortalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePortalRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeletePortalResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePortalCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeletePortalCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePortalCommandOutput> {
    return deserializeAws_restJson1DeletePortalCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
