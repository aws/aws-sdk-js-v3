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
  CancelHandshakeRequest,
  CancelHandshakeRequestFilterSensitiveLog,
  CancelHandshakeResponse,
  CancelHandshakeResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1CancelHandshakeCommand,
  serializeAws_json1_1CancelHandshakeCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link CancelHandshakeCommand}.
 */
export interface CancelHandshakeCommandInput extends CancelHandshakeRequest {}
/**
 * The output of {@link CancelHandshakeCommand}.
 */
export interface CancelHandshakeCommandOutput extends CancelHandshakeResponse, __MetadataBearer {}

/**
 * <p>Cancels a handshake. Canceling a handshake sets the handshake state to
 *                 <code>CANCELED</code>.</p>
 *          <p>This operation can be called only from the account that originated the handshake. The recipient of the handshake can't cancel it, but can use <a>DeclineHandshake</a> instead. After a handshake is canceled, the recipient
 *             can no longer respond to that handshake.</p>
 *          <p>After you cancel a handshake, it continues to appear in the results of relevant APIs
 *             for only 30 days. After that, it's deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, CancelHandshakeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, CancelHandshakeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new CancelHandshakeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelHandshakeCommandInput} for command's `input` shape.
 * @see {@link CancelHandshakeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 * @example To cancel a handshake sent to a member account
 * ```javascript
 * // Bill previously sent an invitation to Susan's account to join his organization. He changes his mind and decides to cancel the invitation before Susan accepts it. The following example shows Bill's cancellation:
 * //
 * const input = {
 *   "HandshakeId": "h-examplehandshakeid111"
 * };
 * const command = new CancelHandshakeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Handshake": {
 *     "Action": "INVITE",
 *     "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
 *     "ExpirationTimestamp": "20170228T1215Z",
 *     "Id": "h-examplehandshakeid111",
 *     "Parties": [
 *       {
 *         "Id": "o-exampleorgid",
 *         "Type": "ORGANIZATION"
 *       },
 *       {
 *         "Id": "susan@example.com",
 *         "Type": "EMAIL"
 *       }
 *     ],
 *     "RequestedTimestamp": "20170214T1215Z",
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
 *           },
 *           {
 *             "Type": "ORGANIZATION_FEATURE_SET",
 *             "Value": "CONSOLIDATED_BILLING"
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
 *         "Value": "This is a request for Susan's account to join Bob's organization."
 *       }
 *     ],
 *     "State": "CANCELED"
 *   }
 * }
 * *\/
 * ```
 *
 */
export class CancelHandshakeCommand extends $Command<
  CancelHandshakeCommandInput,
  CancelHandshakeCommandOutput,
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

  constructor(readonly input: CancelHandshakeCommandInput) {
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
  ): Handler<CancelHandshakeCommandInput, CancelHandshakeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelHandshakeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "CancelHandshakeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelHandshakeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelHandshakeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelHandshakeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelHandshakeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelHandshakeCommandOutput> {
    return deserializeAws_json1_1CancelHandshakeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
