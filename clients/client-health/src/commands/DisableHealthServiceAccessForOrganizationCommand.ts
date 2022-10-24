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
  deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand,
  serializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand,
} from "../protocols/Aws_json1_1";

export interface DisableHealthServiceAccessForOrganizationCommandInput {}
export interface DisableHealthServiceAccessForOrganizationCommandOutput extends __MetadataBearer {}

/**
 * <p>Disables Health from working with Organizations. To call this operation, you must sign
 *          in as an Identity and Access Management (IAM) user, assume an IAM role, or sign in as the root user (not
 *          recommended) in the organization's management account. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
 *             Health events</a> in the <i>Health User Guide</i>.</p>
 *          <p>This operation doesn't remove the service-linked role from the management account in your
 *          organization. You must use the IAM console, API, or Command Line Interface (CLI) to remove the
 *          service-linked role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html#delete-service-linked-role">Deleting a Service-Linked Role</a> in the
 *          <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>You can also disable the organizational feature by using the Organizations <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html">DisableAWSServiceAccess</a> API operation. After you call this operation,
 *             Health stops aggregating events for all other Amazon Web Services accounts in your organization.
 *             If you call the Health API operations for organizational view, Health returns
 *             an error. Health continues to aggregate health events for your
 *             Amazon Web Services account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DisableHealthServiceAccessForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DisableHealthServiceAccessForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DisableHealthServiceAccessForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableHealthServiceAccessForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DisableHealthServiceAccessForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 */
export class DisableHealthServiceAccessForOrganizationCommand extends $Command<
  DisableHealthServiceAccessForOrganizationCommandInput,
  DisableHealthServiceAccessForOrganizationCommandOutput,
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

  constructor(readonly input: DisableHealthServiceAccessForOrganizationCommandInput) {
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
    DisableHealthServiceAccessForOrganizationCommandInput,
    DisableHealthServiceAccessForOrganizationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisableHealthServiceAccessForOrganizationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DisableHealthServiceAccessForOrganizationCommand";
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
    input: DisableHealthServiceAccessForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableHealthServiceAccessForOrganizationCommandOutput> {
    return deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
