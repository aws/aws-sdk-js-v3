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
import { BatchAcknowledgeAlarmRequest, BatchAcknowledgeAlarmResponse } from "../models/models_0";
import { de_BatchAcknowledgeAlarmCommand, se_BatchAcknowledgeAlarmCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchAcknowledgeAlarmCommand}.
 */
export interface BatchAcknowledgeAlarmCommandInput extends BatchAcknowledgeAlarmRequest {}
/**
 * @public
 *
 * The output of {@link BatchAcknowledgeAlarmCommand}.
 */
export interface BatchAcknowledgeAlarmCommandOutput extends BatchAcknowledgeAlarmResponse, __MetadataBearer {}

/**
 * @public
 * <p>Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state
 *       after you acknowledge them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchAcknowledgeAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchAcknowledgeAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const input = { // BatchAcknowledgeAlarmRequest
 *   acknowledgeActionRequests: [ // AcknowledgeAlarmActionRequests // required
 *     { // AcknowledgeAlarmActionRequest
 *       requestId: "STRING_VALUE", // required
 *       alarmModelName: "STRING_VALUE", // required
 *       keyValue: "STRING_VALUE",
 *       note: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchAcknowledgeAlarmCommand(input);
 * const response = await client.send(command);
 * // { // BatchAcknowledgeAlarmResponse
 * //   errorEntries: [ // BatchAlarmActionErrorEntries
 * //     { // BatchAlarmActionErrorEntry
 * //       requestId: "STRING_VALUE",
 * //       errorCode: "ResourceNotFoundException" || "InvalidRequestException" || "InternalFailureException" || "ServiceUnavailableException" || "ThrottlingException",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchAcknowledgeAlarmCommandInput - {@link BatchAcknowledgeAlarmCommandInput}
 * @returns {@link BatchAcknowledgeAlarmCommandOutput}
 * @see {@link BatchAcknowledgeAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchAcknowledgeAlarmCommandOutput} for command's `response` shape.
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
export class BatchAcknowledgeAlarmCommand extends $Command<
  BatchAcknowledgeAlarmCommandInput,
  BatchAcknowledgeAlarmCommandOutput,
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
  constructor(readonly input: BatchAcknowledgeAlarmCommandInput) {
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
  ): Handler<BatchAcknowledgeAlarmCommandInput, BatchAcknowledgeAlarmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchAcknowledgeAlarmCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsDataClient";
    const commandName = "BatchAcknowledgeAlarmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IotColumboDataService",
        operation: "BatchAcknowledgeAlarm",
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
  private serialize(input: BatchAcknowledgeAlarmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchAcknowledgeAlarmCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchAcknowledgeAlarmCommandOutput> {
    return de_BatchAcknowledgeAlarmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
