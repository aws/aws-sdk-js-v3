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

export interface DeclineHandshakeCommandInput extends DeclineHandshakeRequest {}
export interface DeclineHandshakeCommandOutput extends DeclineHandshakeResponse, __MetadataBearer {}

/**
 * <p>Declines a handshake request. This sets the handshake state to <code>DECLINED</code>
 *             and effectively deactivates the request.</p>
 *         <p>This operation can be called only from the account that received the handshake. The originator of the handshake can use <a>CancelHandshake</a>
 *             instead. The originator can't reactivate a declined request, but can reinitiate the
 *             process with a new handshake request.</p>
 *         <p>After you decline a handshake, it continues to appear in the results of relevant APIs
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
