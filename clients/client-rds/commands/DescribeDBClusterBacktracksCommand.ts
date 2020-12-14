import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBClusterBacktrackMessage, DescribeDBClusterBacktracksMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeDBClusterBacktracksCommand,
  serializeAws_queryDescribeDBClusterBacktracksCommand,
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

export type DescribeDBClusterBacktracksCommandInput = DescribeDBClusterBacktracksMessage;
export type DescribeDBClusterBacktracksCommandOutput = DBClusterBacktrackMessage & __MetadataBearer;

/**
 * <p>Returns information about backtracks for a DB cluster.</p>
 *         <p>For more information on Amazon Aurora, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *                 What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *         </p>
 *         <note>
 *             <p>This action only applies to Aurora MySQL DB clusters.</p>
 *         </note>
 */
export class DescribeDBClusterBacktracksCommand extends $Command<
  DescribeDBClusterBacktracksCommandInput,
  DescribeDBClusterBacktracksCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDBClusterBacktracksCommandInput) {
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
  ): Handler<DescribeDBClusterBacktracksCommandInput, DescribeDBClusterBacktracksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBClusterBacktracksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBClusterBacktracksMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBClusterBacktrackMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDBClusterBacktracksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBClusterBacktracksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterBacktracksCommandOutput> {
    return deserializeAws_queryDescribeDBClusterBacktracksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
