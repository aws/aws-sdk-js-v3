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
  GetAssociatedIpv6PoolCidrsRequest,
  GetAssociatedIpv6PoolCidrsRequestFilterSensitiveLog,
  GetAssociatedIpv6PoolCidrsResult,
  GetAssociatedIpv6PoolCidrsResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2GetAssociatedIpv6PoolCidrsCommand,
  serializeAws_ec2GetAssociatedIpv6PoolCidrsCommand,
} from "../protocols/Aws_ec2";

export interface GetAssociatedIpv6PoolCidrsCommandInput extends GetAssociatedIpv6PoolCidrsRequest {}
export interface GetAssociatedIpv6PoolCidrsCommandOutput extends GetAssociatedIpv6PoolCidrsResult, __MetadataBearer {}

/**
 * <p>Gets information about the IPv6 CIDR block associations for a specified IPv6 address pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetAssociatedIpv6PoolCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetAssociatedIpv6PoolCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetAssociatedIpv6PoolCidrsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssociatedIpv6PoolCidrsCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedIpv6PoolCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class GetAssociatedIpv6PoolCidrsCommand extends $Command<
  GetAssociatedIpv6PoolCidrsCommandInput,
  GetAssociatedIpv6PoolCidrsCommandOutput,
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

  constructor(readonly input: GetAssociatedIpv6PoolCidrsCommandInput) {
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
  ): Handler<GetAssociatedIpv6PoolCidrsCommandInput, GetAssociatedIpv6PoolCidrsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAssociatedIpv6PoolCidrsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetAssociatedIpv6PoolCidrsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAssociatedIpv6PoolCidrsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAssociatedIpv6PoolCidrsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAssociatedIpv6PoolCidrsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetAssociatedIpv6PoolCidrsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAssociatedIpv6PoolCidrsCommandOutput> {
    return deserializeAws_ec2GetAssociatedIpv6PoolCidrsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
