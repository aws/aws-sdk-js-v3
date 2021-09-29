import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetClassifierRequest, GetClassifierResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetClassifierCommand,
  serializeAws_json1_1GetClassifierCommand,
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

export interface GetClassifierCommandInput extends GetClassifierRequest {}
export interface GetClassifierCommandOutput extends GetClassifierResponse, __MetadataBearer {}

/**
 * <p>Retrieve a classifier by name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetClassifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClassifierCommandInput} for command's `input` shape.
 * @see {@link GetClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetClassifierCommand extends $Command<
  GetClassifierCommandInput,
  GetClassifierCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetClassifierCommandInput) {
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
  ): Handler<GetClassifierCommandInput, GetClassifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetClassifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetClassifierRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetClassifierResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetClassifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetClassifierCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetClassifierCommandOutput> {
    return deserializeAws_json1_1GetClassifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
