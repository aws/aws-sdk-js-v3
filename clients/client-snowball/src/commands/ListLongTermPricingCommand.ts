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
  ListLongTermPricingRequest,
  ListLongTermPricingRequestFilterSensitiveLog,
  ListLongTermPricingResult,
  ListLongTermPricingResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListLongTermPricingCommand,
  serializeAws_json1_1ListLongTermPricingCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

export interface ListLongTermPricingCommandInput extends ListLongTermPricingRequest {}
export interface ListLongTermPricingCommandOutput extends ListLongTermPricingResult, __MetadataBearer {}

/**
 * <p>Lists all long-term pricing types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListLongTermPricingCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListLongTermPricingCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new ListLongTermPricingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLongTermPricingCommandInput} for command's `input` shape.
 * @see {@link ListLongTermPricingCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 */
export class ListLongTermPricingCommand extends $Command<
  ListLongTermPricingCommandInput,
  ListLongTermPricingCommandOutput,
  SnowballClientResolvedConfig
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

  constructor(readonly input: ListLongTermPricingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLongTermPricingCommandInput, ListLongTermPricingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLongTermPricingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "ListLongTermPricingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLongTermPricingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListLongTermPricingResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLongTermPricingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListLongTermPricingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLongTermPricingCommandOutput> {
    return deserializeAws_json1_1ListLongTermPricingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
