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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import {
  CreateNodegroupRequest,
  CreateNodegroupRequestFilterSensitiveLog,
  CreateNodegroupResponse,
  CreateNodegroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateNodegroupCommand,
  serializeAws_restJson1CreateNodegroupCommand,
} from "../protocols/Aws_restJson1";

export interface CreateNodegroupCommandInput extends CreateNodegroupRequest {}
export interface CreateNodegroupCommandOutput extends CreateNodegroupResponse, __MetadataBearer {}

/**
 * <p>Creates a managed node group for an Amazon EKS cluster. You can only create a
 *             node group for your cluster that is equal to the current Kubernetes version for the
 *             cluster. All node groups are created with the latest AMI release version for the
 *             respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using
 *             a launch template. For more information about using launch templates, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch
 *                 template support</a>.</p>
 *          <p>An Amazon EKS managed node group is an Amazon EC2
 *             Auto Scaling group and associated Amazon EC2 instances that are managed by
 *                 Amazon Web Services for an Amazon EKS cluster. For more information, see
 *                 <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed node groups</a> in the <i>Amazon EKS User Guide</i>.</p>
 *          <note>
 *             <p>Windows AMI types are only supported for commercial Regions that support Windows
 *                     Amazon EKS.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateNodegroupCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateNodegroupCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new CreateNodegroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNodegroupCommandInput} for command's `input` shape.
 * @see {@link CreateNodegroupCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 */
export class CreateNodegroupCommand extends $Command<
  CreateNodegroupCommandInput,
  CreateNodegroupCommandOutput,
  EKSClientResolvedConfig
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

  constructor(readonly input: CreateNodegroupCommandInput) {
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
  ): Handler<CreateNodegroupCommandInput, CreateNodegroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNodegroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "CreateNodegroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNodegroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateNodegroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateNodegroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateNodegroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNodegroupCommandOutput> {
    return deserializeAws_restJson1CreateNodegroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
