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

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { GetConfigRequest, GetConfigResponse } from "../models/models_0";
import { de_GetConfigCommand, se_GetConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConfigCommand}.
 */
export interface GetConfigCommandInput extends GetConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigCommand}.
 */
export interface GetConfigCommandOutput extends GetConfigResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns <code>Config</code> information.</p>
 *          <p>Only one <code>Config</code> response can be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetConfigCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetConfigCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // GetConfigRequest
 *   configId: "STRING_VALUE", // required
 *   configType: "STRING_VALUE", // required
 * };
 * const command = new GetConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigResponse
 * //   configId: "STRING_VALUE", // required
 * //   configArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   configType: "STRING_VALUE",
 * //   configData: { // ConfigTypeData Union: only one key present
 * //     antennaDownlinkConfig: { // AntennaDownlinkConfig
 * //       spectrumConfig: { // SpectrumConfig
 * //         centerFrequency: { // Frequency
 * //           value: Number("double"), // required
 * //           units: "STRING_VALUE", // required
 * //         },
 * //         bandwidth: { // FrequencyBandwidth
 * //           value: Number("double"), // required
 * //           units: "STRING_VALUE", // required
 * //         },
 * //         polarization: "STRING_VALUE",
 * //       },
 * //     },
 * //     trackingConfig: { // TrackingConfig
 * //       autotrack: "STRING_VALUE", // required
 * //     },
 * //     dataflowEndpointConfig: { // DataflowEndpointConfig
 * //       dataflowEndpointName: "STRING_VALUE", // required
 * //       dataflowEndpointRegion: "STRING_VALUE",
 * //     },
 * //     antennaDownlinkDemodDecodeConfig: { // AntennaDownlinkDemodDecodeConfig
 * //       spectrumConfig: {
 * //         centerFrequency: {
 * //           value: Number("double"), // required
 * //           units: "STRING_VALUE", // required
 * //         },
 * //         bandwidth: {
 * //           value: Number("double"), // required
 * //           units: "STRING_VALUE", // required
 * //         },
 * //         polarization: "STRING_VALUE",
 * //       },
 * //       demodulationConfig: { // DemodulationConfig
 * //         unvalidatedJSON: "STRING_VALUE", // required
 * //       },
 * //       decodeConfig: { // DecodeConfig
 * //         unvalidatedJSON: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     antennaUplinkConfig: { // AntennaUplinkConfig
 * //       transmitDisabled: true || false,
 * //       spectrumConfig: { // UplinkSpectrumConfig
 * //         centerFrequency: {
 * //           value: Number("double"), // required
 * //           units: "STRING_VALUE", // required
 * //         },
 * //         polarization: "STRING_VALUE",
 * //       },
 * //       targetEirp: { // Eirp
 * //         value: Number("double"), // required
 * //         units: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     uplinkEchoConfig: { // UplinkEchoConfig
 * //       enabled: true || false, // required
 * //       antennaUplinkConfigArn: "STRING_VALUE", // required
 * //     },
 * //     s3RecordingConfig: { // S3RecordingConfig
 * //       bucketArn: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       prefix: "STRING_VALUE",
 * //     },
 * //   },
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConfigCommandInput - {@link GetConfigCommandInput}
 * @returns {@link GetConfigCommandOutput}
 * @see {@link GetConfigCommandInput} for command's `input` shape.
 * @see {@link GetConfigCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 */
export class GetConfigCommand extends $Command<
  GetConfigCommandInput,
  GetConfigCommandOutput,
  GroundStationClientResolvedConfig
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
  constructor(readonly input: GetConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConfigCommandInput, GetConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetConfigCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "GetConfigCommand";
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
  private serialize(input: GetConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConfigCommandOutput> {
    return de_GetConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
