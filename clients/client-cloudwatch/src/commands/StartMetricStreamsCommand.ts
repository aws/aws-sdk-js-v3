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
  StartMetricStreamsInput,
  StartMetricStreamsInputFilterSensitiveLog,
  StartMetricStreamsOutput,
  StartMetricStreamsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryStartMetricStreamsCommand,
  serializeAws_queryStartMetricStreamsCommand,
} from "../protocols/Aws_query";

export interface StartMetricStreamsCommandInput extends StartMetricStreamsInput {}
export interface StartMetricStreamsCommandOutput extends StartMetricStreamsOutput, __MetadataBearer {}

/**
 * <p>Starts the streaming of metrics for one or more of your metric streams.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, StartMetricStreamsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, StartMetricStreamsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new StartMetricStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMetricStreamsCommandInput} for command's `input` shape.
 * @see {@link StartMetricStreamsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 */
export class StartMetricStreamsCommand extends $Command<
  StartMetricStreamsCommandInput,
  StartMetricStreamsCommandOutput,
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

  constructor(readonly input: StartMetricStreamsCommandInput) {
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
  ): Handler<StartMetricStreamsCommandInput, StartMetricStreamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMetricStreamsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "StartMetricStreamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMetricStreamsInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartMetricStreamsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartMetricStreamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStartMetricStreamsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMetricStreamsCommandOutput> {
    return deserializeAws_queryStartMetricStreamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
