import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeClientVpnAuthorizationRulesRequest,
  DescribeClientVpnAuthorizationRulesResult,
} from "../models/models_2";
import {
  deserializeAws_ec2DescribeClientVpnAuthorizationRulesCommand,
  serializeAws_ec2DescribeClientVpnAuthorizationRulesCommand,
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

export type DescribeClientVpnAuthorizationRulesCommandInput = DescribeClientVpnAuthorizationRulesRequest;
export type DescribeClientVpnAuthorizationRulesCommandOutput = DescribeClientVpnAuthorizationRulesResult &
  __MetadataBearer;

/**
 * <p>Describes the authorization rules for a specified Client VPN endpoint.</p>
 */
export class DescribeClientVpnAuthorizationRulesCommand extends $Command<
  DescribeClientVpnAuthorizationRulesCommandInput,
  DescribeClientVpnAuthorizationRulesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClientVpnAuthorizationRulesCommandInput) {
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
  ): Handler<DescribeClientVpnAuthorizationRulesCommandInput, DescribeClientVpnAuthorizationRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeClientVpnAuthorizationRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClientVpnAuthorizationRulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeClientVpnAuthorizationRulesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeClientVpnAuthorizationRulesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeClientVpnAuthorizationRulesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClientVpnAuthorizationRulesCommandOutput> {
    return deserializeAws_ec2DescribeClientVpnAuthorizationRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
