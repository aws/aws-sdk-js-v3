import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import {
  DisassociateConfigurationItemsFromApplicationRequest,
  DisassociateConfigurationItemsFromApplicationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand,
  serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand,
} from "../protocols/Aws_json1_1";
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

export type DisassociateConfigurationItemsFromApplicationCommandInput = DisassociateConfigurationItemsFromApplicationRequest;
export type DisassociateConfigurationItemsFromApplicationCommandOutput = DisassociateConfigurationItemsFromApplicationResponse &
  __MetadataBearer;

/**
 * <p>Disassociates one or more configuration items from an application.</p>
 */
export class DisassociateConfigurationItemsFromApplicationCommand extends $Command<
  DisassociateConfigurationItemsFromApplicationCommandInput,
  DisassociateConfigurationItemsFromApplicationCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateConfigurationItemsFromApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociateConfigurationItemsFromApplicationCommandInput,
    DisassociateConfigurationItemsFromApplicationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "DisassociateConfigurationItemsFromApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateConfigurationItemsFromApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateConfigurationItemsFromApplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateConfigurationItemsFromApplicationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateConfigurationItemsFromApplicationCommandOutput> {
    return deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
