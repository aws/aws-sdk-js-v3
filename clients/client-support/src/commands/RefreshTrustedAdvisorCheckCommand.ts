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

import {
  RefreshTrustedAdvisorCheckRequest,
  RefreshTrustedAdvisorCheckRequestFilterSensitiveLog,
  RefreshTrustedAdvisorCheckResponse,
  RefreshTrustedAdvisorCheckResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand,
  serializeAws_json1_1RefreshTrustedAdvisorCheckCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

export interface RefreshTrustedAdvisorCheckCommandInput extends RefreshTrustedAdvisorCheckRequest {}
export interface RefreshTrustedAdvisorCheckCommandOutput extends RefreshTrustedAdvisorCheckResponse, __MetadataBearer {}

/**
 * <p>Refreshes the Trusted Advisor check that you specify using the check ID. You can get the
 *             check IDs by calling the <a>DescribeTrustedAdvisorChecks</a>
 *             operation.</p>
 *          <p>Some checks are refreshed automatically. If you call the
 *             <code>RefreshTrustedAdvisorCheck</code> operation to refresh them, you might see
 *             the <code>InvalidParameterValue</code> error.</p>
 *          <p>The response contains a <a>TrustedAdvisorCheckRefreshStatus</a>
 *             object.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 *                         API. </p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have a
 *                         Business, Enterprise On-Ramp, or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>To call the Trusted Advisor operations in
 * the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland)
 * endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support
 * API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, RefreshTrustedAdvisorCheckCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, RefreshTrustedAdvisorCheckCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new RefreshTrustedAdvisorCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RefreshTrustedAdvisorCheckCommandInput} for command's `input` shape.
 * @see {@link RefreshTrustedAdvisorCheckCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 */
export class RefreshTrustedAdvisorCheckCommand extends $Command<
  RefreshTrustedAdvisorCheckCommandInput,
  RefreshTrustedAdvisorCheckCommandOutput,
  SupportClientResolvedConfig
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

  constructor(readonly input: RefreshTrustedAdvisorCheckCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RefreshTrustedAdvisorCheckCommandInput, RefreshTrustedAdvisorCheckCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RefreshTrustedAdvisorCheckCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "RefreshTrustedAdvisorCheckCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RefreshTrustedAdvisorCheckRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RefreshTrustedAdvisorCheckResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RefreshTrustedAdvisorCheckCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RefreshTrustedAdvisorCheckCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RefreshTrustedAdvisorCheckCommandOutput> {
    return deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
