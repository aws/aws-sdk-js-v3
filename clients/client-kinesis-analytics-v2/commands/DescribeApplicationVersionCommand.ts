import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { DescribeApplicationVersionRequest, DescribeApplicationVersionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeApplicationVersionCommand,
  serializeAws_json1_1DescribeApplicationVersionCommand,
} from "../protocols/Aws_json1_1";
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

export interface DescribeApplicationVersionCommandInput extends DescribeApplicationVersionRequest {}
export interface DescribeApplicationVersionCommandOutput extends DescribeApplicationVersionResponse, __MetadataBearer {}

/**
 * <p>Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the <a>ListApplicationVersions</a> operation.</p>
 *          <note>
 *             <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DescribeApplicationVersionCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DescribeApplicationVersionCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new DescribeApplicationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeApplicationVersionCommand extends $Command<
  DescribeApplicationVersionCommandInput,
  DescribeApplicationVersionCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeApplicationVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeApplicationVersionCommandInput, DescribeApplicationVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "DescribeApplicationVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeApplicationVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeApplicationVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeApplicationVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeApplicationVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeApplicationVersionCommandOutput> {
    return deserializeAws_json1_1DescribeApplicationVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
