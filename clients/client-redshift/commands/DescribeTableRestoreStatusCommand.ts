import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeTableRestoreStatusMessage, TableRestoreStatusMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeTableRestoreStatusCommand,
  serializeAws_queryDescribeTableRestoreStatusCommand,
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

export type DescribeTableRestoreStatusCommandInput = DescribeTableRestoreStatusMessage;
export type DescribeTableRestoreStatusCommandOutput = TableRestoreStatusMessage & __MetadataBearer;

/**
 * <p>Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value
 *             for the <code>TableRestoreRequestId</code> parameter, then
 *                 <code>DescribeTableRestoreStatus</code> returns the status of all table restore
 *             requests ordered by the date and time of the request in ascending order. Otherwise
 *                 <code>DescribeTableRestoreStatus</code> returns the status of the table specified by
 *                 <code>TableRestoreRequestId</code>.</p>
 */
export class DescribeTableRestoreStatusCommand extends $Command<
  DescribeTableRestoreStatusCommandInput,
  DescribeTableRestoreStatusCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTableRestoreStatusCommandInput) {
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
  ): Handler<DescribeTableRestoreStatusCommandInput, DescribeTableRestoreStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeTableRestoreStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTableRestoreStatusMessage.filterSensitiveLog,
      outputFilterSensitiveLog: TableRestoreStatusMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTableRestoreStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeTableRestoreStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTableRestoreStatusCommandOutput> {
    return deserializeAws_queryDescribeTableRestoreStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
