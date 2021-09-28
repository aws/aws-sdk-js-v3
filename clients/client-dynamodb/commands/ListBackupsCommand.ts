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
import { ListBackupsInput, ListBackupsOutput } from "../models/models_0";
import {
  deserializeAws_json1_0ListBackupsCommand,
  serializeAws_json1_0ListBackupsCommand,
} from "../protocols/Aws_json1_0";

export interface ListBackupsCommandInput extends ListBackupsInput {}
export interface ListBackupsCommandOutput extends ListBackupsOutput, __MetadataBearer {}

/**
 * <p>List backups associated with an AWS account. To list backups for a given table, specify
 *                 <code>TableName</code>. <code>ListBackups</code> returns a paginated list of results
 *             with at most 1 MB worth of items in a page. You can also specify a maximum number of
 *             entries to be returned in a page. </p>
 *          <p>In the request, start time is inclusive, but end time is exclusive. Note that these
 *             boundaries are for the time at which the original backup was requested.</p>
 *          <p>You can call <code>ListBackups</code> a maximum of five times per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListBackupsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListBackupsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListBackupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupsCommandInput} for command's `input` shape.
 * @see {@link ListBackupsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListBackupsCommand extends $Command<
  ListBackupsCommandInput,
  ListBackupsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBackupsCommandInput) {
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
  ): Handler<ListBackupsCommandInput, ListBackupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "ListBackupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBackupsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackupsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBackupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListBackupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackupsCommandOutput> {
    return deserializeAws_json1_0ListBackupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
