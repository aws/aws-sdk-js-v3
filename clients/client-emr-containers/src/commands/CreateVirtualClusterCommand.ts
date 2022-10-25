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

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import {
  CreateVirtualClusterRequest,
  CreateVirtualClusterRequestFilterSensitiveLog,
  CreateVirtualClusterResponse,
  CreateVirtualClusterResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateVirtualClusterCommand,
  serializeAws_restJson1CreateVirtualClusterCommand,
} from "../protocols/Aws_restJson1";

export interface CreateVirtualClusterCommandInput extends CreateVirtualClusterRequest {}
export interface CreateVirtualClusterCommandOutput extends CreateVirtualClusterResponse, __MetadataBearer {}

/**
 * <p>Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You
 *          can create, describe, list and delete virtual clusters. They do not consume any additional
 *          resource in your system. A single virtual cluster maps to a single Kubernetes namespace.
 *          Given this relationship, you can model virtual clusters the same way you model Kubernetes
 *          namespaces to meet your requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, CreateVirtualClusterCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, CreateVirtualClusterCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new CreateVirtualClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVirtualClusterCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualClusterCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 */
export class CreateVirtualClusterCommand extends $Command<
  CreateVirtualClusterCommandInput,
  CreateVirtualClusterCommandOutput,
  EMRContainersClientResolvedConfig
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

  constructor(readonly input: CreateVirtualClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRContainersClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVirtualClusterCommandInput, CreateVirtualClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVirtualClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "CreateVirtualClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVirtualClusterRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateVirtualClusterResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVirtualClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateVirtualClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVirtualClusterCommandOutput> {
    return deserializeAws_restJson1CreateVirtualClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
