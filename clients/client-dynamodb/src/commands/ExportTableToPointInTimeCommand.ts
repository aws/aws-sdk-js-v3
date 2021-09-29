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

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ExportTableToPointInTimeInput, ExportTableToPointInTimeOutput } from "../models/models_0";
import {
  deserializeAws_json1_0ExportTableToPointInTimeCommand,
  serializeAws_json1_0ExportTableToPointInTimeCommand,
} from "../protocols/Aws_json1_0";

export interface ExportTableToPointInTimeCommandInput extends ExportTableToPointInTimeInput {}
export interface ExportTableToPointInTimeCommandOutput extends ExportTableToPointInTimeOutput, __MetadataBearer {}

/**
 * <p>Exports table data to an S3 bucket. The table must have point in time recovery
 *             enabled, and you can export data from any time within the point in time recovery
 *             window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ExportTableToPointInTimeCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ExportTableToPointInTimeCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ExportTableToPointInTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportTableToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link ExportTableToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ExportTableToPointInTimeCommand extends $Command<
  ExportTableToPointInTimeCommandInput,
  ExportTableToPointInTimeCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExportTableToPointInTimeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportTableToPointInTimeCommandInput, ExportTableToPointInTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "ExportTableToPointInTimeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportTableToPointInTimeInput.filterSensitiveLog,
      outputFilterSensitiveLog: ExportTableToPointInTimeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportTableToPointInTimeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ExportTableToPointInTimeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportTableToPointInTimeCommandOutput> {
    return deserializeAws_json1_0ExportTableToPointInTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
