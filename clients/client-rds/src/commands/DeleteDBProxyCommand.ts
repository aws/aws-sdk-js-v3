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

import { DeleteDBProxyRequest, DeleteDBProxyResponse } from "../models/models_0";
import { de_DeleteDBProxyCommand, se_DeleteDBProxyCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBProxyCommand}.
 */
export interface DeleteDBProxyCommandInput extends DeleteDBProxyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDBProxyCommand}.
 */
export interface DeleteDBProxyCommandOutput extends DeleteDBProxyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes an existing DB proxy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBProxyCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBProxyCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteDBProxyRequest
 *   DBProxyName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBProxyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDBProxyResponse
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
 * @param DeleteDBProxyCommandInput - {@link DeleteDBProxyCommandInput}
 * @returns {@link DeleteDBProxyCommandOutput}
 * @see {@link DeleteDBProxyCommandInput} for command's `input` shape.
 * @see {@link DeleteDBProxyCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
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
export class DeleteDBProxyCommand extends $Command<
  DeleteDBProxyCommandInput,
  DeleteDBProxyCommandOutput,
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
  constructor(readonly input: DeleteDBProxyCommandInput) {
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
  ): Handler<DeleteDBProxyCommandInput, DeleteDBProxyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteDBProxyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteDBProxyCommand";
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
  private serialize(input: DeleteDBProxyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteDBProxyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDBProxyCommandOutput> {
    return de_DeleteDBProxyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
