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
  UpdateChapCredentialsInput,
  UpdateChapCredentialsInputFilterSensitiveLog,
  UpdateChapCredentialsOutput,
} from "../models/models_0";
import { de_UpdateChapCredentialsCommand, se_UpdateChapCredentialsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateChapCredentialsCommand}.
 */
export interface UpdateChapCredentialsCommandInput extends UpdateChapCredentialsInput {}
/**
 * @public
 *
 * The output of {@link UpdateChapCredentialsCommand}.
 */
export interface UpdateChapCredentialsCommandOutput extends UpdateChapCredentialsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a
 *          specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for
 *          added security, you might use it. This operation is supported in the volume and tape
 *          gateway types.</p>
 *          <important>
 *             <p>When you update CHAP credentials, all existing connections on the target are closed
 *             and initiators must reconnect with the new credentials.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateChapCredentialsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateChapCredentialsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateChapCredentialsInput
 *   TargetARN: "STRING_VALUE", // required
 *   SecretToAuthenticateInitiator: "STRING_VALUE", // required
 *   InitiatorName: "STRING_VALUE", // required
 *   SecretToAuthenticateTarget: "STRING_VALUE",
 * };
 * const command = new UpdateChapCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateChapCredentialsOutput
 * //   TargetARN: "STRING_VALUE",
 * //   InitiatorName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateChapCredentialsCommandInput - {@link UpdateChapCredentialsCommandInput}
 * @returns {@link UpdateChapCredentialsCommandOutput}
 * @see {@link UpdateChapCredentialsCommandInput} for command's `input` shape.
 * @see {@link UpdateChapCredentialsCommandOutput} for command's `response` shape.
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
 * @example To update CHAP credentials for an iSCSI target
 * ```javascript
 * // Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target.
 * const input = {
 *   "InitiatorName": "iqn.1991-05.com.microsoft:computername.domain.example.com",
 *   "SecretToAuthenticateInitiator": "111111111111",
 *   "SecretToAuthenticateTarget": "222222222222",
 *   "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
 * };
 * const command = new UpdateChapCredentialsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InitiatorName": "iqn.1991-05.com.microsoft:computername.domain.example.com",
 *   "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
 * }
 * *\/
 * // example id: to-update-chap-credentials-for-an-iscsi-target-1472151325795
 * ```
 *
 */
export class UpdateChapCredentialsCommand extends $Command<
  UpdateChapCredentialsCommandInput,
  UpdateChapCredentialsCommandOutput,
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
  constructor(readonly input: UpdateChapCredentialsCommandInput) {
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
  ): Handler<UpdateChapCredentialsCommandInput, UpdateChapCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateChapCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateChapCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateChapCredentialsInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "UpdateChapCredentials",
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
  private serialize(input: UpdateChapCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateChapCredentialsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateChapCredentialsCommandOutput> {
    return de_UpdateChapCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
