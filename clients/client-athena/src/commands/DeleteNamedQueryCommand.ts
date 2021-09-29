import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { DeleteNamedQueryInput, DeleteNamedQueryOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteNamedQueryCommand,
  serializeAws_json1_1DeleteNamedQueryCommand,
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

export interface DeleteNamedQueryCommandInput extends DeleteNamedQueryInput {}
export interface DeleteNamedQueryCommandOutput extends DeleteNamedQueryOutput, __MetadataBearer {}

/**
 * <p>Deletes the named query if you have access to the workgroup in which the query was
 *             saved.</p>
 *         <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, DeleteNamedQueryCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, DeleteNamedQueryCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new DeleteNamedQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNamedQueryCommandInput} for command's `input` shape.
 * @see {@link DeleteNamedQueryCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteNamedQueryCommand extends $Command<
  DeleteNamedQueryCommandInput,
  DeleteNamedQueryCommandOutput,
  AthenaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteNamedQueryCommandInput) {
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
  ): Handler<DeleteNamedQueryCommandInput, DeleteNamedQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "DeleteNamedQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNamedQueryInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteNamedQueryOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteNamedQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteNamedQueryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteNamedQueryCommandOutput> {
    return deserializeAws_json1_1DeleteNamedQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
