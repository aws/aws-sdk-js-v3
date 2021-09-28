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
import { DeleteBackupInput, DeleteBackupOutput } from "../models/models_0";
import {
  deserializeAws_json1_0DeleteBackupCommand,
  serializeAws_json1_0DeleteBackupCommand,
} from "../protocols/Aws_json1_0";

export interface DeleteBackupCommandInput extends DeleteBackupInput {}
export interface DeleteBackupCommandOutput extends DeleteBackupOutput, __MetadataBearer {}

/**
 * <p>Deletes an existing backup of a table.</p>
 *          <p>You can call <code>DeleteBackup</code> at a maximum rate of 10 times per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DeleteBackupCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DeleteBackupCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DeleteBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackupCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteBackupCommand extends $Command<
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBackupCommandInput) {
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
  ): Handler<DeleteBackupCommandInput, DeleteBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DeleteBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBackupInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBackupOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteBackupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBackupCommandOutput> {
    return deserializeAws_json1_0DeleteBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
