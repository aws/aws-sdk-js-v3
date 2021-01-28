import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import {
  AssociateConfigurationItemsToApplicationRequest,
  AssociateConfigurationItemsToApplicationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand,
  serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand,
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

export type AssociateConfigurationItemsToApplicationCommandInput = AssociateConfigurationItemsToApplicationRequest;
export type AssociateConfigurationItemsToApplicationCommandOutput = AssociateConfigurationItemsToApplicationResponse &
  __MetadataBearer;

/**
 * <p>Associates one or more configuration items with an application.</p>
 */
export class AssociateConfigurationItemsToApplicationCommand extends $Command<
  AssociateConfigurationItemsToApplicationCommandInput,
  AssociateConfigurationItemsToApplicationCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateConfigurationItemsToApplicationCommandInput) {
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
    AssociateConfigurationItemsToApplicationCommandInput,
    AssociateConfigurationItemsToApplicationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "AssociateConfigurationItemsToApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateConfigurationItemsToApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateConfigurationItemsToApplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateConfigurationItemsToApplicationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateConfigurationItemsToApplicationCommandOutput> {
    return deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
