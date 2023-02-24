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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import {
  PutQueryDefinitionRequest,
  PutQueryDefinitionRequestFilterSensitiveLog,
  PutQueryDefinitionResponse,
  PutQueryDefinitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutQueryDefinitionCommand,
  serializeAws_json1_1PutQueryDefinitionCommand,
} from "../protocols/Aws_json1_1";

export interface PutQueryDefinitionCommandInput extends PutQueryDefinitionRequest {}
export interface PutQueryDefinitionCommandOutput extends PutQueryDefinitionResponse, __MetadataBearer {}

/**
 * <p>Creates or updates a query definition for CloudWatch Logs Insights. For
 *       more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html">Analyzing Log Data with CloudWatch Logs Insights</a>.</p>
 *          <p>To update a query definition, specify its <code>queryDefinitionId</code> in your request.
 *       The values of <code>name</code>, <code>queryString</code>, and <code>logGroupNames</code> are
 *       changed to the values that you specify in your update operation. No current values are
 *       retained from the current query definition. For example, imagine updating a current query
 *       definition that includes log groups. If you don't specify the <code>logGroupNames</code>
 *       parameter in your update operation, the query definition changes to contain no log
 *       groups.</p>
 *          <p>You must have the <code>logs:PutQueryDefinition</code> permission to be able to perform
 *     this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutQueryDefinitionCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutQueryDefinitionCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new PutQueryDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutQueryDefinitionCommandInput} for command's `input` shape.
 * @see {@link PutQueryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 */
export class PutQueryDefinitionCommand extends $Command<
  PutQueryDefinitionCommandInput,
  PutQueryDefinitionCommandOutput,
  CloudWatchLogsClientResolvedConfig
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

  constructor(readonly input: PutQueryDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutQueryDefinitionCommandInput, PutQueryDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutQueryDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "PutQueryDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutQueryDefinitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutQueryDefinitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutQueryDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutQueryDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutQueryDefinitionCommandOutput> {
    return deserializeAws_json1_1PutQueryDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
