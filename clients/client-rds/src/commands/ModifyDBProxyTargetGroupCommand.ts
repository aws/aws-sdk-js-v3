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

import { ModifyDBProxyTargetGroupRequest, ModifyDBProxyTargetGroupResponse } from "../models/models_1";
import { de_ModifyDBProxyTargetGroupCommand, se_ModifyDBProxyTargetGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBProxyTargetGroupCommand}.
 */
export interface ModifyDBProxyTargetGroupCommandInput extends ModifyDBProxyTargetGroupRequest {}
/**
 * @public
 *
 * The output of {@link ModifyDBProxyTargetGroupCommand}.
 */
export interface ModifyDBProxyTargetGroupCommandOutput extends ModifyDBProxyTargetGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the properties of a <code>DBProxyTargetGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBProxyTargetGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBProxyTargetGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyDBProxyTargetGroupRequest
 *   TargetGroupName: "STRING_VALUE", // required
 *   DBProxyName: "STRING_VALUE", // required
 *   ConnectionPoolConfig: { // ConnectionPoolConfiguration
 *     MaxConnectionsPercent: Number("int"),
 *     MaxIdleConnectionsPercent: Number("int"),
 *     ConnectionBorrowTimeout: Number("int"),
 *     SessionPinningFilters: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     InitQuery: "STRING_VALUE",
 *   },
 *   NewName: "STRING_VALUE",
 * };
 * const command = new ModifyDBProxyTargetGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBProxyTargetGroupResponse
 * //   DBProxyTargetGroup: { // DBProxyTargetGroup
 * //     DBProxyName: "STRING_VALUE",
 * //     TargetGroupName: "STRING_VALUE",
 * //     TargetGroupArn: "STRING_VALUE",
 * //     IsDefault: true || false,
 * //     Status: "STRING_VALUE",
 * //     ConnectionPoolConfig: { // ConnectionPoolConfigurationInfo
 * //       MaxConnectionsPercent: Number("int"),
 * //       MaxIdleConnectionsPercent: Number("int"),
 * //       ConnectionBorrowTimeout: Number("int"),
 * //       SessionPinningFilters: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       InitQuery: "STRING_VALUE",
 * //     },
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     UpdatedDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDBProxyTargetGroupCommandInput - {@link ModifyDBProxyTargetGroupCommandInput}
 * @returns {@link ModifyDBProxyTargetGroupCommandOutput}
 * @see {@link ModifyDBProxyTargetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBProxyTargetGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *  <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyTargetGroupNotFoundFault} (client fault)
 *  <p>The specified target group isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link InvalidDBProxyStateFault} (client fault)
 *  <p>The requested operation can't be performed while the proxy is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class ModifyDBProxyTargetGroupCommand extends $Command<
  ModifyDBProxyTargetGroupCommandInput,
  ModifyDBProxyTargetGroupCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: ModifyDBProxyTargetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBProxyTargetGroupCommandInput, ModifyDBProxyTargetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBProxyTargetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBProxyTargetGroupCommand";
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
  private serialize(input: ModifyDBProxyTargetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyDBProxyTargetGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBProxyTargetGroupCommandOutput> {
    return de_ModifyDBProxyTargetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
