import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ResizeClusterMessage } from "../models/models_0";
import { ResizeClusterResult } from "../models/models_1";
import {
  deserializeAws_queryResizeClusterCommand,
  serializeAws_queryResizeClusterCommand,
} from "../protocols/Aws_query";
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

export type ResizeClusterCommandInput = ResizeClusterMessage;
export type ResizeClusterCommandOutput = ResizeClusterResult & __MetadataBearer;

/**
 * <p>Changes the size of the cluster. You can change the cluster's type, or change the
 *             number or type of nodes. The default behavior is to use the elastic resize method. With
 *             an elastic resize, your cluster is available for read and write operations more quickly
 *             than with the classic resize method. </p>
 *         <p>Elastic resize operations have the following restrictions:</p>
 *         <ul>
 *             <li>
 *                 <p>You can only resize clusters of the following types:</p>
 *                 <ul>
 *                   <li>
 *                         <p>dc1.large (if your cluster is in a VPC)</p>
 *                     </li>
 *                   <li>
 *                         <p>dc1.8xlarge (if your cluster is in a VPC)</p>
 *                     </li>
 *                   <li>
 *                         <p>dc2.large</p>
 *                     </li>
 *                   <li>
 *                         <p>dc2.8xlarge</p>
 *                     </li>
 *                   <li>
 *                         <p>ds2.xlarge</p>
 *                     </li>
 *                   <li>
 *                         <p>ds2.8xlarge</p>
 *                     </li>
 *                   <li>
 *                         <p>ra3.xlplus</p>
 *                     </li>
 *                   <li>
 *                         <p>ra3.4xlarge</p>
 *                     </li>
 *                   <li>
 *                         <p>ra3.16xlarge</p>
 *                     </li>
 *                </ul>
 *             </li>
 *             <li>
 *                 <p>The type of nodes that you add must match the node type for the
 *                     cluster.</p>
 *             </li>
 *          </ul>
 */
export class ResizeClusterCommand extends $Command<
  ResizeClusterCommandInput,
  ResizeClusterCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResizeClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResizeClusterCommandInput, ResizeClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ResizeClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResizeClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ResizeClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResizeClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryResizeClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResizeClusterCommandOutput> {
    return deserializeAws_queryResizeClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
