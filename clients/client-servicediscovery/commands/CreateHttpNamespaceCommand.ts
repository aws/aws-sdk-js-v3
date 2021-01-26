import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { CreateHttpNamespaceRequest, CreateHttpNamespaceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateHttpNamespaceCommand,
  serializeAws_json1_1CreateHttpNamespaceCommand,
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

export type CreateHttpNamespaceCommandInput = CreateHttpNamespaceRequest;
export type CreateHttpNamespaceCommandOutput = CreateHttpNamespaceResponse & __MetadataBearer;

/**
 * <p>Creates an HTTP namespace. Service instances that you register using an HTTP namespace can be discovered using a
 *     <code>DiscoverInstances</code> request but can't be discovered using DNS. </p>
 *          <p>For the current quota on the number of namespaces that you can create using the same AWS account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map quotas</a> in the
 *     <i>AWS Cloud Map Developer Guide</i>.</p>
 */
export class CreateHttpNamespaceCommand extends $Command<
  CreateHttpNamespaceCommandInput,
  CreateHttpNamespaceCommandOutput,
  ServiceDiscoveryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHttpNamespaceCommandInput) {
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
  ): Handler<CreateHttpNamespaceCommandInput, CreateHttpNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "CreateHttpNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHttpNamespaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHttpNamespaceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHttpNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateHttpNamespaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHttpNamespaceCommandOutput> {
    return deserializeAws_json1_1CreateHttpNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
