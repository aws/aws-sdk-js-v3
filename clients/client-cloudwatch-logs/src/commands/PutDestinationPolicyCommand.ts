import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { PutDestinationPolicyRequest } from "../models/models_0";
import {
  deserializeAws_json1_1PutDestinationPolicyCommand,
  serializeAws_json1_1PutDestinationPolicyCommand,
} from "../protocols/Aws_json1_1";
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

export interface PutDestinationPolicyCommandInput extends PutDestinationPolicyRequest {}
export interface PutDestinationPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates or updates an access policy associated with an existing
 *       destination. An access policy is an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies_overview.html">IAM policy document</a> that is used
 *       to authorize claims to register a subscription filter against a given destination.</p>
 *          <p>If multiple Amazon Web Services accounts are sending logs to this destination, each sender account must be
 *     listed separately in the policy. The policy does not support specifying <code>*</code>
 *     as the Principal or the use of the <code>aws:PrincipalOrgId</code> global key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutDestinationPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutDestinationPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new PutDestinationPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDestinationPolicyCommandInput} for command's `input` shape.
 * @see {@link PutDestinationPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutDestinationPolicyCommand extends $Command<
  PutDestinationPolicyCommandInput,
  PutDestinationPolicyCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutDestinationPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDestinationPolicyCommandInput, PutDestinationPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "PutDestinationPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutDestinationPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutDestinationPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutDestinationPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutDestinationPolicyCommandOutput> {
    return deserializeAws_json1_1PutDestinationPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
