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

import { UpdateSMBFileShareVisibilityInput, UpdateSMBFileShareVisibilityOutput } from "../models/models_0";
import {
  de_UpdateSMBFileShareVisibilityCommand,
  se_UpdateSMBFileShareVisibilityCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSMBFileShareVisibilityCommand}.
 */
export interface UpdateSMBFileShareVisibilityCommandInput extends UpdateSMBFileShareVisibilityInput {}
/**
 * @public
 *
 * The output of {@link UpdateSMBFileShareVisibilityCommand}.
 */
export interface UpdateSMBFileShareVisibilityCommandOutput
  extends UpdateSMBFileShareVisibilityOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Controls whether the shares on an S3 File Gateway are visible in a net view or browse
 *          list. The operation is only supported for S3 File Gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSMBFileShareVisibilityCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSMBFileShareVisibilityCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateSMBFileShareVisibilityInput
 *   GatewayARN: "STRING_VALUE", // required
 *   FileSharesVisible: true || false, // required
 * };
 * const command = new UpdateSMBFileShareVisibilityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSMBFileShareVisibilityOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSMBFileShareVisibilityCommandInput - {@link UpdateSMBFileShareVisibilityCommandInput}
 * @returns {@link UpdateSMBFileShareVisibilityCommandOutput}
 * @see {@link UpdateSMBFileShareVisibilityCommandInput} for command's `input` shape.
 * @see {@link UpdateSMBFileShareVisibilityCommandOutput} for command's `response` shape.
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
export class UpdateSMBFileShareVisibilityCommand extends $Command<
  UpdateSMBFileShareVisibilityCommandInput,
  UpdateSMBFileShareVisibilityCommandOutput,
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
  constructor(readonly input: UpdateSMBFileShareVisibilityCommandInput) {
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
  ): Handler<UpdateSMBFileShareVisibilityCommandInput, UpdateSMBFileShareVisibilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSMBFileShareVisibilityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateSMBFileShareVisibilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "UpdateSMBFileShareVisibility",
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
  private serialize(input: UpdateSMBFileShareVisibilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSMBFileShareVisibilityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSMBFileShareVisibilityCommandOutput> {
    return de_UpdateSMBFileShareVisibilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
