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
  ListHandshakesForOrganizationRequest,
  ListHandshakesForOrganizationRequestFilterSensitiveLog,
  ListHandshakesForOrganizationResponse,
  ListHandshakesForOrganizationResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1ListHandshakesForOrganizationCommand,
  serializeAws_json1_1ListHandshakesForOrganizationCommand,
} from "../protocols/Aws_json1_1";

export interface ListHandshakesForOrganizationCommandInput extends ListHandshakesForOrganizationRequest {}
export interface ListHandshakesForOrganizationCommandOutput
  extends ListHandshakesForOrganizationResponse,
    __MetadataBearer {}

/**
 * <p>Lists the handshakes that are associated with the organization that the requesting
 *             user is part of. The <code>ListHandshakesForOrganization</code> operation returns a list
 *             of handshake structures. Each structure contains details and status about a
 *             handshake.</p>
 *         <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>,
 *                 <code>CANCELED</code>, or <code>EXPIRED</code> appear in the results of this API for
 *             only 30 days after changing to that state. After that, they're deleted and no longer
 *             accessible.</p>
 *         <note>
 *             <p>Always check the <code>NextToken</code> response parameter
 * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
 * occasionally return an empty set of results even when there are more results available. The
 * <code>NextToken</code> response parameter value is <code>null</code>
 *                <i>only</i>
 * when there are no more results to display.</p>
 *          </note>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListHandshakesForOrganizationCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListHandshakesForOrganizationCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListHandshakesForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHandshakesForOrganizationCommandInput} for command's `input` shape.
 * @see {@link ListHandshakesForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class ListHandshakesForOrganizationCommand extends $Command<
  ListHandshakesForOrganizationCommandInput,
  ListHandshakesForOrganizationCommandOutput,
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

  constructor(readonly input: ListHandshakesForOrganizationCommandInput) {
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
  ): Handler<ListHandshakesForOrganizationCommandInput, ListHandshakesForOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHandshakesForOrganizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListHandshakesForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListHandshakesForOrganizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListHandshakesForOrganizationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListHandshakesForOrganizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListHandshakesForOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListHandshakesForOrganizationCommandOutput> {
    return deserializeAws_json1_1ListHandshakesForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
