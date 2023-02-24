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
  ListHandshakesForAccountRequest,
  ListHandshakesForAccountRequestFilterSensitiveLog,
  ListHandshakesForAccountResponse,
  ListHandshakesForAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1ListHandshakesForAccountCommand,
  serializeAws_json1_1ListHandshakesForAccountCommand,
} from "../protocols/Aws_json1_1";

export interface ListHandshakesForAccountCommandInput extends ListHandshakesForAccountRequest {}
export interface ListHandshakesForAccountCommandOutput extends ListHandshakesForAccountResponse, __MetadataBearer {}

/**
 * <p>Lists the current handshakes that are associated with the account of the requesting
 *             user.</p>
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
 *         <p>This operation can be called from any account in the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListHandshakesForAccountCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListHandshakesForAccountCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListHandshakesForAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHandshakesForAccountCommandInput} for command's `input` shape.
 * @see {@link ListHandshakesForAccountCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class ListHandshakesForAccountCommand extends $Command<
  ListHandshakesForAccountCommandInput,
  ListHandshakesForAccountCommandOutput,
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

  constructor(readonly input: ListHandshakesForAccountCommandInput) {
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
  ): Handler<ListHandshakesForAccountCommandInput, ListHandshakesForAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHandshakesForAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListHandshakesForAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListHandshakesForAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListHandshakesForAccountResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListHandshakesForAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListHandshakesForAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHandshakesForAccountCommandOutput> {
    return deserializeAws_json1_1ListHandshakesForAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
