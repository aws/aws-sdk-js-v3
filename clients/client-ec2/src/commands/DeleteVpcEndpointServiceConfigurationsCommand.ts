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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DeleteVpcEndpointServiceConfigurationsRequest,
  DeleteVpcEndpointServiceConfigurationsRequestFilterSensitiveLog,
  DeleteVpcEndpointServiceConfigurationsResult,
  DeleteVpcEndpointServiceConfigurationsResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DeleteVpcEndpointServiceConfigurationsCommand,
  serializeAws_ec2DeleteVpcEndpointServiceConfigurationsCommand,
} from "../protocols/Aws_ec2";

export interface DeleteVpcEndpointServiceConfigurationsCommandInput
  extends DeleteVpcEndpointServiceConfigurationsRequest {}
export interface DeleteVpcEndpointServiceConfigurationsCommandOutput
  extends DeleteVpcEndpointServiceConfigurationsResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified VPC endpoint service configurations. Before you can delete
 *             an endpoint service configuration, you must reject any <code>Available</code> or
 *             <code>PendingAcceptance</code> interface endpoint connections that are attached to
 *             the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcEndpointServiceConfigurationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcEndpointServiceConfigurationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVpcEndpointServiceConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcEndpointServiceConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointServiceConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeleteVpcEndpointServiceConfigurationsCommand extends $Command<
  DeleteVpcEndpointServiceConfigurationsCommandInput,
  DeleteVpcEndpointServiceConfigurationsCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: DeleteVpcEndpointServiceConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVpcEndpointServiceConfigurationsCommandInput, DeleteVpcEndpointServiceConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVpcEndpointServiceConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteVpcEndpointServiceConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVpcEndpointServiceConfigurationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteVpcEndpointServiceConfigurationsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteVpcEndpointServiceConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteVpcEndpointServiceConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVpcEndpointServiceConfigurationsCommandOutput> {
    return deserializeAws_ec2DeleteVpcEndpointServiceConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
