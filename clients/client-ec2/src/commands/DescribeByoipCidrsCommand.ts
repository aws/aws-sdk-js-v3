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
  DescribeByoipCidrsRequest,
  DescribeByoipCidrsRequestFilterSensitiveLog,
  DescribeByoipCidrsResult,
  DescribeByoipCidrsResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeByoipCidrsCommand,
  serializeAws_ec2DescribeByoipCidrsCommand,
} from "../protocols/Aws_ec2";

export interface DescribeByoipCidrsCommandInput extends DescribeByoipCidrsRequest {}
export interface DescribeByoipCidrsCommandOutput extends DescribeByoipCidrsResult, __MetadataBearer {}

/**
 * <p>Describes the IP address ranges that were specified in calls to <a>ProvisionByoipCidr</a>.</p>
 *          <p>To describe the address pools that were created when you provisioned the address
 *           ranges, use <a>DescribePublicIpv4Pools</a> or <a>DescribeIpv6Pools</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeByoipCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeByoipCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeByoipCidrsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeByoipCidrsCommandInput} for command's `input` shape.
 * @see {@link DescribeByoipCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeByoipCidrsCommand extends $Command<
  DescribeByoipCidrsCommandInput,
  DescribeByoipCidrsCommandOutput,
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

  constructor(readonly input: DescribeByoipCidrsCommandInput) {
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
  ): Handler<DescribeByoipCidrsCommandInput, DescribeByoipCidrsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeByoipCidrsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeByoipCidrsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeByoipCidrsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeByoipCidrsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeByoipCidrsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeByoipCidrsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeByoipCidrsCommandOutput> {
    return deserializeAws_ec2DescribeByoipCidrsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
