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

import { RegisterDBProxyTargetsRequest, RegisterDBProxyTargetsResponse } from "../models/models_1";
import { de_RegisterDBProxyTargetsCommand, se_RegisterDBProxyTargetsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterDBProxyTargetsCommand}.
 */
export interface RegisterDBProxyTargetsCommandInput extends RegisterDBProxyTargetsRequest {}
/**
 * @public
 *
 * The output of {@link RegisterDBProxyTargetsCommand}.
 */
export interface RegisterDBProxyTargetsCommandOutput extends RegisterDBProxyTargetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RegisterDBProxyTargetsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RegisterDBProxyTargetsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // RegisterDBProxyTargetsRequest
 *   DBProxyName: "STRING_VALUE", // required
 *   TargetGroupName: "STRING_VALUE",
 *   DBInstanceIdentifiers: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   DBClusterIdentifiers: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RegisterDBProxyTargetsCommand(input);
 * const response = await client.send(command);
 * // { // RegisterDBProxyTargetsResponse
 * //   DBProxyTargets: [ // TargetList
 * //     { // DBProxyTarget
 * //       TargetArn: "STRING_VALUE",
 * //       Endpoint: "STRING_VALUE",
 * //       TrackedClusterId: "STRING_VALUE",
 * //       RdsResourceId: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       Type: "RDS_INSTANCE" || "RDS_SERVERLESS_ENDPOINT" || "TRACKED_CLUSTER",
 * //       Role: "READ_WRITE" || "READ_ONLY" || "UNKNOWN",
 * //       TargetHealth: { // TargetHealth
 * //         State: "REGISTERING" || "AVAILABLE" || "UNAVAILABLE",
 * //         Reason: "UNREACHABLE" || "CONNECTION_FAILED" || "AUTH_FAILURE" || "PENDING_PROXY_CAPACITY" || "INVALID_REPLICATION_STATE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RegisterDBProxyTargetsCommandInput - {@link RegisterDBProxyTargetsCommandInput}
 * @returns {@link RegisterDBProxyTargetsCommandOutput}
 * @see {@link RegisterDBProxyTargetsCommandInput} for command's `input` shape.
 * @see {@link RegisterDBProxyTargetsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *  <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyTargetAlreadyRegisteredFault} (client fault)
 *  <p>The proxy is already associated with the specified RDS DB instance or Aurora DB cluster.</p>
 *
 * @throws {@link DBProxyTargetGroupNotFoundFault} (client fault)
 *  <p>The specified target group isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link InsufficientAvailableIPsInSubnetFault} (client fault)
 *  <p>The requested operation can't be performed because there aren't enough available IP addresses
 *            in the proxy's subnets. Add more CIDR blocks to the VPC or remove IP address that aren't required
 *            from the subnets.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link InvalidDBProxyStateFault} (client fault)
 *  <p>The requested operation can't be performed while the proxy is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class RegisterDBProxyTargetsCommand extends $Command<
  RegisterDBProxyTargetsCommandInput,
  RegisterDBProxyTargetsCommandOutput,
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
  constructor(readonly input: RegisterDBProxyTargetsCommandInput) {
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
  ): Handler<RegisterDBProxyTargetsCommandInput, RegisterDBProxyTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterDBProxyTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RegisterDBProxyTargetsCommand";
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
  private serialize(input: RegisterDBProxyTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterDBProxyTargetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterDBProxyTargetsCommandOutput> {
    return de_RegisterDBProxyTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
