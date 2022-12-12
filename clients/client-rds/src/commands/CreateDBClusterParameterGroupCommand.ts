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

import {
  CreateDBClusterParameterGroupMessage,
  CreateDBClusterParameterGroupMessageFilterSensitiveLog,
  CreateDBClusterParameterGroupResult,
  CreateDBClusterParameterGroupResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateDBClusterParameterGroupCommand,
  serializeAws_queryCreateDBClusterParameterGroupCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface CreateDBClusterParameterGroupCommandInput extends CreateDBClusterParameterGroupMessage {}
export interface CreateDBClusterParameterGroupCommandOutput
  extends CreateDBClusterParameterGroupResult,
    __MetadataBearer {}

/**
 * <p>Creates a new DB cluster parameter group.</p>
 *          <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p>
 *          <p>A DB cluster parameter group is initially created with the default parameters for the
 *             database engine used by instances in the DB cluster. To provide custom values for any of the
 *             parameters, you must modify the group after creating it using
 *             <code>ModifyDBClusterParameterGroup</code>. Once you've created a DB cluster parameter group, you need to
 *             associate it with your DB cluster using <code>ModifyDBCluster</code>.</p>
 *          <p>When you associate a new DB cluster parameter group with a running Aurora DB cluster, reboot the DB
 *             instances in the DB cluster without failover for the new DB cluster parameter group and
 *             associated settings to take effect.</p>
 *          <p>When you associate a new DB cluster parameter group with a running Multi-AZ DB cluster, reboot the DB
 *           cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p>
 *          <important>
 *             <p>After you create a DB cluster parameter group, you should wait at least 5 minutes
 *                 before creating your first DB cluster that uses that DB cluster parameter group as
 *                 the default parameter group. This allows Amazon RDS to fully complete the create
 *                 action before the DB cluster parameter group is used as the default for a new DB
 *                 cluster. This is especially important for parameters that are critical when creating
 *                 the default database for a DB cluster, such as the character set for the default
 *                 database defined by the <code>character_set_database</code> parameter. You can use
 *                 the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
 *                     <code>DescribeDBClusterParameters</code> operation to verify that your DB
 *                 cluster parameter group has been created or modified.</p>
 *          </important>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
 *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBClusterParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBClusterParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class CreateDBClusterParameterGroupCommand extends $Command<
  CreateDBClusterParameterGroupCommandInput,
  CreateDBClusterParameterGroupCommandOutput,
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

  constructor(readonly input: CreateDBClusterParameterGroupCommandInput) {
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
  ): Handler<CreateDBClusterParameterGroupCommandInput, CreateDBClusterParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDBClusterParameterGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBClusterParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBClusterParameterGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDBClusterParameterGroupResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBClusterParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBClusterParameterGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDBClusterParameterGroupCommandOutput> {
    return deserializeAws_queryCreateDBClusterParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
