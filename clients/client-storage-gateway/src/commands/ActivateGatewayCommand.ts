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

import { ActivateGatewayInput, ActivateGatewayOutput } from "../models/models_0";
import { de_ActivateGatewayCommand, se_ActivateGatewayCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ActivateGatewayCommand}.
 */
export interface ActivateGatewayCommandInput extends ActivateGatewayInput {}
/**
 * @public
 *
 * The output of {@link ActivateGatewayCommand}.
 */
export interface ActivateGatewayCommandOutput extends ActivateGatewayOutput, __MetadataBearer {}

/**
 * @public
 * <p>Activates the gateway you previously deployed on your host. In the activation process,
 *          you specify information such as the Amazon Web Services Region that you want to use for
 *          storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot
 *          schedule window, an activation key, and a name for your gateway. The activation process
 *          also associates your gateway with your account. For more information, see <a>UpdateGatewayInformation</a>.</p>
 *          <note>
 *             <p>You must turn on the gateway VM before you can activate your gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ActivateGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ActivateGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // ActivateGatewayInput
 *   ActivationKey: "STRING_VALUE", // required
 *   GatewayName: "STRING_VALUE", // required
 *   GatewayTimezone: "STRING_VALUE", // required
 *   GatewayRegion: "STRING_VALUE", // required
 *   GatewayType: "STRING_VALUE",
 *   TapeDriveType: "STRING_VALUE",
 *   MediumChangerType: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ActivateGatewayCommand(input);
 * const response = await client.send(command);
 * // { // ActivateGatewayOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ActivateGatewayCommandInput - {@link ActivateGatewayCommandInput}
 * @returns {@link ActivateGatewayCommandOutput}
 * @see {@link ActivateGatewayCommandInput} for command's `input` shape.
 * @see {@link ActivateGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 * @example To activate the gateway
 * ```javascript
 * // Activates the gateway you previously deployed on your host.
 * const input = {
 *   "ActivationKey": "29AV1-3OFV9-VVIUB-NKT0I-LRO6V",
 *   "GatewayName": "My_Gateway",
 *   "GatewayRegion": "us-east-1",
 *   "GatewayTimezone": "GMT-12:00",
 *   "GatewayType": "STORED",
 *   "MediumChangerType": "AWS-Gateway-VTL",
 *   "TapeDriveType": "IBM-ULT3580-TD5"
 * };
 * const command = new ActivateGatewayCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B"
 * }
 * *\/
 * // example id: to-activate-the-gateway-1471281611207
 * ```
 *
 */
export class ActivateGatewayCommand extends $Command<
  ActivateGatewayCommandInput,
  ActivateGatewayCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: ActivateGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ActivateGatewayCommandInput, ActivateGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ActivateGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ActivateGatewayCommand";
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
  private serialize(input: ActivateGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ActivateGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ActivateGatewayCommandOutput> {
    return de_ActivateGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
