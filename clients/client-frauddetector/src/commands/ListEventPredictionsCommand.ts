// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { ListEventPredictionsRequest, ListEventPredictionsResult } from "../models/models_0";
import { de_ListEventPredictionsCommand, se_ListEventPredictionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEventPredictionsCommand}.
 */
export interface ListEventPredictionsCommandInput extends ListEventPredictionsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventPredictionsCommand}.
 */
export interface ListEventPredictionsCommandOutput extends ListEventPredictionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of past predictions. The list can be filtered by detector ID, detector version ID, event ID, event type, or by specifying a time period.
 *     If filter is not specified, the most recent prediction is returned.</p>
 *          <p>For example, the following filter lists all past predictions for <code>xyz</code> event type -
 *     <code>\{
 *         "eventType":\{
 *         "value": "xyz" \}”
 *         \}  </code>
 *          </p>
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
 * const input = { // ListEventPredictionsRequest
 *   eventId: { // FilterCondition
 *     value: "STRING_VALUE",
 *   },
 *   eventType: {
 *     value: "STRING_VALUE",
 *   },
 *   detectorId: {
 *     value: "STRING_VALUE",
 *   },
 *   detectorVersionId: {
 *     value: "STRING_VALUE",
 *   },
 *   predictionTimeRange: { // PredictionTimeRange
 *     startTime: "STRING_VALUE", // required
 *     endTime: "STRING_VALUE", // required
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEventPredictionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventPredictionsResult
 * //   eventPredictionSummaries: [ // ListOfEventPredictionSummaries
 * //     { // EventPredictionSummary
 * //       eventId: "STRING_VALUE",
 * //       eventTypeName: "STRING_VALUE",
 * //       eventTimestamp: "STRING_VALUE",
 * //       predictionTimestamp: "STRING_VALUE",
 * //       detectorId: "STRING_VALUE",
 * //       detectorVersionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventPredictionsCommandInput - {@link ListEventPredictionsCommandInput}
 * @returns {@link ListEventPredictionsCommandOutput}
 * @see {@link ListEventPredictionsCommandInput} for command's `input` shape.
 * @see {@link ListEventPredictionsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHawksNestServiceFacade",
        operation: "ListEventPredictions",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListEventPredictionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEventPredictionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEventPredictionsCommandOutput> {
    return de_ListEventPredictionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
