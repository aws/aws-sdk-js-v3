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
  ExportTransitGatewayRoutesRequest,
  ExportTransitGatewayRoutesRequestFilterSensitiveLog,
  ExportTransitGatewayRoutesResult,
  ExportTransitGatewayRoutesResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2ExportTransitGatewayRoutesCommand,
  serializeAws_ec2ExportTransitGatewayRoutesCommand,
} from "../protocols/Aws_ec2";

export interface ExportTransitGatewayRoutesCommandInput extends ExportTransitGatewayRoutesRequest {}
export interface ExportTransitGatewayRoutesCommandOutput extends ExportTransitGatewayRoutesResult, __MetadataBearer {}

/**
 * <p>Exports routes from the specified transit gateway route table to the specified S3 bucket.
 *          By default, all routes are exported. Alternatively, you can filter by CIDR range.</p>
 *          <p>The routes are saved to the specified bucket in a JSON file. For more information, see
 *                 <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html#tgw-export-route-tables">Export Route Tables
 *                 to Amazon S3</a> in <i>Transit Gateways</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportTransitGatewayRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportTransitGatewayRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ExportTransitGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportTransitGatewayRoutesCommandInput} for command's `input` shape.
 * @see {@link ExportTransitGatewayRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ExportTransitGatewayRoutesCommand extends $Command<
  ExportTransitGatewayRoutesCommandInput,
  ExportTransitGatewayRoutesCommandOutput,
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

  constructor(readonly input: ExportTransitGatewayRoutesCommandInput) {
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
  ): Handler<ExportTransitGatewayRoutesCommandInput, ExportTransitGatewayRoutesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportTransitGatewayRoutesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ExportTransitGatewayRoutesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportTransitGatewayRoutesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExportTransitGatewayRoutesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportTransitGatewayRoutesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ExportTransitGatewayRoutesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportTransitGatewayRoutesCommandOutput> {
    return deserializeAws_ec2ExportTransitGatewayRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
