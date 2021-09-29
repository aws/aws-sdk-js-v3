import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { CreateRecommenderConfigurationRequest, CreateRecommenderConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateRecommenderConfigurationCommand,
  serializeAws_restJson1CreateRecommenderConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface CreateRecommenderConfigurationCommandInput extends CreateRecommenderConfigurationRequest {}
export interface CreateRecommenderConfigurationCommandOutput
  extends CreateRecommenderConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates an Amazon Pinpoint configuration for a recommender model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateRecommenderConfigurationCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateRecommenderConfigurationCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateRecommenderConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRecommenderConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateRecommenderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateRecommenderConfigurationCommand extends $Command<
  CreateRecommenderConfigurationCommandInput,
  CreateRecommenderConfigurationCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRecommenderConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRecommenderConfigurationCommandInput, CreateRecommenderConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "CreateRecommenderConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRecommenderConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRecommenderConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateRecommenderConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRecommenderConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateRecommenderConfigurationCommandOutput> {
    return deserializeAws_restJson1CreateRecommenderConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
