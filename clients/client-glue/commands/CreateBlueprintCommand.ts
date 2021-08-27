import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateBlueprintRequest, CreateBlueprintResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateBlueprintCommand,
  serializeAws_json1_1CreateBlueprintCommand,
} from "../protocols/Aws_json1_1";
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

export interface CreateBlueprintCommandInput extends CreateBlueprintRequest {}
export interface CreateBlueprintCommandOutput extends CreateBlueprintResponse, __MetadataBearer {}

/**
 * <p>Registers a blueprint with Glue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateBlueprintCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateBlueprintCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateBlueprintCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBlueprintCommandInput} for command's `input` shape.
 * @see {@link CreateBlueprintCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateBlueprintCommand extends $Command<
  CreateBlueprintCommandInput,
  CreateBlueprintCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateBlueprintCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBlueprintCommandInput, CreateBlueprintCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateBlueprintCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBlueprintRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBlueprintResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBlueprintCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateBlueprintCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBlueprintCommandOutput> {
    return deserializeAws_json1_1CreateBlueprintCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
