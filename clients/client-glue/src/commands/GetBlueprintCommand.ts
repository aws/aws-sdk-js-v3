import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetBlueprintRequest, GetBlueprintResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetBlueprintCommand,
  serializeAws_json1_1GetBlueprintCommand,
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

export interface GetBlueprintCommandInput extends GetBlueprintRequest {}
export interface GetBlueprintCommandOutput extends GetBlueprintResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of a blueprint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetBlueprintCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetBlueprintCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetBlueprintCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBlueprintCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetBlueprintCommand extends $Command<
  GetBlueprintCommandInput,
  GetBlueprintCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBlueprintCommandInput) {
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
  ): Handler<GetBlueprintCommandInput, GetBlueprintCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetBlueprintCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBlueprintRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBlueprintResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBlueprintCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetBlueprintCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBlueprintCommandOutput> {
    return deserializeAws_json1_1GetBlueprintCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
