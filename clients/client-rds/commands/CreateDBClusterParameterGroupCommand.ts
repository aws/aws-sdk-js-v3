import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBClusterParameterGroupMessage, CreateDBClusterParameterGroupResult } from "../models/models_0";
import {
  deserializeAws_queryCreateDBClusterParameterGroupCommand,
  serializeAws_queryCreateDBClusterParameterGroupCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreateDBClusterParameterGroupCommandInput = CreateDBClusterParameterGroupMessage;
export type CreateDBClusterParameterGroupCommandOutput = CreateDBClusterParameterGroupResult & __MetadataBearer;

/**
 * <p>Creates a new DB cluster parameter group.</p>
 *          <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p>
 *         <p>
 *             A DB cluster parameter group is initially created with the default parameters for the
 *             database engine used by instances in the DB cluster. To provide custom values for any of the
 *             parameters, you must modify the group after creating it using
 *             <code>ModifyDBClusterParameterGroup</code>. Once you've created a DB cluster parameter group, you need to
 *             associate it with your DB cluster using <code>ModifyDBCluster</code>. When you associate
 *             a new DB cluster parameter group with a running DB cluster, you need to reboot the DB
 *             instances in the DB cluster without failover for the new DB cluster parameter group and
 *             associated settings to take effect.
 *         </p>
 *         <important>
 *             <p>After you create a DB cluster parameter group, you should wait at least 5 minutes
 *                 before creating your first DB cluster
 *                 that uses that DB cluster parameter group as the default parameter
 *                 group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter
 *                 group is used as the default for a new DB cluster. This is especially important for parameters
 *                 that are critical when creating the default database for a DB cluster, such as the character set
 *                 for the default database defined by the <code>character_set_database</code> parameter. You can use the
 *                 <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
 *                 <code>DescribeDBClusterParameters</code> action to verify
 *                 that your DB cluster parameter group has been created or modified.</p>
 *         </important>
 *
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 */
export class CreateDBClusterParameterGroupCommand extends $Command<
  CreateDBClusterParameterGroupCommandInput,
  CreateDBClusterParameterGroupCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBClusterParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBClusterParameterGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDBClusterParameterGroupResult.filterSensitiveLog,
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
