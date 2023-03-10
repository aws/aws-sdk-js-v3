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
  ListCreateAccountStatusRequest,
  ListCreateAccountStatusRequestFilterSensitiveLog,
  ListCreateAccountStatusResponse,
  ListCreateAccountStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1ListCreateAccountStatusCommand,
  serializeAws_json1_1ListCreateAccountStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link ListCreateAccountStatusCommand}.
 */
export interface ListCreateAccountStatusCommandInput extends ListCreateAccountStatusRequest {}
/**
 * The output of {@link ListCreateAccountStatusCommand}.
 */
export interface ListCreateAccountStatusCommandOutput extends ListCreateAccountStatusResponse, __MetadataBearer {}

/**
 * <p>Lists the account creation requests that match the specified status that is currently
 *             being tracked for the organization.</p>
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
 * import { OrganizationsClient, ListCreateAccountStatusCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListCreateAccountStatusCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListCreateAccountStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCreateAccountStatusCommandInput} for command's `input` shape.
 * @see {@link ListCreateAccountStatusCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 * @example To get a list of completed account creation requests made in the organization
 * ```javascript
 * // The following example shows a user requesting a list of only the completed account creation requests made for the current organization:
 * const input = {
 *   "States": [
 *     "SUCCEEDED"
 *   ]
 * };
 * const command = new ListCreateAccountStatusCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CreateAccountStatuses": [
 *     {
 *       "AccountId": "444444444444",
 *       "AccountName": "Developer Test Account",
 *       "CompletedTimestamp": "2017-01-15T13:45:23.6Z",
 *       "Id": "car-exampleaccountcreationrequestid1",
 *       "RequestedTimestamp": "2017-01-15T13:45:23.01Z",
 *       "State": "SUCCEEDED"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-a-list-of-completed-account-creation-requests-made-in-the-organization
 * ```
 *
 * @example To get a list of all account creation requests made in the organization
 * ```javascript
 * // The following example shows a user requesting a list of only the in-progress account creation requests made for the current organization:
 * const input = {
 *   "States": [
 *     "IN_PROGRESS"
 *   ]
 * };
 * const command = new ListCreateAccountStatusCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CreateAccountStatuses": [
 *     {
 *       "AccountName": "Production Account",
 *       "Id": "car-exampleaccountcreationrequestid2",
 *       "RequestedTimestamp": "2017-01-15T13:45:23.01Z",
 *       "State": "IN_PROGRESS"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-a-list-of-all-account-creation-requests-made-in-the-organization-1472509174532
 * ```
 *
 */
export class ListCreateAccountStatusCommand extends $Command<
  ListCreateAccountStatusCommandInput,
  ListCreateAccountStatusCommandOutput,
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

  constructor(readonly input: ListCreateAccountStatusCommandInput) {
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
  ): Handler<ListCreateAccountStatusCommandInput, ListCreateAccountStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCreateAccountStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListCreateAccountStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCreateAccountStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListCreateAccountStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCreateAccountStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCreateAccountStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCreateAccountStatusCommandOutput> {
    return deserializeAws_json1_1ListCreateAccountStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
