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
  DeleteVpcEndpointConnectionNotificationsRequest,
  DeleteVpcEndpointConnectionNotificationsRequestFilterSensitiveLog,
  DeleteVpcEndpointConnectionNotificationsResult,
  DeleteVpcEndpointConnectionNotificationsResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DeleteVpcEndpointConnectionNotificationsCommand,
  serializeAws_ec2DeleteVpcEndpointConnectionNotificationsCommand,
} from "../protocols/Aws_ec2";

export interface DeleteVpcEndpointConnectionNotificationsCommandInput
  extends DeleteVpcEndpointConnectionNotificationsRequest {}
export interface DeleteVpcEndpointConnectionNotificationsCommandOutput
  extends DeleteVpcEndpointConnectionNotificationsResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified VPC endpoint connection notifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcEndpointConnectionNotificationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcEndpointConnectionNotificationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVpcEndpointConnectionNotificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcEndpointConnectionNotificationsCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointConnectionNotificationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeleteVpcEndpointConnectionNotificationsCommand extends $Command<
  DeleteVpcEndpointConnectionNotificationsCommandInput,
  DeleteVpcEndpointConnectionNotificationsCommandOutput,
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

  constructor(readonly input: DeleteVpcEndpointConnectionNotificationsCommandInput) {
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
  ): Handler<
    DeleteVpcEndpointConnectionNotificationsCommandInput,
    DeleteVpcEndpointConnectionNotificationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DeleteVpcEndpointConnectionNotificationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteVpcEndpointConnectionNotificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVpcEndpointConnectionNotificationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteVpcEndpointConnectionNotificationsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteVpcEndpointConnectionNotificationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteVpcEndpointConnectionNotificationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVpcEndpointConnectionNotificationsCommandOutput> {
    return deserializeAws_ec2DeleteVpcEndpointConnectionNotificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
