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

import { DeleteChapCredentialsInput, DeleteChapCredentialsOutput } from "../models/models_0";
import { de_DeleteChapCredentialsCommand, se_DeleteChapCredentialsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteChapCredentialsCommand}.
 */
export interface DeleteChapCredentialsCommandInput extends DeleteChapCredentialsInput {}
/**
 * @public
 *
 * The output of {@link DeleteChapCredentialsCommand}.
 */
export interface DeleteChapCredentialsCommandOutput extends DeleteChapCredentialsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified
 *          iSCSI target and initiator pair. This operation is supported in volume and tape gateway
 *          types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteChapCredentialsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteChapCredentialsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DeleteChapCredentialsInput
 *   TargetARN: "STRING_VALUE", // required
 *   InitiatorName: "STRING_VALUE", // required
 * };
 * const command = new DeleteChapCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteChapCredentialsOutput
 * //   TargetARN: "STRING_VALUE",
 * //   InitiatorName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteChapCredentialsCommandInput - {@link DeleteChapCredentialsCommandInput}
 * @returns {@link DeleteChapCredentialsCommandOutput}
 * @see {@link DeleteChapCredentialsCommandInput} for command's `input` shape.
 * @see {@link DeleteChapCredentialsCommandOutput} for command's `response` shape.
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
 * @example To delete CHAP credentials
 * ```javascript
 * // Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair.
 * const input = {
 *   "InitiatorName": "iqn.1991-05.com.microsoft:computername.domain.example.com",
 *   "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
 * };
 * const command = new DeleteChapCredentialsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InitiatorName": "iqn.1991-05.com.microsoft:computername.domain.example.com",
 *   "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
 * }
 * *\/
 * // example id: to-delete-chap-credentials-1471375025612
 * ```
 *
 */
export class DeleteChapCredentialsCommand extends $Command<
  DeleteChapCredentialsCommandInput,
  DeleteChapCredentialsCommandOutput,
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
  constructor(readonly input: DeleteChapCredentialsCommandInput) {
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
  ): Handler<DeleteChapCredentialsCommandInput, DeleteChapCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteChapCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DeleteChapCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "DeleteChapCredentials",
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
  private serialize(input: DeleteChapCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteChapCredentialsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteChapCredentialsCommandOutput> {
    return de_DeleteChapCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
