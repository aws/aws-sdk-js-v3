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
  CreatePublicIpv4PoolRequest,
  CreatePublicIpv4PoolRequestFilterSensitiveLog,
  CreatePublicIpv4PoolResult,
  CreatePublicIpv4PoolResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_ec2CreatePublicIpv4PoolCommand,
  serializeAws_ec2CreatePublicIpv4PoolCommand,
} from "../protocols/Aws_ec2";

export interface CreatePublicIpv4PoolCommandInput extends CreatePublicIpv4PoolRequest {}
export interface CreatePublicIpv4PoolCommandOutput extends CreatePublicIpv4PoolResult, __MetadataBearer {}

/**
 * <p>Creates a public IPv4 address pool. A public IPv4 pool is an EC2 IP address pool required for the public IPv4 CIDRs that you own and bring to Amazon Web Services to manage with IPAM. IPv6 addresses you bring to Amazon Web Services, however, use IPAM pools only. To monitor the status of pool creation, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePublicIpv4Pools.html">DescribePublicIpv4Pools</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreatePublicIpv4PoolCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreatePublicIpv4PoolCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreatePublicIpv4PoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePublicIpv4PoolCommandInput} for command's `input` shape.
 * @see {@link CreatePublicIpv4PoolCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreatePublicIpv4PoolCommand extends $Command<
  CreatePublicIpv4PoolCommandInput,
  CreatePublicIpv4PoolCommandOutput,
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

  constructor(readonly input: CreatePublicIpv4PoolCommandInput) {
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
  ): Handler<CreatePublicIpv4PoolCommandInput, CreatePublicIpv4PoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePublicIpv4PoolCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreatePublicIpv4PoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePublicIpv4PoolRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePublicIpv4PoolResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePublicIpv4PoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreatePublicIpv4PoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePublicIpv4PoolCommandOutput> {
    return deserializeAws_ec2CreatePublicIpv4PoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
