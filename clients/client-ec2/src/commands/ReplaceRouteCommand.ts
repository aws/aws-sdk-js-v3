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
import { ReplaceRouteRequest, ReplaceRouteRequestFilterSensitiveLog } from "../models/models_6";
import { deserializeAws_ec2ReplaceRouteCommand, serializeAws_ec2ReplaceRouteCommand } from "../protocols/Aws_ec2";

export interface ReplaceRouteCommandInput extends ReplaceRouteRequest {}
export interface ReplaceRouteCommandOutput extends __MetadataBearer {}

/**
 * <p>Replaces an existing route within a route table in a VPC.</p>
 *          <p>You must specify either a destination CIDR block or a prefix list ID. You must also specify
 *            exactly one of the resources from the parameter list, or reset the local route to its default
 *            target.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReplaceRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplaceRouteCommandInput} for command's `input` shape.
 * @see {@link ReplaceRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ReplaceRouteCommand extends $Command<
  ReplaceRouteCommandInput,
  ReplaceRouteCommandOutput,
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

  constructor(readonly input: ReplaceRouteCommandInput) {
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
  ): Handler<ReplaceRouteCommandInput, ReplaceRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ReplaceRouteCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReplaceRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReplaceRouteRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReplaceRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ReplaceRouteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReplaceRouteCommandOutput> {
    return deserializeAws_ec2ReplaceRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
