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
  DeclineHandshakeRequest,
  DeclineHandshakeRequestFilterSensitiveLog,
  DeclineHandshakeResponse,
  DeclineHandshakeResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1DeclineHandshakeCommand,
  serializeAws_json1_1DeclineHandshakeCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DeclineHandshakeCommand}.
 */
export interface DeclineHandshakeCommandInput extends DeclineHandshakeRequest {}
/**
 * The output of {@link DeclineHandshakeCommand}.
 */
export interface DeclineHandshakeCommandOutput extends DeclineHandshakeResponse, __MetadataBearer {}

/**
 * <p>Declines a handshake request. This sets the handshake state to <code>DECLINED</code>
 *             and effectively deactivates the request.</p>
 *          <p>This operation can be called only from the account that received the handshake. The originator of the handshake can use <a>CancelHandshake</a>
 *             instead. The originator can't reactivate a declined request, but can reinitiate the
 *             process with a new handshake request.</p>
 *          <p>After you decline a handshake, it continues to appear in the results of relevant APIs
 *             for only 30 days. After that, it's deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DeclineHandshakeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DeclineHandshakeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DeclineHandshakeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeclineHandshakeCommandInput} for command's `input` shape.
 * @see {@link DeclineHandshakeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 * @example To decline a handshake sent from the master account
 * ```javascript
 * // The following example shows Susan declining an invitation to join Bill's organization. The DeclineHandshake operation returns a handshake object, showing that the state is now DECLINED:
 * const input = {
 *   "HandshakeId": "h-examplehandshakeid111"
 * };
 * const command = new DeclineHandshakeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Handshake": {
 *     "Action": "INVITE",
 *     "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
 *     "ExpirationTimestamp": "2016-12-15T19:27:58Z",
 *     "Id": "h-examplehandshakeid111",
 *     "Parties": [
 *       {
 *         "Id": "222222222222",
 *         "Type": "ACCOUNT"
 *       },
 *       {
 *         "Id": "o-exampleorgid",
 *         "Type": "ORGANIZATION"
 *       }
 *     ],
 *     "RequestedTimestamp": "2016-11-30T19:27:58Z",
 *     "Resources": [
 *       {
 *         "Resources": [
 *           {
 *             "Type": "MASTER_EMAIL",
 *             "Value": "bill@example.com"
 *           },
 *           {
 *             "Type": "MASTER_NAME",
 *             "Value": "Master Account"
 *           }
 *         ],
 *         "Type": "ORGANIZATION",
 *         "Value": "o-exampleorgid"
 *       },
 *       {
 *         "Type": "ACCOUNT",
 *         "Value": "222222222222"
 *       },
 *       {
 *         "Type": "NOTES",
 *         "Value": "This is an invitation to Susan's account to join the Bill's organization."
 *       }
 *     ],
 *     "State": "DECLINED"
 *   }
 * }
 * *\/
 * // example id: to-decline-a-handshake-sent-from-the-master-account-1472502666967
 * ```
 *
 */
export class DeclineHandshakeCommand extends $Command<
  DeclineHandshakeCommandInput,
  DeclineHandshakeCommandOutput,
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

  constructor(readonly input: DeclineHandshakeCommandInput) {
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
  ): Handler<DeclineHandshakeCommandInput, DeclineHandshakeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeclineHandshakeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DeclineHandshakeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeclineHandshakeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeclineHandshakeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeclineHandshakeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeclineHandshakeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeclineHandshakeCommandOutput> {
    return deserializeAws_json1_1DeclineHandshakeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
