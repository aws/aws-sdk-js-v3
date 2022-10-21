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
  CancelExportTaskMessage,
  CancelExportTaskMessageFilterSensitiveLog,
  ExportTask,
  ExportTaskFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCancelExportTaskCommand,
  serializeAws_queryCancelExportTaskCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface CancelExportTaskCommandInput extends CancelExportTaskMessage {}
export interface CancelExportTaskCommandOutput extends ExportTask, __MetadataBearer {}

/**
 * <p>Cancels an export task in progress that is exporting a snapshot to Amazon S3.
 *             Any data that has already been written to the S3 bucket isn't removed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CancelExportTaskCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CancelExportTaskCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CancelExportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelExportTaskCommandInput} for command's `input` shape.
 * @see {@link CancelExportTaskCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class CancelExportTaskCommand extends $Command<
  CancelExportTaskCommandInput,
  CancelExportTaskCommandOutput,
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

  constructor(readonly input: CancelExportTaskCommandInput) {
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
  ): Handler<CancelExportTaskCommandInput, CancelExportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelExportTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CancelExportTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelExportTaskMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ExportTaskFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelExportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCancelExportTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelExportTaskCommandOutput> {
    return deserializeAws_queryCancelExportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
