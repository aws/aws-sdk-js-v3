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

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import {
  ListEventPredictionsRequest,
  ListEventPredictionsRequestFilterSensitiveLog,
  ListEventPredictionsResult,
  ListEventPredictionsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListEventPredictionsCommand,
  serializeAws_json1_1ListEventPredictionsCommand,
} from "../protocols/Aws_json1_1";

export interface ListEventPredictionsCommandInput extends ListEventPredictionsRequest {}
export interface ListEventPredictionsCommandOutput extends ListEventPredictionsResult, __MetadataBearer {}

/**
 * <p>Gets a list of past predictions. The list can be filtered by detector ID, detector version ID, event ID, event type, or by specifying a time period.
 *     If filter is not specified, the most recent prediction is returned.</p>
 *
 *          <p>For example, the following filter lists all past predictions for <code>xyz</code> event type -
 *     <code>{
 *         "eventType":{
 *         "value": "xyz" }”
 *         }  </code>
 *          </p>
 *
 *          <p>This is a paginated API. If you provide a null <code>maxResults</code>, this action will retrieve a maximum of 10 records per page.
 *   If you provide a <code>maxResults</code>, the value must be between 50 and 100. To get the next page results, provide
 *   the <code>nextToken</code> from the response as part of your request. A null <code>nextToken</code> fetches the records from the beginning.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, ListEventPredictionsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, ListEventPredictionsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new ListEventPredictionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventPredictionsCommandInput} for command's `input` shape.
 * @see {@link ListEventPredictionsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 */
export class ListEventPredictionsCommand extends $Command<
  ListEventPredictionsCommandInput,
  ListEventPredictionsCommandOutput,
  FraudDetectorClientResolvedConfig
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

  constructor(readonly input: ListEventPredictionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEventPredictionsCommandInput, ListEventPredictionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEventPredictionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "ListEventPredictionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEventPredictionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListEventPredictionsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEventPredictionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListEventPredictionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEventPredictionsCommandOutput> {
    return deserializeAws_json1_1ListEventPredictionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
