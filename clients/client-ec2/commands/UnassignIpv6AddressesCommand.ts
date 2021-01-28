import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { UnassignIpv6AddressesRequest, UnassignIpv6AddressesResult } from "../models/models_5";
import {
  deserializeAws_ec2UnassignIpv6AddressesCommand,
  serializeAws_ec2UnassignIpv6AddressesCommand,
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

export type UnassignIpv6AddressesCommandInput = UnassignIpv6AddressesRequest;
export type UnassignIpv6AddressesCommandOutput = UnassignIpv6AddressesResult & __MetadataBearer;

/**
 * <p>Unassigns one or more IPv6 addresses from a network interface.</p>
 */
export class UnassignIpv6AddressesCommand extends $Command<
  UnassignIpv6AddressesCommandInput,
  UnassignIpv6AddressesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UnassignIpv6AddressesCommandInput) {
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
  ): Handler<UnassignIpv6AddressesCommandInput, UnassignIpv6AddressesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "UnassignIpv6AddressesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnassignIpv6AddressesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UnassignIpv6AddressesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnassignIpv6AddressesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2UnassignIpv6AddressesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnassignIpv6AddressesCommandOutput> {
    return deserializeAws_ec2UnassignIpv6AddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
