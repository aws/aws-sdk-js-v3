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
  ListScheduleGroupsInput,
  ListScheduleGroupsInputFilterSensitiveLog,
  ListScheduleGroupsOutput,
  ListScheduleGroupsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListScheduleGroupsCommand,
  serializeAws_restJson1ListScheduleGroupsCommand,
} from "../protocols/Aws_restJson1";
import { SchedulerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchedulerClient";

export interface ListScheduleGroupsCommandInput extends ListScheduleGroupsInput {}
export interface ListScheduleGroupsCommandOutput extends ListScheduleGroupsOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of your schedule groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, ListScheduleGroupsCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, ListScheduleGroupsCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * const client = new SchedulerClient(config);
 * const command = new ListScheduleGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListScheduleGroupsCommandInput} for command's `input` shape.
 * @see {@link ListScheduleGroupsCommandOutput} for command's `response` shape.
 * @see {@link SchedulerClientResolvedConfig | config} for SchedulerClient's `config` shape.
 *
 */
export class ListScheduleGroupsCommand extends $Command<
  ListScheduleGroupsCommandInput,
  ListScheduleGroupsCommandOutput,
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

  constructor(readonly input: ListScheduleGroupsCommandInput) {
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
  ): Handler<ListScheduleGroupsCommandInput, ListScheduleGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListScheduleGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchedulerClient";
    const commandName = "ListScheduleGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListScheduleGroupsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListScheduleGroupsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListScheduleGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListScheduleGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListScheduleGroupsCommandOutput> {
    return deserializeAws_restJson1ListScheduleGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
