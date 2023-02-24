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
  ConnectContactLensClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectContactLensClient";
import {
  ListRealtimeContactAnalysisSegmentsRequest,
  ListRealtimeContactAnalysisSegmentsRequestFilterSensitiveLog,
  ListRealtimeContactAnalysisSegmentsResponse,
  ListRealtimeContactAnalysisSegmentsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand,
  serializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand,
} from "../protocols/Aws_restJson1";

export interface ListRealtimeContactAnalysisSegmentsCommandInput extends ListRealtimeContactAnalysisSegmentsRequest {}
export interface ListRealtimeContactAnalysisSegmentsCommandOutput
  extends ListRealtimeContactAnalysisSegmentsResponse,
    __MetadataBearer {}

/**
 * <p>Provides a list of analysis segments for a real-time analysis session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectContactLensClient, ListRealtimeContactAnalysisSegmentsCommand } from "@aws-sdk/client-connect-contact-lens"; // ES Modules import
 * // const { ConnectContactLensClient, ListRealtimeContactAnalysisSegmentsCommand } = require("@aws-sdk/client-connect-contact-lens"); // CommonJS import
 * const client = new ConnectContactLensClient(config);
 * const command = new ListRealtimeContactAnalysisSegmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRealtimeContactAnalysisSegmentsCommandInput} for command's `input` shape.
 * @see {@link ListRealtimeContactAnalysisSegmentsCommandOutput} for command's `response` shape.
 * @see {@link ConnectContactLensClientResolvedConfig | config} for ConnectContactLensClient's `config` shape.
 *
 */
export class ListRealtimeContactAnalysisSegmentsCommand extends $Command<
  ListRealtimeContactAnalysisSegmentsCommandInput,
  ListRealtimeContactAnalysisSegmentsCommandOutput,
  ConnectContactLensClientResolvedConfig
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

  constructor(readonly input: ListRealtimeContactAnalysisSegmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectContactLensClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRealtimeContactAnalysisSegmentsCommandInput, ListRealtimeContactAnalysisSegmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRealtimeContactAnalysisSegmentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectContactLensClient";
    const commandName = "ListRealtimeContactAnalysisSegmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRealtimeContactAnalysisSegmentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRealtimeContactAnalysisSegmentsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListRealtimeContactAnalysisSegmentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRealtimeContactAnalysisSegmentsCommandOutput> {
    return deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
