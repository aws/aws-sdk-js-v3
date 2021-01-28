import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DescribeFirewallPolicyRequest, DescribeFirewallPolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeFirewallPolicyCommand,
  serializeAws_json1_0DescribeFirewallPolicyCommand,
} from "../protocols/Aws_json1_0";
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

export type DescribeFirewallPolicyCommandInput = DescribeFirewallPolicyRequest;
export type DescribeFirewallPolicyCommandOutput = DescribeFirewallPolicyResponse & __MetadataBearer;

/**
 * <p>Returns the data objects for the specified firewall policy. </p>
 */
export class DescribeFirewallPolicyCommand extends $Command<
  DescribeFirewallPolicyCommandInput,
  DescribeFirewallPolicyCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFirewallPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkFirewallClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFirewallPolicyCommandInput, DescribeFirewallPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "DescribeFirewallPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFirewallPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFirewallPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFirewallPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeFirewallPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFirewallPolicyCommandOutput> {
    return deserializeAws_json1_0DescribeFirewallPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
