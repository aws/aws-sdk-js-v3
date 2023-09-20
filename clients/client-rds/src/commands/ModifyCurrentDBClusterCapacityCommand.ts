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

import { DBClusterCapacityInfo, ModifyCurrentDBClusterCapacityMessage } from "../models/models_1";
import {
  de_ModifyCurrentDBClusterCapacityCommand,
  se_ModifyCurrentDBClusterCapacityCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyCurrentDBClusterCapacityCommand}.
 */
export interface ModifyCurrentDBClusterCapacityCommandInput extends ModifyCurrentDBClusterCapacityMessage {}
/**
 * @public
 *
 * The output of {@link ModifyCurrentDBClusterCapacityCommand}.
 */
export interface ModifyCurrentDBClusterCapacityCommandOutput extends DBClusterCapacityInfo, __MetadataBearer {}

/**
 * @public
 * <p>Set the capacity of an Aurora Serverless v1 DB cluster to a specific value.</p>
 *          <p>Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale
 *         fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code>
 *         to set the capacity explicitly.</p>
 *          <p>After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale
 *             the DB cluster based on the cooldown period for scaling up and the cooldown period
 *             for scaling down.</p>
 *          <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the
 *           <i>Amazon Aurora User Guide</i>.</p>
 *          <important>
 *             <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that
 *               prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points,
 *               see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling">
 *                   Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          </important>
 *          <note>
 *             <p>This action only applies to Aurora Serverless v1 DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyCurrentDBClusterCapacityCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyCurrentDBClusterCapacityCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyCurrentDBClusterCapacityMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   Capacity: Number("int"),
 *   SecondsBeforeTimeout: Number("int"),
 *   TimeoutAction: "STRING_VALUE",
 * };
 * const command = new ModifyCurrentDBClusterCapacityCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterCapacityInfo
 * //   DBClusterIdentifier: "STRING_VALUE",
 * //   PendingCapacity: Number("int"),
 * //   CurrentCapacity: Number("int"),
 * //   SecondsBeforeTimeout: Number("int"),
 * //   TimeoutAction: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyCurrentDBClusterCapacityCommandInput - {@link ModifyCurrentDBClusterCapacityCommandInput}
 * @returns {@link ModifyCurrentDBClusterCapacityCommandOutput}
 * @see {@link ModifyCurrentDBClusterCapacityCommandInput} for command's `input` shape.
 * @see {@link ModifyCurrentDBClusterCapacityCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link InvalidDBClusterCapacityFault} (client fault)
 *  <p>
 *             <code>Capacity</code> isn't a valid Aurora Serverless DB cluster
 *             capacity. Valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>,
 *             <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To scale the capacity of an Aurora Serverless DB cluster
 * ```javascript
 * // The following example scales the capacity of an Aurora Serverless DB cluster to 8.
 * const input = {
 *   "Capacity": 8,
 *   "DBClusterIdentifier": "mydbcluster"
 * };
 * const command = new ModifyCurrentDBClusterCapacityCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CurrentCapacity": 1,
 *   "DBClusterIdentifier": "mydbcluster",
 *   "PendingCapacity": 8,
 *   "SecondsBeforeTimeout": 300,
 *   "TimeoutAction": "ForceApplyCapacityChange"
 * }
 * *\/
 * // example id: to-scale-the-capacity-of-an-aurora-serverless-db-cluster-1680307179599
 * ```
 *
 */
export class ModifyCurrentDBClusterCapacityCommand extends $Command<
  ModifyCurrentDBClusterCapacityCommandInput,
  ModifyCurrentDBClusterCapacityCommandOutput,
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
  constructor(readonly input: ModifyCurrentDBClusterCapacityCommandInput) {
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
  ): Handler<ModifyCurrentDBClusterCapacityCommandInput, ModifyCurrentDBClusterCapacityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyCurrentDBClusterCapacityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyCurrentDBClusterCapacityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "ModifyCurrentDBClusterCapacity",
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
  private serialize(
    input: ModifyCurrentDBClusterCapacityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyCurrentDBClusterCapacityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyCurrentDBClusterCapacityCommandOutput> {
    return de_ModifyCurrentDBClusterCapacityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
