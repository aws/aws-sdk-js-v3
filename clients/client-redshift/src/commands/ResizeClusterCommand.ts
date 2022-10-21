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

import { ResizeClusterMessage, ResizeClusterMessageFilterSensitiveLog } from "../models/models_0";
import { ResizeClusterResult, ResizeClusterResultFilterSensitiveLog } from "../models/models_1";
import {
  deserializeAws_queryResizeClusterCommand,
  serializeAws_queryResizeClusterCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface ResizeClusterCommandInput extends ResizeClusterMessage {}
export interface ResizeClusterCommandOutput extends ResizeClusterResult, __MetadataBearer {}

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ResizeClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ResizeClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ResizeClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResizeClusterCommandInput} for command's `input` shape.
 * @see {@link ResizeClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class ResizeClusterCommand extends $Command<
  ResizeClusterCommandInput,
  ResizeClusterCommandOutput,
  RedshiftClientResolvedConfig
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
    this.middlewareStack.use(getEndpointPlugin(configuration, ResizeClusterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ResizeClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResizeClusterMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ResizeClusterResultFilterSensitiveLog,
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
