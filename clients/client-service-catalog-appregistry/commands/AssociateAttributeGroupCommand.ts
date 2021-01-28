import {
  ServiceCatalogAppRegistryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogAppRegistryClient";
import { AssociateAttributeGroupRequest, AssociateAttributeGroupResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AssociateAttributeGroupCommand,
  serializeAws_restJson1AssociateAttributeGroupCommand,
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

export type AssociateAttributeGroupCommandInput = AssociateAttributeGroupRequest;
export type AssociateAttributeGroupCommandOutput = AssociateAttributeGroupResponse & __MetadataBearer;

/**
 * <p>Associates an attribute group with an application to augment the application's metadata
 *       with the group's attributes. This feature enables applications to be described with
 *       user-defined details that are machine-readable, such as third-party integrations.</p>
 */
export class AssociateAttributeGroupCommand extends $Command<
  AssociateAttributeGroupCommandInput,
  AssociateAttributeGroupCommandOutput,
  ServiceCatalogAppRegistryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateAttributeGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogAppRegistryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateAttributeGroupCommandInput, AssociateAttributeGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogAppRegistryClient";
    const commandName = "AssociateAttributeGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateAttributeGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateAttributeGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateAttributeGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateAttributeGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateAttributeGroupCommandOutput> {
    return deserializeAws_restJson1AssociateAttributeGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
