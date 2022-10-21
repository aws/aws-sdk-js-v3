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

import {
  NotifyWorkersRequest,
  NotifyWorkersRequestFilterSensitiveLog,
  NotifyWorkersResponse,
  NotifyWorkersResponseFilterSensitiveLog,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  deserializeAws_json1_1NotifyWorkersCommand,
  serializeAws_json1_1NotifyWorkersCommand,
} from "../protocols/Aws_json1_1";

export interface NotifyWorkersCommandInput extends NotifyWorkersRequest {}
export interface NotifyWorkersCommandOutput extends NotifyWorkersResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>NotifyWorkers</code>
 *             operation sends an email to one or more Workers that you specify with
 *             the Worker ID. You can specify up to 100 Worker IDs to send the same
 *             message with a single call to the NotifyWorkers operation. The
 *             NotifyWorkers operation will send a notification email to a Worker
 *             only if you have previously approved or rejected work from the
 *             Worker.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, NotifyWorkersCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, NotifyWorkersCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new NotifyWorkersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyWorkersCommandInput} for command's `input` shape.
 * @see {@link NotifyWorkersCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 */
export class NotifyWorkersCommand extends $Command<
  NotifyWorkersCommandInput,
  NotifyWorkersCommandOutput,
  MTurkClientResolvedConfig
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

  constructor(readonly input: NotifyWorkersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<NotifyWorkersCommandInput, NotifyWorkersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, NotifyWorkersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "NotifyWorkersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NotifyWorkersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: NotifyWorkersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NotifyWorkersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1NotifyWorkersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NotifyWorkersCommandOutput> {
    return deserializeAws_json1_1NotifyWorkersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
