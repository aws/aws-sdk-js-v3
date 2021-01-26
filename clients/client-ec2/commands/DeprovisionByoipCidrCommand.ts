import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeprovisionByoipCidrRequest, DeprovisionByoipCidrResult } from "../models/models_2";
import {
  deserializeAws_ec2DeprovisionByoipCidrCommand,
  serializeAws_ec2DeprovisionByoipCidrCommand,
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

export type DeprovisionByoipCidrCommandInput = DeprovisionByoipCidrRequest;
export type DeprovisionByoipCidrCommandOutput = DeprovisionByoipCidrResult & __MetadataBearer;

/**
 * <p>Releases the specified address range that you provisioned for use with your AWS resources
 *          through bring your own IP addresses (BYOIP) and deletes the corresponding address pool.</p>
 *          <p>Before you can release an address range, you must stop advertising it using <a>WithdrawByoipCidr</a> and you must not have any IP addresses allocated from its
 *          address range.</p>
 */
export class DeprovisionByoipCidrCommand extends $Command<
  DeprovisionByoipCidrCommandInput,
  DeprovisionByoipCidrCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeprovisionByoipCidrCommandInput) {
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
  ): Handler<DeprovisionByoipCidrCommandInput, DeprovisionByoipCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeprovisionByoipCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeprovisionByoipCidrRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeprovisionByoipCidrResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeprovisionByoipCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeprovisionByoipCidrCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeprovisionByoipCidrCommandOutput> {
    return deserializeAws_ec2DeprovisionByoipCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
