import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { PromoteReadReplicaMessage, PromoteReadReplicaResult } from "../models/models_1";
import {
  deserializeAws_queryPromoteReadReplicaCommand,
  serializeAws_queryPromoteReadReplicaCommand,
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

export type PromoteReadReplicaCommandInput = PromoteReadReplicaMessage;
export type PromoteReadReplicaCommandOutput = PromoteReadReplicaResult & __MetadataBearer;

/**
 * <p>Promotes a read replica DB instance to a standalone DB instance.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Backup duration is a function of the amount of changes to the database since the previous
 *                         backup. If you plan to promote a read replica to a standalone instance, we
 *                         recommend that you enable backups and complete at least one backup prior to
 *                         promotion. In addition, a read replica cannot be promoted to a standalone
 *                         instance when it is in the <code>backing-up</code> status. If you have
 *                         enabled backups on your read replica, configure the automated backup window
 *                         so that daily backups do not interfere with read replica
 *                         promotion.</p>
 *                </li>
 *                <li>
 *                   <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.</p>
 *                </li>
 *             </ul>
 *
 *          </note>
 */
export class PromoteReadReplicaCommand extends $Command<
  PromoteReadReplicaCommandInput,
  PromoteReadReplicaCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PromoteReadReplicaCommandInput) {
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
  ): Handler<PromoteReadReplicaCommandInput, PromoteReadReplicaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "PromoteReadReplicaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PromoteReadReplicaMessage.filterSensitiveLog,
      outputFilterSensitiveLog: PromoteReadReplicaResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PromoteReadReplicaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPromoteReadReplicaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PromoteReadReplicaCommandOutput> {
    return deserializeAws_queryPromoteReadReplicaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
