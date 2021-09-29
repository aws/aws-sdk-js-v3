import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { StartQueryExecutionInput, StartQueryExecutionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StartQueryExecutionCommand,
  serializeAws_json1_1StartQueryExecutionCommand,
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

export interface StartQueryExecutionCommandInput extends StartQueryExecutionInput {}
export interface StartQueryExecutionCommandOutput extends StartQueryExecutionOutput, __MetadataBearer {}

/**
 * <p>Runs the SQL query statements contained in the <code>Query</code>. Requires you to
 *             have access to the workgroup in which the query ran. Running queries against an external
 *             catalog requires <a>GetDataCatalog</a> permission to the catalog. For code
 *             samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, StartQueryExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, StartQueryExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new StartQueryExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartQueryExecutionCommandInput} for command's `input` shape.
 * @see {@link StartQueryExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartQueryExecutionCommand extends $Command<
  StartQueryExecutionCommandInput,
  StartQueryExecutionCommandOutput,
  AthenaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartQueryExecutionCommandInput) {
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
  ): Handler<StartQueryExecutionCommandInput, StartQueryExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "StartQueryExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartQueryExecutionInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartQueryExecutionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartQueryExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartQueryExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartQueryExecutionCommandOutput> {
    return deserializeAws_json1_1StartQueryExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
