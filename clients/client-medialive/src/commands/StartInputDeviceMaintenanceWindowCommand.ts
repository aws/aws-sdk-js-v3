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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import {
  StartInputDeviceMaintenanceWindowRequest,
  StartInputDeviceMaintenanceWindowResponse,
} from "../models/models_2";
import {
  de_StartInputDeviceMaintenanceWindowCommand,
  se_StartInputDeviceMaintenanceWindowCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartInputDeviceMaintenanceWindowCommand}.
 */
export interface StartInputDeviceMaintenanceWindowCommandInput extends StartInputDeviceMaintenanceWindowRequest {}
/**
 * @public
 *
 * The output of {@link StartInputDeviceMaintenanceWindowCommand}.
 */
export interface StartInputDeviceMaintenanceWindowCommandOutput
  extends StartInputDeviceMaintenanceWindowResponse,
    __MetadataBearer {}

/**
 * @public
 * Start a maintenance window for the specified input device. Starting a maintenance window will give the device up to two hours to install software. If the device was streaming prior to the maintenance, it will resume streaming when the software is fully installed. Devices automatically install updates while they are powered on and their MediaLive channels are stopped. A maintenance window allows you to update a device without having to stop MediaLive channels that use the device. The device must remain powered on and connected to the internet for the duration of the maintenance.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, StartInputDeviceMaintenanceWindowCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, StartInputDeviceMaintenanceWindowCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // StartInputDeviceMaintenanceWindowRequest
 *   InputDeviceId: "STRING_VALUE", // required
 * };
 * const command = new StartInputDeviceMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartInputDeviceMaintenanceWindowCommandInput - {@link StartInputDeviceMaintenanceWindowCommandInput}
 * @returns {@link StartInputDeviceMaintenanceWindowCommandOutput}
 * @see {@link StartInputDeviceMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link StartInputDeviceMaintenanceWindowCommandOutput} for command's `response` shape.
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
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 */
export class StartInputDeviceMaintenanceWindowCommand extends $Command<
  StartInputDeviceMaintenanceWindowCommandInput,
  StartInputDeviceMaintenanceWindowCommandOutput,
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
  constructor(readonly input: StartInputDeviceMaintenanceWindowCommandInput) {
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
  ): Handler<StartInputDeviceMaintenanceWindowCommandInput, StartInputDeviceMaintenanceWindowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartInputDeviceMaintenanceWindowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "StartInputDeviceMaintenanceWindowCommand";
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
  private serialize(
    input: StartInputDeviceMaintenanceWindowCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_StartInputDeviceMaintenanceWindowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartInputDeviceMaintenanceWindowCommandOutput> {
    return de_StartInputDeviceMaintenanceWindowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
