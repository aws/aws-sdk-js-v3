import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { PutPolicyRequest, PutPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1PutPolicyCommand, serializeAws_json1_1PutPolicyCommand } from "../protocols/Aws_json1_1";
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

export type PutPolicyCommandInput = PutPolicyRequest;
export type PutPolicyCommandOutput = PutPolicyResponse & __MetadataBearer;

/**
 * <p>Creates an AWS Firewall Manager policy.</p>
 *          <p>Firewall Manager provides the following types of policies: </p>
 *          <ul>
 *             <li>
 *                <p>An AWS WAF policy (type WAFV2), which defines rule groups to run first in the
 *               corresponding AWS WAF web ACL and rule groups to run last in the web ACL.</p>
 *             </li>
 *             <li>
 *                <p>An AWS WAF Classic policy (type WAF), which defines a rule group. </p>
 *             </li>
 *             <li>
 *                <p>A Shield Advanced policy, which applies Shield Advanced protection to specified
 *           accounts and resources.</p>
 *             </li>
 *             <li>
 *                <p>A security group policy, which manages VPC security groups across your AWS
 *           organization. </p>
 *             </li>
 *             <li>
 *                <p>An AWS Network Firewall policy, which provides firewall rules to filter network traffic in specified
 *           Amazon VPCs.</p>
 *             </li>
 *          </ul>
 *          <p>Each policy is specific to one of the types. If you want to enforce more than one
 *       policy type across accounts, create multiple policies. You can create multiple
 *       policies for each type.</p>
 *          <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more
 *         information about subscribing to Shield Advanced, see
 *     <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
 */
export class PutPolicyCommand extends $Command<PutPolicyCommandInput, PutPolicyCommandOutput, FMSClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutPolicyCommandInput, PutPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "PutPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPolicyCommandOutput> {
    return deserializeAws_json1_1PutPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
