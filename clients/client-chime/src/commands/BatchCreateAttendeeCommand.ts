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
  BatchCreateAttendeeRequest,
  BatchCreateAttendeeRequestFilterSensitiveLog,
  BatchCreateAttendeeResponse,
  BatchCreateAttendeeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchCreateAttendeeCommand,
  serializeAws_restJson1BatchCreateAttendeeCommand,
} from "../protocols/Aws_restJson1";

export interface BatchCreateAttendeeCommandInput extends BatchCreateAttendeeRequest {}
export interface BatchCreateAttendeeCommandOutput extends BatchCreateAttendeeResponse, __MetadataBearer {}

/**
 * <p>
 * Creates up to 100 new attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see
 * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 * in the
 * <i>Amazon Chime Developer Guide</i>.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchCreateAttendeeCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchCreateAttendeeCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchCreateAttendeeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCreateAttendeeCommandInput} for command's `input` shape.
 * @see {@link BatchCreateAttendeeCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class BatchCreateAttendeeCommand extends $Command<
  BatchCreateAttendeeCommandInput,
  BatchCreateAttendeeCommandOutput,
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

  constructor(readonly input: BatchCreateAttendeeCommandInput) {
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
  ): Handler<BatchCreateAttendeeCommandInput, BatchCreateAttendeeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchCreateAttendeeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "BatchCreateAttendeeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchCreateAttendeeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchCreateAttendeeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchCreateAttendeeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchCreateAttendeeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchCreateAttendeeCommandOutput> {
    return deserializeAws_restJson1BatchCreateAttendeeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
