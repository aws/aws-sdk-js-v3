// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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
  CreatePrivateDnsNamespaceRequest,
  CreatePrivateDnsNamespaceRequestFilterSensitiveLog,
  CreatePrivateDnsNamespaceResponse,
  CreatePrivateDnsNamespaceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreatePrivateDnsNamespaceCommand,
  serializeAws_json1_1CreatePrivateDnsNamespaceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

export interface CreatePrivateDnsNamespaceCommandInput extends CreatePrivateDnsNamespaceRequest {}
export interface CreatePrivateDnsNamespaceCommandOutput extends CreatePrivateDnsNamespaceResponse, __MetadataBearer {}

/**
 * <p>Creates a private namespace based on DNS, which is visible only inside a specified Amazon
 *    VPC. The namespace defines your service naming scheme. For example, if you name your namespace
 *     <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for
 *    the service is <code>backend.example.com</code>. Service instances that are registered using a
 *    private DNS namespace can be discovered using either a <code>DiscoverInstances</code> request or
 *    using DNS. For the current quota on the number of namespaces that you can create using the same
 *     Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the
 *     <i>Cloud Map Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreatePrivateDnsNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, CreatePrivateDnsNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new CreatePrivateDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePrivateDnsNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreatePrivateDnsNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 */
export class CreatePrivateDnsNamespaceCommand extends $Command<
  CreatePrivateDnsNamespaceCommandInput,
  CreatePrivateDnsNamespaceCommandOutput,
  ServiceDiscoveryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: CreatePrivateDnsNamespaceCommandInput) {
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
  ): Handler<CreatePrivateDnsNamespaceCommandInput, CreatePrivateDnsNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePrivateDnsNamespaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "CreatePrivateDnsNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePrivateDnsNamespaceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePrivateDnsNamespaceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePrivateDnsNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePrivateDnsNamespaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePrivateDnsNamespaceCommandOutput> {
    return deserializeAws_json1_1CreatePrivateDnsNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
