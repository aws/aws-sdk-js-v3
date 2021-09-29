import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { DeletePreparedStatementInput, DeletePreparedStatementOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeletePreparedStatementCommand,
  serializeAws_json1_1DeletePreparedStatementCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DeletePreparedStatementCommandInput extends DeletePreparedStatementInput {}
export interface DeletePreparedStatementCommandOutput extends DeletePreparedStatementOutput, __MetadataBearer {}

/**
 * <p>Deletes the prepared statement with the specified name from the specified
 *             workgroup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, DeletePreparedStatementCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, DeletePreparedStatementCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new DeletePreparedStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePreparedStatementCommandInput} for command's `input` shape.
 * @see {@link DeletePreparedStatementCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeletePreparedStatementCommand extends $Command<
  DeletePreparedStatementCommandInput,
  DeletePreparedStatementCommandOutput,
  AthenaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePreparedStatementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePreparedStatementCommandInput, DeletePreparedStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "DeletePreparedStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePreparedStatementInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeletePreparedStatementOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePreparedStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeletePreparedStatementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePreparedStatementCommandOutput> {
    return deserializeAws_json1_1DeletePreparedStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
