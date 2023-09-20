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

import { DescribeSMBSettingsInput, DescribeSMBSettingsOutput } from "../models/models_0";
import { de_DescribeSMBSettingsCommand, se_DescribeSMBSettingsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSMBSettingsCommand}.
 */
export interface DescribeSMBSettingsCommandInput extends DescribeSMBSettingsInput {}
/**
 * @public
 *
 * The output of {@link DescribeSMBSettingsCommand}.
 */
export interface DescribeSMBSettingsCommandOutput extends DescribeSMBSettingsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets a description of a Server Message Block (SMB) file share settings from a file
 *          gateway. This operation is only supported for file gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeSMBSettingsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeSMBSettingsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeSMBSettingsInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeSMBSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSMBSettingsOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   DomainName: "STRING_VALUE",
 * //   ActiveDirectoryStatus: "ACCESS_DENIED" || "DETACHED" || "JOINED" || "JOINING" || "NETWORK_ERROR" || "TIMEOUT" || "UNKNOWN_ERROR",
 * //   SMBGuestPasswordSet: true || false,
 * //   SMBSecurityStrategy: "ClientSpecified" || "MandatorySigning" || "MandatoryEncryption",
 * //   FileSharesVisible: true || false,
 * //   SMBLocalGroups: { // SMBLocalGroups
 * //     GatewayAdmins: [ // UserList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSMBSettingsCommandInput - {@link DescribeSMBSettingsCommandInput}
 * @returns {@link DescribeSMBSettingsCommandOutput}
 * @see {@link DescribeSMBSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeSMBSettingsCommandOutput} for command's `response` shape.
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
export class DescribeSMBSettingsCommand extends $Command<
  DescribeSMBSettingsCommandInput,
  DescribeSMBSettingsCommandOutput,
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
  constructor(readonly input: DescribeSMBSettingsCommandInput) {
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
  ): Handler<DescribeSMBSettingsCommandInput, DescribeSMBSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSMBSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeSMBSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "DescribeSMBSettings",
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
  private serialize(input: DescribeSMBSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSMBSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSMBSettingsCommandOutput> {
    return de_DescribeSMBSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
