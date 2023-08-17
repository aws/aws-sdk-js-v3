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
} from "@smithy/types";

import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { ListDetectorsRequest, ListDetectorsResponse } from "../models/models_0";
import { de_ListDetectorsCommand, se_ListDetectorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDetectorsCommand}.
 */
export interface ListDetectorsCommandInput extends ListDetectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListDetectorsCommand}.
 */
export interface ListDetectorsCommandOutput extends ListDetectorsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists detectors (the instances of a detector model).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, ListDetectorsCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, ListDetectorsCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const input = { // ListDetectorsRequest
 *   detectorModelName: "STRING_VALUE", // required
 *   stateName: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDetectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListDetectorsResponse
 * //   detectorSummaries: [ // DetectorSummaries
 * //     { // DetectorSummary
 * //       detectorModelName: "STRING_VALUE",
 * //       keyValue: "STRING_VALUE",
 * //       detectorModelVersion: "STRING_VALUE",
 * //       state: { // DetectorStateSummary
 * //         stateName: "STRING_VALUE",
 * //       },
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDetectorsCommandInput - {@link ListDetectorsCommandInput}
 * @returns {@link ListDetectorsCommandOutput}
 * @see {@link ListDetectorsCommandInput} for command's `input` shape.
 * @see {@link ListDetectorsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for IoTEventsDataClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
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
export class ListDetectorsCommand extends $Command<
  ListDetectorsCommandInput,
  ListDetectorsCommandOutput,
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
  constructor(readonly input: ListDetectorsCommandInput) {
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
  ): Handler<ListDetectorsCommandInput, ListDetectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListDetectorsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsDataClient";
    const commandName = "ListDetectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ListDetectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDetectorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDetectorsCommandOutput> {
    return de_ListDetectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
