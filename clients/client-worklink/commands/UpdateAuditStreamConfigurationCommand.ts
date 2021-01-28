import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { UpdateAuditStreamConfigurationRequest, UpdateAuditStreamConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAuditStreamConfigurationCommand,
  serializeAws_restJson1UpdateAuditStreamConfigurationCommand,
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

export type UpdateAuditStreamConfigurationCommandInput = UpdateAuditStreamConfigurationRequest;
export type UpdateAuditStreamConfigurationCommandOutput = UpdateAuditStreamConfigurationResponse & __MetadataBearer;

/**
 * <p>Updates the audit stream configuration for the fleet.</p>
 */
export class UpdateAuditStreamConfigurationCommand extends $Command<
  UpdateAuditStreamConfigurationCommandInput,
  UpdateAuditStreamConfigurationCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAuditStreamConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAuditStreamConfigurationCommandInput, UpdateAuditStreamConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "UpdateAuditStreamConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAuditStreamConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAuditStreamConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateAuditStreamConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAuditStreamConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAuditStreamConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateAuditStreamConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
