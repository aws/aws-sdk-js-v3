import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { GetStudioComponentRequest, GetStudioComponentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetStudioComponentCommand,
  serializeAws_restJson1GetStudioComponentCommand,
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

export interface GetStudioComponentCommandInput extends GetStudioComponentRequest {}
export interface GetStudioComponentCommandOutput extends GetStudioComponentResponse, __MetadataBearer {}

/**
 * <p>Gets a studio component resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStudioComponentCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStudioComponentCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetStudioComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStudioComponentCommandInput} for command's `input` shape.
 * @see {@link GetStudioComponentCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetStudioComponentCommand extends $Command<
  GetStudioComponentCommandInput,
  GetStudioComponentCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetStudioComponentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetStudioComponentCommandInput, GetStudioComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "GetStudioComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetStudioComponentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetStudioComponentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetStudioComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetStudioComponentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetStudioComponentCommandOutput> {
    return deserializeAws_restJson1GetStudioComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
