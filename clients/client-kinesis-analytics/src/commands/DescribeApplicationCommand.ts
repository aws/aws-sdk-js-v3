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
  DescribeApplicationRequest,
  DescribeApplicationRequestFilterSensitiveLog,
  DescribeApplicationResponse,
  DescribeApplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeApplicationCommand,
  serializeAws_json1_1DescribeApplicationCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeApplicationCommandInput extends DescribeApplicationRequest {}
export interface DescribeApplicationCommandOutput extends DescribeApplicationResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Returns information about a specific Amazon Kinesis Analytics application.</p>
 *         <p>If you want to retrieve a list of all applications in your account,
 *             use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html">ListApplications</a> operation.</p>
 *         <p>This operation requires permissions to perform the <code>kinesisanalytics:DescribeApplication</code>
 *             action. You can use <code>DescribeApplication</code> to get the current application versionId, which you need to call other
 *             operations such as <code>Update</code>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, DescribeApplicationCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, DescribeApplicationCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * const client = new KinesisAnalyticsClient(config);
 * const command = new DescribeApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for KinesisAnalyticsClient's `config` shape.
 *
 */
export class DescribeApplicationCommand extends $Command<
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
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

  constructor(readonly input: DescribeApplicationCommandInput) {
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
  ): Handler<DescribeApplicationCommandInput, DescribeApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsClient";
    const commandName = "DescribeApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeApplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeApplicationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeApplicationCommandOutput> {
    return deserializeAws_json1_1DescribeApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
