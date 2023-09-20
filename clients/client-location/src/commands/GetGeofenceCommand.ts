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
import { GetGeofenceRequest, GetGeofenceResponse, GetGeofenceResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetGeofenceCommand, se_GetGeofenceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetGeofenceCommand}.
 */
export interface GetGeofenceCommandInput extends GetGeofenceRequest {}
/**
 * @public
 *
 * The output of {@link GetGeofenceCommand}.
 */
export interface GetGeofenceCommandOutput extends GetGeofenceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the geofence details from a geofence collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetGeofenceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetGeofenceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // GetGeofenceRequest
 *   CollectionName: "STRING_VALUE", // required
 *   GeofenceId: "STRING_VALUE", // required
 * };
 * const command = new GetGeofenceCommand(input);
 * const response = await client.send(command);
 * // { // GetGeofenceResponse
 * //   GeofenceId: "STRING_VALUE", // required
 * //   Geometry: { // GeofenceGeometry
 * //     Polygon: [ // LinearRings
 * //       [ // LinearRing
 * //         [ // Position
 * //           Number("double"),
 * //         ],
 * //       ],
 * //     ],
 * //     Circle: { // Circle
 * //       Center: [ // required
 * //         Number("double"),
 * //       ],
 * //       Radius: Number("double"), // required
 * //     },
 * //   },
 * //   Status: "STRING_VALUE", // required
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * //   GeofenceProperties: { // PropertyMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGeofenceCommandInput - {@link GetGeofenceCommandInput}
 * @returns {@link GetGeofenceCommandOutput}
 * @see {@link GetGeofenceCommandInput} for command's `input` shape.
 * @see {@link GetGeofenceCommandOutput} for command's `response` shape.
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
export class GetGeofenceCommand extends $Command<
  GetGeofenceCommandInput,
  GetGeofenceCommandOutput,
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
  constructor(readonly input: GetGeofenceCommandInput) {
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
  ): Handler<GetGeofenceCommandInput, GetGeofenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetGeofenceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "GetGeofenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetGeofenceResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "LocationService",
        operation: "GetGeofence",
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
  private serialize(input: GetGeofenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetGeofenceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGeofenceCommandOutput> {
    return de_GetGeofenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
