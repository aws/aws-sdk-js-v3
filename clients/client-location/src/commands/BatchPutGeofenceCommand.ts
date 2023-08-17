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

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  BatchPutGeofenceRequest,
  BatchPutGeofenceRequestFilterSensitiveLog,
  BatchPutGeofenceResponse,
} from "../models/models_0";
import { de_BatchPutGeofenceCommand, se_BatchPutGeofenceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchPutGeofenceCommand}.
 */
export interface BatchPutGeofenceCommandInput extends BatchPutGeofenceRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutGeofenceCommand}.
 */
export interface BatchPutGeofenceCommandOutput extends BatchPutGeofenceResponse, __MetadataBearer {}

/**
 * @public
 * <p>A batch request for storing geofence geometries into a given geofence collection, or
 *             updates the geometry of an existing geofence if a geofence ID is included in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchPutGeofenceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchPutGeofenceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // BatchPutGeofenceRequest
 *   CollectionName: "STRING_VALUE", // required
 *   Entries: [ // BatchPutGeofenceRequestEntryList // required
 *     { // BatchPutGeofenceRequestEntry
 *       GeofenceId: "STRING_VALUE", // required
 *       Geometry: { // GeofenceGeometry
 *         Polygon: [ // LinearRings
 *           [ // LinearRing
 *             [ // Position
 *               Number("double"),
 *             ],
 *           ],
 *         ],
 *         Circle: { // Circle
 *           Center: [ // required
 *             Number("double"),
 *           ],
 *           Radius: Number("double"), // required
 *         },
 *       },
 *       GeofenceProperties: { // PropertyMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchPutGeofenceCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutGeofenceResponse
 * //   Successes: [ // BatchPutGeofenceSuccessList // required
 * //     { // BatchPutGeofenceSuccess
 * //       GeofenceId: "STRING_VALUE", // required
 * //       CreateTime: new Date("TIMESTAMP"), // required
 * //       UpdateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   Errors: [ // BatchPutGeofenceErrorList // required
 * //     { // BatchPutGeofenceError
 * //       GeofenceId: "STRING_VALUE", // required
 * //       Error: { // BatchItemError
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutGeofenceCommandInput - {@link BatchPutGeofenceCommandInput}
 * @returns {@link BatchPutGeofenceCommandOutput}
 * @see {@link BatchPutGeofenceCommandInput} for command's `input` shape.
 * @see {@link BatchPutGeofenceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
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
export class BatchPutGeofenceCommand extends $Command<
  BatchPutGeofenceCommandInput,
  BatchPutGeofenceCommandOutput,
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
  constructor(readonly input: BatchPutGeofenceCommandInput) {
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
  ): Handler<BatchPutGeofenceCommandInput, BatchPutGeofenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchPutGeofenceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "BatchPutGeofenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchPutGeofenceRequestFilterSensitiveLog,
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
  private serialize(input: BatchPutGeofenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchPutGeofenceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchPutGeofenceCommandOutput> {
    return de_BatchPutGeofenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
