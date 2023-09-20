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

import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchUpdateDetectorRequest, BatchUpdateDetectorResponse } from "../models/models_0";
import { de_BatchUpdateDetectorCommand, se_BatchUpdateDetectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateDetectorCommand}.
 */
export interface BatchUpdateDetectorCommandInput extends BatchUpdateDetectorRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateDetectorCommand}.
 */
export interface BatchUpdateDetectorCommandOutput extends BatchUpdateDetectorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the state, variable values, and timer settings of one or more detectors
 *       (instances) of a specified detector model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchUpdateDetectorCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchUpdateDetectorCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const input = { // BatchUpdateDetectorRequest
 *   detectors: [ // UpdateDetectorRequests // required
 *     { // UpdateDetectorRequest
 *       messageId: "STRING_VALUE", // required
 *       detectorModelName: "STRING_VALUE", // required
 *       keyValue: "STRING_VALUE",
 *       state: { // DetectorStateDefinition
 *         stateName: "STRING_VALUE", // required
 *         variables: [ // VariableDefinitions // required
 *           { // VariableDefinition
 *             name: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *           },
 *         ],
 *         timers: [ // TimerDefinitions // required
 *           { // TimerDefinition
 *             name: "STRING_VALUE", // required
 *             seconds: Number("int"), // required
 *           },
 *         ],
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchUpdateDetectorCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateDetectorResponse
 * //   batchUpdateDetectorErrorEntries: [ // BatchUpdateDetectorErrorEntries
 * //     { // BatchUpdateDetectorErrorEntry
 * //       messageId: "STRING_VALUE",
 * //       errorCode: "ResourceNotFoundException" || "InvalidRequestException" || "InternalFailureException" || "ServiceUnavailableException" || "ThrottlingException",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateDetectorCommandInput - {@link BatchUpdateDetectorCommandInput}
 * @returns {@link BatchUpdateDetectorCommandOutput}
 * @see {@link BatchUpdateDetectorCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateDetectorCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for IoTEventsDataClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsDataServiceException}
 * <p>Base exception class for all service exceptions from IoTEventsData service.</p>
 *
 */
export class BatchUpdateDetectorCommand extends $Command<
  BatchUpdateDetectorCommandInput,
  BatchUpdateDetectorCommandOutput,
  IoTEventsDataClientResolvedConfig
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
  constructor(readonly input: BatchUpdateDetectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUpdateDetectorCommandInput, BatchUpdateDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchUpdateDetectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsDataClient";
    const commandName = "BatchUpdateDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IotColumboDataService",
        operation: "BatchUpdateDetector",
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
  private serialize(input: BatchUpdateDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchUpdateDetectorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdateDetectorCommandOutput> {
    return de_BatchUpdateDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
