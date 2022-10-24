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
  DescribeEntityAggregatesRequest,
  DescribeEntityAggregatesRequestFilterSensitiveLog,
  DescribeEntityAggregatesResponse,
  DescribeEntityAggregatesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEntityAggregatesCommand,
  serializeAws_json1_1DescribeEntityAggregatesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeEntityAggregatesCommandInput extends DescribeEntityAggregatesRequest {}
export interface DescribeEntityAggregatesCommandOutput extends DescribeEntityAggregatesResponse, __MetadataBearer {}

/**
 * <p>Returns the number of entities that are affected by each of the specified events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEntityAggregatesCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEntityAggregatesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeEntityAggregatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEntityAggregatesCommandInput} for command's `input` shape.
 * @see {@link DescribeEntityAggregatesCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 */
export class DescribeEntityAggregatesCommand extends $Command<
  DescribeEntityAggregatesCommandInput,
  DescribeEntityAggregatesCommandOutput,
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

  constructor(readonly input: DescribeEntityAggregatesCommandInput) {
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
  ): Handler<DescribeEntityAggregatesCommandInput, DescribeEntityAggregatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEntityAggregatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeEntityAggregatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEntityAggregatesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeEntityAggregatesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEntityAggregatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEntityAggregatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEntityAggregatesCommandOutput> {
    return deserializeAws_json1_1DescribeEntityAggregatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
