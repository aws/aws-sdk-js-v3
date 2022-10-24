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
  CreateLongTermPricingRequest,
  CreateLongTermPricingRequestFilterSensitiveLog,
  CreateLongTermPricingResult,
  CreateLongTermPricingResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateLongTermPricingCommand,
  serializeAws_json1_1CreateLongTermPricingCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

export interface CreateLongTermPricingCommandInput extends CreateLongTermPricingRequest {}
export interface CreateLongTermPricingCommandOutput extends CreateLongTermPricingResult, __MetadataBearer {}

/**
 * <p>Creates a job with the long-term usage option for a device. The long-term usage is a
 *       1-year or 3-year long-term pricing type for the device. You are billed upfront, and Amazon Web Services provides discounts for long-term pricing.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateLongTermPricingCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateLongTermPricingCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new CreateLongTermPricingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLongTermPricingCommandInput} for command's `input` shape.
 * @see {@link CreateLongTermPricingCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 */
export class CreateLongTermPricingCommand extends $Command<
  CreateLongTermPricingCommandInput,
  CreateLongTermPricingCommandOutput,
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

  constructor(readonly input: CreateLongTermPricingCommandInput) {
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
  ): Handler<CreateLongTermPricingCommandInput, CreateLongTermPricingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLongTermPricingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "CreateLongTermPricingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLongTermPricingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLongTermPricingResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLongTermPricingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLongTermPricingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLongTermPricingCommandOutput> {
    return deserializeAws_json1_1CreateLongTermPricingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
