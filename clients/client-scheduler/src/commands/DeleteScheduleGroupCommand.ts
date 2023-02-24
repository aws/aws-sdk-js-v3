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
  DeleteScheduleGroupInput,
  DeleteScheduleGroupInputFilterSensitiveLog,
  DeleteScheduleGroupOutput,
  DeleteScheduleGroupOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteScheduleGroupCommand,
  serializeAws_restJson1DeleteScheduleGroupCommand,
} from "../protocols/Aws_restJson1";
import { SchedulerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchedulerClient";

export interface DeleteScheduleGroupCommandInput extends DeleteScheduleGroupInput {}
export interface DeleteScheduleGroupCommandOutput extends DeleteScheduleGroupOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group.
 *          When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted.
 *          Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets
 *          until the schedule group and its associated schedules are deleted.</p>
 *          <note>
 *             <p>
 *             This operation is eventually consistent.
 *          </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, DeleteScheduleGroupCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, DeleteScheduleGroupCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * const client = new SchedulerClient(config);
 * const command = new DeleteScheduleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteScheduleGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteScheduleGroupCommandOutput} for command's `response` shape.
 * @see {@link SchedulerClientResolvedConfig | config} for SchedulerClient's `config` shape.
 *
 */
export class DeleteScheduleGroupCommand extends $Command<
  DeleteScheduleGroupCommandInput,
  DeleteScheduleGroupCommandOutput,
  SchedulerClientResolvedConfig
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

  constructor(readonly input: DeleteScheduleGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchedulerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteScheduleGroupCommandInput, DeleteScheduleGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteScheduleGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchedulerClient";
    const commandName = "DeleteScheduleGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteScheduleGroupInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteScheduleGroupOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteScheduleGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteScheduleGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteScheduleGroupCommandOutput> {
    return deserializeAws_restJson1DeleteScheduleGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
