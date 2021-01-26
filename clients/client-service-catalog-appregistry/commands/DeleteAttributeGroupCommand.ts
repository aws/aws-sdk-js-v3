import {
  ServiceCatalogAppRegistryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogAppRegistryClient";
import { DeleteAttributeGroupRequest, DeleteAttributeGroupResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAttributeGroupCommand,
  serializeAws_restJson1DeleteAttributeGroupCommand,
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

export type DeleteAttributeGroupCommandInput = DeleteAttributeGroupRequest;
export type DeleteAttributeGroupCommandOutput = DeleteAttributeGroupResponse & __MetadataBearer;

/**
 * <p>Deletes an attribute group, specified either by its attribute group ID or name.</p>
 */
export class DeleteAttributeGroupCommand extends $Command<
  DeleteAttributeGroupCommandInput,
  DeleteAttributeGroupCommandOutput,
  ServiceCatalogAppRegistryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAttributeGroupCommandInput) {
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
  ): Handler<DeleteAttributeGroupCommandInput, DeleteAttributeGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogAppRegistryClient";
    const commandName = "DeleteAttributeGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAttributeGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAttributeGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAttributeGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAttributeGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAttributeGroupCommandOutput> {
    return deserializeAws_restJson1DeleteAttributeGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
