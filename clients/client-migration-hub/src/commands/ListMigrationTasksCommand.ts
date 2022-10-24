// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import {
  ListMigrationTasksRequest,
  ListMigrationTasksRequestFilterSensitiveLog,
  ListMigrationTasksResult,
  ListMigrationTasksResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListMigrationTasksCommand,
  serializeAws_json1_1ListMigrationTasksCommand,
} from "../protocols/Aws_json1_1";

export interface ListMigrationTasksCommandInput extends ListMigrationTasksRequest {}
export interface ListMigrationTasksCommandOutput extends ListMigrationTasksResult, __MetadataBearer {}

/**
 * <p>Lists all, or filtered by resource name, migration tasks associated with the user
 *          account making this call. This API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Can show a summary list of the most recent migration tasks.</p>
 *             </li>
 *             <li>
 *                <p>Can show a summary list of migration tasks associated with a given discovered
 *                resource.</p>
 *             </li>
 *             <li>
 *                <p>Lists migration tasks in a paginated interface.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListMigrationTasksCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListMigrationTasksCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ListMigrationTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMigrationTasksCommandInput} for command's `input` shape.
 * @see {@link ListMigrationTasksCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 */
export class ListMigrationTasksCommand extends $Command<
  ListMigrationTasksCommandInput,
  ListMigrationTasksCommandOutput,
  MigrationHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ListMigrationTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMigrationTasksCommandInput, ListMigrationTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMigrationTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "ListMigrationTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMigrationTasksRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListMigrationTasksResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMigrationTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMigrationTasksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMigrationTasksCommandOutput> {
    return deserializeAws_json1_1ListMigrationTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
