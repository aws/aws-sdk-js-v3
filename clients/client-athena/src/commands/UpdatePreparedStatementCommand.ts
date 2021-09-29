import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { UpdatePreparedStatementInput, UpdatePreparedStatementOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdatePreparedStatementCommand,
  serializeAws_json1_1UpdatePreparedStatementCommand,
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

export interface UpdatePreparedStatementCommandInput extends UpdatePreparedStatementInput {}
export interface UpdatePreparedStatementCommandOutput extends UpdatePreparedStatementOutput, __MetadataBearer {}

/**
 * <p>Updates a prepared statement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdatePreparedStatementCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdatePreparedStatementCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new UpdatePreparedStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePreparedStatementCommandInput} for command's `input` shape.
 * @see {@link UpdatePreparedStatementCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdatePreparedStatementCommand extends $Command<
  UpdatePreparedStatementCommandInput,
  UpdatePreparedStatementCommandOutput,
  AthenaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePreparedStatementCommandInput) {
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
  ): Handler<UpdatePreparedStatementCommandInput, UpdatePreparedStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "UpdatePreparedStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePreparedStatementInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePreparedStatementOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePreparedStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePreparedStatementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePreparedStatementCommandOutput> {
    return deserializeAws_json1_1UpdatePreparedStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
