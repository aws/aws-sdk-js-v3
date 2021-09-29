import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteRelationalDatabaseRequest, DeleteRelationalDatabaseResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteRelationalDatabaseCommand,
  serializeAws_json1_1DeleteRelationalDatabaseCommand,
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

export interface DeleteRelationalDatabaseCommandInput extends DeleteRelationalDatabaseRequest {}
export interface DeleteRelationalDatabaseCommandOutput extends DeleteRelationalDatabaseResult, __MetadataBearer {}

/**
 * <p>Deletes a database in Amazon Lightsail.</p>
 *          <p>The <code>delete relational database</code> operation supports tag-based access control
 *       via resource tags applied to the resource identified by relationalDatabaseName. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link DeleteRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteRelationalDatabaseCommand extends $Command<
  DeleteRelationalDatabaseCommandInput,
  DeleteRelationalDatabaseCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRelationalDatabaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRelationalDatabaseCommandInput, DeleteRelationalDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteRelationalDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRelationalDatabaseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRelationalDatabaseResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRelationalDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteRelationalDatabaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRelationalDatabaseCommandOutput> {
    return deserializeAws_json1_1DeleteRelationalDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
