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

import {
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickDevicesServiceClient";
import { ClaimDevicesByClaimCodeRequest, ClaimDevicesByClaimCodeResponse } from "../models/models_0";
import { de_ClaimDevicesByClaimCodeCommand, se_ClaimDevicesByClaimCodeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ClaimDevicesByClaimCodeCommand}.
 */
export interface ClaimDevicesByClaimCodeCommandInput extends ClaimDevicesByClaimCodeRequest {}
/**
 * @public
 *
 * The output of {@link ClaimDevicesByClaimCodeCommand}.
 */
export interface ClaimDevicesByClaimCodeCommandOutput extends ClaimDevicesByClaimCodeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds device(s) to your account (i.e., claim one or more devices) if and only if you
 *  received a claim code with the device(s).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, ClaimDevicesByClaimCodeCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, ClaimDevicesByClaimCodeCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const input = { // ClaimDevicesByClaimCodeRequest
 *   ClaimCode: "STRING_VALUE", // required
 * };
 * const command = new ClaimDevicesByClaimCodeCommand(input);
 * const response = await client.send(command);
 * // { // ClaimDevicesByClaimCodeResponse
 * //   ClaimCode: "STRING_VALUE",
 * //   Total: Number("int"),
 * // };
 *
 * ```
 *
 * @param ClaimDevicesByClaimCodeCommandInput - {@link ClaimDevicesByClaimCodeCommandInput}
 * @returns {@link ClaimDevicesByClaimCodeCommandOutput}
 * @see {@link ClaimDevicesByClaimCodeCommandInput} for command's `input` shape.
 * @see {@link ClaimDevicesByClaimCodeCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for IoT1ClickDevicesServiceClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * @throws {@link IoT1ClickDevicesServiceServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickDevicesService service.</p>
 *
 */
export class ClaimDevicesByClaimCodeCommand extends $Command<
  ClaimDevicesByClaimCodeCommandInput,
  ClaimDevicesByClaimCodeCommandOutput,
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
  constructor(readonly input: ClaimDevicesByClaimCodeCommandInput) {
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
  ): Handler<ClaimDevicesByClaimCodeCommandInput, ClaimDevicesByClaimCodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ClaimDevicesByClaimCodeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickDevicesServiceClient";
    const commandName = "ClaimDevicesByClaimCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoT1ClickDevicesService",
        operation: "ClaimDevicesByClaimCode",
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
  private serialize(input: ClaimDevicesByClaimCodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ClaimDevicesByClaimCodeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ClaimDevicesByClaimCodeCommandOutput> {
    return de_ClaimDevicesByClaimCodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
