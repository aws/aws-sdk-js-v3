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

import { CloseAccountRequest, CloseAccountRequestFilterSensitiveLog } from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1CloseAccountCommand,
  serializeAws_json1_1CloseAccountCommand,
} from "../protocols/Aws_json1_1";

export interface CloseAccountCommandInput extends CloseAccountRequest {}
export interface CloseAccountCommandOutput extends __MetadataBearer {}

/**
 * <p>Closes an Amazon Web Services member account within an organization. You can't close the management
 *             account with this API. This is an asynchronous request that Amazon Web Services performs in the
 *             background. Because <code>CloseAccount</code> operates asynchronously, it can return a
 *             successful completion message even though account closure might still be in progress.
 *             You need to wait a few minutes before the account is fully closed. To check the status
 *             of the request, do one of the following:</p>
 *         <ul>
 *             <li>
 *                 <p>Use the <code>AccountId</code> that you sent in the <code>CloseAccount</code>
 *                     request to provide as a parameter to the <a>DescribeAccount</a>
 *                     operation. </p>
 *                 <p>While the close account request is in progress, Account status will indicate
 *                     PENDING_CLOSURE. When the close account request completes, the status will
 *                     change to SUSPENDED. </p>
 *             </li>
 *             <li>
 *                 <p>Check the CloudTrail log for the <code>CloseAccountResult</code> event that gets
 *                     published after the account closes successfully. For information on using CloudTrail
 *                     with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration">Logging and monitoring in Organizations</a> in the
 *                         <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>You can only close 10% of active member accounts within a rolling 30 day
 *                         period. This quota is not bound by a calendar month, but starts when you
 *                         close an account. Within 30 days of that initial account closure, you can't
 *                         exceed the 10% account closure limit.</p>
 *                 </li>
 *                <li>
 *                     <p>To reinstate a closed account, contact Amazon Web Services Support within the 90-day
 *                         grace period while the account is in SUSPENDED status. </p>
 *                 </li>
 *                <li>
 *                     <p>If the Amazon Web Services account you attempt to close is linked to an Amazon Web Services GovCloud
 *                         (US) account, the <code>CloseAccount</code> request will close both
 *                         accounts. To learn important pre-closure details, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/Closing-govcloud-account.html">
 *                             Closing an Amazon Web Services GovCloud (US) account</a> in the <i>
 *                             Amazon Web Services GovCloud User Guide</i>.</p>
 *                 </li>
 *             </ul>
 *         </note>
 *         <p>For more information about closing accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an
 *                 Amazon Web Services account</a> in the <i>Organizations User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, CloseAccountCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, CloseAccountCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new CloseAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CloseAccountCommandInput} for command's `input` shape.
 * @see {@link CloseAccountCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class CloseAccountCommand extends $Command<
  CloseAccountCommandInput,
  CloseAccountCommandOutput,
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

  constructor(readonly input: CloseAccountCommandInput) {
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
  ): Handler<CloseAccountCommandInput, CloseAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CloseAccountCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "CloseAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CloseAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CloseAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CloseAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CloseAccountCommandOutput> {
    return deserializeAws_json1_1CloseAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
