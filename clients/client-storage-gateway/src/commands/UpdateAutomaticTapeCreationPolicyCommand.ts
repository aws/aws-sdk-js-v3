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

import { UpdateAutomaticTapeCreationPolicyInput, UpdateAutomaticTapeCreationPolicyOutput } from "../models/models_0";
import {
  de_UpdateAutomaticTapeCreationPolicyCommand,
  se_UpdateAutomaticTapeCreationPolicyCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAutomaticTapeCreationPolicyCommand}.
 */
export interface UpdateAutomaticTapeCreationPolicyCommandInput extends UpdateAutomaticTapeCreationPolicyInput {}
/**
 * @public
 *
 * The output of {@link UpdateAutomaticTapeCreationPolicyCommand}.
 */
export interface UpdateAutomaticTapeCreationPolicyCommandOutput
  extends UpdateAutomaticTapeCreationPolicyOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the automatic tape creation policy of a gateway. Use this to update the policy
 *          with a new set of automatic tape creation rules. This is only supported for tape
 *          gateways.</p>
 *          <p>By default, there is no automatic tape creation policy.</p>
 *          <note>
 *             <p>A gateway can have only one automatic tape creation policy.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateAutomaticTapeCreationPolicyCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateAutomaticTapeCreationPolicyCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateAutomaticTapeCreationPolicyInput
 *   AutomaticTapeCreationRules: [ // AutomaticTapeCreationRules // required
 *     { // AutomaticTapeCreationRule
 *       TapeBarcodePrefix: "STRING_VALUE", // required
 *       PoolId: "STRING_VALUE", // required
 *       TapeSizeInBytes: Number("long"), // required
 *       MinimumNumTapes: Number("int"), // required
 *       Worm: true || false,
 *     },
 *   ],
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new UpdateAutomaticTapeCreationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAutomaticTapeCreationPolicyOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAutomaticTapeCreationPolicyCommandInput - {@link UpdateAutomaticTapeCreationPolicyCommandInput}
 * @returns {@link UpdateAutomaticTapeCreationPolicyCommandOutput}
 * @see {@link UpdateAutomaticTapeCreationPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAutomaticTapeCreationPolicyCommandOutput} for command's `response` shape.
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
 */
export class UpdateAutomaticTapeCreationPolicyCommand extends $Command<
  UpdateAutomaticTapeCreationPolicyCommandInput,
  UpdateAutomaticTapeCreationPolicyCommandOutput,
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
  constructor(readonly input: UpdateAutomaticTapeCreationPolicyCommandInput) {
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
  ): Handler<UpdateAutomaticTapeCreationPolicyCommandInput, UpdateAutomaticTapeCreationPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAutomaticTapeCreationPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateAutomaticTapeCreationPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "UpdateAutomaticTapeCreationPolicy",
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
  private serialize(
    input: UpdateAutomaticTapeCreationPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateAutomaticTapeCreationPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAutomaticTapeCreationPolicyCommandOutput> {
    return de_UpdateAutomaticTapeCreationPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
