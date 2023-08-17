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
import { DescribeDetectorRequest, DescribeDetectorResponse } from "../models/models_0";
import { de_DescribeDetectorCommand, se_DescribeDetectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDetectorCommand}.
 */
export interface DescribeDetectorCommandInput extends DescribeDetectorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDetectorCommand}.
 */
export interface DescribeDetectorCommandOutput extends DescribeDetectorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the specified detector (instance).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, DescribeDetectorCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, DescribeDetectorCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const input = { // DescribeDetectorRequest
 *   detectorModelName: "STRING_VALUE", // required
 *   keyValue: "STRING_VALUE",
 * };
 * const command = new DescribeDetectorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDetectorResponse
 * //   detector: { // Detector
 * //     detectorModelName: "STRING_VALUE",
 * //     keyValue: "STRING_VALUE",
 * //     detectorModelVersion: "STRING_VALUE",
 * //     state: { // DetectorState
 * //       stateName: "STRING_VALUE", // required
 * //       variables: [ // Variables // required
 * //         { // Variable
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       timers: [ // Timers // required
 * //         { // Timer
 * //           name: "STRING_VALUE", // required
 * //           timestamp: new Date("TIMESTAMP"), // required
 * //         },
 * //       ],
 * //     },
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDetectorCommandInput - {@link DescribeDetectorCommandInput}
 * @returns {@link DescribeDetectorCommandOutput}
 * @see {@link DescribeDetectorCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectorCommandOutput} for command's `response` shape.
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
export class DescribeDetectorCommand extends $Command<
  DescribeDetectorCommandInput,
  DescribeDetectorCommandOutput,
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
  constructor(readonly input: DescribeDetectorCommandInput) {
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
  ): Handler<DescribeDetectorCommandInput, DescribeDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDetectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsDataClient";
    const commandName = "DescribeDetectorCommand";
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
  private serialize(input: DescribeDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDetectorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDetectorCommandOutput> {
    return de_DescribeDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
