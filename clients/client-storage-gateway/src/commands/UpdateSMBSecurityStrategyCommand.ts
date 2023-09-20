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

import { UpdateSMBSecurityStrategyInput, UpdateSMBSecurityStrategyOutput } from "../models/models_0";
import { de_UpdateSMBSecurityStrategyCommand, se_UpdateSMBSecurityStrategyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSMBSecurityStrategyCommand}.
 */
export interface UpdateSMBSecurityStrategyCommandInput extends UpdateSMBSecurityStrategyInput {}
/**
 * @public
 *
 * The output of {@link UpdateSMBSecurityStrategyCommand}.
 */
export interface UpdateSMBSecurityStrategyCommandOutput extends UpdateSMBSecurityStrategyOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the SMB security strategy on a file gateway. This action is only supported in
 *          file gateways.</p>
 *          <note>
 *             <p>This API is called Security level in the User Guide.</p>
 *             <p>A higher security level can affect performance of the gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSMBSecurityStrategyCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSMBSecurityStrategyCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateSMBSecurityStrategyInput
 *   GatewayARN: "STRING_VALUE", // required
 *   SMBSecurityStrategy: "ClientSpecified" || "MandatorySigning" || "MandatoryEncryption", // required
 * };
 * const command = new UpdateSMBSecurityStrategyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSMBSecurityStrategyOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSMBSecurityStrategyCommandInput - {@link UpdateSMBSecurityStrategyCommandInput}
 * @returns {@link UpdateSMBSecurityStrategyCommandOutput}
 * @see {@link UpdateSMBSecurityStrategyCommandInput} for command's `input` shape.
 * @see {@link UpdateSMBSecurityStrategyCommandOutput} for command's `response` shape.
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
export class UpdateSMBSecurityStrategyCommand extends $Command<
  UpdateSMBSecurityStrategyCommandInput,
  UpdateSMBSecurityStrategyCommandOutput,
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
  constructor(readonly input: UpdateSMBSecurityStrategyCommandInput) {
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
  ): Handler<UpdateSMBSecurityStrategyCommandInput, UpdateSMBSecurityStrategyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSMBSecurityStrategyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateSMBSecurityStrategyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "UpdateSMBSecurityStrategy",
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
  private serialize(input: UpdateSMBSecurityStrategyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSMBSecurityStrategyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSMBSecurityStrategyCommandOutput> {
    return de_UpdateSMBSecurityStrategyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
