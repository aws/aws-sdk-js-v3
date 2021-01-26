import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { WithdrawByoipCidrRequest, WithdrawByoipCidrResult } from "../models/models_5";
import {
  deserializeAws_ec2WithdrawByoipCidrCommand,
  serializeAws_ec2WithdrawByoipCidrCommand,
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

export type WithdrawByoipCidrCommandInput = WithdrawByoipCidrRequest;
export type WithdrawByoipCidrCommandOutput = WithdrawByoipCidrResult & __MetadataBearer;

/**
 * <p>Stops advertising an address range that is provisioned as an address pool.</p>
 *          <p>You can perform this operation at most once every 10 seconds, even if you specify different
 *          address ranges each time.</p>
 *          <p>It can take a few minutes before traffic to the specified addresses stops routing to AWS
 *           because of BGP propagation delays.</p>
 */
export class WithdrawByoipCidrCommand extends $Command<
  WithdrawByoipCidrCommandInput,
  WithdrawByoipCidrCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: WithdrawByoipCidrCommandInput) {
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
  ): Handler<WithdrawByoipCidrCommandInput, WithdrawByoipCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "WithdrawByoipCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: WithdrawByoipCidrRequest.filterSensitiveLog,
      outputFilterSensitiveLog: WithdrawByoipCidrResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: WithdrawByoipCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2WithdrawByoipCidrCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<WithdrawByoipCidrCommandOutput> {
    return deserializeAws_ec2WithdrawByoipCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
