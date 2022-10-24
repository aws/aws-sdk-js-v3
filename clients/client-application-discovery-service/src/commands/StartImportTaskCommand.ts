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

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import {
  StartImportTaskRequest,
  StartImportTaskRequestFilterSensitiveLog,
  StartImportTaskResponse,
  StartImportTaskResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartImportTaskCommand,
  serializeAws_json1_1StartImportTaskCommand,
} from "../protocols/Aws_json1_1";

export interface StartImportTaskCommandInput extends StartImportTaskRequest {}
export interface StartImportTaskCommandOutput extends StartImportTaskResponse, __MetadataBearer {}

/**
 * <p>Starts an import task, which allows you to import details of your on-premises environment
 *       directly into Amazon Web Services Migration Hub without having to use the Application Discovery Service (ADS)
 *       tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform
 *       migration assessment and planning directly from your imported data, including the ability to
 *       group your devices as applications and track their migration status.</p>
 *
 *          <p>To start an import request, do this:</p>
 *
 *          <ol>
 *             <li>
 *                <p>Download the specially formatted comma separated value (CSV) import template, which
 *           you can find here: <a href="https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p>
 *             </li>
 *             <li>
 *                <p>Fill out the template with your server and application data.</p>
 *             </li>
 *             <li>
 *                <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL.
 *           Your import file must be in the CSV format.</p>
 *             </li>
 *             <li>
 *                <p>Use the console or the <code>StartImportTask</code> command with the Amazon Web Services CLI or one of
 *           the Amazon Web Services SDKs to import the records from your file.</p>
 *             </li>
 *          </ol>
 *
 *          <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub
 *         Import</a> in the <i>Amazon Web Services Application Discovery Service User
 *       Guide</i>.</p>
 *
 *          <note>
 *             <p>There are limits to the number of import tasks you can create (and delete) in an Amazon Web Services
 *         account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">Amazon Web Services Application
 *           Discovery Service Limits</a> in the <i>Amazon Web Services Application Discovery Service User
 *           Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StartImportTaskCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StartImportTaskCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new StartImportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartImportTaskCommandInput} for command's `input` shape.
 * @see {@link StartImportTaskCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 */
export class StartImportTaskCommand extends $Command<
  StartImportTaskCommandInput,
  StartImportTaskCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
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

  constructor(readonly input: StartImportTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartImportTaskCommandInput, StartImportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartImportTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "StartImportTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartImportTaskRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartImportTaskResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartImportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartImportTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartImportTaskCommandOutput> {
    return deserializeAws_json1_1StartImportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
