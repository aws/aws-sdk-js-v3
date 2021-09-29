import {
  ServiceCatalogAppRegistryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogAppRegistryClient";
import { UpdateAttributeGroupRequest, UpdateAttributeGroupResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAttributeGroupCommand,
  serializeAws_restJson1UpdateAttributeGroupCommand,
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

export interface UpdateAttributeGroupCommandInput extends UpdateAttributeGroupRequest {}
export interface UpdateAttributeGroupCommandOutput extends UpdateAttributeGroupResponse, __MetadataBearer {}

/**
 * <p>Updates an existing attribute group with new details. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, UpdateAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, UpdateAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new UpdateAttributeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateAttributeGroupCommand extends $Command<
  UpdateAttributeGroupCommandInput,
  UpdateAttributeGroupCommandOutput,
  ServiceCatalogAppRegistryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAttributeGroupCommandInput) {
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
  ): Handler<UpdateAttributeGroupCommandInput, UpdateAttributeGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogAppRegistryClient";
    const commandName = "UpdateAttributeGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAttributeGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAttributeGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAttributeGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAttributeGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAttributeGroupCommandOutput> {
    return deserializeAws_restJson1UpdateAttributeGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
