import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetAssociatedIpv6PoolCidrsRequest, GetAssociatedIpv6PoolCidrsResult } from "../models/models_4";
import {
  deserializeAws_ec2GetAssociatedIpv6PoolCidrsCommand,
  serializeAws_ec2GetAssociatedIpv6PoolCidrsCommand,
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetAssociatedIpv6PoolCidrsCommandInput = GetAssociatedIpv6PoolCidrsRequest;
export type GetAssociatedIpv6PoolCidrsCommandOutput = GetAssociatedIpv6PoolCidrsResult & __MetadataBearer;

/**
 * <p>Gets information about the IPv6 CIDR block associations for a specified IPv6 address pool.</p>
 */
export class GetAssociatedIpv6PoolCidrsCommand extends $Command<
  GetAssociatedIpv6PoolCidrsCommandInput,
  GetAssociatedIpv6PoolCidrsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetAssociatedIpv6PoolCidrsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAssociatedIpv6PoolCidrsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAssociatedIpv6PoolCidrsResult.filterSensitiveLog,
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
