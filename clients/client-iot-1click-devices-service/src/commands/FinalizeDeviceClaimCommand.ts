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

import {
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickDevicesServiceClient";
import { FinalizeDeviceClaimRequest, FinalizeDeviceClaimResponse } from "../models/models_0";
import { de_FinalizeDeviceClaimCommand, se_FinalizeDeviceClaimCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link FinalizeDeviceClaimCommand}.
 */
export interface FinalizeDeviceClaimCommandInput extends FinalizeDeviceClaimRequest {}
/**
 * @public
 *
 * The output of {@link FinalizeDeviceClaimCommand}.
 */
export interface FinalizeDeviceClaimCommandOutput extends FinalizeDeviceClaimResponse, __MetadataBearer {}

/**
 * @public
 * <p>Given a device ID, finalizes the claim request for the associated device.</p><note>
 *  <p>Claiming a device consists of initiating a claim, then publishing a device event,
 *  and finalizing the claim. For a device of type button, a device event can
 *  be published by simply clicking the device.</p>
 *  </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, FinalizeDeviceClaimCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, FinalizeDeviceClaimCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const input = { // FinalizeDeviceClaimRequest
 *   DeviceId: "STRING_VALUE", // required
 *   Tags: { // __mapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new FinalizeDeviceClaimCommand(input);
 * const response = await client.send(command);
 * // { // FinalizeDeviceClaimResponse
 * //   State: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param FinalizeDeviceClaimCommandInput - {@link FinalizeDeviceClaimCommandInput}
 * @returns {@link FinalizeDeviceClaimCommandOutput}
 * @see {@link FinalizeDeviceClaimCommandInput} for command's `input` shape.
 * @see {@link FinalizeDeviceClaimCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for IoT1ClickDevicesServiceClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link IoT1ClickDevicesServiceServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickDevicesService service.</p>
 *
 */
export class FinalizeDeviceClaimCommand extends $Command<
  FinalizeDeviceClaimCommandInput,
  FinalizeDeviceClaimCommandOutput,
  IoT1ClickDevicesServiceClientResolvedConfig
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
  constructor(readonly input: FinalizeDeviceClaimCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickDevicesServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<FinalizeDeviceClaimCommandInput, FinalizeDeviceClaimCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, FinalizeDeviceClaimCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickDevicesServiceClient";
    const commandName = "FinalizeDeviceClaimCommand";
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
  private serialize(input: FinalizeDeviceClaimCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_FinalizeDeviceClaimCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<FinalizeDeviceClaimCommandOutput> {
    return de_FinalizeDeviceClaimCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
