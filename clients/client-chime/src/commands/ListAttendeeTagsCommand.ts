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
  ListAttendeeTagsRequest,
  ListAttendeeTagsRequestFilterSensitiveLog,
  ListAttendeeTagsResponse,
  ListAttendeeTagsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListAttendeeTagsCommand,
  serializeAws_restJson1ListAttendeeTagsCommand,
} from "../protocols/Aws_restJson1";

export interface ListAttendeeTagsCommandInput extends ListAttendeeTagsRequest {}
export interface ListAttendeeTagsCommandOutput extends ListAttendeeTagsResponse, __MetadataBearer {}

/**
 * <p>Lists the tags applied to an Amazon Chime SDK attendee resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListAttendeeTagsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListAttendeeTagsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListAttendeeTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttendeeTagsCommandInput} for command's `input` shape.
 * @see {@link ListAttendeeTagsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class ListAttendeeTagsCommand extends $Command<
  ListAttendeeTagsCommandInput,
  ListAttendeeTagsCommandOutput,
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

  constructor(readonly input: ListAttendeeTagsCommandInput) {
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
  ): Handler<ListAttendeeTagsCommandInput, ListAttendeeTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAttendeeTagsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListAttendeeTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAttendeeTagsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAttendeeTagsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAttendeeTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAttendeeTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAttendeeTagsCommandOutput> {
    return deserializeAws_restJson1ListAttendeeTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
