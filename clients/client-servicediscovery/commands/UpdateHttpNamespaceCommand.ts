import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { UpdateHttpNamespaceRequest, UpdateHttpNamespaceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateHttpNamespaceCommand,
  serializeAws_json1_1UpdateHttpNamespaceCommand,
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

export interface UpdateHttpNamespaceCommandInput extends UpdateHttpNamespaceRequest {}
export interface UpdateHttpNamespaceCommandOutput extends UpdateHttpNamespaceResponse, __MetadataBearer {}

/**
 * <p>Updates an HTTP
 *    namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, UpdateHttpNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, UpdateHttpNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new UpdateHttpNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateHttpNamespaceCommandInput} for command's `input` shape.
 * @see {@link UpdateHttpNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateHttpNamespaceCommand extends $Command<
  UpdateHttpNamespaceCommandInput,
  UpdateHttpNamespaceCommandOutput,
  ServiceDiscoveryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateHttpNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceDiscoveryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateHttpNamespaceCommandInput, UpdateHttpNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "UpdateHttpNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateHttpNamespaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateHttpNamespaceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateHttpNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateHttpNamespaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateHttpNamespaceCommandOutput> {
    return deserializeAws_json1_1UpdateHttpNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
