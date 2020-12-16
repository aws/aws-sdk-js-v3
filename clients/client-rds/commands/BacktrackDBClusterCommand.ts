import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { BacktrackDBClusterMessage, DBClusterBacktrack } from "../models/models_0";
import {
  deserializeAws_queryBacktrackDBClusterCommand,
  serializeAws_queryBacktrackDBClusterCommand,
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

export type BacktrackDBClusterCommandInput = BacktrackDBClusterMessage;
export type BacktrackDBClusterCommandOutput = DBClusterBacktrack & __MetadataBearer;

/**
 * <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p>
 *         <p>For more information on backtracking, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html">
 *                 Backtracking an Aurora DB Cluster</a> in the
 *             <i>Amazon Aurora User Guide.</i>
 *         </p>
 *         <note>
 *             <p>This action only applies to Aurora MySQL DB clusters.</p>
 *         </note>
 */
export class BacktrackDBClusterCommand extends $Command<
  BacktrackDBClusterCommandInput,
  BacktrackDBClusterCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BacktrackDBClusterCommandInput) {
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
  ): Handler<BacktrackDBClusterCommandInput, BacktrackDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "BacktrackDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BacktrackDBClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBClusterBacktrack.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BacktrackDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBacktrackDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BacktrackDBClusterCommandOutput> {
    return deserializeAws_queryBacktrackDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
