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
  BatchCreateRoomMembershipRequest,
  BatchCreateRoomMembershipRequestFilterSensitiveLog,
  BatchCreateRoomMembershipResponse,
  BatchCreateRoomMembershipResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchCreateRoomMembershipCommand,
  serializeAws_restJson1BatchCreateRoomMembershipCommand,
} from "../protocols/Aws_restJson1";

export interface BatchCreateRoomMembershipCommandInput extends BatchCreateRoomMembershipRequest {}
export interface BatchCreateRoomMembershipCommandOutput extends BatchCreateRoomMembershipResponse, __MetadataBearer {}

/**
 * <p>Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be users or bots. The member role designates whether the member is a chat room administrator or a general chat room member.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchCreateRoomMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchCreateRoomMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchCreateRoomMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCreateRoomMembershipCommandInput} for command's `input` shape.
 * @see {@link BatchCreateRoomMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class BatchCreateRoomMembershipCommand extends $Command<
  BatchCreateRoomMembershipCommandInput,
  BatchCreateRoomMembershipCommandOutput,
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

  constructor(readonly input: BatchCreateRoomMembershipCommandInput) {
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
  ): Handler<BatchCreateRoomMembershipCommandInput, BatchCreateRoomMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchCreateRoomMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "BatchCreateRoomMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchCreateRoomMembershipRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchCreateRoomMembershipResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchCreateRoomMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchCreateRoomMembershipCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchCreateRoomMembershipCommandOutput> {
    return deserializeAws_restJson1BatchCreateRoomMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
