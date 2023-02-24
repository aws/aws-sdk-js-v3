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
  DescribeStaleSecurityGroupsRequest,
  DescribeStaleSecurityGroupsRequestFilterSensitiveLog,
  DescribeStaleSecurityGroupsResult,
  DescribeStaleSecurityGroupsResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeStaleSecurityGroupsCommand,
  serializeAws_ec2DescribeStaleSecurityGroupsCommand,
} from "../protocols/Aws_ec2";

export interface DescribeStaleSecurityGroupsCommandInput extends DescribeStaleSecurityGroupsRequest {}
export interface DescribeStaleSecurityGroupsCommandOutput extends DescribeStaleSecurityGroupsResult, __MetadataBearer {}

/**
 * <p>[VPC only] Describes the stale security group rules for security groups in a specified VPC.
 *           Rules are stale when they reference a deleted security group in the same VPC or in a peer VPC,
 *           or if they reference a security group in a peer VPC for which the VPC peering connection has
 *           been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeStaleSecurityGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeStaleSecurityGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeStaleSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStaleSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeStaleSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeStaleSecurityGroupsCommand extends $Command<
  DescribeStaleSecurityGroupsCommandInput,
  DescribeStaleSecurityGroupsCommandOutput,
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

  constructor(readonly input: DescribeStaleSecurityGroupsCommandInput) {
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
  ): Handler<DescribeStaleSecurityGroupsCommandInput, DescribeStaleSecurityGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStaleSecurityGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeStaleSecurityGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStaleSecurityGroupsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeStaleSecurityGroupsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStaleSecurityGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeStaleSecurityGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStaleSecurityGroupsCommandOutput> {
    return deserializeAws_ec2DescribeStaleSecurityGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
