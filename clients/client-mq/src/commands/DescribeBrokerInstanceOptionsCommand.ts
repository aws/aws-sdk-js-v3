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
  DescribeBrokerInstanceOptionsRequest,
  DescribeBrokerInstanceOptionsRequestFilterSensitiveLog,
  DescribeBrokerInstanceOptionsResponse,
  DescribeBrokerInstanceOptionsResponseFilterSensitiveLog,
} from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import {
  deserializeAws_restJson1DescribeBrokerInstanceOptionsCommand,
  serializeAws_restJson1DescribeBrokerInstanceOptionsCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeBrokerInstanceOptionsCommandInput extends DescribeBrokerInstanceOptionsRequest {}
export interface DescribeBrokerInstanceOptionsCommandOutput
  extends DescribeBrokerInstanceOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Describe available broker instance options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeBrokerInstanceOptionsCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeBrokerInstanceOptionsCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new DescribeBrokerInstanceOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBrokerInstanceOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeBrokerInstanceOptionsCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 */
export class DescribeBrokerInstanceOptionsCommand extends $Command<
  DescribeBrokerInstanceOptionsCommandInput,
  DescribeBrokerInstanceOptionsCommandOutput,
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

  constructor(readonly input: DescribeBrokerInstanceOptionsCommandInput) {
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
  ): Handler<DescribeBrokerInstanceOptionsCommandInput, DescribeBrokerInstanceOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBrokerInstanceOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "DescribeBrokerInstanceOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBrokerInstanceOptionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeBrokerInstanceOptionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBrokerInstanceOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeBrokerInstanceOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBrokerInstanceOptionsCommandOutput> {
    return deserializeAws_restJson1DescribeBrokerInstanceOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
