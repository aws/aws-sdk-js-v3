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
  DescribeClientVpnRoutesRequest,
  DescribeClientVpnRoutesRequestFilterSensitiveLog,
  DescribeClientVpnRoutesResult,
  DescribeClientVpnRoutesResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeClientVpnRoutesCommand,
  serializeAws_ec2DescribeClientVpnRoutesCommand,
} from "../protocols/Aws_ec2";

export interface DescribeClientVpnRoutesCommandInput extends DescribeClientVpnRoutesRequest {}
export interface DescribeClientVpnRoutesCommandOutput extends DescribeClientVpnRoutesResult, __MetadataBearer {}

/**
 * <p>Describes the routes for the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeClientVpnRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClientVpnRoutesCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeClientVpnRoutesCommand extends $Command<
  DescribeClientVpnRoutesCommandInput,
  DescribeClientVpnRoutesCommandOutput,
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

  constructor(readonly input: DescribeClientVpnRoutesCommandInput) {
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
  ): Handler<DescribeClientVpnRoutesCommandInput, DescribeClientVpnRoutesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClientVpnRoutesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeClientVpnRoutesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClientVpnRoutesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeClientVpnRoutesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClientVpnRoutesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeClientVpnRoutesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClientVpnRoutesCommandOutput> {
    return deserializeAws_ec2DescribeClientVpnRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
