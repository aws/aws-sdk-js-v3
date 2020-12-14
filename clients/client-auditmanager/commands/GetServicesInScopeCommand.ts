import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { GetServicesInScopeRequest, GetServicesInScopeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetServicesInScopeCommand,
  serializeAws_restJson1GetServicesInScopeCommand,
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

export type GetServicesInScopeCommandInput = GetServicesInScopeRequest;
export type GetServicesInScopeCommandOutput = GetServicesInScopeResponse & __MetadataBearer;

/**
 * <p>
 *    Returns a list of the in-scope AWS services for the specified assessment.
 * </p>
 */
export class GetServicesInScopeCommand extends $Command<
  GetServicesInScopeCommandInput,
  GetServicesInScopeCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetServicesInScopeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetServicesInScopeCommandInput, GetServicesInScopeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetServicesInScopeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServicesInScopeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetServicesInScopeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetServicesInScopeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetServicesInScopeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServicesInScopeCommandOutput> {
    return deserializeAws_restJson1GetServicesInScopeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
