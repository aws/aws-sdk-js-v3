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
  DescribeEventTypesRequest,
  DescribeEventTypesRequestFilterSensitiveLog,
  DescribeEventTypesResponse,
  DescribeEventTypesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEventTypesCommand,
  serializeAws_json1_1DescribeEventTypesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeEventTypesCommandInput extends DescribeEventTypesRequest {}
export interface DescribeEventTypesCommandOutput extends DescribeEventTypesResponse, __MetadataBearer {}

/**
 * <p>Returns the event types that meet the specified filter criteria. You can use this API
 *          operation to find information about the Health event, such as the category, Amazon Web Services
 *          service, and event code. The metadata for each event appears in the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventType.html">EventType</a> object. </p>
 *          <p>If you don't specify a filter criteria, the API operation returns all event types, in no
 *          particular order. </p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventTypesCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventTypesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeEventTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventTypesCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 */
export class DescribeEventTypesCommand extends $Command<
  DescribeEventTypesCommandInput,
  DescribeEventTypesCommandOutput,
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

  constructor(readonly input: DescribeEventTypesCommandInput) {
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
  ): Handler<DescribeEventTypesCommandInput, DescribeEventTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEventTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeEventTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEventTypesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeEventTypesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEventTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEventTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEventTypesCommandOutput> {
    return deserializeAws_json1_1DescribeEventTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
