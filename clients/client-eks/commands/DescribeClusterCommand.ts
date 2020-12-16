import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DescribeClusterRequest, DescribeClusterResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeClusterCommand,
  serializeAws_restJson1DescribeClusterCommand,
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

export type DescribeClusterCommandInput = DescribeClusterRequest;
export type DescribeClusterCommandOutput = DescribeClusterResponse & __MetadataBearer;

/**
 * <p>Returns descriptive information about an Amazon EKS cluster.</p>
 *         <p>The API server endpoint and certificate authority data returned by this operation are
 *             required for <code>kubelet</code> and <code>kubectl</code> to communicate with your
 *             Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html">Create a
 *                 kubeconfig for Amazon EKS</a>.</p>
 *         <note>
 *             <p>The API server endpoint and certificate authority data aren't available until the
 *                 cluster reaches the <code>ACTIVE</code> state.</p>
 *         </note>
 */
export class DescribeClusterCommand extends $Command<
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeClusterCommandInput, DescribeClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DescribeClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClusterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeClusterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClusterCommandOutput> {
    return deserializeAws_restJson1DescribeClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
