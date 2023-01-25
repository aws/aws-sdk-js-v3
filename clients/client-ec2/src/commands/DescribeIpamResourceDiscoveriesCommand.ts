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
  DescribeIpamResourceDiscoveriesRequest,
  DescribeIpamResourceDiscoveriesRequestFilterSensitiveLog,
  DescribeIpamResourceDiscoveriesResult,
  DescribeIpamResourceDiscoveriesResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeIpamResourceDiscoveriesCommand,
  serializeAws_ec2DescribeIpamResourceDiscoveriesCommand,
} from "../protocols/Aws_ec2";

export interface DescribeIpamResourceDiscoveriesCommandInput extends DescribeIpamResourceDiscoveriesRequest {}
export interface DescribeIpamResourceDiscoveriesCommandOutput
  extends DescribeIpamResourceDiscoveriesResult,
    __MetadataBearer {}

/**
 * <p>Describes IPAM resource discoveries. A resource discovery is an IPAM component that enables IPAM Service to manage and monitor resources that belong to the owning account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamResourceDiscoveriesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamResourceDiscoveriesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeIpamResourceDiscoveriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIpamResourceDiscoveriesCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamResourceDiscoveriesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeIpamResourceDiscoveriesCommand extends $Command<
  DescribeIpamResourceDiscoveriesCommandInput,
  DescribeIpamResourceDiscoveriesCommandOutput,
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

  constructor(readonly input: DescribeIpamResourceDiscoveriesCommandInput) {
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
  ): Handler<DescribeIpamResourceDiscoveriesCommandInput, DescribeIpamResourceDiscoveriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeIpamResourceDiscoveriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeIpamResourceDiscoveriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeIpamResourceDiscoveriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeIpamResourceDiscoveriesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeIpamResourceDiscoveriesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeIpamResourceDiscoveriesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeIpamResourceDiscoveriesCommandOutput> {
    return deserializeAws_ec2DescribeIpamResourceDiscoveriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
