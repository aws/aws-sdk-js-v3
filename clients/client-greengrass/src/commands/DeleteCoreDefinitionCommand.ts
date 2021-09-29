import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteCoreDefinitionRequest, DeleteCoreDefinitionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteCoreDefinitionCommand,
  serializeAws_restJson1DeleteCoreDefinitionCommand,
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

export interface DeleteCoreDefinitionCommandInput extends DeleteCoreDefinitionRequest {}
export interface DeleteCoreDefinitionCommandOutput extends DeleteCoreDefinitionResponse, __MetadataBearer {}

/**
 * Deletes a core definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteCoreDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteCoreDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DeleteCoreDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCoreDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteCoreDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteCoreDefinitionCommand extends $Command<
  DeleteCoreDefinitionCommandInput,
  DeleteCoreDefinitionCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCoreDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCoreDefinitionCommandInput, DeleteCoreDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "DeleteCoreDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCoreDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteCoreDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCoreDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteCoreDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCoreDefinitionCommandOutput> {
    return deserializeAws_restJson1DeleteCoreDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
