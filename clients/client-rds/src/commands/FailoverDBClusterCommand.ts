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

import { FailoverDBClusterMessage, FailoverDBClusterResult } from "../models/models_1";
import {
  deserializeAws_queryFailoverDBClusterCommand,
  serializeAws_queryFailoverDBClusterCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link FailoverDBClusterCommand}.
 */
export interface FailoverDBClusterCommandInput extends FailoverDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link FailoverDBClusterCommand}.
 */
export interface FailoverDBClusterCommandOutput extends FailoverDBClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>Forces a failover for a DB cluster.</p>
 *          <p>For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances)
 *           in the DB cluster to be the primary DB instance (the cluster writer).</p>
 *          <p>For a Multi-AZ DB cluster, failover for a DB cluster promotes one of the readable standby DB instances (read-only instances)
 *           in the DB cluster to be the primary DB instance (the cluster writer).</p>
 *          <p>An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists,
 *           when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby
 *           DB instance when the primary DB instance fails.</p>
 *          <p>To simulate a failure of a primary instance for testing, you can force a failover.
 *           Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing
 *           connections that use those endpoint addresses when the failover is complete.</p>
 *          <p>For more information on Amazon Aurora DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, FailoverDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, FailoverDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new FailoverDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param FailoverDBClusterCommandInput - {@link FailoverDBClusterCommandInput}
 * @returns {@link FailoverDBClusterCommandOutput}
 * @see {@link FailoverDBClusterCommandInput} for command's `input` shape.
 * @see {@link FailoverDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 *
 * @example To perform a failover for a DB cluster
 * ```javascript
 * // This example performs a failover for the specified DB cluster to the specified DB instance.
 * const input = {
 *   "DBClusterIdentifier": "myaurorainstance-cluster",
 *   "TargetDBInstanceIdentifier": "myaurorareplica"
 * };
 * const command = new FailoverDBClusterCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBCluster": {}
 * }
 * *\/
 * // example id: failover-db-cluster-9e7f2f93-d98c-42c7-bb0e-d6c485c096d6
 * ```
 *
 */
export class FailoverDBClusterCommand extends $Command<
  FailoverDBClusterCommandInput,
  FailoverDBClusterCommandOutput,
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
  constructor(readonly input: FailoverDBClusterCommandInput) {
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
  ): Handler<FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, FailoverDBClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "FailoverDBClusterCommand";
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
  private serialize(input: FailoverDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryFailoverDBClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<FailoverDBClusterCommandOutput> {
    return deserializeAws_queryFailoverDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
