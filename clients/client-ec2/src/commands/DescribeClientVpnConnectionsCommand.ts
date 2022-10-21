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
  DescribeClientVpnConnectionsRequest,
  DescribeClientVpnConnectionsRequestFilterSensitiveLog,
  DescribeClientVpnConnectionsResult,
  DescribeClientVpnConnectionsResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeClientVpnConnectionsCommand,
  serializeAws_ec2DescribeClientVpnConnectionsCommand,
} from "../protocols/Aws_ec2";

export interface DescribeClientVpnConnectionsCommandInput extends DescribeClientVpnConnectionsRequest {}
export interface DescribeClientVpnConnectionsCommandOutput
  extends DescribeClientVpnConnectionsResult,
    __MetadataBearer {}

/**
 * <p>Describes active client connections and connections that have been terminated within the last 60
 * 			minutes for the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeClientVpnConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClientVpnConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeClientVpnConnectionsCommand extends $Command<
  DescribeClientVpnConnectionsCommandInput,
  DescribeClientVpnConnectionsCommandOutput,
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

  constructor(readonly input: DescribeClientVpnConnectionsCommandInput) {
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
  ): Handler<DescribeClientVpnConnectionsCommandInput, DescribeClientVpnConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClientVpnConnectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeClientVpnConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClientVpnConnectionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeClientVpnConnectionsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClientVpnConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeClientVpnConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClientVpnConnectionsCommandOutput> {
    return deserializeAws_ec2DescribeClientVpnConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
