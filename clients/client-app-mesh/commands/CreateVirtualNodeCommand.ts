import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { CreateVirtualNodeInput, CreateVirtualNodeOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateVirtualNodeCommand,
  serializeAws_restJson1CreateVirtualNodeCommand,
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

export type CreateVirtualNodeCommandInput = CreateVirtualNodeInput;
export type CreateVirtualNodeCommandOutput = CreateVirtualNodeOutput & __MetadataBearer;

/**
 * <p>Creates a virtual node within a service mesh.</p>
 *          <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS
 *          service or a Kubernetes deployment. When you create a virtual node, you can specify the
 *          service discovery information for your task group, and whether the proxy running in a task
 *          group will communicate with other proxies using Transport Layer Security (TLS).</p>
 *          <p>You define a <code>listener</code> for any inbound traffic that your virtual node
 *          expects. Any virtual service that your virtual node expects to communicate to is specified
 *          as a <code>backend</code>.</p>
 *          <p>The response metadata for your new virtual node contains the <code>arn</code> that is
 *          associated with the virtual node. Set this value (either the full ARN or the truncated
 *          resource name: for example, <code>mesh/default/virtualNode/simpleapp</code>) as the
 *             <code>APPMESH_VIRTUAL_NODE_NAME</code> environment variable for your task group's Envoy
 *          proxy container in your task definition or pod spec. This is then mapped to the
 *             <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p>
 *          <note>
 *             <p>If you require your Envoy stats or tracing to use a different name, you can override
 *             the <code>node.cluster</code> value that is set by
 *                <code>APPMESH_VIRTUAL_NODE_NAME</code> with the
 *                <code>APPMESH_VIRTUAL_NODE_CLUSTER</code> environment variable.</p>
 *          </note>
 *          <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>.</p>
 */
export class CreateVirtualNodeCommand extends $Command<
  CreateVirtualNodeCommandInput,
  CreateVirtualNodeCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVirtualNodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVirtualNodeCommandInput, CreateVirtualNodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "CreateVirtualNodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVirtualNodeInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVirtualNodeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVirtualNodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateVirtualNodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVirtualNodeCommandOutput> {
    return deserializeAws_restJson1CreateVirtualNodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
