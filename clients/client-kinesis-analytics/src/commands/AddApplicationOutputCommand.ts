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

import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import {
  AddApplicationOutputRequest,
  AddApplicationOutputRequestFilterSensitiveLog,
  AddApplicationOutputResponse,
  AddApplicationOutputResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AddApplicationOutputCommand,
  serializeAws_json1_1AddApplicationOutputCommand,
} from "../protocols/Aws_json1_1";

export interface AddApplicationOutputCommandInput extends AddApplicationOutputRequest {}
export interface AddApplicationOutputCommandOutput extends AddApplicationOutputResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Adds an external destination to your Amazon Kinesis Analytics application.</p>
 *         <p>If you want Amazon Kinesis Analytics to deliver data from an in-application stream
 *             within your application to an external destination (such as an Amazon Kinesis stream, an
 *             Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), you add the
 *             relevant configuration to your application using this operation. You can configure one
 *             or more outputs for your application. Each output configuration maps an in-application
 *             stream and an external destination.</p>
 *         <p> You can use one of the output configurations to deliver data from your
 *             in-application error stream to an external destination so that you can analyze the
 *             errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Understanding Application
 *                 Output (Destination)</a>. </p>
 *         <p> Any configuration update, including adding a streaming source using this
 *             operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application
 *             version.</p>
 *         <p>For the limits on the number of application inputs and outputs
 *             you can configure, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.</p>
 *         <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, AddApplicationOutputCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, AddApplicationOutputCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * const client = new KinesisAnalyticsClient(config);
 * const command = new AddApplicationOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddApplicationOutputCommandInput} for command's `input` shape.
 * @see {@link AddApplicationOutputCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for KinesisAnalyticsClient's `config` shape.
 *
 */
export class AddApplicationOutputCommand extends $Command<
  AddApplicationOutputCommandInput,
  AddApplicationOutputCommandOutput,
  KinesisAnalyticsClientResolvedConfig
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

  constructor(readonly input: AddApplicationOutputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddApplicationOutputCommandInput, AddApplicationOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddApplicationOutputCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsClient";
    const commandName = "AddApplicationOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddApplicationOutputRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AddApplicationOutputResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddApplicationOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddApplicationOutputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddApplicationOutputCommandOutput> {
    return deserializeAws_json1_1AddApplicationOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
