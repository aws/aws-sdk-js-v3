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
  ListScheduledQueriesRequest,
  ListScheduledQueriesRequestFilterSensitiveLog,
  ListScheduledQueriesResponse,
  ListScheduledQueriesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListScheduledQueriesCommand,
  serializeAws_json1_0ListScheduledQueriesCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

export interface ListScheduledQueriesCommandInput extends ListScheduledQueriesRequest {}
export interface ListScheduledQueriesCommandOutput extends ListScheduledQueriesResponse, __MetadataBearer {}

/**
 * <p>Gets a list of all scheduled queries in the caller's Amazon account and Region. <code>ListScheduledQueries</code> is eventually consistent. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, ListScheduledQueriesCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, ListScheduledQueriesCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const command = new ListScheduledQueriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListScheduledQueriesCommandInput} for command's `input` shape.
 * @see {@link ListScheduledQueriesCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 */
export class ListScheduledQueriesCommand extends $Command<
  ListScheduledQueriesCommandInput,
  ListScheduledQueriesCommandOutput,
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

  constructor(readonly input: ListScheduledQueriesCommandInput) {
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
  ): Handler<ListScheduledQueriesCommandInput, ListScheduledQueriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListScheduledQueriesCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(
      getEndpointDiscoveryPlugin(configuration, { clientStack, options, isDiscoveredEndpointRequired: true })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamQueryClient";
    const commandName = "ListScheduledQueriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListScheduledQueriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListScheduledQueriesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListScheduledQueriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListScheduledQueriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListScheduledQueriesCommandOutput> {
    return deserializeAws_json1_0ListScheduledQueriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
