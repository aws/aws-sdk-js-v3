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

import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import {
  DescribeEventAggregatesRequest,
  DescribeEventAggregatesRequestFilterSensitiveLog,
  DescribeEventAggregatesResponse,
  DescribeEventAggregatesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEventAggregatesCommand,
  serializeAws_json1_1DescribeEventAggregatesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeEventAggregatesCommandInput extends DescribeEventAggregatesRequest {}
export interface DescribeEventAggregatesCommandOutput extends DescribeEventAggregatesResponse, __MetadataBearer {}

/**
 * <p>Returns the number of events of each event type (issue, scheduled change, and account
 *          notification). If no filter is specified, the counts of all events in each category are
 *          returned.</p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventAggregatesCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventAggregatesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeEventAggregatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventAggregatesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventAggregatesCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 */
export class DescribeEventAggregatesCommand extends $Command<
  DescribeEventAggregatesCommandInput,
  DescribeEventAggregatesCommandOutput,
  HealthClientResolvedConfig
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

  constructor(readonly input: DescribeEventAggregatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventAggregatesCommandInput, DescribeEventAggregatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEventAggregatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeEventAggregatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEventAggregatesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeEventAggregatesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEventAggregatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEventAggregatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEventAggregatesCommandOutput> {
    return deserializeAws_json1_1DescribeEventAggregatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
