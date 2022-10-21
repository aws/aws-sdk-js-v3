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
  DescribeTrafficMirrorTargetsRequest,
  DescribeTrafficMirrorTargetsRequestFilterSensitiveLog,
  DescribeTrafficMirrorTargetsResult,
  DescribeTrafficMirrorTargetsResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeTrafficMirrorTargetsCommand,
  serializeAws_ec2DescribeTrafficMirrorTargetsCommand,
} from "../protocols/Aws_ec2";

export interface DescribeTrafficMirrorTargetsCommandInput extends DescribeTrafficMirrorTargetsRequest {}
export interface DescribeTrafficMirrorTargetsCommandOutput
  extends DescribeTrafficMirrorTargetsResult,
    __MetadataBearer {}

/**
 * <p>Information about one or more Traffic Mirror targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTrafficMirrorTargetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTrafficMirrorTargetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTrafficMirrorTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrafficMirrorTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrafficMirrorTargetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeTrafficMirrorTargetsCommand extends $Command<
  DescribeTrafficMirrorTargetsCommandInput,
  DescribeTrafficMirrorTargetsCommandOutput,
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

  constructor(readonly input: DescribeTrafficMirrorTargetsCommandInput) {
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
  ): Handler<DescribeTrafficMirrorTargetsCommandInput, DescribeTrafficMirrorTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTrafficMirrorTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTrafficMirrorTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTrafficMirrorTargetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeTrafficMirrorTargetsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTrafficMirrorTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeTrafficMirrorTargetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTrafficMirrorTargetsCommandOutput> {
    return deserializeAws_ec2DescribeTrafficMirrorTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
