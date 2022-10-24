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
  InviteAccountToOrganizationRequest,
  InviteAccountToOrganizationRequestFilterSensitiveLog,
  InviteAccountToOrganizationResponse,
  InviteAccountToOrganizationResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1InviteAccountToOrganizationCommand,
  serializeAws_json1_1InviteAccountToOrganizationCommand,
} from "../protocols/Aws_json1_1";

export interface InviteAccountToOrganizationCommandInput extends InviteAccountToOrganizationRequest {}
export interface InviteAccountToOrganizationCommandOutput
  extends InviteAccountToOrganizationResponse,
    __MetadataBearer {}

/**
 * <p>Sends an invitation to another account to join your organization as a member account.
 *             Organizations sends email on your behalf to the email address that is associated with the
 *             other account's owner. The invitation is implemented as a <a>Handshake</a>
 *             whose details are in the response.</p>
 *         <important>
 *             <ul>
 *                <li>
 *                     <p>You can invite Amazon Web Services accounts only from the same seller as the management
 *                         account. For example, if your organization's management account was created
 *                         by Amazon Internet Services Pvt. Ltd (AISPL), an Amazon Web Services seller in India, you
 *                         can invite only other AISPL accounts to your organization. You can't combine
 *                         accounts from AISPL and Amazon Web Services or from any other Amazon Web Services seller. For more
 *                         information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilliing-India.html">Consolidated
 *                             Billing in India</a>.</p>
 *                 </li>
 *                <li>
 *                     <p>If you receive an exception that indicates that you exceeded your account
 *                         limits for the organization or that the operation failed because your
 *                         organization is still initializing, wait one hour and then try again. If the
 *                         error persists after an hour, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </important>
 *         <p>If the request includes tags, then the requester must have the
 *                 <code>organizations:TagResource</code> permission.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, InviteAccountToOrganizationCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, InviteAccountToOrganizationCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new InviteAccountToOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InviteAccountToOrganizationCommandInput} for command's `input` shape.
 * @see {@link InviteAccountToOrganizationCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class InviteAccountToOrganizationCommand extends $Command<
  InviteAccountToOrganizationCommandInput,
  InviteAccountToOrganizationCommandOutput,
  OrganizationsClientResolvedConfig
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

  constructor(readonly input: InviteAccountToOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InviteAccountToOrganizationCommandInput, InviteAccountToOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InviteAccountToOrganizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "InviteAccountToOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InviteAccountToOrganizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: InviteAccountToOrganizationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InviteAccountToOrganizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1InviteAccountToOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<InviteAccountToOrganizationCommandOutput> {
    return deserializeAws_json1_1InviteAccountToOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
