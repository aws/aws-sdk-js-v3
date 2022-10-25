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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  CreateMeetingDialOutRequest,
  CreateMeetingDialOutRequestFilterSensitiveLog,
  CreateMeetingDialOutResponse,
  CreateMeetingDialOutResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateMeetingDialOutCommand,
  serializeAws_restJson1CreateMeetingDialOutCommand,
} from "../protocols/Aws_restJson1";

export interface CreateMeetingDialOutCommandInput extends CreateMeetingDialOutRequest {}
export interface CreateMeetingDialOutCommandOutput extends CreateMeetingDialOutResponse, __MetadataBearer {}

/**
 * <p>Uses the join token and call metadata in a meeting request (From number, To number, and so forth) to initiate an outbound call to a public
 *     switched telephone network (PSTN) and join them into a Chime meeting. Also ensures that the From number belongs to the customer.</p>
 *
 *          <p>To play welcome audio or implement an interactive voice response (IVR), use the
 * <code>CreateSipMediaApplicationCall</code> action with the corresponding SIP media application ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateMeetingDialOutCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateMeetingDialOutCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateMeetingDialOutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMeetingDialOutCommandInput} for command's `input` shape.
 * @see {@link CreateMeetingDialOutCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class CreateMeetingDialOutCommand extends $Command<
  CreateMeetingDialOutCommandInput,
  CreateMeetingDialOutCommandOutput,
  ChimeClientResolvedConfig
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

  constructor(readonly input: CreateMeetingDialOutCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMeetingDialOutCommandInput, CreateMeetingDialOutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMeetingDialOutCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateMeetingDialOutCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMeetingDialOutRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMeetingDialOutResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMeetingDialOutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMeetingDialOutCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMeetingDialOutCommandOutput> {
    return deserializeAws_restJson1CreateMeetingDialOutCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
