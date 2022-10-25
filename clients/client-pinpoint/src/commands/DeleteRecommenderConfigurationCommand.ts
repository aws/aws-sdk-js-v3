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
  DeleteRecommenderConfigurationRequest,
  DeleteRecommenderConfigurationRequestFilterSensitiveLog,
  DeleteRecommenderConfigurationResponse,
  DeleteRecommenderConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  deserializeAws_restJson1DeleteRecommenderConfigurationCommand,
  serializeAws_restJson1DeleteRecommenderConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteRecommenderConfigurationCommandInput extends DeleteRecommenderConfigurationRequest {}
export interface DeleteRecommenderConfigurationCommandOutput
  extends DeleteRecommenderConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an Amazon Pinpoint configuration for a recommender model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteRecommenderConfigurationCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteRecommenderConfigurationCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteRecommenderConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRecommenderConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteRecommenderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 */
export class DeleteRecommenderConfigurationCommand extends $Command<
  DeleteRecommenderConfigurationCommandInput,
  DeleteRecommenderConfigurationCommandOutput,
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

  constructor(readonly input: DeleteRecommenderConfigurationCommandInput) {
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
  ): Handler<DeleteRecommenderConfigurationCommandInput, DeleteRecommenderConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteRecommenderConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "DeleteRecommenderConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRecommenderConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteRecommenderConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteRecommenderConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteRecommenderConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteRecommenderConfigurationCommandOutput> {
    return deserializeAws_restJson1DeleteRecommenderConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
