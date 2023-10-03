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

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  ListDevicePositionsRequest,
  ListDevicePositionsRequestFilterSensitiveLog,
  ListDevicePositionsResponse,
  ListDevicePositionsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListDevicePositionsCommand, se_ListDevicePositionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDevicePositionsCommand}.
 */
export interface ListDevicePositionsCommandInput extends ListDevicePositionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDevicePositionsCommand}.
 */
export interface ListDevicePositionsCommandOutput extends ListDevicePositionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>A batch request to retrieve all device positions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListDevicePositionsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListDevicePositionsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // ListDevicePositionsRequest
 *   TrackerName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   FilterGeometry: { // TrackingFilterGeometry
 *     Polygon: [ // LinearRings
 *       [ // LinearRing
 *         [ // Position
 *           Number("double"),
 *         ],
 *       ],
 *     ],
 *   },
 * };
 * const command = new ListDevicePositionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDevicePositionsResponse
 * //   Entries: [ // ListDevicePositionsResponseEntryList // required
 * //     { // ListDevicePositionsResponseEntry
 * //       DeviceId: "STRING_VALUE", // required
 * //       SampleTime: new Date("TIMESTAMP"), // required
 * //       Position: [ // Position // required
 * //         Number("double"),
 * //       ],
 * //       Accuracy: { // PositionalAccuracy
 * //         Horizontal: Number("double"), // required
 * //       },
 * //       PositionProperties: { // PropertyMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDevicePositionsCommandInput - {@link ListDevicePositionsCommandInput}
 * @returns {@link ListDevicePositionsCommandOutput}
 * @see {@link ListDevicePositionsCommandInput} for command's `input` shape.
 * @see {@link ListDevicePositionsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 */
export class ListDevicePositionsCommand extends $Command<
  ListDevicePositionsCommandInput,
  ListDevicePositionsCommandOutput,
  LocationClientResolvedConfig
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
  constructor(readonly input: ListDevicePositionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDevicePositionsCommandInput, ListDevicePositionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDevicePositionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "ListDevicePositionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDevicePositionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDevicePositionsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "LocationService",
        operation: "ListDevicePositions",
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
  private serialize(input: ListDevicePositionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDevicePositionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDevicePositionsCommandOutput> {
    return de_ListDevicePositionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
