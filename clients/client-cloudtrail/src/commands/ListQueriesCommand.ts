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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import {
  ListQueriesRequest,
  ListQueriesRequestFilterSensitiveLog,
  ListQueriesResponse,
  ListQueriesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListQueriesCommand,
  serializeAws_json1_1ListQueriesCommand,
} from "../protocols/Aws_json1_1";

export interface ListQueriesCommandInput extends ListQueriesRequest {}
export interface ListQueriesCommandOutput extends ListQueriesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of queries and query statuses for the past seven days. You must specify an ARN value for
 *          <code>EventDataStore</code>. Optionally, to shorten the list of results, you can specify a time range,
 *          formatted as timestamps, by adding <code>StartTime</code> and <code>EndTime</code> parameters, and a
 *          <code>QueryStatus</code> value. Valid values for <code>QueryStatus</code> include <code>QUEUED</code>, <code>RUNNING</code>,
 *          <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListQueriesCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListQueriesCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new ListQueriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQueriesCommandInput} for command's `input` shape.
 * @see {@link ListQueriesCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 */
export class ListQueriesCommand extends $Command<
  ListQueriesCommandInput,
  ListQueriesCommandOutput,
  CloudTrailClientResolvedConfig
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

  constructor(readonly input: ListQueriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListQueriesCommandInput, ListQueriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListQueriesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "ListQueriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListQueriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListQueriesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListQueriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListQueriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListQueriesCommandOutput> {
    return deserializeAws_json1_1ListQueriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
