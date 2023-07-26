// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  BlobPayloadInputTypes,
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { UpdateResourcePositionRequest, UpdateResourcePositionResponse } from "../models/models_1";
import { de_UpdateResourcePositionCommand, se_UpdateResourcePositionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 */
export type UpdateResourcePositionCommandInputType = Omit<UpdateResourcePositionRequest, "GeoJsonPayload"> & {
  GeoJsonPayload?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link UpdateResourcePositionCommand}.
 */
export interface UpdateResourcePositionCommandInput extends UpdateResourcePositionCommandInputType {}
/**
 * @public
 *
 * The output of {@link UpdateResourcePositionCommand}.
 */
export interface UpdateResourcePositionCommandOutput extends UpdateResourcePositionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Update the position information of a given wireless device or a wireless gateway
 *             resource. The position coordinates are based on the <a href="https://gisgeography.com/wgs84-world-geodetic-system/"> World Geodetic System
 *                 (WGS84)</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateResourcePositionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateResourcePositionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateResourcePositionRequest
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ResourceType: "WirelessDevice" || "WirelessGateway", // required
 *   GeoJsonPayload: "BLOB_VALUE",
 * };
 * const command = new UpdateResourcePositionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateResourcePositionCommandInput - {@link UpdateResourcePositionCommandInput}
 * @returns {@link UpdateResourcePositionCommandOutput}
 * @see {@link UpdateResourcePositionCommandInput} for command's `input` shape.
 * @see {@link UpdateResourcePositionCommandOutput} for command's `response` shape.
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
export class UpdateResourcePositionCommand extends $Command<
  UpdateResourcePositionCommandInput,
  UpdateResourcePositionCommandOutput,
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
  constructor(readonly input: UpdateResourcePositionCommandInput) {
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
  ): Handler<UpdateResourcePositionCommandInput, UpdateResourcePositionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateResourcePositionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "UpdateResourcePositionCommand";
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
  private serialize(input: UpdateResourcePositionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateResourcePositionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResourcePositionCommandOutput> {
    return de_UpdateResourcePositionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
