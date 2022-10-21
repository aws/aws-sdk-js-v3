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

import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import {
  deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand,
  serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand,
} from "../protocols/Aws_json1_1";

export interface EnableHealthServiceAccessForOrganizationCommandInput {}
export interface EnableHealthServiceAccessForOrganizationCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables Health to work with Organizations. You can use the organizational view feature
 *          to aggregate events from all Amazon Web Services accounts in your organization in a centralized location. </p>
 *          <p>This operation also creates a service-linked role for the management account in the
 *          organization. </p>
 *          <note>
 *             <p>To call this operation, you must meet the following requirements:</p>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan from <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a> to use the Health
 *                   API. If you call the Health API from an Amazon Web Services account that doesn't have a
 *                   Business, Enterprise On-Ramp, or Enterprise Support plan, you receive a
 *                      <code>SubscriptionRequiredException</code> error.</p>
 *                </li>
 *                <li>
 *                   <p>You must have permission to call this operation from the organization's
 *                   management account. For example IAM policies, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html">Health
 *                      identity-based policy examples</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>If you don't have the required support plan, you can instead use the Health console
 *          to enable the organizational view feature. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
 *             Health events</a> in the <i>Health User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, EnableHealthServiceAccessForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, EnableHealthServiceAccessForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new EnableHealthServiceAccessForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableHealthServiceAccessForOrganizationCommandInput} for command's `input` shape.
 * @see {@link EnableHealthServiceAccessForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 */
export class EnableHealthServiceAccessForOrganizationCommand extends $Command<
  EnableHealthServiceAccessForOrganizationCommandInput,
  EnableHealthServiceAccessForOrganizationCommandOutput,
  HealthClientResolvedConfig
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

  constructor(readonly input: EnableHealthServiceAccessForOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    EnableHealthServiceAccessForOrganizationCommandInput,
    EnableHealthServiceAccessForOrganizationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        EnableHealthServiceAccessForOrganizationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "EnableHealthServiceAccessForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EnableHealthServiceAccessForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableHealthServiceAccessForOrganizationCommandOutput> {
    return deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
