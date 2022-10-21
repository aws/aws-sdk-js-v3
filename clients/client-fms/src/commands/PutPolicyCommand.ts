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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import {
  PutPolicyRequest,
  PutPolicyRequestFilterSensitiveLog,
  PutPolicyResponse,
  PutPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1PutPolicyCommand, serializeAws_json1_1PutPolicyCommand } from "../protocols/Aws_json1_1";

export interface PutPolicyCommandInput extends PutPolicyRequest {}
export interface PutPolicyCommandOutput extends PutPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates an Firewall Manager policy.</p>
 *          <p>Firewall Manager provides the following types of policies: </p>
 *          <ul>
 *             <li>
 *                <p>An WAF policy (type WAFV2), which defines rule groups to run first in the
 *               corresponding WAF web ACL and rule groups to run last in the web ACL.</p>
 *             </li>
 *             <li>
 *                <p>An WAF Classic policy (type WAF), which defines a rule group. </p>
 *             </li>
 *             <li>
 *                <p>A Shield Advanced policy, which applies Shield Advanced protection to specified
 *           accounts and resources.</p>
 *             </li>
 *             <li>
 *                <p>A security group policy, which manages VPC security groups across your Amazon Web Services
 *           organization. </p>
 *             </li>
 *             <li>
 *                <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified
 *           Amazon VPCs.</p>
 *             </li>
 *             <li>
 *                <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for
 *             specified VPCs.</p>
 *             </li>
 *          </ul>
 *          <p>Each policy is specific to one of the types. If you want to enforce more than one
 *       policy type across accounts, create multiple policies. You can create multiple
 *       policies for each type.</p>
 *          <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more
 *         information about subscribing to Shield Advanced, see
 *     <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutPolicyCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutPolicyCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new PutPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPolicyCommandInput} for command's `input` shape.
 * @see {@link PutPolicyCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 */
export class PutPolicyCommand extends $Command<PutPolicyCommandInput, PutPolicyCommandOutput, FMSClientResolvedConfig> {
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
    this.middlewareStack.use(getEndpointPlugin(configuration, PutPolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "PutPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutPolicyResponseFilterSensitiveLog,
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
