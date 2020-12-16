import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StartDBInstanceMessage, StartDBInstanceResult } from "../models/models_1";
import {
  deserializeAws_queryStartDBInstanceCommand,
  serializeAws_queryStartDBInstanceCommand,
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

export type StartDBInstanceCommandInput = StartDBInstanceMessage;
export type StartDBInstanceCommandOutput = StartDBInstanceResult & __MetadataBearer;

/**
 * <p>
 *             Starts an Amazon RDS DB instance that was stopped using the AWS console, the stop-db-instance AWS CLI command, or the StopDBInstance action.
 *         </p>
 *
 *         <p>For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html">
 *                 Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the
 *             <i>Amazon RDS User Guide.</i>
 *          </p>
 *
 *         <note>
 *             <p>
 *             This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.
 *             For Aurora DB clusters, use <code>StartDBCluster</code> instead.
 *           </p>
 *         </note>
 */
export class StartDBInstanceCommand extends $Command<
  StartDBInstanceCommandInput,
  StartDBInstanceCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartDBInstanceCommandInput) {
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
  ): Handler<StartDBInstanceCommandInput, StartDBInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "StartDBInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDBInstanceMessage.filterSensitiveLog,
      outputFilterSensitiveLog: StartDBInstanceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartDBInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStartDBInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDBInstanceCommandOutput> {
    return deserializeAws_queryStartDBInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
