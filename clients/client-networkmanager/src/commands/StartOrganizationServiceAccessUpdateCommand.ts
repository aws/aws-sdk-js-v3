// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  StartOrganizationServiceAccessUpdateRequest,
  StartOrganizationServiceAccessUpdateResponse,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1StartOrganizationServiceAccessUpdateCommand,
  serializeAws_restJson1StartOrganizationServiceAccessUpdateCommand,
} from "../protocols/Aws_restJson1";

export interface StartOrganizationServiceAccessUpdateCommandInput extends StartOrganizationServiceAccessUpdateRequest {}
export interface StartOrganizationServiceAccessUpdateCommandOutput
  extends StartOrganizationServiceAccessUpdateResponse,
    __MetadataBearer {}

export class StartOrganizationServiceAccessUpdateCommand extends $Command<
  StartOrganizationServiceAccessUpdateCommandInput,
  StartOrganizationServiceAccessUpdateCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartOrganizationServiceAccessUpdateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartOrganizationServiceAccessUpdateCommandInput, StartOrganizationServiceAccessUpdateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "StartOrganizationServiceAccessUpdateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartOrganizationServiceAccessUpdateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartOrganizationServiceAccessUpdateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartOrganizationServiceAccessUpdateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartOrganizationServiceAccessUpdateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartOrganizationServiceAccessUpdateCommandOutput> {
    return deserializeAws_restJson1StartOrganizationServiceAccessUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
