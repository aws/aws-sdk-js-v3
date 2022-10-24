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
  StartExportTaskRequest,
  StartExportTaskRequestFilterSensitiveLog,
  StartExportTaskResponse,
  StartExportTaskResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartExportTaskCommand,
  serializeAws_json1_1StartExportTaskCommand,
} from "../protocols/Aws_json1_1";

export interface StartExportTaskCommandInput extends StartExportTaskRequest {}
export interface StartExportTaskCommandOutput extends StartExportTaskResponse, __MetadataBearer {}

/**
 * <p> Begins the export of discovered data to an S3 bucket.</p>
 *          <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of
 *       detailed data collected by the identified Application Discovery Agent, including network,
 *       process, and performance details. A time range for exported agent data may be set by using
 *         <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to
 *       five concurrently running exports. </p>
 *          <p> If you do not include an <code>agentIds</code> filter, summary data is exported that
 *       includes both Amazon Web Services Agentless Discovery Connector data and summary data from Amazon Web Services Discovery
 *       Agents. Export of summary data is limited to two exports per day. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StartExportTaskCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StartExportTaskCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new StartExportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartExportTaskCommandInput} for command's `input` shape.
 * @see {@link StartExportTaskCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 */
export class StartExportTaskCommand extends $Command<
  StartExportTaskCommandInput,
  StartExportTaskCommandOutput,
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

  constructor(readonly input: StartExportTaskCommandInput) {
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
  ): Handler<StartExportTaskCommandInput, StartExportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartExportTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "StartExportTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartExportTaskRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartExportTaskResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartExportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartExportTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartExportTaskCommandOutput> {
    return deserializeAws_json1_1StartExportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
