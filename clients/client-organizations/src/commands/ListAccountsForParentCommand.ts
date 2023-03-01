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
  ListAccountsForParentRequest,
  ListAccountsForParentRequestFilterSensitiveLog,
  ListAccountsForParentResponse,
  ListAccountsForParentResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1ListAccountsForParentCommand,
  serializeAws_json1_1ListAccountsForParentCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link ListAccountsForParentCommand}.
 */
export interface ListAccountsForParentCommandInput extends ListAccountsForParentRequest {}
/**
 * The output of {@link ListAccountsForParentCommand}.
 */
export interface ListAccountsForParentCommandOutput extends ListAccountsForParentResponse, __MetadataBearer {}

/**
 * <p>Lists the accounts in an organization that are contained by the specified target root
 *             or organizational unit (OU). If you specify the root, you get a list of all the accounts
 *             that aren't in any OU. If you specify an OU, you get a list of all the accounts in only
 *             that OU and not in any child OUs. To get a list of all accounts in the organization, use
 *             the <a>ListAccounts</a> operation.</p>
 *          <note>
 *             <p>Always check the <code>NextToken</code> response parameter
 * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
 * occasionally return an empty set of results even when there are more results available. The
 * <code>NextToken</code> response parameter value is <code>null</code>
 *                <i>only</i>
 * when there are no more results to display.</p>
 *          </note>
 *          <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListAccountsForParentCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListAccountsForParentCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListAccountsForParentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountsForParentCommandInput} for command's `input` shape.
 * @see {@link ListAccountsForParentCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 *
 * @example To retrieve a list of all of the accounts in a root or OU
 * ```javascript
 * // The following example shows how to request a list of the accounts in an OU:/n/n
 * const input = {
 *   "ParentId": "ou-examplerootid111-exampleouid111"
 * };
 * const command = new ListAccountsForParentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Accounts": [
 *     {
 *       "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/333333333333",
 *       "Email": "juan@example.com",
 *       "Id": "333333333333",
 *       "JoinedMethod": "INVITED",
 *       "JoinedTimestamp": 1481835795.536,
 *       "Name": "Development Account",
 *       "Status": "ACTIVE"
 *     },
 *     {
 *       "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/444444444444",
 *       "Email": "anika@example.com",
 *       "Id": "444444444444",
 *       "JoinedMethod": "INVITED",
 *       "JoinedTimestamp": 1481835812.143,
 *       "Name": "Test Account",
 *       "Status": "ACTIVE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 */
export class ListAccountsForParentCommand extends $Command<
  ListAccountsForParentCommandInput,
  ListAccountsForParentCommandOutput,
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

  constructor(readonly input: ListAccountsForParentCommandInput) {
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
  ): Handler<ListAccountsForParentCommandInput, ListAccountsForParentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAccountsForParentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListAccountsForParentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccountsForParentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAccountsForParentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccountsForParentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAccountsForParentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccountsForParentCommandOutput> {
    return deserializeAws_json1_1ListAccountsForParentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
