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
  NotifyApplicationStateRequest,
  NotifyApplicationStateRequestFilterSensitiveLog,
  NotifyApplicationStateResult,
  NotifyApplicationStateResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1NotifyApplicationStateCommand,
  serializeAws_json1_1NotifyApplicationStateCommand,
} from "../protocols/Aws_json1_1";

export interface NotifyApplicationStateCommandInput extends NotifyApplicationStateRequest {}
export interface NotifyApplicationStateCommandOutput extends NotifyApplicationStateResult, __MetadataBearer {}

/**
 * <p>Sets the migration state of an application. For a given application identified by the
 *          value passed to <code>ApplicationId</code>, its status is set or updated by passing one of
 *          three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS |
 *          COMPLETED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, NotifyApplicationStateCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, NotifyApplicationStateCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new NotifyApplicationStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyApplicationStateCommandInput} for command's `input` shape.
 * @see {@link NotifyApplicationStateCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 */
export class NotifyApplicationStateCommand extends $Command<
  NotifyApplicationStateCommandInput,
  NotifyApplicationStateCommandOutput,
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

  constructor(readonly input: NotifyApplicationStateCommandInput) {
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
  ): Handler<NotifyApplicationStateCommandInput, NotifyApplicationStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, NotifyApplicationStateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "NotifyApplicationStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NotifyApplicationStateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: NotifyApplicationStateResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NotifyApplicationStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1NotifyApplicationStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NotifyApplicationStateCommandOutput> {
    return deserializeAws_json1_1NotifyApplicationStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
