// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
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
  CreateScheduledQueryRequest,
  CreateScheduledQueryRequestFilterSensitiveLog,
  CreateScheduledQueryResponse,
  CreateScheduledQueryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0CreateScheduledQueryCommand,
  serializeAws_json1_0CreateScheduledQueryCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

export interface CreateScheduledQueryCommandInput extends CreateScheduledQueryRequest {}
export interface CreateScheduledQueryCommandOutput extends CreateScheduledQueryResponse, __MetadataBearer {}

/**
 * <p> Create a scheduled query that will be run on your behalf at the configured schedule.
 *             Timestream assumes the execution role provided as part of the
 *                 <code>ScheduledQueryExecutionRoleArn</code> parameter to run the query. You can use
 *             the <code>NotificationConfiguration</code> parameter to configure notification for your
 *             scheduled query operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, CreateScheduledQueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, CreateScheduledQueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const command = new CreateScheduledQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateScheduledQueryCommandInput} for command's `input` shape.
 * @see {@link CreateScheduledQueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 */
export class CreateScheduledQueryCommand extends $Command<
  CreateScheduledQueryCommandInput,
  CreateScheduledQueryCommandOutput,
  TimestreamQueryClientResolvedConfig
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

  constructor(readonly input: CreateScheduledQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TimestreamQueryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateScheduledQueryCommandInput, CreateScheduledQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateScheduledQueryCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(
      getEndpointDiscoveryPlugin(configuration, { clientStack, options, isDiscoveredEndpointRequired: true })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamQueryClient";
    const commandName = "CreateScheduledQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateScheduledQueryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateScheduledQueryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateScheduledQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateScheduledQueryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateScheduledQueryCommandOutput> {
    return deserializeAws_json1_0CreateScheduledQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
