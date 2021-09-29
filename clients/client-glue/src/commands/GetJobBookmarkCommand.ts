import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetJobBookmarkRequest, GetJobBookmarkResponse } from "../models/models_1";
import {
  deserializeAws_json1_1GetJobBookmarkCommand,
  serializeAws_json1_1GetJobBookmarkCommand,
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

export interface GetJobBookmarkCommandInput extends GetJobBookmarkRequest {}
export interface GetJobBookmarkCommandOutput extends GetJobBookmarkResponse, __MetadataBearer {}

/**
 * <p>Returns information on a job bookmark entry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobBookmarkCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobBookmarkCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetJobBookmarkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobBookmarkCommandInput} for command's `input` shape.
 * @see {@link GetJobBookmarkCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetJobBookmarkCommand extends $Command<
  GetJobBookmarkCommandInput,
  GetJobBookmarkCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetJobBookmarkCommandInput) {
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
  ): Handler<GetJobBookmarkCommandInput, GetJobBookmarkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetJobBookmarkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetJobBookmarkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetJobBookmarkResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetJobBookmarkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetJobBookmarkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetJobBookmarkCommandOutput> {
    return deserializeAws_json1_1GetJobBookmarkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
