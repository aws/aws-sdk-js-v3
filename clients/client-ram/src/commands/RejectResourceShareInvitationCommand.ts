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
  RejectResourceShareInvitationRequest,
  RejectResourceShareInvitationRequestFilterSensitiveLog,
  RejectResourceShareInvitationResponse,
  RejectResourceShareInvitationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RejectResourceShareInvitationCommand,
  serializeAws_restJson1RejectResourceShareInvitationCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

export interface RejectResourceShareInvitationCommandInput extends RejectResourceShareInvitationRequest {}
export interface RejectResourceShareInvitationCommandOutput
  extends RejectResourceShareInvitationResponse,
    __MetadataBearer {}

/**
 * <p>Rejects an invitation to a resource share from another Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, RejectResourceShareInvitationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, RejectResourceShareInvitationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new RejectResourceShareInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectResourceShareInvitationCommandInput} for command's `input` shape.
 * @see {@link RejectResourceShareInvitationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 */
export class RejectResourceShareInvitationCommand extends $Command<
  RejectResourceShareInvitationCommandInput,
  RejectResourceShareInvitationCommandOutput,
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

  constructor(readonly input: RejectResourceShareInvitationCommandInput) {
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
  ): Handler<RejectResourceShareInvitationCommandInput, RejectResourceShareInvitationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RejectResourceShareInvitationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "RejectResourceShareInvitationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectResourceShareInvitationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RejectResourceShareInvitationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RejectResourceShareInvitationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RejectResourceShareInvitationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectResourceShareInvitationCommandOutput> {
    return deserializeAws_restJson1RejectResourceShareInvitationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
