import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeResizeMessage, ResizeProgressMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeResizeCommand,
  serializeAws_queryDescribeResizeCommand,
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

export type DescribeResizeCommandInput = DescribeResizeMessage;
export type DescribeResizeCommandOutput = ResizeProgressMessage & __MetadataBearer;

/**
 * <p>Returns information about the last resize operation for the specified cluster. If
 *             no resize operation has ever been initiated for the specified cluster, a <code>HTTP
 *                 404</code> error is returned. If a resize operation was initiated and completed, the
 *             status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p>
 *         <p>A resize operation can be requested using <a>ModifyCluster</a> and
 *             specifying a different number or type of nodes for the cluster. </p>
 */
export class DescribeResizeCommand extends $Command<
  DescribeResizeCommandInput,
  DescribeResizeCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeResizeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeResizeCommandInput, DescribeResizeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeResizeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeResizeMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ResizeProgressMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeResizeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeResizeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeResizeCommandOutput> {
    return deserializeAws_queryDescribeResizeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
