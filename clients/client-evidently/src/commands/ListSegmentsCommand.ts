// smithy-typescript generated code
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

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import {
  ListSegmentsRequest,
  ListSegmentsRequestFilterSensitiveLog,
  ListSegmentsResponse,
  ListSegmentsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListSegmentsCommand,
  serializeAws_restJson1ListSegmentsCommand,
} from "../protocols/Aws_restJson1";

export interface ListSegmentsCommandInput extends ListSegmentsRequest {}
export interface ListSegmentsCommandOutput extends ListSegmentsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of audience segments that you have created in your account in this Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, ListSegmentsCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, ListSegmentsCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const command = new ListSegmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSegmentsCommandInput} for command's `input` shape.
 * @see {@link ListSegmentsCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 */
export class ListSegmentsCommand extends $Command<
  ListSegmentsCommandInput,
  ListSegmentsCommandOutput,
  EvidentlyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSegmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EvidentlyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSegmentsCommandInput, ListSegmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "ListSegmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSegmentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSegmentsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSegmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSegmentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSegmentsCommandOutput> {
    return deserializeAws_restJson1ListSegmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
