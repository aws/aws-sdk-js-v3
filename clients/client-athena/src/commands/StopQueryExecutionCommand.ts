import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { StopQueryExecutionInput, StopQueryExecutionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StopQueryExecutionCommand,
  serializeAws_json1_1StopQueryExecutionCommand,
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

export interface StopQueryExecutionCommandInput extends StopQueryExecutionInput {}
export interface StopQueryExecutionCommandOutput extends StopQueryExecutionOutput, __MetadataBearer {}

/**
 * <p>Stops a query execution. Requires you to have access to the workgroup in which the
 *             query ran.</p>
 *         <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, StopQueryExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, StopQueryExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new StopQueryExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopQueryExecutionCommandInput} for command's `input` shape.
 * @see {@link StopQueryExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopQueryExecutionCommand extends $Command<
  StopQueryExecutionCommandInput,
  StopQueryExecutionCommandOutput,
  AthenaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopQueryExecutionCommandInput) {
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
  ): Handler<StopQueryExecutionCommandInput, StopQueryExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "StopQueryExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopQueryExecutionInput.filterSensitiveLog,
      outputFilterSensitiveLog: StopQueryExecutionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopQueryExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopQueryExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopQueryExecutionCommandOutput> {
    return deserializeAws_json1_1StopQueryExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
