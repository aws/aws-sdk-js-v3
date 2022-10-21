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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import {
  GetMetricStreamInput,
  GetMetricStreamInputFilterSensitiveLog,
  GetMetricStreamOutput,
  GetMetricStreamOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGetMetricStreamCommand,
  serializeAws_queryGetMetricStreamCommand,
} from "../protocols/Aws_query";

export interface GetMetricStreamCommandInput extends GetMetricStreamInput {}
export interface GetMetricStreamCommandOutput extends GetMetricStreamOutput, __MetadataBearer {}

/**
 * <p>Returns information about the metric stream that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetMetricStreamCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetMetricStreamCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new GetMetricStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMetricStreamCommandInput} for command's `input` shape.
 * @see {@link GetMetricStreamCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 */
export class GetMetricStreamCommand extends $Command<
  GetMetricStreamCommandInput,
  GetMetricStreamCommandOutput,
  CloudWatchClientResolvedConfig
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

  constructor(readonly input: GetMetricStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMetricStreamCommandInput, GetMetricStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMetricStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "GetMetricStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMetricStreamInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetMetricStreamOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMetricStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetMetricStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMetricStreamCommandOutput> {
    return deserializeAws_queryGetMetricStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
