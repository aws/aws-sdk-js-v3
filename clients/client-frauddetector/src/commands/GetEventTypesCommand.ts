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
import { GetEventTypesRequest, GetEventTypesResult, GetEventTypesResultFilterSensitiveLog } from "../models/models_0";
import { de_GetEventTypesCommand, se_GetEventTypesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEventTypesCommand}.
 */
export interface GetEventTypesCommandInput extends GetEventTypesRequest {}
/**
 * @public
 *
 * The output of {@link GetEventTypesCommand}.
 */
export interface GetEventTypesCommandOutput extends GetEventTypesResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets all event types or a specific event type if name is provided. This is a paginated API. If you
 *          provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records
 *          per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10.
 *          To get the next page results, provide the pagination token from the
 *             <code>GetEventTypesResponse</code> as part of your request. A null pagination token
 *          fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetEventTypesCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetEventTypesCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // GetEventTypesRequest
 *   name: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetEventTypesCommand(input);
 * const response = await client.send(command);
 * // { // GetEventTypesResult
 * //   eventTypes: [ // eventTypeList
 * //     { // EventType
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       eventVariables: [ // ListOfStrings
 * //         "STRING_VALUE",
 * //       ],
 * //       labels: [
 * //         "STRING_VALUE",
 * //       ],
 * //       entityTypes: [ // NonEmptyListOfStrings
 * //         "STRING_VALUE",
 * //       ],
 * //       eventIngestion: "ENABLED" || "DISABLED",
 * //       ingestedEventStatistics: { // IngestedEventStatistics
 * //         numberOfEvents: Number("long"),
 * //         eventDataSizeInBytes: Number("long"),
 * //         leastRecentEvent: "STRING_VALUE",
 * //         mostRecentEvent: "STRING_VALUE",
 * //         lastUpdatedTime: "STRING_VALUE",
 * //       },
 * //       lastUpdatedTime: "STRING_VALUE",
 * //       createdTime: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       eventOrchestration: { // EventOrchestration
 * //         eventBridgeEnabled: true || false, // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEventTypesCommandInput - {@link GetEventTypesCommandInput}
 * @returns {@link GetEventTypesCommandOutput}
 * @see {@link GetEventTypesCommandInput} for command's `input` shape.
 * @see {@link GetEventTypesCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
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
export class GetEventTypesCommand extends $Command<
  GetEventTypesCommandInput,
  GetEventTypesCommandOutput,
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
  constructor(readonly input: GetEventTypesCommandInput) {
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
  ): Handler<GetEventTypesCommandInput, GetEventTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetEventTypesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetEventTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetEventTypesResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHawksNestServiceFacade",
        operation: "GetEventTypes",
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
  private serialize(input: GetEventTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEventTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEventTypesCommandOutput> {
    return de_GetEventTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
