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
  RestoreDBClusterFromSnapshotMessage,
  RestoreDBClusterFromSnapshotMessageFilterSensitiveLog,
  RestoreDBClusterFromSnapshotResult,
  RestoreDBClusterFromSnapshotResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryRestoreDBClusterFromSnapshotCommand,
  serializeAws_queryRestoreDBClusterFromSnapshotCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface RestoreDBClusterFromSnapshotCommandInput extends RestoreDBClusterFromSnapshotMessage {}
export interface RestoreDBClusterFromSnapshotCommandOutput
  extends RestoreDBClusterFromSnapshotResult,
    __MetadataBearer {}

/**
 * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p>
 *          <p>The target DB cluster is created from the source snapshot with a default
 *             configuration. If you don't specify a security group, the new DB cluster is
 *             associated with the default security group.</p>
 *          <note>
 *             <p>This action only restores the DB cluster, not the DB instances for that DB
 *                 cluster. You must invoke the <code>CreateDBInstance</code> action to create DB
 *                 instances for the restored DB cluster, specifying the identifier of the restored DB
 *                 cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after
 *                 the <code>RestoreDBClusterFromSnapshot</code> action has completed and the DB
 *                 cluster is available.</p>
 *          </note>
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
 * import { RDSClient, RestoreDBClusterFromSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBClusterFromSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RestoreDBClusterFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBClusterFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class RestoreDBClusterFromSnapshotCommand extends $Command<
  RestoreDBClusterFromSnapshotCommandInput,
  RestoreDBClusterFromSnapshotCommandOutput,
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

  constructor(readonly input: RestoreDBClusterFromSnapshotCommandInput) {
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
  ): Handler<RestoreDBClusterFromSnapshotCommandInput, RestoreDBClusterFromSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreDBClusterFromSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RestoreDBClusterFromSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreDBClusterFromSnapshotMessageFilterSensitiveLog,
      outputFilterSensitiveLog: RestoreDBClusterFromSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreDBClusterFromSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBClusterFromSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreDBClusterFromSnapshotCommandOutput> {
    return deserializeAws_queryRestoreDBClusterFromSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
