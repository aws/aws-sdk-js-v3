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
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetPositionEstimateRequest, GetPositionEstimateResponse } from "../models/models_0";
import { de_GetPositionEstimateCommand, se_GetPositionEstimateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPositionEstimateCommand}.
 */
export interface GetPositionEstimateCommandInput extends GetPositionEstimateRequest {}
/**
 * @public
 */
export type GetPositionEstimateCommandOutputType = Omit<GetPositionEstimateResponse, "GeoJsonPayload"> & {
  GeoJsonPayload?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetPositionEstimateCommand}.
 */
export interface GetPositionEstimateCommandOutput extends GetPositionEstimateCommandOutputType, __MetadataBearer {}

/**
 * @public
 * <p>Get estimated position information as a payload in GeoJSON format. The payload
 *             measurement data is resolved using solvers that are provided by third-party
 *             vendors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetPositionEstimateCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetPositionEstimateCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetPositionEstimateRequest
 *   WiFiAccessPoints: [ // WiFiAccessPoints
 *     { // WiFiAccessPoint
 *       MacAddress: "STRING_VALUE", // required
 *       Rss: Number("int"), // required
 *     },
 *   ],
 *   CellTowers: { // CellTowers
 *     Gsm: [ // GsmList
 *       { // GsmObj
 *         Mcc: Number("int"), // required
 *         Mnc: Number("int"), // required
 *         Lac: Number("int"), // required
 *         GeranCid: Number("int"), // required
 *         GsmLocalId: { // GsmLocalId
 *           Bsic: Number("int"), // required
 *           Bcch: Number("int"), // required
 *         },
 *         GsmTimingAdvance: Number("int"),
 *         RxLevel: Number("int"),
 *         GsmNmr: [ // GsmNmrList
 *           { // GsmNmrObj
 *             Bsic: Number("int"), // required
 *             Bcch: Number("int"), // required
 *             RxLevel: Number("int"),
 *             GlobalIdentity: { // GlobalIdentity
 *               Lac: Number("int"), // required
 *               GeranCid: Number("int"), // required
 *             },
 *           },
 *         ],
 *       },
 *     ],
 *     Wcdma: [ // WcdmaList
 *       { // WcdmaObj
 *         Mcc: Number("int"), // required
 *         Mnc: Number("int"), // required
 *         Lac: Number("int"),
 *         UtranCid: Number("int"), // required
 *         WcdmaLocalId: { // WcdmaLocalId
 *           Uarfcndl: Number("int"), // required
 *           Psc: Number("int"), // required
 *         },
 *         Rscp: Number("int"),
 *         PathLoss: Number("int"),
 *         WcdmaNmr: [ // WcdmaNmrList
 *           { // WcdmaNmrObj
 *             Uarfcndl: Number("int"), // required
 *             Psc: Number("int"), // required
 *             UtranCid: Number("int"), // required
 *             Rscp: Number("int"),
 *             PathLoss: Number("int"),
 *           },
 *         ],
 *       },
 *     ],
 *     Tdscdma: [ // TdscdmaList
 *       { // TdscdmaObj
 *         Mcc: Number("int"), // required
 *         Mnc: Number("int"), // required
 *         Lac: Number("int"),
 *         UtranCid: Number("int"), // required
 *         TdscdmaLocalId: { // TdscdmaLocalId
 *           Uarfcn: Number("int"), // required
 *           CellParams: Number("int"), // required
 *         },
 *         TdscdmaTimingAdvance: Number("int"),
 *         Rscp: Number("int"),
 *         PathLoss: Number("int"),
 *         TdscdmaNmr: [ // TdscdmaNmrList
 *           { // TdscdmaNmrObj
 *             Uarfcn: Number("int"), // required
 *             CellParams: Number("int"), // required
 *             UtranCid: Number("int"),
 *             Rscp: Number("int"),
 *             PathLoss: Number("int"),
 *           },
 *         ],
 *       },
 *     ],
 *     Lte: [ // LteList
 *       { // LteObj
 *         Mcc: Number("int"), // required
 *         Mnc: Number("int"), // required
 *         EutranCid: Number("int"), // required
 *         Tac: Number("int"),
 *         LteLocalId: { // LteLocalId
 *           Pci: Number("int"), // required
 *           Earfcn: Number("int"), // required
 *         },
 *         LteTimingAdvance: Number("int"),
 *         Rsrp: Number("int"),
 *         Rsrq: Number("float"),
 *         NrCapable: true || false,
 *         LteNmr: [ // LteNmrList
 *           { // LteNmrObj
 *             Pci: Number("int"), // required
 *             Earfcn: Number("int"), // required
 *             EutranCid: Number("int"), // required
 *             Rsrp: Number("int"),
 *             Rsrq: Number("float"),
 *           },
 *         ],
 *       },
 *     ],
 *     Cdma: [ // CdmaList
 *       { // CdmaObj
 *         SystemId: Number("int"), // required
 *         NetworkId: Number("int"), // required
 *         BaseStationId: Number("int"), // required
 *         RegistrationZone: Number("int"),
 *         CdmaLocalId: { // CdmaLocalId
 *           PnOffset: Number("int"), // required
 *           CdmaChannel: Number("int"), // required
 *         },
 *         PilotPower: Number("int"),
 *         BaseLat: Number("float"),
 *         BaseLng: Number("float"),
 *         CdmaNmr: [ // CdmaNmrList
 *           { // CdmaNmrObj
 *             PnOffset: Number("int"), // required
 *             CdmaChannel: Number("int"), // required
 *             PilotPower: Number("int"),
 *             BaseStationId: Number("int"),
 *           },
 *         ],
 *       },
 *     ],
 *   },
 *   Ip: { // Ip
 *     IpAddress: "STRING_VALUE", // required
 *   },
 *   Gnss: { // Gnss
 *     Payload: "STRING_VALUE", // required
 *     CaptureTime: Number("float"),
 *     CaptureTimeAccuracy: Number("float"),
 *     AssistPosition: [ // AssistPosition
 *       Number("float"),
 *     ],
 *     AssistAltitude: Number("float"),
 *     Use2DSolver: true || false,
 *   },
 *   Timestamp: new Date("TIMESTAMP"),
 * };
 * const command = new GetPositionEstimateCommand(input);
 * const response = await client.send(command);
 * // { // GetPositionEstimateResponse
 * //   GeoJsonPayload: "BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPositionEstimateCommandInput - {@link GetPositionEstimateCommandInput}
 * @returns {@link GetPositionEstimateCommandOutput}
 * @see {@link GetPositionEstimateCommandInput} for command's `input` shape.
 * @see {@link GetPositionEstimateCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 */
export class GetPositionEstimateCommand extends $Command<
  GetPositionEstimateCommandInput,
  GetPositionEstimateCommandOutput,
  IoTWirelessClientResolvedConfig
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
  constructor(readonly input: GetPositionEstimateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPositionEstimateCommandInput, GetPositionEstimateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPositionEstimateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetPositionEstimateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "GetPositionEstimate",
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
  private serialize(input: GetPositionEstimateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPositionEstimateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPositionEstimateCommandOutput> {
    return de_GetPositionEstimateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
