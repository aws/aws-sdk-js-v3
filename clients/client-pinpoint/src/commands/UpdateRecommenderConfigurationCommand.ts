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
  UpdateRecommenderConfigurationRequest,
  UpdateRecommenderConfigurationRequestFilterSensitiveLog,
  UpdateRecommenderConfigurationResponse,
  UpdateRecommenderConfigurationResponseFilterSensitiveLog,
} from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  deserializeAws_restJson1UpdateRecommenderConfigurationCommand,
  serializeAws_restJson1UpdateRecommenderConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateRecommenderConfigurationCommandInput extends UpdateRecommenderConfigurationRequest {}
export interface UpdateRecommenderConfigurationCommandOutput
  extends UpdateRecommenderConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates an Amazon Pinpoint configuration for a recommender model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateRecommenderConfigurationCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateRecommenderConfigurationCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateRecommenderConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRecommenderConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateRecommenderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 */
export class UpdateRecommenderConfigurationCommand extends $Command<
  UpdateRecommenderConfigurationCommandInput,
  UpdateRecommenderConfigurationCommandOutput,
  PinpointClientResolvedConfig
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

  constructor(readonly input: UpdateRecommenderConfigurationCommandInput) {
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
  ): Handler<UpdateRecommenderConfigurationCommandInput, UpdateRecommenderConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRecommenderConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateRecommenderConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRecommenderConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateRecommenderConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateRecommenderConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRecommenderConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRecommenderConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateRecommenderConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
