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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { RegisterAVSDeviceRequest, RegisterAVSDeviceResponse } from "../models/models_0";
import { de_RegisterAVSDeviceCommand, se_RegisterAVSDeviceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterAVSDeviceCommand}.
 */
export interface RegisterAVSDeviceCommandInput extends RegisterAVSDeviceRequest {}
/**
 * @public
 *
 * The output of {@link RegisterAVSDeviceCommand}.
 */
export interface RegisterAVSDeviceCommandOutput extends RegisterAVSDeviceResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Registers an Alexa-enabled device built by an Original Equipment Manufacturer (OEM)
 *          using Alexa Voice Service (AVS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, RegisterAVSDeviceCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, RegisterAVSDeviceCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // RegisterAVSDeviceRequest
 *   ClientId: "STRING_VALUE", // required
 *   UserCode: "STRING_VALUE", // required
 *   ProductId: "STRING_VALUE", // required
 *   DeviceSerialNumber: "STRING_VALUE",
 *   AmazonId: "STRING_VALUE", // required
 *   RoomArn: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new RegisterAVSDeviceCommand(input);
 * const response = await client.send(command);
 * // { // RegisterAVSDeviceResponse
 * //   DeviceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterAVSDeviceCommandInput - {@link RegisterAVSDeviceCommandInput}
 * @returns {@link RegisterAVSDeviceCommandOutput}
 * @see {@link RegisterAVSDeviceCommandInput} for command's `input` shape.
 * @see {@link RegisterAVSDeviceCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link InvalidDeviceException} (client fault)
 *  <p>The device is in an invalid state.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You are performing an action that would put you beyond your account's limits.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class RegisterAVSDeviceCommand extends $Command<
  RegisterAVSDeviceCommandInput,
  RegisterAVSDeviceCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: RegisterAVSDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterAVSDeviceCommandInput, RegisterAVSDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterAVSDeviceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "RegisterAVSDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "RegisterAVSDevice",
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
  private serialize(input: RegisterAVSDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterAVSDeviceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterAVSDeviceCommandOutput> {
    return de_RegisterAVSDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
