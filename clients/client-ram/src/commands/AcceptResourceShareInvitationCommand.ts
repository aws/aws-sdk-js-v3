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
  AcceptResourceShareInvitationRequest,
  AcceptResourceShareInvitationRequestFilterSensitiveLog,
  AcceptResourceShareInvitationResponse,
  AcceptResourceShareInvitationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AcceptResourceShareInvitationCommand,
  serializeAws_restJson1AcceptResourceShareInvitationCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

export interface AcceptResourceShareInvitationCommandInput extends AcceptResourceShareInvitationRequest {}
export interface AcceptResourceShareInvitationCommandOutput
  extends AcceptResourceShareInvitationResponse,
    __MetadataBearer {}

/**
 * <p>Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the
 *             invitation, the resources included in the resource share are available to interact with in the
 *             relevant Amazon Web Services Management Consoles and tools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, AcceptResourceShareInvitationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, AcceptResourceShareInvitationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new AcceptResourceShareInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptResourceShareInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptResourceShareInvitationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 */
export class AcceptResourceShareInvitationCommand extends $Command<
  AcceptResourceShareInvitationCommandInput,
  AcceptResourceShareInvitationCommandOutput,
  RAMClientResolvedConfig
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

  constructor(readonly input: AcceptResourceShareInvitationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcceptResourceShareInvitationCommandInput, AcceptResourceShareInvitationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcceptResourceShareInvitationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "AcceptResourceShareInvitationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptResourceShareInvitationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AcceptResourceShareInvitationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptResourceShareInvitationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AcceptResourceShareInvitationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptResourceShareInvitationCommandOutput> {
    return deserializeAws_restJson1AcceptResourceShareInvitationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
