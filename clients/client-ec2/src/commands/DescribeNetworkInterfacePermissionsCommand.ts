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
  DescribeNetworkInterfacePermissionsRequest,
  DescribeNetworkInterfacePermissionsRequestFilterSensitiveLog,
  DescribeNetworkInterfacePermissionsResult,
  DescribeNetworkInterfacePermissionsResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeNetworkInterfacePermissionsCommand,
  serializeAws_ec2DescribeNetworkInterfacePermissionsCommand,
} from "../protocols/Aws_ec2";

export interface DescribeNetworkInterfacePermissionsCommandInput extends DescribeNetworkInterfacePermissionsRequest {}
export interface DescribeNetworkInterfacePermissionsCommandOutput
  extends DescribeNetworkInterfacePermissionsResult,
    __MetadataBearer {}

/**
 * <p>Describes the permissions for your network interfaces. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInterfacePermissionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInterfacePermissionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeNetworkInterfacePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNetworkInterfacePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInterfacePermissionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeNetworkInterfacePermissionsCommand extends $Command<
  DescribeNetworkInterfacePermissionsCommandInput,
  DescribeNetworkInterfacePermissionsCommandOutput,
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

  constructor(readonly input: DescribeNetworkInterfacePermissionsCommandInput) {
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
  ): Handler<DescribeNetworkInterfacePermissionsCommandInput, DescribeNetworkInterfacePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNetworkInterfacePermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeNetworkInterfacePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeNetworkInterfacePermissionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeNetworkInterfacePermissionsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeNetworkInterfacePermissionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeNetworkInterfacePermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNetworkInterfacePermissionsCommandOutput> {
    return deserializeAws_ec2DescribeNetworkInterfacePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
