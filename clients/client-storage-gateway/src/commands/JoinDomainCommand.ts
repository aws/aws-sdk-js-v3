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

import { JoinDomainInput, JoinDomainInputFilterSensitiveLog, JoinDomainOutput } from "../models/models_0";
import { de_JoinDomainCommand, se_JoinDomainCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link JoinDomainCommand}.
 */
export interface JoinDomainCommandInput extends JoinDomainInput {}
/**
 * @public
 *
 * The output of {@link JoinDomainCommand}.
 */
export interface JoinDomainCommandOutput extends JoinDomainOutput, __MetadataBearer {}

/**
 * @public
 * <p>Adds a file gateway to an Active Directory domain. This operation is only supported for
 *          file gateways that support the SMB file protocol.</p>
 *          <note>
 *             <p>Joining a domain creates an Active Directory computer account in the default
 *             organizational unit, using the gateway's <b>Gateway ID</b> as
 *             the account name (for example, SGW-1234ADE). If your Active Directory environment
 *             requires that you pre-stage accounts to facilitate the join domain process, you will
 *             need to create this account ahead of time.</p>
 *             <p>To create the gateway's computer account in an organizational unit other than the
 *             default, you must specify the organizational unit when joining the domain.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, JoinDomainCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, JoinDomainCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // JoinDomainInput
 *   GatewayARN: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 *   OrganizationalUnit: "STRING_VALUE",
 *   DomainControllers: [ // Hosts
 *     "STRING_VALUE",
 *   ],
 *   TimeoutInSeconds: Number("int"),
 *   UserName: "STRING_VALUE", // required
 *   Password: "STRING_VALUE", // required
 * };
 * const command = new JoinDomainCommand(input);
 * const response = await client.send(command);
 * // { // JoinDomainOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   ActiveDirectoryStatus: "ACCESS_DENIED" || "DETACHED" || "JOINED" || "JOINING" || "NETWORK_ERROR" || "TIMEOUT" || "UNKNOWN_ERROR",
 * // };
 *
 * ```
 *
 * @param JoinDomainCommandInput - {@link JoinDomainCommandInput}
 * @returns {@link JoinDomainCommandOutput}
 * @see {@link JoinDomainCommandInput} for command's `input` shape.
 * @see {@link JoinDomainCommandOutput} for command's `response` shape.
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
export class JoinDomainCommand extends $Command<
  JoinDomainCommandInput,
  JoinDomainCommandOutput,
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
  constructor(readonly input: JoinDomainCommandInput) {
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
  ): Handler<JoinDomainCommandInput, JoinDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, JoinDomainCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "JoinDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: JoinDomainInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "JoinDomain",
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
  private serialize(input: JoinDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_JoinDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<JoinDomainCommandOutput> {
    return de_JoinDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
