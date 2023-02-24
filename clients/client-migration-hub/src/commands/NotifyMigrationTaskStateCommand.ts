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
  NotifyMigrationTaskStateRequest,
  NotifyMigrationTaskStateRequestFilterSensitiveLog,
  NotifyMigrationTaskStateResult,
  NotifyMigrationTaskStateResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1NotifyMigrationTaskStateCommand,
  serializeAws_json1_1NotifyMigrationTaskStateCommand,
} from "../protocols/Aws_json1_1";

export interface NotifyMigrationTaskStateCommandInput extends NotifyMigrationTaskStateRequest {}
export interface NotifyMigrationTaskStateCommandOutput extends NotifyMigrationTaskStateResult, __MetadataBearer {}

/**
 * <p>Notifies Migration Hub of the current status, progress, or other detail regarding a
 *          migration task. This API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share
 *                the latest progress and status.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MigrationTaskName</code> is used for addressing updates to the correct
 *                target.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ProgressUpdateStream</code> is used for access control and to provide a
 *                namespace for each migration tool.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, NotifyMigrationTaskStateCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, NotifyMigrationTaskStateCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new NotifyMigrationTaskStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyMigrationTaskStateCommandInput} for command's `input` shape.
 * @see {@link NotifyMigrationTaskStateCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 */
export class NotifyMigrationTaskStateCommand extends $Command<
  NotifyMigrationTaskStateCommandInput,
  NotifyMigrationTaskStateCommandOutput,
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

  constructor(readonly input: NotifyMigrationTaskStateCommandInput) {
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
  ): Handler<NotifyMigrationTaskStateCommandInput, NotifyMigrationTaskStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, NotifyMigrationTaskStateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "NotifyMigrationTaskStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NotifyMigrationTaskStateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: NotifyMigrationTaskStateResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NotifyMigrationTaskStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1NotifyMigrationTaskStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NotifyMigrationTaskStateCommandOutput> {
    return deserializeAws_json1_1NotifyMigrationTaskStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
