import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { UpdatePublicDnsNamespaceRequest, UpdatePublicDnsNamespaceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdatePublicDnsNamespaceCommand,
  serializeAws_json1_1UpdatePublicDnsNamespaceCommand,
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

export interface UpdatePublicDnsNamespaceCommandInput extends UpdatePublicDnsNamespaceRequest {}
export interface UpdatePublicDnsNamespaceCommandOutput extends UpdatePublicDnsNamespaceResponse, __MetadataBearer {}

/**
 * <p>Updates a public DNS
 *    namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, UpdatePublicDnsNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, UpdatePublicDnsNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new UpdatePublicDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePublicDnsNamespaceCommandInput} for command's `input` shape.
 * @see {@link UpdatePublicDnsNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdatePublicDnsNamespaceCommand extends $Command<
  UpdatePublicDnsNamespaceCommandInput,
  UpdatePublicDnsNamespaceCommandOutput,
  ServiceDiscoveryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePublicDnsNamespaceCommandInput) {
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
  ): Handler<UpdatePublicDnsNamespaceCommandInput, UpdatePublicDnsNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "UpdatePublicDnsNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePublicDnsNamespaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePublicDnsNamespaceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePublicDnsNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePublicDnsNamespaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePublicDnsNamespaceCommandOutput> {
    return deserializeAws_json1_1UpdatePublicDnsNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
