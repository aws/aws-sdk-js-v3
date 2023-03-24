// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateDBProxyRequest, CreateDBProxyResponse } from "../models/models_0";
import {
  deserializeAws_queryCreateDBProxyCommand,
  serializeAws_queryCreateDBProxyCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link CreateDBProxyCommand}.
 */
export interface CreateDBProxyCommandInput extends CreateDBProxyRequest {}
/**
 * @public
 *
 * The output of {@link CreateDBProxyCommand}.
 */
export interface CreateDBProxyCommandOutput extends CreateDBProxyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new DB proxy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBProxyCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBProxyCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = {
 *   DBProxyName: "STRING_VALUE", // required
 *   EngineFamily: "MYSQL" || "POSTGRESQL" || "SQLSERVER", // required
 *   Auth: [ // required
 *     {
 *       Description: "STRING_VALUE",
 *       UserName: "STRING_VALUE",
 *       AuthScheme: "SECRETS",
 *       SecretArn: "STRING_VALUE",
 *       IAMAuth: "DISABLED" || "REQUIRED" || "ENABLED",
 *       ClientPasswordAuthType: "MYSQL_NATIVE_PASSWORD" || "POSTGRES_SCRAM_SHA_256" || "POSTGRES_MD5" || "SQL_SERVER_AUTHENTICATION",
 *     },
 *   ],
 *   RoleArn: "STRING_VALUE", // required
 *   VpcSubnetIds: [ // required
 *     "STRING_VALUE",
 *   ],
 *   VpcSecurityGroupIds: [
 *     "STRING_VALUE",
 *   ],
 *   RequireTLS: true || false,
 *   IdleClientTimeout: Number("int"),
 *   DebugLogging: true || false,
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBProxyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateDBProxyCommandInput - {@link CreateDBProxyCommandInput}
 * @returns {@link CreateDBProxyCommandOutput}
 * @see {@link CreateDBProxyCommandInput} for command's `input` shape.
 * @see {@link CreateDBProxyCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyAlreadyExistsFault} (client fault)
 *  <p>The specified proxy name must be unique for all proxies owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyQuotaExceededFault} (client fault)
 *  <p>Your Amazon Web Services account already has the maximum number of proxies in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
 *
 *
 */
export class CreateDBProxyCommand extends $Command<
  CreateDBProxyCommandInput,
  CreateDBProxyCommandOutput,
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
  constructor(readonly input: CreateDBProxyCommandInput) {
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
  ): Handler<CreateDBProxyCommandInput, CreateDBProxyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateDBProxyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBProxyCommand";
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
  private serialize(input: CreateDBProxyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBProxyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBProxyCommandOutput> {
    return deserializeAws_queryCreateDBProxyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
