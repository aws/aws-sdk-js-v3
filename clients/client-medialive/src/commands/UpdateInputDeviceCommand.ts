// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateInputDeviceRequest, UpdateInputDeviceResponse } from "../models/models_2";
import { de_UpdateInputDeviceCommand, se_UpdateInputDeviceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateInputDeviceCommand}.
 */
export interface UpdateInputDeviceCommandInput extends UpdateInputDeviceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInputDeviceCommand}.
 */
export interface UpdateInputDeviceCommandOutput extends UpdateInputDeviceResponse, __MetadataBearer {}

/**
 * @public
 * Updates the parameters for the input device.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateInputDeviceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateInputDeviceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateInputDeviceRequest
 *   HdDeviceSettings: { // InputDeviceConfigurableSettings
 *     ConfiguredInput: "AUTO" || "HDMI" || "SDI",
 *     MaxBitrate: Number("int"),
 *     LatencyMs: Number("int"),
 *   },
 *   InputDeviceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   UhdDeviceSettings: {
 *     ConfiguredInput: "AUTO" || "HDMI" || "SDI",
 *     MaxBitrate: Number("int"),
 *     LatencyMs: Number("int"),
 *   },
 * };
 * const command = new UpdateInputDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateInputDeviceCommandInput - {@link UpdateInputDeviceCommandInput}
 * @returns {@link UpdateInputDeviceCommandOutput}
 * @see {@link UpdateInputDeviceCommandInput} for command's `input` shape.
 * @see {@link UpdateInputDeviceCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  Placeholder documentation for UnprocessableEntityException
 *
 *
 */
export class UpdateInputDeviceCommand extends $Command<
  UpdateInputDeviceCommandInput,
  UpdateInputDeviceCommandOutput,
  MediaLiveClientResolvedConfig
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
  constructor(readonly input: UpdateInputDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateInputDeviceCommandInput, UpdateInputDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateInputDeviceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "UpdateInputDeviceCommand";
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
  private serialize(input: UpdateInputDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateInputDeviceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateInputDeviceCommandOutput> {
    return de_UpdateInputDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
