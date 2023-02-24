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
  ImportMigrationTaskRequest,
  ImportMigrationTaskRequestFilterSensitiveLog,
  ImportMigrationTaskResult,
  ImportMigrationTaskResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ImportMigrationTaskCommand,
  serializeAws_json1_1ImportMigrationTaskCommand,
} from "../protocols/Aws_json1_1";

export interface ImportMigrationTaskCommandInput extends ImportMigrationTaskRequest {}
export interface ImportMigrationTaskCommandOutput extends ImportMigrationTaskResult, __MetadataBearer {}

/**
 * <p>Registers a new migration task which represents a server, database, etc., being migrated
 *          to AWS by a migration tool.</p>
 *          <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as
 *          the migration tool must first register the migration task with Migration Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ImportMigrationTaskCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ImportMigrationTaskCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ImportMigrationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportMigrationTaskCommandInput} for command's `input` shape.
 * @see {@link ImportMigrationTaskCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 */
export class ImportMigrationTaskCommand extends $Command<
  ImportMigrationTaskCommandInput,
  ImportMigrationTaskCommandOutput,
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

  constructor(readonly input: ImportMigrationTaskCommandInput) {
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
  ): Handler<ImportMigrationTaskCommandInput, ImportMigrationTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportMigrationTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "ImportMigrationTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportMigrationTaskRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportMigrationTaskResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportMigrationTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportMigrationTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportMigrationTaskCommandOutput> {
    return deserializeAws_json1_1ImportMigrationTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
