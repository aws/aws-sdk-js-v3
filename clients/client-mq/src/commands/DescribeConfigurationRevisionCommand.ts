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
  DescribeConfigurationRevisionRequest,
  DescribeConfigurationRevisionRequestFilterSensitiveLog,
  DescribeConfigurationRevisionResponse,
  DescribeConfigurationRevisionResponseFilterSensitiveLog,
} from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import {
  deserializeAws_restJson1DescribeConfigurationRevisionCommand,
  serializeAws_restJson1DescribeConfigurationRevisionCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeConfigurationRevisionCommandInput extends DescribeConfigurationRevisionRequest {}
export interface DescribeConfigurationRevisionCommandOutput
  extends DescribeConfigurationRevisionResponse,
    __MetadataBearer {}

/**
 * <p>Returns the specified configuration revision for the specified configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeConfigurationRevisionCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeConfigurationRevisionCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new DescribeConfigurationRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigurationRevisionCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationRevisionCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 */
export class DescribeConfigurationRevisionCommand extends $Command<
  DescribeConfigurationRevisionCommandInput,
  DescribeConfigurationRevisionCommandOutput,
  MqClientResolvedConfig
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

  constructor(readonly input: DescribeConfigurationRevisionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConfigurationRevisionCommandInput, DescribeConfigurationRevisionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConfigurationRevisionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "DescribeConfigurationRevisionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConfigurationRevisionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeConfigurationRevisionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConfigurationRevisionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeConfigurationRevisionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigurationRevisionCommandOutput> {
    return deserializeAws_restJson1DescribeConfigurationRevisionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
