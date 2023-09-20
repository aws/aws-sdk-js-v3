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

import { ModifyDBProxyRequest, ModifyDBProxyResponse } from "../models/models_1";
import { de_ModifyDBProxyCommand, se_ModifyDBProxyCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBProxyCommand}.
 */
export interface ModifyDBProxyCommandInput extends ModifyDBProxyRequest {}
/**
 * @public
 *
 * The output of {@link ModifyDBProxyCommand}.
 */
export interface ModifyDBProxyCommandOutput extends ModifyDBProxyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Changes the settings for an existing DB proxy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBProxyCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBProxyCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyDBProxyRequest
 *   DBProxyName: "STRING_VALUE", // required
 *   NewDBProxyName: "STRING_VALUE",
 *   Auth: [ // UserAuthConfigList
 *     { // UserAuthConfig
 *       Description: "STRING_VALUE",
 *       UserName: "STRING_VALUE",
 *       AuthScheme: "SECRETS",
 *       SecretArn: "STRING_VALUE",
 *       IAMAuth: "DISABLED" || "REQUIRED" || "ENABLED",
 *       ClientPasswordAuthType: "MYSQL_NATIVE_PASSWORD" || "POSTGRES_SCRAM_SHA_256" || "POSTGRES_MD5" || "SQL_SERVER_AUTHENTICATION",
 *     },
 *   ],
 *   RequireTLS: true || false,
 *   IdleClientTimeout: Number("int"),
 *   DebugLogging: true || false,
 *   RoleArn: "STRING_VALUE",
 *   SecurityGroups: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyDBProxyCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBProxyResponse
 * //   DBProxy: { // DBProxy
 * //     DBProxyName: "STRING_VALUE",
 * //     DBProxyArn: "STRING_VALUE",
 * //     Status: "available" || "modifying" || "incompatible-network" || "insufficient-resource-limits" || "creating" || "deleting" || "suspended" || "suspending" || "reactivating",
 * //     EngineFamily: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     VpcSecurityGroupIds: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     VpcSubnetIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     Auth: [ // UserAuthConfigInfoList
 * //       { // UserAuthConfigInfo
 * //         Description: "STRING_VALUE",
 * //         UserName: "STRING_VALUE",
 * //         AuthScheme: "SECRETS",
 * //         SecretArn: "STRING_VALUE",
 * //         IAMAuth: "DISABLED" || "REQUIRED" || "ENABLED",
 * //         ClientPasswordAuthType: "MYSQL_NATIVE_PASSWORD" || "POSTGRES_SCRAM_SHA_256" || "POSTGRES_MD5" || "SQL_SERVER_AUTHENTICATION",
 * //       },
 * //     ],
 * //     RoleArn: "STRING_VALUE",
 * //     Endpoint: "STRING_VALUE",
 * //     RequireTLS: true || false,
 * //     IdleClientTimeout: Number("int"),
 * //     DebugLogging: true || false,
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     UpdatedDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDBProxyCommandInput - {@link ModifyDBProxyCommandInput}
 * @returns {@link ModifyDBProxyCommandOutput}
 * @see {@link ModifyDBProxyCommandInput} for command's `input` shape.
 * @see {@link ModifyDBProxyCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyAlreadyExistsFault} (client fault)
 *  <p>The specified proxy name must be unique for all proxies owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *  <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link InvalidDBProxyStateFault} (client fault)
 *  <p>The requested operation can't be performed while the proxy is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class ModifyDBProxyCommand extends $Command<
  ModifyDBProxyCommandInput,
  ModifyDBProxyCommandOutput,
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
  constructor(readonly input: ModifyDBProxyCommandInput) {
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
  ): Handler<ModifyDBProxyCommandInput, ModifyDBProxyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ModifyDBProxyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBProxyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "ModifyDBProxy",
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
  private serialize(input: ModifyDBProxyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyDBProxyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBProxyCommandOutput> {
    return de_ModifyDBProxyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
