import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";
import { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateClusterCommand,
  serializeAws_restJson1CreateClusterCommand,
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

export interface CreateClusterCommandInput extends CreateClusterRequest {}
export interface CreateClusterCommandOutput extends CreateClusterResponse, __MetadataBearer {}

/**
 * <p>Create a new cluster. A cluster is a set of redundant Regional endpoints against which you can run API calls to update or get the state of one or more routing controls. Each cluster has a name, status, Amazon Resource Name (ARN), and an array of the five cluster endpoints (one for each supported Amazon Web Services Region) that you can use with API calls to the Amazon Route 53 Application Recovery Controller cluster data plane.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, CreateClusterCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, CreateClusterCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateClusterCommand extends $Command<
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
  Route53RecoveryControlConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryControlConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateClusterCommandInput, CreateClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryControlConfigClient";
    const commandName = "CreateClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateClusterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateClusterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateClusterCommandOutput> {
    return deserializeAws_restJson1CreateClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
