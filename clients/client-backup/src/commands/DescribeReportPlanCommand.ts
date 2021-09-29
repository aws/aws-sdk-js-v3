import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { DescribeReportPlanInput, DescribeReportPlanOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeReportPlanCommand,
  serializeAws_restJson1DescribeReportPlanCommand,
} from "../protocols/Aws_restJson1";
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

export interface DescribeReportPlanCommandInput extends DescribeReportPlanInput {}
export interface DescribeReportPlanCommandOutput extends DescribeReportPlanOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all report plans for an Amazon Web Services account and Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeReportPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeReportPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeReportPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReportPlanCommandInput} for command's `input` shape.
 * @see {@link DescribeReportPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeReportPlanCommand extends $Command<
  DescribeReportPlanCommandInput,
  DescribeReportPlanCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReportPlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReportPlanCommandInput, DescribeReportPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DescribeReportPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReportPlanInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeReportPlanOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeReportPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeReportPlanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeReportPlanCommandOutput> {
    return deserializeAws_restJson1DescribeReportPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
