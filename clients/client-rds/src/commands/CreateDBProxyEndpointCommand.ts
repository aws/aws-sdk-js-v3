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

import { CreateDBProxyEndpointRequest, CreateDBProxyEndpointResponse } from "../models/models_0";
import { de_CreateDBProxyEndpointCommand, se_CreateDBProxyEndpointCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDBProxyEndpointCommand}.
 */
export interface CreateDBProxyEndpointCommandInput extends CreateDBProxyEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateDBProxyEndpointCommand}.
 */
export interface CreateDBProxyEndpointCommandOutput extends CreateDBProxyEndpointResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a <code>DBProxyEndpoint</code>. Only applies to proxies that are associated with Aurora DB clusters.
 *         You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use
 *         DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBProxyEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBProxyEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CreateDBProxyEndpointRequest
 *   DBProxyName: "STRING_VALUE", // required
 *   DBProxyEndpointName: "STRING_VALUE", // required
 *   VpcSubnetIds: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   VpcSecurityGroupIds: [
 *     "STRING_VALUE",
 *   ],
 *   TargetRole: "READ_WRITE" || "READ_ONLY",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBProxyEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBProxyEndpointResponse
 * //   DBProxyEndpoint: { // DBProxyEndpoint
 * //     DBProxyEndpointName: "STRING_VALUE",
 * //     DBProxyEndpointArn: "STRING_VALUE",
 * //     DBProxyName: "STRING_VALUE",
 * //     Status: "available" || "modifying" || "incompatible-network" || "insufficient-resource-limits" || "creating" || "deleting",
 * //     VpcId: "STRING_VALUE",
 * //     VpcSecurityGroupIds: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     VpcSubnetIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     Endpoint: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     TargetRole: "READ_WRITE" || "READ_ONLY",
 * //     IsDefault: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDBProxyEndpointCommandInput - {@link CreateDBProxyEndpointCommandInput}
 * @returns {@link CreateDBProxyEndpointCommandOutput}
 * @see {@link CreateDBProxyEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateDBProxyEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyEndpointAlreadyExistsFault} (client fault)
 *  <p>The specified DB proxy endpoint name must be unique for all DB proxy endpoints owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyEndpointQuotaExceededFault} (client fault)
 *  <p>The DB proxy already has the maximum number of endpoints.</p>
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *  <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link InvalidDBProxyStateFault} (client fault)
 *  <p>The requested operation can't be performed while the proxy is in this state.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class CreateDBProxyEndpointCommand extends $Command<
  CreateDBProxyEndpointCommandInput,
  CreateDBProxyEndpointCommandOutput,
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
  constructor(readonly input: CreateDBProxyEndpointCommandInput) {
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
  ): Handler<CreateDBProxyEndpointCommandInput, CreateDBProxyEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDBProxyEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBProxyEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "CreateDBProxyEndpoint",
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
  private serialize(input: CreateDBProxyEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDBProxyEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBProxyEndpointCommandOutput> {
    return de_CreateDBProxyEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
