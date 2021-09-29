import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { PublishRecipeRequest, PublishRecipeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PublishRecipeCommand,
  serializeAws_restJson1PublishRecipeCommand,
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

export interface PublishRecipeCommandInput extends PublishRecipeRequest {}
export interface PublishRecipeCommandOutput extends PublishRecipeResponse, __MetadataBearer {}

/**
 * <p>Publishes a new version of a DataBrew recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, PublishRecipeCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, PublishRecipeCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new PublishRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishRecipeCommandInput} for command's `input` shape.
 * @see {@link PublishRecipeCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PublishRecipeCommand extends $Command<
  PublishRecipeCommandInput,
  PublishRecipeCommandOutput,
  DataBrewClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PublishRecipeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishRecipeCommandInput, PublishRecipeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "PublishRecipeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PublishRecipeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PublishRecipeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PublishRecipeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PublishRecipeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishRecipeCommandOutput> {
    return deserializeAws_restJson1PublishRecipeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
