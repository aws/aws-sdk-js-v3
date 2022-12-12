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

import { ExportTask, ExportTaskFilterSensitiveLog } from "../models/models_0";
import { StartExportTaskMessage, StartExportTaskMessageFilterSensitiveLog } from "../models/models_1";
import {
  deserializeAws_queryStartExportTaskCommand,
  serializeAws_queryStartExportTaskCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface StartExportTaskCommandInput extends StartExportTaskMessage {}
export interface StartExportTaskCommandOutput extends ExportTask, __MetadataBearer {}

/**
 * <p>Starts an export of a snapshot to Amazon S3.
 *             The provided IAM role must have access to the S3 bucket.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartExportTaskCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartExportTaskCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StartExportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartExportTaskCommandInput} for command's `input` shape.
 * @see {@link StartExportTaskCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class StartExportTaskCommand extends $Command<
  StartExportTaskCommandInput,
  StartExportTaskCommandOutput,
  RDSClientResolvedConfig
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
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartExportTaskCommandInput, StartExportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartExportTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "StartExportTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartExportTaskMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ExportTaskFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartExportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStartExportTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartExportTaskCommandOutput> {
    return deserializeAws_queryStartExportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
