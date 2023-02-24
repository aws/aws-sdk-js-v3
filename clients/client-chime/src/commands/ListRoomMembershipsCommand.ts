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
  ListRoomMembershipsRequest,
  ListRoomMembershipsRequestFilterSensitiveLog,
  ListRoomMembershipsResponse,
  ListRoomMembershipsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListRoomMembershipsCommand,
  serializeAws_restJson1ListRoomMembershipsCommand,
} from "../protocols/Aws_restJson1";

export interface ListRoomMembershipsCommandInput extends ListRoomMembershipsRequest {}
export interface ListRoomMembershipsCommandOutput extends ListRoomMembershipsResponse, __MetadataBearer {}

/**
 * <p>Lists the membership details for the specified room in an Amazon Chime Enterprise account,
 *             such as the members' IDs, email addresses, and names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListRoomMembershipsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListRoomMembershipsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListRoomMembershipsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoomMembershipsCommandInput} for command's `input` shape.
 * @see {@link ListRoomMembershipsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class ListRoomMembershipsCommand extends $Command<
  ListRoomMembershipsCommandInput,
  ListRoomMembershipsCommandOutput,
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

  constructor(readonly input: ListRoomMembershipsCommandInput) {
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
  ): Handler<ListRoomMembershipsCommandInput, ListRoomMembershipsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRoomMembershipsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListRoomMembershipsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRoomMembershipsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRoomMembershipsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRoomMembershipsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRoomMembershipsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRoomMembershipsCommandOutput> {
    return deserializeAws_restJson1ListRoomMembershipsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
