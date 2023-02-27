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

/**
 * The input for {@link StartExportTaskCommand}.
 */
export interface StartExportTaskCommandInput extends StartExportTaskMessage {}
/**
 * The output of {@link StartExportTaskCommand}.
 */
export interface StartExportTaskCommandOutput extends ExportTask, __MetadataBearer {}

/**
 * <p>Starts an export of DB snapshot or DB cluster data to Amazon S3.
 *             The provided IAM role must have access to the S3 bucket.</p>
 *          <p>You can't export snapshot data from RDS Custom DB instances.</p>
 *          <p>You can't export cluster data from Multi-AZ DB clusters.</p>
 *          <p>For more information on exporting DB snapshot data, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html">Exporting DB snapshot
 *             data to Amazon S3</a> in the <i>Amazon RDS User Guide</i>
 *             or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/aurora-export-snapshot.html">Exporting DB
 *             cluster snapshot data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on exporting DB cluster data, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/export-cluster-data.html">Exporting DB
 *             cluster data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>
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
