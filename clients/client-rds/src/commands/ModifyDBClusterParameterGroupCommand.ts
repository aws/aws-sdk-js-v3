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
  DBClusterParameterGroupNameMessage,
  DBClusterParameterGroupNameMessageFilterSensitiveLog,
  ModifyDBClusterParameterGroupMessage,
  ModifyDBClusterParameterGroupMessageFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryModifyDBClusterParameterGroupCommand,
  serializeAws_queryModifyDBClusterParameterGroupCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface ModifyDBClusterParameterGroupCommandInput extends ModifyDBClusterParameterGroupMessage {}
export interface ModifyDBClusterParameterGroupCommandOutput
  extends DBClusterParameterGroupNameMessage,
    __MetadataBearer {}

/**
 * <p>Modifies the parameters of a DB cluster parameter group. To modify more than one parameter,
 *             submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>,
 *             and <code>ApplyMethod</code>. A maximum of 20
 *             parameters can be modified in a single request.</p>
 *          <important>
 *             <p>After you create a DB cluster parameter group, you should wait at least 5 minutes
 *                 before creating your first DB cluster that uses that DB cluster parameter group as the default parameter
 *                 group. This allows Amazon RDS to fully complete the create action before the parameter
 *                 group is used as the default for a new DB cluster. This is especially important for parameters
 *                 that are critical when creating the default database for a DB cluster, such as the character set
 *                 for the default database defined by the <code>character_set_database</code> parameter. You can use the
 *                 <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
 *                 <code>DescribeDBClusterParameters</code> operation to verify
 *                 that your DB cluster parameter group has been created or modified.</p>
 *             <p>If the modified DB cluster parameter group is used by an Aurora Serverless v1 cluster, Aurora
 *                applies the update immediately. The cluster restart might interrupt your workload. In that case,
 *                your application must reopen any connections and retry any transactions that were active
 *                when the parameter changes took effect.</p>
 *          </important>
 *          <p>For more information on Amazon Aurora DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
 *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBClusterParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBClusterParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class ModifyDBClusterParameterGroupCommand extends $Command<
  ModifyDBClusterParameterGroupCommandInput,
  ModifyDBClusterParameterGroupCommandOutput,
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

  constructor(readonly input: ModifyDBClusterParameterGroupCommandInput) {
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
  ): Handler<ModifyDBClusterParameterGroupCommandInput, ModifyDBClusterParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBClusterParameterGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBClusterParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBClusterParameterGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBClusterParameterGroupNameMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyDBClusterParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBClusterParameterGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyDBClusterParameterGroupCommandOutput> {
    return deserializeAws_queryModifyDBClusterParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
