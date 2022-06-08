// smithy-typescript generated code
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

import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { GetDataSetImportTaskRequest, GetDataSetImportTaskResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDataSetImportTaskCommand,
  serializeAws_restJson1GetDataSetImportTaskCommand,
} from "../protocols/Aws_restJson1";

export interface GetDataSetImportTaskCommandInput extends GetDataSetImportTaskRequest {}
export interface GetDataSetImportTaskCommandOutput extends GetDataSetImportTaskResponse, __MetadataBearer {}

/**
 * <p>Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, GetDataSetImportTaskCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, GetDataSetImportTaskCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const command = new GetDataSetImportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataSetImportTaskCommandInput} for command's `input` shape.
 * @see {@link GetDataSetImportTaskCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 */
export class GetDataSetImportTaskCommand extends $Command<
  GetDataSetImportTaskCommandInput,
  GetDataSetImportTaskCommandOutput,
  M2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDataSetImportTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: M2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataSetImportTaskCommandInput, GetDataSetImportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "M2Client";
    const commandName = "GetDataSetImportTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDataSetImportTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDataSetImportTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDataSetImportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDataSetImportTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataSetImportTaskCommandOutput> {
    return deserializeAws_restJson1GetDataSetImportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
