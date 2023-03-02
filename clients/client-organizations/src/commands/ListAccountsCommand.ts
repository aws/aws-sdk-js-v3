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
  ListAccountsRequest,
  ListAccountsRequestFilterSensitiveLog,
  ListAccountsResponse,
  ListAccountsResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1ListAccountsCommand,
  serializeAws_json1_1ListAccountsCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link ListAccountsCommand}.
 */
export interface ListAccountsCommandInput extends ListAccountsRequest {}
/**
 * The output of {@link ListAccountsCommand}.
 */
export interface ListAccountsCommandOutput extends ListAccountsResponse, __MetadataBearer {}

/**
 * <p>Lists all the accounts in the organization. To request only the accounts in a
 *             specified root or organizational unit (OU), use the <a>ListAccountsForParent</a> operation instead.</p>
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
 * import { OrganizationsClient, ListAccountsCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListAccountsCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountsCommandInput} for command's `input` shape.
 * @see {@link ListAccountsCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 * @example To retrieve a list of all of the accounts in an organization
 * ```javascript
 * // The following example shows you how to request a list of the accounts in an organization:
 * const input = {};
 * const command = new ListAccountsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Accounts": [
 *     {
 *       "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/111111111111",
 *       "Email": "bill@example.com",
 *       "Id": "111111111111",
 *       "JoinedMethod": "INVITED",
 *       "JoinedTimestamp": "20161215T193015Z",
 *       "Name": "Master Account",
 *       "Status": "ACTIVE"
 *     },
 *     {
 *       "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/222222222222",
 *       "Email": "alice@example.com",
 *       "Id": "222222222222",
 *       "JoinedMethod": "INVITED",
 *       "JoinedTimestamp": "20161215T210221Z",
 *       "Name": "Developer Account",
 *       "Status": "ACTIVE"
 *     },
 *     {
 *       "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/333333333333",
 *       "Email": "juan@example.com",
 *       "Id": "333333333333",
 *       "JoinedMethod": "INVITED",
 *       "JoinedTimestamp": "20161215T210347Z",
 *       "Name": "Test Account",
 *       "Status": "ACTIVE"
 *     },
 *     {
 *       "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/444444444444",
 *       "Email": "anika@example.com",
 *       "Id": "444444444444",
 *       "JoinedMethod": "INVITED",
 *       "JoinedTimestamp": "20161215T210332Z",
 *       "Name": "Production Account",
 *       "Status": "ACTIVE"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-retrieve-a-list-of-all-of-the-accounts-in-an-organization-1472509590974
 * ```
 *
 */
export class ListAccountsCommand extends $Command<
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
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

  constructor(readonly input: ListAccountsCommandInput) {
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
  ): Handler<ListAccountsCommandInput, ListAccountsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListAccountsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListAccountsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccountsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAccountsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccountsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAccountsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccountsCommandOutput> {
    return deserializeAws_json1_1ListAccountsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
